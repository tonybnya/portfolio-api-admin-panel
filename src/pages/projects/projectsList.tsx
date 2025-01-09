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
import MyUrlField from "../../components/MyUrlField";
import TagsField from "../../components/TagsField";

const ProjectPanel = () => {
  const record = useRecordContext();
  return <div>{record?.description}</div>;
};

export const ProjectsList = () => (
  <List>
    <Datagrid
      expand={ProjectPanel}
      sx={{
        ".RaDatagrid-headerCell": {
          padding: "16px",
          fontSize: "16px",
        },
      }}
    >
      <ReferenceField source="_id" reference="projects" />
      <TextField source="id" />
      <TextField source="title" />
      {/* <TextField source="description" /> */}
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.description.substring(0, 50)}...`}
      />

      <TagsField source="tags" />
      {/* <UrlField source="liveUrl" content="Visit Live Website" />
      <UrlField source="sourceUrl" content="Source Code" /> */}
      <MyUrlField source="liveUrl" content="Live" />
      <MyUrlField source="sourceUrl" content="Code" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default ProjectsList;
