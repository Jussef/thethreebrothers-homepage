import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Barra } from "./components/Barra";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Router>
      <div className="container">
        <Barra />
        <Container>
          <Timeline />
        </Container>
      </div>
    </Router>
  );
}

export default App;
