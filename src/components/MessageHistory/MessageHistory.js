import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MessageHistory.css';

export const MessageHistory = ({ history }) => {
  console.log(history);

  return (
    <Container className='messagehistory'>
      {history.map((message, i) => {
        return (
          <Row key={i} className='mb-5'>
            {message.sentby === "client" &&
              <Row>
                <Col className='sentinfo text-end'>
                  <div className='bluecolor'>{message.sentby}</div>
                  <div className='bluecolor'>{message.messagedate}</div>
                  <div className='bluecolor'>{message.messagetime}</div>
                </Col>
                <Col className='messagebody'>{message.messagebody}</Col>
              </Row>
            }
            {message.sentby === "operator" &&
              <Row>
                <Col xs={1} className='sentinfo text-start '>
                  <div className='bluecolor'>{message.sentby}</div>
                  <div className='bluecolor'>{message.messagedate}</div>
                  <div className='bluecolor'>{message.messagetime}</div>
                </Col>
                <Col xs={5} className='messagebody'>{message.messagebody}</Col>
              </Row>
            }
          </Row>
        )
      })}
    </Container>
  )
}
