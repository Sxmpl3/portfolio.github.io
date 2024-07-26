import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/miavatar.png";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> PRESENTO </span>
            </h1>
            <p className="home-about-body">
              Soy Izan Cano González <span className="purple">(Aka. Sxmpl3)</span>, un profesional apasionado por la tecnología y la ciberseguridad
              <br />
              <br /> Tengo un sólido conocimiento en ciberseguridad ofensiva y programación. He desarrollado proyectos complejos como programador y soy experto en la implementación de inteligencia artificial en herramientas back-end
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">contactar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sxmpl3"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/izan-cano-gonz%C3%A1lez-179b20257/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
