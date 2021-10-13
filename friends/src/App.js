import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();

  // const handleLogin = () => {
  //   // e.preventDefault();
  //   history.push("/login");
  // };

  return (
    <div className="App">
      <Router>
        <Link to="/login">
          <button type="button">CLICK ME TO LOGIN U FUCKING PUSSY</button>
        </Link>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
