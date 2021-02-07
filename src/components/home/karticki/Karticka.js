import React from 'react';
import Card from 'react-bootstrap/Card';
import './Karticka.css';



const Karticka = (props) => {
    return (
        <div className='.kartdiv' >
            
            <Card style={{width:'100%', height:'32rem'}} className="kart">
                     <Card.Img style={{height:'15rem'}} variant="top" src={props.img} />
                  <Card.Body>
                     <Card.Title>{props.title}</Card.Title>
                         <Card.Text className='font'>
                                 {props.content}
                         </Card.Text>
                </Card.Body>

             </Card>
            
        </div>
    );
};

export default Karticka;