import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="projects">
      <div className="pro-container">
        <img src="../assets/projects.png" alt="" className="projects-img" />
        <h1 className="project-title">Projects</h1>

        <div className="mobile-skills">
          <div className="project-portrait">
            <img
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/408479278175485952/1001075669494665326/unknown.png"
              alt="First slide"
            />
            <div className="projectm-desc">
              <h3 className="captions">LinkedIn clone</h3>
              <p className="project-desc">
                Using next js, Tailwind css, Mongo DB and Next auth
              </p>
            </div>
          </div>
          <div className="project-portrait">
            <img
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/408479278175485952/1001154772948238406/unknown.png"
              alt="Second slide"
            />
            <div className="projectm-desc">
              <h3 className="captions">Keeper App</h3>
              <p className="project-desc">
                A Note pad app created using Firebase, Next js, Bootstrap
              </p>
            </div>
          </div>
          <div className="project-portrait">
            <img
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/408479278175485952/1001157838514692136/unknown.png"
              alt="Second slide"
            />
            <div className="projectm-desc">
              <h3 className="captions">Mobile landing page</h3>
              <p className="project-desc">
                a responsive landing page for a fictional mobile app
              </p>
            </div>
          </div>
        </div>
        <div className="carousel">
          <Carousel variant="dark" className="carousel-cont" slide={false}>
            <Carousel.Item interval={10000}>
              <a href="https://linked-in-clone-iota.vercel.app">
                <img
                  className="d-block w-100"
                  src="https://cdn.discordapp.com/attachments/408479278175485952/1001075669494665326/unknown.png"
                  alt="First slide"
                />
                <Carousel.Caption className="ass">
                  <h3 className="captions">LinkedIn clone</h3>
                  <p className="project-desc">
                    Using next js, Tailwind css, Mongo DB and Next auth
                  </p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <a href="https://keeper-six.vercel.app">
                <img
                  className="d-block w-100"
                  src="https://cdn.discordapp.com/attachments/408479278175485952/1001154772948238406/unknown.png"
                  alt="Second slide"
                />
                <Carousel.Caption className="ass">
                  <h3 className="captions">Keeper App</h3>
                  <p className="project-desc">
                    A Note pad app created using Firebase, Next js, Bootstrap
                  </p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <a href="https://tindog-alpha.vercel.app">
                <img
                  className="d-block w-100"
                  src="https://cdn.discordapp.com/attachments/408479278175485952/1001157838514692136/unknown.png"
                  alt="Second slide"
                />
                <Carousel.Caption className="ass">
                  <h3 className="captions">Mobile landing page</h3>
                  <p className="project-desc">
                    a responsive landing page for a fictional mobile app
                  </p>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
