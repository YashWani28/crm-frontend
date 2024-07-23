import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MessageHistory.css';

export const MessageHistory = ({ history }) => {
  console.log(history);

  return (
    <Container className='messagehistory'>
      {history.length!==0 ? history.map((message, i) => {
        return (
          <Row key={i} className='mb-5'>
            {message.sentby === "client" &&
              <Row>
                <Col className='sentinfo text-end'>
                  <div className='bluecolor'>{message.sentby}</div>
                  <div className='bluecolor'>{new Date(message.messagedate).toLocaleDateString()}</div>
                  <div className='bluecolor'>{new Date(message.messagedate).toLocaleTimeString()}</div>
                </Col>
                <Col className='messagebody'>{message.messagebody}</Col>
              </Row>
            }
            {message.sentby === "admin" &&
              <Row>
                <Col xs={1} className='sentinfo text-start '>
                  <div className='bluecolor'>{message.sentby}</div>
                  <div className='bluecolor'>{new Date(message.messagedate).toLocaleDateString()}</div>
                  <div className='bluecolor'>{new Date(message.messagedate).toLocaleTimeString()}</div>
                </Col>
                <Col xs={5} className='messagebody'>{message.messagebody}</Col>
              </Row>
            }
          </Row>
        )
      }):<Row >No Messages !</Row>}
    </Container>
  )
}
