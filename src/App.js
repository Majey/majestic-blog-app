import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar/>

        <div className="content">
          <Route>
            <Switch path="/">
              <Home />
            </Switch>
          </Route>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
