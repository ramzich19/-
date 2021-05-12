import Header from './header';
import React , {useState} from 'react'
import ModalRU from '../countryModal/ModalRU.js';
import ModalKZ from '../countryModal/ModalKZ.js';
import ModalUKR from '../countryModal/ModalUKR.js';
import ModalMDV from '../countryModal/ModalMDV.js';
import ModalUZB from '../countryModal/ModalUZB.js';
import ModalKRG from '../countryModal/ModalKRG.js';
import ModalTJK from '../countryModal/ModalTJK.js';
import ModalEST from '../countryModal/ModalEST.js';
import ModalLAT from '../countryModal/ModalLIT.js';
import ModalLIT from '../countryModal/ModalLIT.js';
import ModalAZB from '../countryModal/ModalAZB.js';
import ModalARM from '../countryModal/ModalARM.js';
import ModalBR from '../countryModal/ModalBR.js';
import ModalGR from '../countryModal/ModalGR.js';
import ModalTUR from '../countryModal/ModalTUR.js';
import ModalIND from '../countryModal/ModalIND.js';


function Section() {
const [modalShowRU, setModalShowRU] = React.useState(false);
const [modalShowKZ, setModalShowKZ] = React.useState(false);
const [modalShowUKR, setModalShowUKR] = React.useState(false);
const [modalShowMDV, setModalShowMDV] = React.useState(false);
const [modalShowUZB, setModalShowUZB] = React.useState(false);
const [modalShowKRG, setModalShowKRG] = React.useState(false);
const [modalShowTJK, setModalShowTJK] = React.useState(false);
const [modalShowEST, setModalShowEST] = React.useState(false);
const [modalShowLAT, setModalShowLAT] = React.useState(false);
const [modalShowLIT, setModalShowLIT] = React.useState(false);
const [modalShowAZB, setModalShowAZB] = React.useState(false);
const [modalShowARM, setModalShowARM] = React.useState(false);
const [modalShowBR, setModalShowBR] = React.useState(false);
const [modalShowGR, setModalShowGR] = React.useState(false);
const [modalShowTUR, setModalShowTUR] = React.useState(false);
const [modalShowIND, setModalShowIND] = React.useState(false);

  return (
<div>
  <Header/>
  <section id="hero" className="d-flex justify-content-center align-items-center">
    <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
      <h1>Учись с нами,<br/>познавай новое</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="courses.html" className="btn-get-started">Get Started</a>
    </div>
    
  </section>


  <main id="main">

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Основная цель и задачи ассоциации</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate
            </p>

          </div>
        </div>

      </div>
    </section>

    <section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1"
                  className="purecounter"></span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1"
                  className="purecounter"></span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1"
                  className="purecounter"></span>
            <p>Events</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"
                  className="purecounter"></span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>

    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Mentor?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad
                corporis.
              </p>
              <div className="text-center">
                <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100" >
          <div className="col-lg-3 col-md-4" >
          <ModalKZ
        show={modalShowKZ}
        onHide={() => setModalShowKZ(false)}
        
          />
            <div className="icon-box" onClick={() => setModalShowKZ(true)}>
              <img width="50" height="40"src="assets/img/flags/kz.svg"/>
              <h3><a>Казахстан</a></h3>
            </div>
          </div>


          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <ModalRU
        show={modalShowRU}
        onHide={() => setModalShowRU(false)}
          />
            <div className="icon-box" onClick={() => setModalShowRU(true)}>
            <img width="50" height="40"src="assets/img/flags/russia.svg"/>
              <h3><a>Россия</a></h3>
            </div>
          </div>



          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <ModalUKR
        show={modalShowUKR}
        onHide={() => setModalShowUKR(false)}
          />
            <div className="icon-box" onClick={() => setModalShowUKR(true)} >
            <img width="50" height="40"src="assets/img/flags/ukraine.svg"/>
              <h3><a>Украина</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <ModalMDV
        show={modalShowMDV}
        onHide={() => setModalShowMDV(false)}
          />
            <div className="icon-box" onClick={() => setModalShowMDV(true)}>
            <img width="50" height="40"src="assets/img/flags/moldova.svg"/>
              <h3><a>Молдова</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalUZB
        show={modalShowUZB}
        onHide={() => setModalShowUZB(false)}
          />
            <div className="icon-box" onClick={() => setModalShowUZB(true)}>
            <img width="50" height="40"src="assets/img/flags/uzbekistan.svg"/>
              <h3><a>Узбекистан</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalKRG
        show={modalShowKRG}
        onHide={() => setModalShowKRG(false)}
          />
            <div className="icon-box" onClick={() => setModalShowKRG(true)}>
            <img width="50" height="40"src="assets/img/flags/kyrgyzstan.svg"/>
              <h3><a>Киргизия</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalTJK
        show={modalShowTJK}
        onHide={() => setModalShowTJK(false)}
          />
            <div className="icon-box" onClick={() => setModalShowTJK(true)}>
            <img width="50" height="40"src="assets/img/flags/tajikistan.svg"/>
              <h3><a>Таджикистан</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalEST
        show={modalShowEST}
        onHide={() => setModalShowEST(false)}
          />
            <div className="icon-box" onClick={() => setModalShowEST(true)}>
            <img width="50" height="40"src="assets/img/flags/estonia.svg"/>
              <h3><a>Эстония</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalLAT
        show={modalShowLAT}
        onHide={() => setModalShowLAT(false)}
          />
            <div className="icon-box" onClick={() => setModalShowLAT(true)}>
            <img width="50" height="40"src="assets/img/flags/latvia.svg"/>
              <h3><a>Латвия</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalLIT
        show={modalShowLIT}
        onHide={() => setModalShowLIT(false)}
          />
            <div className="icon-box" onClick={() => setModalShowLIT(true)}>
            <img width="50" height="40"src="assets/img/flags/lithuania.svg"/>
              <h3><a>Литва</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalAZB
        show={modalShowAZB}
        onHide={() => setModalShowAZB(false)}
          />
            <div className="icon-box" onClick={() => setModalShowAZB(true)}>
            <img width="50" height="40"src="assets/img/flags/azerbaijan.svg"/>
              <h3><a>Азербайджан</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalARM
        show={modalShowARM}
        onHide={() => setModalShowARM(false)}
          />
            <div className="icon-box" onClick={() => setModalShowARM(true)}>
            <img width="50" height="40"src="assets/img/flags/armenia.svg"/>
              <h3><a>Армения</a></h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 mt-4">
          <ModalBR
        show={modalShowBR}
        onHide={() => setModalShowBR(false)}
          />
            <div className="icon-box" onClick={() => setModalShowBR(true)}>
            <img width="50" height="40"src="assets/img/flags/belarus.svg"/>
              <h3><a>Беларусь</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalGR
        show={modalShowGR}
        onHide={() => setModalShowGR(false)}
          />
            <div className="icon-box" onClick={() => setModalShowGR(true)}>
            <img width="50" height="40"src="assets/img/flags/georgia.svg"/>
              <h3><a>Грузия</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalTUR
        show={modalShowTUR}
        onHide={() => setModalShowTUR(false)}
          />
            <div className="icon-box" onClick={() => setModalShowTUR(true)}>
            <img width="50" height="40"src="assets/img/flags/turkey.svg"/>
              <h3><a>Турция</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
          <ModalIND
        show={modalShowIND}
        onHide={() => setModalShowIND(false)}
          />
            <div className="icon-box" onClick={() => setModalShowIND(true)}>
            <img width="50" height="40"src="assets/img/flags/india.svg"/>
              <h3><a>Индия</a></h3>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="popular-courses" className="courses" >
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Courses</h2>
          <p>Новости и события</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src="assets/img/course-1.jpg" className="img-fluid" alt="..."/>
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Web Development</h4>
                    <p className="price">$169</p>
                  </div>

                  <h3><a href="course-details.html">Website Design</a></h3>
                  <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem
                    tempore.</p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt=""/>
                        <span>Antonio</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                    <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;21.12.2012

                    </div>
                  </div>
                </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/course-2.jpg" className="img-fluid" alt="..."/>
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Marketing</h4>
                    <p className="price">$250</p>
                  </div>

                  <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                  <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem
                    tempore.</p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                        <span>Lana</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;35
                      &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;42
                    </div>
                  </div>
                </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src="assets/img/course-3.jpg" className="img-fluid" alt="..."/>
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Content</h4>
                    <p className="price">$180</p>
                  </div>

                  <h3><a href="course-details.html">Copywriting</a></h3>
                  <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem
                    tempore.</p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
                        <span>Brandon</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;20
                      &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;85
                    </div>
                  </div>
                </div>
            </div>
          </div>


        </div>

      </div>
    </section>



  </main>
</div>



    );
}

export default Section;
