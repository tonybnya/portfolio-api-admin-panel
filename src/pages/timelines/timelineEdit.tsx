import {
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const TimelineEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="year" />
      <TextInput source="timeline" />
      <TextInput source="duration" />
      <TextInput source="details" />
      <TextInput source="id" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export default TimelineEdit;
