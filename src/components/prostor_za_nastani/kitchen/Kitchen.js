import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Kitchen.css';
import sl1 from './sliki2/sl1.jpg';
import sl2 from './sliki2/sl2.jpg';
import sl3 from './sliki2/sl3.jpg';
import sl4 from './sliki2/sl4.jpg';



const Kitchen = (props) => {
    return (
        <Container className='kitchencont'>
            <Row>
                <Col md={4}>
                    <Row><img src={sl1} style={{width:'22rem',height:'8rem',marginLeft:'15px'}}/> </Row>
                    <Row style={{width:'100%'}} className='kitchenrow2'> 
                    
                        <Col md={6}> <img src={sl2} style={{width:'10.5rem',height:'8rem'}}/></Col>
                        <Col md={6}> <img src={sl3} style={{width:'10.5rem',height:'8rem',marginLeft:'9px'}}/></Col>
                
                    </Row>
                
                </Col>
                <Col md={4}>
                    <img src={sl4} style={{width:'22rem',height:'17.3rem'}}/>
                </Col>
                <Col md={4}>
                    <h1>Space Kitchen</h1>
                    <p>Место каде сите настани започнуваат и завршуваат. Место каде нашиот тим готви и експериментира. Нашата кујна има само едно правило.</p>
                    
                    <p>Храната мора да биде вегетаријанска. Пијалок, кафе или мезе. Вие одберее вид на кетеринг ние ќе го обезбедиме.</p>
                
                </Col>

            </Row>

        </Container>
    );
};

export default Kitchen;