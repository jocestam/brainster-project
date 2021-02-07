import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Edukacija.css';
import edukacija from './edukacija1.jpg'
import edukacija1 from './edukacija2.jpg'
import { useState } from 'react';

const Edukacija = () => {


function swap() {
   document.getElementById('swap').setAttribute('src',(edukacija1));
   document.getElementById('pswap').innerHTML='Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација.'
    
}
function back() {
    document.getElementById('swap').setAttribute('src',(edukacija));
    document.getElementById('pswap').innerHTML='Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.'

}



    return (
        <Container >
            <Row >
                <Col md={5} >
            
                    <h1 style={{marginTop:'80px'}}>Едукација</h1>
                    <p id='pswap'>Дали си подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.</p>
                    <br/>
                    <button className='modbtne btn' onClick={back}>АКАДЕМИИ</button>
                    <button className='btn modbtn2' onClick={swap}>ЗА КОМПАНИИ</button>
                
                </Col>
                <Col md={7} >
                     <img id='swap' style={{height:'30rem',width:"40.2rem"}} src={edukacija} />
            
                </Col>
            </Row>

        </Container>
    );
};

export default Edukacija;