import React from "react";
import "./Home.css";
import Karticka from "./karticki/Karticka";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import nastani from "./karticki/sliki/nastani.jpg";
import coworking from "./karticki/sliki/coworking.jpg";
import partner from "./karticki/sliki/partnerstva.jpg";
import inovacii from "./karticki/sliki/inovacii.jpg";
import { NavLink, Link } from "react-router-dom";
import Edukacija from "./edukacija/Edukacija";
import marketing from "./karticki/sliki/marketing.jpg";
import datascience from "./karticki/sliki/datascience.jpg";
import codeworks from "./karticki/sliki/codeworks.jpg";
import Coworking from "./coworking/Coworking";
import Prostor from "./prostor/Prostor";
import edukacija from "./karticki/sliki/edukacija1.jpg";
import prostor_slika from "./karticki/sliki/prostor.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <Container>
      <div className="home1p">
        <div className="home1"></div>
        Центар за Учење,Кариера и Иновација
      </div>

      <h1 className="zanas">За Нас</h1>
      <Row>
        <Col className="kol" md={4}>
          <a href="https://brainster.co/" target="_blank">
            <Karticka
              title="Едукација"
              img={edukacija}
              content="Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата."
            />
          </a>
        </Col>

        <Col md={4} className="kol">
          <NavLink to="/nastani" className="nvlink">
            <Karticka
              title="Настани"
              img={nastani}
              content="Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани."
            />
          </NavLink>
        </Col>

        <Col md={4} className="kol">
          <a href="#coworking">
            <Karticka
              title="Coworking"
              img={coworking}
              content="Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии."
            />
          </a>
        </Col>

        <Col md={4} className="kol">
          <NavLink to="/prostor_za_nastani" className="nvlink">
            <Karticka
              title="Простор за настани"
              img={prostor_slika}
              content="Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани."
            />
          </NavLink>
        </Col>

        <Col md={4} className="kol">
          <a style={{ cursor: "pointer" }} onClick={handleShow3}>
            <Karticka
              title="Партнерства со tech компании"
              img={partner}
              content="Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректрно поврзување на tech талентите со компаниите."
            />
          </a>

          <Modal show={show3} onHide={handleClose3}>
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

                <Button variant="primary" type="submit" className="submitBtn2">
                  ИСПРАТИ ФОРМА
                </Button>
              </Form>
              <br />
            </Modal.Body>
          </Modal>
        </Col>

        <Col md={4} className="kol">
          <a style={{ cursor: "pointer" }} onClick={handleShow4}>
            <Karticka
              title="Иновации за компании"
              img={inovacii}
              content="Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација."
            />
          </a>

          <Modal show={show4} onHide={handleClose4}>
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

                <Button variant="primary" type="submit" className="submitBtn2">
                  ИСПРАТИ ФОРМА
                </Button>
              </Form>
              <br />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>

      <div className="row2">
        <Edukacija />
      </div>

      <div className="row2">
        <h1 className="zanas">Настани</h1>
        <br />
        <Row>
          <Col md={4}>
            <a
              style={{ cursor: "pointer" }}
              href="https://codepreneurs.brainster.co/"
              target="_blank"
            >
              <Karticka
                title="Codeworks"
                img={codeworks}
                content="Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите so IT компаниите. Deep Dive Intensive Seminar Ексклузивни семинари кои комбинираат три различни техники на учење."
              />
            </a>
          </Col>

          <Col md={4}>
            <a
              style={{ cursor: "pointer" }}
              href="https://marketpreneurs.brainster.co/"
              target="_blank"
            >
              <Karticka
                title="Deep Dive into Marketing"
                img={marketing}
                content="Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да и помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на маркетингот."
              />
            </a>
          </Col>

          <Col md={4}>
            <a
              style={{ cursor: "pointer" }}
              href="https://datascience.brainster.co/"
              target="_blank"
            >
              <Karticka
                title="Deep Dive into Data Science"
                img={datascience}
                content="Deep Dive into Data Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на Data Science."
              />
            </a>
          </Col>
        </Row>
        <Row>
          <NavLink to="/nastani">
            <button className="btn btnkalendar">
              {" "}
              <FaCalendarAlt /> КАЛЕНДАР СО НАСТАНИ
            </button>
          </NavLink>
        </Row>
      </div>

      <div className="row2" id="coworking">
        <Coworking />
      </div>
      <div className="row2">
        <Prostor />
      </div>

      <div className="row2 partneri">
        <h1 className="lasttext">Партнери</h1>
        <p className="lasttext">Имаш идеја? Отворени сме за соработка.</p>
        <NavLink to="/prostor_za_nastani">
          <button className="modbtn4 btn lasttext">ВИДИ ГО ПРОСТОРОТ</button>
        </NavLink>
      </div>
    </Container>
  );
};

export default Home;
