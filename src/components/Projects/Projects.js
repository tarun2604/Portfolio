import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import doc from "../../Assets/Projects/doc.png";
import agri from "../../Assets/Projects/agriconnect.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agri}
              isBlog={false}
              title="AgriConnect"
              description="Agri Connect: Farm to Motor is a digital platform that empowers farmers by directly connecting them with buyers and transporters, streamlining the agricultural supply chain for better profits and efficiency."
              ghLink="https://github.com/tarun2604/AgriConnect.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="doc.io"
              description="Find My Doctor is an API-based project that enables users to search, filter, and locate nearby doctors based on specialization, location, and availability."
              ghLink="https://github.com/tarun2604/new.git"
              demoLink="findmydocapi.netlify.app"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
