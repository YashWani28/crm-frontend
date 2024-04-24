import React from 'react'
import { Container,Row,Col,Form,Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

export const ClientForgotPasswordForm = (props) => {
  return (
    
    
    <Container style={{maxWidth:'fit-content',backgroundColor:'white',padding:"30px",borderRadius:"5px",boxShadow:"0px 0px 15px -5px"}}>
        <Row>
            <Col className='mx-auto'>
            <h1>Reset Password</h1>
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
                
                <br/>
                <Button type="submit" >Reset</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <br/>
                <a onClick={()=>{props.formSwitcher("login")}} style={{color:"blue",textDecoration:"underline"}}>Login here</a>
            </Col>
        </Row>
    </Container>
  )
}
