import React,{useState,useEffect} from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb'
import dummydata from '../../assets/dummyticket.json'
import { MessageHistory } from '../../components/MessageHistory/MessageHistory'
import { Chatbox } from '../../components/ChatBox/Chatbox'
import { useParams,Navigate } from 'react-router-dom'
import { Notfound } from '../NotFoundPage404/Notfound'

export const ClientTicketPage = () => {
    const [replytext,setreplytext] = useState("");
    const {Tid} = useParams();
    const [messages,setmessages] = useState([]);

    useEffect(() => {
        // Fetch ticket data using Tid and set messages
        if (dummydata[Tid]) {
            setmessages(dummydata[Tid].messagehistory);
        } 
        else {
       
            setmessages(null);
        }
    }, [Tid]);

    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setreplytext(value);
    }

    const handleOnClick = ()=>{
        // if reply is empty then log nothing
        if (!replytext.trim()) {
            return;
        }
        setmessages([...messages,{
            "sentby":"client",
            "messagedate":"2024-04-27",
            "messagetime":"23:58",
            "messagebody":replytext
        }])
        setreplytext("");

        
    }

    return (
        <Container>
            {
                messages!==null?
            <Container>
                
                <Row>
                    <ClientBreadCrumb page="Ticket" />

                </Row>
                <Row>
                    <Col className='text-weight-bolder text-secondary'>
                        
                        <div>Issue: {dummydata[0].issue}</div>
                        <div>Date opened: {dummydata[0].opendate}</div>
                        {/* <div>Description: {dummydata[0].descrption}</div> */}
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant='outline-info '>Close Ticket</Button>
                    </Col>
                </Row>
                <hr />
                <br />
                <Row>
                    
                    <MessageHistory history={messages}></MessageHistory>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Chatbox handleOnChange={handleOnChange} handleOnClick={handleOnClick} text={replytext}></Chatbox>
                    </Col>
                </Row>
                <br />
                <br />

            </Container>
            :<Navigate to='/error404'></Navigate>}
        </Container>
    )
}
