import logo from './logo.svg';
import './App.css';
import { Home } from "./mycomoponents/Home";
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
import { About } from "./mycomoponents/About";
import { Service } from "./mycomoponents/Service";
import { Contact } from "./mycomoponents/Contact";
import { Navbar } from "./mycomoponents/Navbar";
import {Switch,BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import  Footer  from "./mycomoponents/Footer";



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Service" component={Service}/>
      <Route exact path="/Contact" component={Contact}/>
      {/* <Redirect to ='/'> */}
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
