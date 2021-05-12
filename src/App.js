import logo from './logo.svg';
import './App.css';
import Footer from "./Components/footer";
import Section from "./Components/main";
import Header from "./Components/header";
import {
    BrowserRouter as Router, Link,
    Switch,
    useLocation,
    Route, Redirect
} from "react-router-dom";
import About from "./Components/about";
import Test from "./Components/Test";
import React from "react";
import Events from "./Components/events";
import event_detail from "./Components/event_detail";
import Treners from "./Components/treners";
import Contacts from "./Components/contacts";
import Forms from "./Components/forms";
import zakonodat from "./ddown/zakonodat.js"
import science from "./ddown/science.js"
import inter from "./ddown/inter.js"
import education from "./ddown/education.js"
import metatanu from "./ddown/metatanu.js"

function App() {
  return (
<div>


                      <Router>
                          <Switch>
                            <Link exact path = "/" component={Section} />
                              <Link exact path = "/about" component={About} />
                               <Link exact path = "/events" component={Events} />
                              <Link exact path = "/event" component={event_detail} />
                                <Link exact path = "/treners" component={Treners} />
                                          <Link exact path = "/contacts" component={Contacts} />
                            <Link exact path = "/forms" component={Forms} />
                            <Link exact path = "/zakonodat" component={zakonodat} />
                            <Link exact path = "/science" component={science} />
                            <Link exact path = "/inter" component={inter} />
                            <Link exact path = "/education" component={education} />
                            <Link exact path = "/metatanu" component={metatanu} />




                          </Switch>
                      </Router>

    <Footer/>
</div>
  );
}

export default App;
