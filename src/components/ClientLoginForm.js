import React from 'react'
import { Container,Row,Col,Form,Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'


export const ClientLoginForm = (props) => {
  return (
    
    
    <Container style={{maxWidth:'fit-content',backgroundColor:'white',padding:"30px",borderRadius:"5px",boxShadow:"0px 0px 15px -5px"}}>
        <Row>
            <Col className='mx-auto'>
            <h1>Client Login</h1>
            <hr/>
            <Form>
                <FormGroup>
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                    type="email"
                    placeholder='Enter your email id'
                    onChange={props.handleOnChange}
                    name='email'
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                    type="password"
                    placeholder='Enter your password'
                    onChange={props.handleOnChange}
                    name='password'
                    required
                    />
                </FormGroup>
                <br/>
                <Button type="submit" onClick={props.handleLoginClick}>Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <br/>
                <a  onClick={()=>{props.formSwitcher("reset")}} style={{color:"blue",textDecoration:"underline"}}>Forgot Password</a>
            </Col>
        </Row>
    </Container>
  )
}
