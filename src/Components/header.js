import 'react-bootstrap'
import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import {
    BrowserRouter as Router, Link,
    Switch,
    useLocation,
    Route, Redirect
} from "react-router-dom";
function Header() {
  return (
      <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center mb-10">
            <img class="logoas" src="assets/img/association.png" width="80px"/>
              <h1 className="logo me-auto"><a href="/">Международная Ассоциация <br/>инновационного образования</a></h1>
              <br/>
              <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>

           
                    <li>
                    <a href="/">Главная</a>
                    </li>
                    <li><Link to = {{pathname: `/treners`, fromDashboard: false}}>Руководство</Link></li>
                      <li className="dropdown"><a href="#"><span>Отделы</span> <i className="bi bi-chevron-down"></i></a>
                          <ul>
                              <li><Link to = {{pathname: `/zakonodat`, fromDashboard: false}}>Законодательно - правовые вопросы</Link></li>
{/*                               
                              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                  className="bi bi-chevron-right"></i></a>
                                  <ul>
                                      <li><a href="/about">Deep Drop Down 1</a></li>
                                      <li><a href="#">Deep Drop Down 2</a></li>
                                      <li><a href="#">Deep Drop Down 3</a></li>
                                      <li><a href="#">Deep Drop Down 4</a></li>
                                      <li><a href="#">Deep Drop Down 5</a></li>
                                  </ul>
                              </li> */}
                              <li><Link to = {{pathname: `/education`, fromDashboard: false}}>Вопросы методологии в образовании</Link></li>
                              <li><Link to = {{pathname: `/inter`, fromDashboard: false}}>Международный обмен опытом</Link></li>
                              <li><Link to = {{pathname: `/metatanu`, fromDashboard: false}}>Педагогика метапознания</Link></li>
                              <li><Link to = {{pathname: `/science`, fromDashboard: false}}>Научно-исследовательская деятельность</Link></li>
                          </ul>
                      </li>
                      <li><Link to = {{pathname: `/about`, fromDashboard: false}}>О нас</Link></li>
                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>


              <Link to = {{pathname: `/contacts`, fromDashboard: false}}className="get-started-btn">Подать заявку</Link>

          </div>
      </header>
  );
}

export default Header;
