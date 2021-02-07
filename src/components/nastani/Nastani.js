import React, { useState } from "react";
import moment from "moment";
import Calendar from 'react-calendar';
import { Container } from "react-bootstrap";
import 'react-calendar/dist/Calendar.css';
import './Nastani.css';


const Nastani = (props) => {
  
 

  return (
    <Container>
        <h1 className='calendarh1'>Calendar</h1>
     <Calendar className='custom' />
  
    </Container>
  );
};

export default Nastani;
