import React from "react";
import "./Footer.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "./brainster_space_logo.svg";
import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <Container className="footer">
      <Row style={{width:'100%'}}>
      <Col md={3} style={{ marginLeft: "6.6rem" }}>
        <Row style={{ fontWeight: "bold" }}>Корисни линкови</Row>
        <br />

        <Row>
          <a data-tip data-for="global" style={{ cursor: "pointer" }}>
            Контакт
          </a>
          <ReactTooltip className="ttip" id="global" aria-haspopup="true">
            <span>Емаил:</span>
            <p>anja@brainster.co</p>
            <span>Телефон:</span>
            <p>070 233 414</p>
          </ReactTooltip>
        </Row>

        <Row>
          <a href="http://wearelaika.com/" target="_blank">
            Отворени позиции
          </a>
        </Row>
        <Row>
          <a
            href="https://medium.com/wearelaika/brainster-space-the-"
            target="_blank"
          >
            Галерија
          </a>
        </Row>
        <NavLink to="/nastani">
          <Row>Календар</Row>
        </NavLink>
      </Col>

      <Col md={3}>
        <Row style={{ fontWeight: "bold" }}>Социјални мрежи</Row>
        <br />
        <Row>
          <a href="https://www.facebook.com/brainster.co" target="_blank">
            <FaFacebook
              style={{ color: "#1877f2", height: "30px", width: "30px" }}
            />
          </a>
          <a
            href="https://at.linkedin.com/school/brainster-co/"
            target="_blank"
          >
            <FaLinkedin
              style={{
                marginLeft: "15px",
                color: "#0e76a8",
                height: "30px",
                width: "30px",
              }}
            />
          </a>
          <a href="https://www.instagram.com/brainsterco/" target="_blank">
            <FaInstagram
              style={{
                marginLeft: "15px",
                color: "#bc2a8d",
                height: "30px",
                width: "30px",
              }}
            />
          </a>
        </Row>
      </Col>
      <Col  className='ftlogo'  >
        <img src={logo} style={{height:'60px'}}></img>
      </Col>
      </Row>
    </Container>
  );
};

export default Footer;
