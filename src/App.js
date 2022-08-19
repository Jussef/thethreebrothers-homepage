import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Barra } from "./components/Barra";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Router>
      <Barra />
      <Timeline />
    </Router>
  );
}

export default App;
