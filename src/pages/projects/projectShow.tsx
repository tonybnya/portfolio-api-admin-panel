import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

const ProjectShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="tags" />
      <TextField source="images" />
      <TextField source="liveUrl" />
      <TextField source="sourceUrl" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <DateField source="__v" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);

export default ProjectShow;
