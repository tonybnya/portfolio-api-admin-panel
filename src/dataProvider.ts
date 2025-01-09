import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

// const apiUrl = import.meta.env.PORTFOLIO_API_URL;
const apiUrl = 'https://portfolio-api-nq76.onrender.com/api';
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page = 1, perPage = 10 } = params.pagination || {};
        const { field = 'id', order = 'ASC' } = params.sort || {};
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        console.log('Fetching URL:', url);

        return httpClient(url).then(({ headers, json }) => {
            console.log('API Response:', json);
            return {
                data: Array.isArray(json) ? json.map(item => ({
                    ...item,
                    id: item._id,
                    createdAt: new Date(item.createdAt),
                    updatedAt: new Date(item.updatedAt),
                })) : [],
                total: json.length,
            };
        });
    },
    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: {
                ...json,
                id: json._id,
                createdAt: new Date(json.createdAt),
                updatedAt: new Date(json.updatedAt),
            },
        })),
    getMany: () => Promise.resolve({ data: [] }),
    getManyReference: () => Promise.resolve({ data: [], total: 0 }),
    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: {
                ...params.data,
                id: json._id,
                createdAt: new Date(json.createdAt),
                updatedAt: new Date(json.updatedAt),
            },
        })),
    update: () => Promise.resolve({ data: null as any }),
    updateMany: () => Promise.resolve({ data: [] }),
    delete: () => Promise.resolve({ data: null as any }),
    deleteMany: () => Promise.resolve({ data: [] }),
};