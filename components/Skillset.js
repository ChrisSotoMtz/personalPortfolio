import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Skillset() {
  return (
    <section id="skills">
      <div className="skill-container">
        <img src="../assets/skills.jpg" alt="" className="skill-logo"/>
        <h1 className="skill-title">Skillset</h1>
        <Container className="skills rounded">
          <Row className="align-items-center">
            <Col sm={6} md={4} lg={2} className="skill-col">
              <img src="../assets/html-5.png" alt="" className="skill-img" />
              <h5 className="skill-text">html</h5>
              <img src="../assets/css.png" alt="s" className="skill-img" />
              <h5 className="skill-text">css</h5>
            </Col>
            <Col sm={6} md={4} lg={2} className="skill-col">
              <img src="../assets/react.png" alt="" className="skill-img" />
              <h5 className="skill-text">React</h5>
              <img src="../assets/git.png" alt="s" className="skill-img" />
              <h5 className="skill-text">Git</h5>
            </Col>
            <Col sm={6} md={4} lg={2} className="skill-col">
              <img src="../assets/tailwind.jpg" alt="" className="skill-img" />
              <h5 className="skill-text">Tailwind</h5>
              <img src="../assets/boots.png" alt="s" className="skill-img" />
              <h5 className="skill-text">Bootstrap</h5>
            </Col>
            <Col sm={6} md={4} lg={2} className="skill-col">
              <img src="../assets/firebase.png" alt="" className="skill-img" />
              <h5 className="skill-text">Firebase</h5>
              <img src="../assets/sql.png" alt="s" className="skill-img2" />
              <h5 className="skill-text">Sql</h5>
            </Col>
            <Col sm={6} md={4} lg={2} className="skill-col">
              <img src="../assets/mongo.png" alt="" className="skill-img2" />
              <h5 className="skill-text">Mongo DB</h5>
              <img src="../assets/next.png" alt="s" className="skill-img2" />
              <h5 className="skill-text">Next js</h5>
            </Col>
            <Col  sm={6} md={4} lg={2} className="skill-col">
              <img
                src="../assets/javascript.png"
                alt=""
                className="skill-img"
              />
              <h5 className="skill-text">Javascript</h5>
              <img src="../assets/nodejs.svg" alt="s" className="skill-img2" />
              <h5 className="skill-text">Node js</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Skillset;
