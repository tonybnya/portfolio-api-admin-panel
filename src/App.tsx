import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import Dashboard from "./Dashboard";

import TimelineIcon from "@mui/icons-material/Timeline";
import TimelinesList from "./pages/timelines/timelinesList";

import TerminalIcon from "@mui/icons-material/Terminal";
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
    <Resource
      name="timelines"
      list={TimelinesList}
      show={ShowGuesser}
      icon={TimelineIcon}
    />
  </Admin>
);
