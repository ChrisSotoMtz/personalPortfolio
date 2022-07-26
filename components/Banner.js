import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
function Banner() {
  return (
    <section id="home">
      <div>
        <div></div>
      </div>

      <div className="backDrop">
        <div className="banner">
          <Container>
            <Row className="align-items-center">
              <Col md={12} lg={6} className="col2">
                <h1 className="type-text">{"Hello I'm Chris"}</h1>
                <p className="desc-text">
                  {`I'm a currently a 21 years old student, i like web development
                  and I am trying to learn other programming languages and web
                  development frameworks, step by step, i'll be happy to learn
                  anything`}
                </p>
                <Button className="bannerButton">Download Resume</Button>
              </Col>
              <Col md={12} lg={6} className="align-items-center">
                <img src="../assets/gear.png" alt="" className="spinning-sun" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Banner;
