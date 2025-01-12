import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import Dashboard from "./Dashboard";

// import TerminalIcon from "@mui/icons-material/Terminal";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimelineIcon from "@mui/icons-material/Timeline";

import ProjectsList from "./pages/projects/projectsList";
import ProjectShow from "./pages/projects/projectShow";
import ProjectEdit from "./pages/projects/projectEdit";

import TimelinesList from "./pages/timelines/timelinesList";
import TimelineCreate from "./pages/timelines/timelineCreate";
import TimelineShow from "./pages/timelines/timelineShow";
import TimelineEdit from "./pages/timelines/timelineEdit";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="projects"
      list={ProjectsList}
      show={ProjectShow}
      edit={ProjectEdit}
      icon={WorkOutlineIcon}
      // icon={TerminalIcon}
    />
    <Resource
      name="timelines"
      list={TimelinesList}
      show={TimelineShow}
      edit={TimelineEdit}
      create={TimelineCreate}
      icon={TimelineIcon}
    />
  </Admin>
);
