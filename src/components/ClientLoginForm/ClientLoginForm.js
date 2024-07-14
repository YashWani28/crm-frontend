import React,{useState,} from 'react'
import { Container,Row,Col,Form,Button, FormControl, FormGroup, FormLabel,Spinner,Alert } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {loginPending,loginSuccess,loginFail} from './clientLoginSlice';
import { userLogin } from '../../api/userApi';
import {useNavigate} from "react-router-dom";
import {getUserProfile} from '../../pages/Dashboard/userAction';

export const ClientLoginForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,isAuth,error} = useSelector(state=>state.login)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleLoginClick = async(e) => {
        e.preventDefault();
        if(!email || !password){
            return alert("Fill up all fields!!!");
        }
        dispatch(loginPending());
        //* more validation can be added here like checking length etc
        //* call API to submit the form here
        try{
            const isAuth = await userLogin({email,password})
            //console.log(isAuth);
           
            if(isAuth.success===false){
                dispatch(loginFail(isAuth.message));
                return;
            }
            dispatch(loginSuccess());
            dispatch(getUserProfile());
            navigate("/dashboard");
        }
        catch(error)
        {
            dispatch(loginFail(error.message))
        }
        

    }
  return (
    
    
    <Container style={{maxWidth:'fit-content',backgroundColor:'white',padding:"30px",borderRadius:"5px",boxShadow:"0px 0px 15px -5px"}}>
        <Row>
            <Col className='mx-auto'>
            <h1>Client Login</h1>
            <hr/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
                <FormGroup>
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                    type="email"
                    placeholder='Enter your email id'
                    onChange={handleOnChange}
                    value={email}
                    name='email'
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                    type="password"
                    placeholder='Enter your password'
                    onChange={handleOnChange}
                    value={password}
                    name='password'
                    required
                    />
                </FormGroup>
                <br/>
                <Button type="submit" onClick={handleLoginClick}>Login</Button>
                {isLoading && <Spinner variant='primary' animation='border'/>}
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
