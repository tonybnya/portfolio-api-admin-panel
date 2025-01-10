import {
  DateField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const TimelineShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField source="_id" reference="s" />
      <NumberField source="year" />
      <TextField source="timeline" />
      <TextField source="duration" />
      <TextField source="details" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <DateField source="__v" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);

export default TimelineShow;
