import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Prostorii.css';
import brainster from './sliki/brainster.jpg';
import adapt from './sliki/adaptucilnica.jpg';
import hol from './sliki/hol.jpg';
import konfsala from './sliki/konfsala.jpg';
import ucilnica from './sliki/ucilnica.jpg';
import kanc from './sliki/kanc.jpg';
import sala from './sliki/salabina.jpg';
import ucilnica1 from './sliki/ucilnica1.jpg';
import kitchen from './sliki/kitchen.jpg'

const Prostorii = (props) => {
    return (
        <Container className='prostoriicont'>
            <Row>
            <Col md={3}>
             <h1>Нашите простории</h1>
             <br/>
             <p>Комплетно адаптибилни. Една сала за 150 учесници или три помали сали за групи од по 50 учесника. Училници за од 25 до 40 учесника. Избор од две локации.</p>
             <p>Пулт за прием. И најважното место за networking-Brainster Kitchen.</p>
             <br/>
             <p>Како го замислувате вашиот следен настан?</p>
            </Col>
            <Col md={3}>
            
                    <img style={{width:'17rem',height:'8rem'}} src={brainster}></img>
                    <p>Brainster</p>
                    <img style={{width:'17rem',height:'8rem'}} src={adapt}></img>
                    <p>Адаптибилна училница</p>
                    <img style={{width:'17rem',height:'8rem'}} src={hol}></img>
                    <p>Хол</p>
            </Col>
            <Col md={3}>
            <img style={{width:'17rem',height:'8rem'}} src={konfsala}></img>
                    <p>Конференциска сала</p>
                    <img style={{width:'17rem',height:'8rem'}} src={ucilnica}></img>
                    <p>Училница</p>
                    <img style={{width:'17rem',height:'8rem'}} src={kanc}></img>
                    <p>Канцелариски простор</p>
            
            </Col>
            <Col md={3}>
            <img style={{width:'17rem',height:'8rem'}} src={sala}></img>
                    <p>Сала со бина</p>
                    <img style={{width:'17rem',height:'8rem'}} src={ucilnica1}></img>
                    <p>Училница</p>
                    <img style={{width:'17rem',height:'8rem'}} src={kitchen}></img>
                    <p>Space Kitchen</p>
            </Col>

            </Row>

        </Container>
    );
};

export default Prostorii;