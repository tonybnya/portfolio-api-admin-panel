import {
  Datagrid,
  DateField,
  FunctionField,
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
            background: "#eab330",
            color: "#000",
            width: "150px",
            textAlign: "center",
            padding: "4px 8px",
            borderRadius: "5px",
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
      <TextField source="id" />
      <TextField source="title" />
      {/* <TextField source="description" /> */}
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.description.substring(0, 50)}...`}
      />

      <TagsField source="tags" />
      <UrlField source="liveUrl" />
      <UrlField source="sourceUrl" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default ProjectsList;
