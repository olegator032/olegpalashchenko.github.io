import "./App.css";
import logo from "./urban-logo-2020.svg";
import photo from "./oleg.jpg";

function App() {
  return (
    <div className="one-pager">
      <header className="page-header">
        <h1>Oleg Palashchenko</h1>
        <h2 className="speciality">QA Automation Engineer</h2>
      </header>
      <div class="info-part">
        <div className="row">
          <div className="column">
            <div className="left-column">
              <div className="photo">
                <img
                  src={photo}
                  alt=""
                  style={{ borderRadius: 1000, width: "85%" }}
                />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="right-column">
              <h3>
                Hi! I'm Oleg, a Quality Assurance Automation Engineer from
                Vilnius, Lithuania.
                <br></br>
                <br></br>
                The goal of my work is to deliver best possible quality of a
                product to the end user.
                <br></br>
                <br></br>I specialise in Java Script, writing test automation
                using TestCafe.
              </h3>
            </div>
          </div>
        </div>
        <div className="sub-header">
          <h3 style={{ paddingTop: 35 }}>Work experience</h3>
          <div className="underline"></div>
        </div>
        <div class="info-part">
          <div className="row">
            <div className="column">
              <div className="left-column1">
                <div className="photo">
                  <div className="company-name">
                    <img
                      src={logo}
                      alt=""
                      style={{ width: "50%", marginLeft: 100, paddingTop: 75 }}
                    />
                  </div>
                  <div className="work-experience">Employed:</div>
                  <div className="work-experience-text">
                    November 2019 - Now
                  </div>
                  <div className="work-experience">Position:</div>
                  <div className="work-experience-text">
                    QA Automation Engineer
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div
                class="right-column"
                style={{
                  width: "120%",
                  marginLeft: -200,
                  fontSize: 25,
                  fontWeight: "lighter",
                }}
              >
                <h3>
                  Urban is the UK’s leading at home wellness platform,
                  connecting wellness professionals and their customers via our
                  bespoke web platform and apps.
                  <br></br>
                  <br></br>
                  Currently, as the QA Automation Engineer at Urban, I’m
                  responsible for developing and maintaining E2E (end-to-end)
                  tests and controlling quality of developed features of our 5
                  web-based platforms, which include everything from e-commerce
                  to live streaming video platforms.
                  <br></br>
                  <br></br>Our main front-end and back-end stacks consist of
                  Node Express, React, NextJs, Typescript and MobX.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header">
        <h3 style={{ fontSize: 30, paddingTop: 35 }}>About me</h3>
        <div className="underline"></div>
      </div>
      <div className="education">
        <h3 style={{ color: "gold", marginBottom: -30 }}>
          Education & Trainings
        </h3>
        <br></br>
        Vilnius Gedimino Technical University, &nbsp; Bachelor 's degree in IT.
      </div>
      <div className="education">
        <h3 style={{ color: "gold", marginBottom: -30 }}>Hobbies</h3>
        <br></br>
        Photography, &nbsp; drifting, &nbsp; technologies.
      </div>
      <div className="sub-header">
        <h3 style={{ fontSize: 30, paddingTop: 35 }}>Contacts</h3>
        <div className="underline"></div>
      </div>
      <div className="education">
        <br></br>
        <center>
          Vilnius, Lithuania
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          +37063199371
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palashchenko.oleg@gmail.com
        </center>
        <div
          className="underline"
          style={{ width: "80%", marginLeft: 120, paddingTop: 15 }}
        ></div>
      </div>
      <div className="footer">
        <div className="name">Oleg Palashchenko</div>
        <div className="links">
          <a
            style={{ color: "gold", textDecoration: "none", paddingRight: 40 }}
            href="https://github.com/olegator032"
          >
            github
          </a>
          <a
            style={{ color: "gold", textDecoration: "none", paddingRight: 40 }}
            href="https://www.linkedin.com/in/oleg-palashchenko-503b89159/"
          >
            LinkedIn
          </a>
          <a
            style={{ color: "gold", textDecoration: "none" }}
            href="https://www.facebook.com/oleg.inock/"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
