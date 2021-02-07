import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Del1.css'
import img from './prostor.jpg';

const Del1 = (props) => {
    return (
        <Container className='del1'>
            <Row>
                <Col md={5}>
                    <h1 className='del1h1'>Простор за настани</h1>
                    <p>Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простори и Space Kitchen.</p>
                    <p>Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате.</p>
                    <p>Организираме конференции до 150 учесници и обуки и предавања за групи од 20 ученици. Контактирајте не за да ви хостираме одличен настан.</p>
                    <br/>
                    <a href='#eventhost'>
                    <button className="btn mdbtn5">+ БУКИРАЈ НЕ</button>
                    </a>


                </Col>
                <Col md={7}>
                <img style={{height:'30rem',width:"40.7rem"}} src={img} />
                </Col>
            </Row>



        </Container>
    );
};

export default Del1;