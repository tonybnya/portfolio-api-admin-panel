import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import Dashboard from "./Dashboard";

import TerminalIcon from "@mui/icons-material/Terminal";
import TimelineIcon from "@mui/icons-material/Timeline";

import ProjectsList from "./pages/projects/projectsList";
import ProjectShow from "./pages/projects/projectShow";
import ProjectEdit from "./pages/projects/projectEdit";

import TimelinesList from "./pages/timelines/timelinesList";
import TimelineShow from "./pages/timelines/timelineShow";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="projects"
      list={ProjectsList}
      show={ProjectShow}
      edit={ProjectEdit}
      icon={TerminalIcon}
    />
    <Resource
      name="timelines"
      list={TimelinesList}
      show={TimelineShow}
      icon={TimelineIcon}
    />
  </Admin>
);
