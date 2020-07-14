import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import logo from './logo.svg';


// Pages
import HomePage from './containers/home/index.jsx';
import AboutPage from './containers/about/index.jsx';
import ContactPage from './containers/contact/index.jsx';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/" /> 
      </Switch>
    </Router>
  );
}

export default App;

