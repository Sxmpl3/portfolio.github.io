import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋🏻 Hola a todos, soy <span className="purple">Izan Cano González </span>
            también conocido como <span className="purple"> Sxmpl3</span>
            <br />
            🚩 Resido en <span className="purple">España, Cádiz</span>
            <br />
            <br />

            <h3 className="purple">Educación</h3>
            Grado Medio en Sistemas Microinformáticos y Redes (SMR) 2021-2023
            <br />
            Grado Superior en Administracion en Sistemas Informáticos y Redes (ASIR) 2023-2025
            <br />
            <br />
            
            <h3 className="purple">Cerficaciones</h3>
            eJPTv2
            <br />
            CCNA Primer nivel
            <br />
            Introducción Ciberseguridad - Cisco
            <br />
            HTML & CSS - Microsoft
            <br />
            ISC2
            <br />
            <br />

            <h3 className="purple">Experiencia Laboral</h3>
            Acerinox - Pentester & Python developer Marzo-Junio, 2023
            <br />
            Agencia Hawkins - Python back-end developer Julio-Septiembre, 2024
            <br />
            <br />
            Además de la programación, estas son algunas actividades que me gustan hacer
          </p>
          <ul>
            <li className="about-activity">
              🎮 Jugar videojuegos
            </li>
            <li className="about-activity">
              🛩️ Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
