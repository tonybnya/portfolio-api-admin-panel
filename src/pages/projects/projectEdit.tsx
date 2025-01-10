import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="_id" reference="s" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="tags" />
      <TextInput source="images" />
      <TextInput source="liveUrl" />
      <TextInput source="sourceUrl" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <DateInput source="__v" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);

export default ProjectEdit;
