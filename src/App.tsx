import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import ProjectsList from "./pages/projects/projectsList";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="projects" list={ProjectsList} />
  </Admin>
);
