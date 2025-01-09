import { Admin, Resource } from "react-admin";
import TerminalIcon from "@mui/icons-material/Terminal";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import Dashboard from "./Dashboard";
import ProjectsList from "./pages/projects/projectsList";
import ProjectShow from "./pages/projects/projectShow";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="projects"
      list={ProjectsList}
      show={ProjectShow}
      icon={TerminalIcon}
    />
    <Resource name="timelines" icon={TimelineIcon} />
  </Admin>
);
