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
import ImageGalleryField from "../../components/ImageGalleryField";
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
      <TextField source="title" />
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.description.substring(0, 50)}...`}
      />

      <TagsField source="tags" />
      <UrlField source="sourceUrl" content="Source Code" />
      <MyUrlField source="liveUrl" content="Live" />
      <MyUrlField source="sourceUrl" content="Code" />
      <ImageGalleryField source="images" label="Images" />
      <TextField source="id" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);

export default ProjectsList;
