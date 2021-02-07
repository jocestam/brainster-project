import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Akademii.css";
import akademiip from "./akademiip.jpg";
import Academy from "./academycard/Academy";
import gdizajn from "./academycard/gdizajn.jpg";
import dmark from "./academycard/dmark.png";
import dscience from "./academycard/dscience.png";
import fend from "./academycard/fend.png";
import fstack from "./academycard/fstack.png";
import stesting from "./academycard/stesting.png";

const Akademii = (props) => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col style={{ marginTop: "35px" }} md={4}>
          <h1>Академии</h1>
          <p>
            {" "}
            Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на
            денешницата преку интерактивна настава и практична работа на реални
            проекти.{" "}
          </p>
          <p>
            Инструктори кои се докажани експерти во својата област. Преку нив
            имаш можност да ги научиш и предвидиш предизвиците на иднината на
            работење и да се поврзеш со секашните и идните врвни професионалци и
            компании.
          </p>
          <p>
            Академиите ќе ти го отворат патот кон кариера каква што посакуваш.
          </p>
        </Col>

        <Col md={8}>
          <img src={akademiip} style={{ height: "30rem", width: "100%" }} />
        </Col>
      </Row>

      <Row style={{ marginTop: "40px" }}>
        <Col md={4}>
          <a
            href="https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design"
            target="_blank"
          >
            <Academy bgi={gdizajn} title="Академија за графички дизајн" />
          </a>
        </Col>

        <Col md={4}>
          <a
            href="https://ux.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=vauceri&utm_term=website&utm_content=ux"
            target="_blank"
          >
            <Academy bgi={dmark} title="Академија за дигитален маркетинг" />
          </a>
        </Col>

        <Col md={4}>
          <a
            href="https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=frontend"
            target="_blank"
          >
            <Academy bgi={fend} title="Академија за Front-end програмирање" />
          </a>
        </Col>

        <Col md={4}>
          <a
            href="https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=fullstack"
            target="_blank"
          >
            <Academy
              bgi={fstack}
              title="Академија за Full-stack програмирање"
            />
          </a>
        </Col>

        <Col md={4}>
          <a
            href="https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science"
            target="_blank"
          >
            <Academy bgi={dscience} title="Академија за Data science" />
          </a>
        </Col>

        <Col md={4}>
          <a
            href="https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa"
            target="_blank"
          >
            <Academy bgi={stesting} title="Академија за software testing" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Akademii;
