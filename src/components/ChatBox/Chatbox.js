import React from 'react'
import { Col, Container, Row, Button, Form, FormControl } from 'react-bootstrap'

export const Chatbox = ({handleOnChange,handleOnClick,text}) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>
                    Reply here...
                </Form.Label>
                <FormControl
                    as="textarea"
                    onChange={handleOnChange}
                    value={text}
                    rows="5"
                    name="reply"
                />


            </Form.Group>
            <br />
            <Row className='text-end'>
                <Col>
                    <Button onClick={handleOnClick}>Reply</Button>
                </Col>

            </Row>
        </Form>
    )
}
