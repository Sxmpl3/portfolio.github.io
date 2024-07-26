import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hera from "../../Assets/Projects/hera.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos proyectos que he realizado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hera}
              title="Hera - Asistente Virtual"
              description="Hera es un asistente virtual avanzado para llamadas telefónicas, que utiliza inteligencia artificial para ofrecer soporte personalizado y automatizar tareas empresariales, mejorando la eficiencia y proporcionando respuestas rápidas y precisas en tiempo real."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
