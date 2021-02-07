import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Prostor.css";
import Prostor from "./del1/Del1";
import Prostorii from "./prostorii/Prostorii";
import Kitchen from "./kitchen/Kitchen";
import { FaVolumeUp } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaCalendarMinus } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import anja from "./anja.png";

const Prostor_za_nastani = (props) => {
  return (
    <div>
      <Prostor />
      <Prostorii />
      <Kitchen />

      <Container style={{ marginTop: "20px" }}>
        <h1>Нудиме</h1>
        <Row style={{ marginTop: "15px" }}>
          <button className=" nudimebtns" disabled>
            <FaBuilding style={{ color: "orange", marginRight: "5px" }} />{" "}
            Простор
          </button>
          <button className=" nudimebtns" disabled>
            <FaCalendarMinus style={{ color: "orange", marginRight: "5px" }} />{" "}
            Space Kitchen
          </button>
          <button className=" nudimebtns" disabled>
            <FaGlobe style={{ color: "orange", marginRight: "5px" }} />{" "}
            Логистика
          </button>
          <button className=" nudimebtns" disabled>
            <FaMicrophone style={{ color: "orange", marginRight: "5px" }} />{" "}
            Техничка Поддршка
          </button>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <button className=" nudimebtns" disabled>
            <FaVolumeUp style={{ color: "orange", marginRight: "5px" }} /> Звук
          </button>
          <button className=" nudimebtns" disabled>
            <FaLightbulb style={{ color: "orange", marginRight: "5px" }} />{" "}
            Светло
          </button>
          <button className=" nudimebtns" disabled>
            <FaSitemap style={{ color: "orange", marginRight: "5px" }} /> Помош
            при Организација
          </button>
          <button className=" nudimebtns" disabled>
            <FaPhotoVideo style={{ color: "orange", marginRight: "5px" }} />
            Видео и Фотографија
          </button>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <button className="nudimebtns" disabled>
            <FaFacebook style={{ color: "orange" }} /> Промоција на Социјални
            Мрежи
          </button>
        </Row>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col md={7}>
            <h1 id="eventhost" style={{ marginTop: "105px" }}>
              Event Host
            </h1>
            <p>Ања Макеска</p>
            <p>anja@brainster.co</p>
            <p>+ 389 (0)70 233 414 </p>
          </Col>

          <Col md={5}>
            <img
              src={anja}
              style={{ width: "25rem", height: "30rem", marginLeft: "55px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Prostor_za_nastani;
