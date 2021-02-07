import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Prostor.css';
import prostor_slika from './prostor.jpg';
import {NavLink} from 'react-router-dom';

const Prostor = () => {




    return (
        <Container >
            <Row >
                <Col md={5} >
            
                    <h1 style={{marginTop:'80px'}}>Простор за настани</h1>
                    <p >Можност за презентации, обуки, конференции, networking настани. Одбери ја просторијата која најмногу ќе одговара на твојата идеја. Го задржуваме правото да одбереме кој настан ќе се организира во нашиот Brainster Space.</p>
                    <br/>
                    <NavLink to='/prostor_za_nastani'>
                    <button className='modbtn btn'>ВИДИ ГО ПРОСТОРОТ</button>
                    </NavLink>
                  
                </Col>
                <Col  md={7} >
                     <img style={{height:'30rem',width:"40.2rem"}} src={prostor_slika} />
                </Col>
            </Row>

        </Container>
    );
};

export default Prostor;