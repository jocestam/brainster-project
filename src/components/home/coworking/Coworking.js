import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import coworkpic from './coworking.jpg';
import Badge from 'react-bootstrap/Badge';
import './Coworking.css';
import {useState} from 'react';
import {Overlay,Tooltip} from 'react-bootstrap';




const Coworking = (props) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <Container>
               <Row >
                <Col md={7} className='text'>
                <img style={{height:'30rem',width:"40.2rem"}} src={coworkpic} />
                
                </Col>
                <Col  md={4} className='text'>
                <Badge className='bpil' pill variant="warning"> SOLD OUT </Badge>{' '}
                    <h1 className='title' >Coworking</h1>
                    <p className='title'> Биди дел од tech заедницата на иноватори,креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ќе одлучи секој месец со кого да ги дели своите канцеларии.</p>
                    <br/>
                    <button ref={target} onClick={() => setShow(!show)} className='btn modbtn3'>РЕЗЕРВИРАЈ МЕСТО</button>
                    <Overlay target={target.current} show={show} placement="bottom">
                        {(props) => (
                        <Tooltip className='ttip2' {...props}>
                          Местата се распродадени.
                         </Tooltip>
                             )}
                     </Overlay>
                    
                     
                   
                     
                </Col>
            </Row>
        </Container>
    );
};

export default Coworking;