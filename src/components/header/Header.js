import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./brainster_space_logo.svg";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="Header">
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navclass">
            <NavLink className="brandclass" exact to="/">
              <img src={logo}></img>
            </NavLink>
            <NavLink className="navli" to="/nastani">
              НАСТАНИ
            </NavLink>
            <a className="navli" href="#coworking">
              CO-WORKING
            </a>
            <NavLink className="navli" to="/akademii">
              АКАДЕМИИ
            </NavLink>
            <NavLink className="navli" to="/prostor_za_nastani">
              ПРОСТОР ЗА НАСТАНИ
            </NavLink>
            <a
              id="partnerstva"
              onClick={handleShow2}
              className="navli"
              style={{ cursor: "pointer" }}
            >
              ПАРТНЕРСТВА
            </a>
            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Приклучи се</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form className="form">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    {" "}
                    Име и Презиме (Задолжително)
                  </Form.Label>
                  <Form.Control required placeholder="Внесете Име и Презиме" />
                  <br />
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Име на компанија(Незадолжително)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Внесете име на вашата компанија."
                  />
                  <br />
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Внесете телефонски број (Задолжително)
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Телефонски број (задолжително)."
                  />
                  <br />
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Предлог за соработка(Незадолжително)
                  </Form.Label>
                  <Form.Control
                    maxLength="300"
                    placeholder="Во 300 карактери опишете зошто сакате да соработуваме."
                    style={{ marginBottom: "30px" }}
                    as="textarea"
                    rows={3}
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    className="submitBtn2"
                  >
                    ИСПРАТИ ФОРМА
                  </Button>
                </Form>
                <br />
              </Modal.Body>
            </Modal>

            <Button
              variant="primary"
              onClick={handleShow}
              className="btn modbtn "
            >
              {" "}
              + ПРИКЛУЧИ СЕ
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Приклучи се</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form className="form">
                  <Form.Control placeholder="Внесете Име и Презиме" />
                  <br />

                  <Form.Control
                    required
                    type="email"
                    placeholder="Внесете email адреса"
                  />
                  <br />

                  <Button variant="primary" type="submit" className="submitBtn">
                    ИСПРАТИ
                  </Button>
                </Form>
                <br />
              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
