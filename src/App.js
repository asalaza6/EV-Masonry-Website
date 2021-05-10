
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

function MyApp() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/about" component={About}/>
        <Route exact path = "/contact" component={Contact}/>
      </Switch>
    </Router>
  )
}

export default MyApp