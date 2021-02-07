import React from 'react';
import Card from 'react-bootstrap/Card';
import './Academy.css';
import {FaCalendarAlt} from 'react-icons/fa';
import {FaClock} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FaHandsHelping} from 'react-icons/fa';
import gdizajn from './gdizajn.jpg';
import {Row,Col} from 'react-bootstrap';


const Academy = (props) => {
    return (
        <div>



                        
     <Card className='cardacdm' style= {{marginTop: '12px',width:'100%', height:'29rem'}}>
             
             <img className='bgimg' src={props.bgi} ></img>
            
                <Card.Body>
                    <Card.Title className='ctitle'>
                        {props.title}
                    </Card.Title>

                    <Card.Text>

                        <div style={{marginTop:'130px'}}>
                         <p><FaUserFriends/> Слободни места: 4</p>
                         <p><FaCalendarAlt/> Уписи до: 26.08.2019</p>
                         <p><FaClock/> Стани дизајнер за 7 месеци</p>
                         <p><FaHandsHelping/> Партнери за вработување: 5</p>
                        </div>
                    </Card.Text>
                </Card.Body>

            </Card>
           </div>
    );
};

export default Academy;