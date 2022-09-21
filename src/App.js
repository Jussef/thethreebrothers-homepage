import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Barra } from "./components/Barra";
import { Menu } from "./components/Menu";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Router>
      {/* <Barra /> */}
      {/* <Menu /> */}
      <Timeline />
    </Router>
  );
}

export default App;
