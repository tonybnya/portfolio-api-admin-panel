import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  UrlField,
} from "react-admin";

import { useRecordContext } from "react-admin";

const TagsField = () => {
  const record = useRecordContext();
  return (
    <ul
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
      }}
    >
      {record?.tags.map((tag: string) => (
        <li
          key={tag}
          style={{
            background: "#e0e0e0",
            padding: "4px 8px",
            borderRadius: "16px",
            fontSize: "0.875rem",
          }}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export const ProjectsList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="_id" reference="projects" />
      <TextField source="title" />
      <TextField source="description" />
      <TagsField />
      <UrlField source="liveUrl" />
      <UrlField source="sourceUrl" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

export default ProjectsList;
