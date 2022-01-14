import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import FirstProject from "./pages/projects/FirstProject";
import Project from "./pages/project";
import People from "./pages/people";
import SecondProject from "./pages/projects/SecondProject";
// good
export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/pages/project">
            <Project />
          </Route>

          <Route exact path="/pages/people">
            <People />
          </Route>

          <Route exact path="/projects/Firstproject">
            <FirstProject />
          </Route>

          <Route exact path="/projects/SecondProject">
            <SecondProject />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
