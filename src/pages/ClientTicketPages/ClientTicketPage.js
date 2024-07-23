import React,{useState,useEffect} from 'react'
import { Col, Container, Row, Button,Spinner,Alert } from 'react-bootstrap'
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb'
import dummydata from '../../assets/dummyticket.json'
import { MessageHistory } from '../../components/MessageHistory/MessageHistory'
import { Chatbox } from '../../components/ChatBox/Chatbox'
import { useParams,Navigate } from 'react-router-dom'
import { fetchSingleTicket,closeTicketAction } from '../ClientTicketListingPage/ticketsAction'
import { Notfound } from '../NotFoundPage404/Notfound'
import { useDispatch,useSelector } from 'react-redux'

export const ClientTicketPage = () => {
    const [isFormDisabled,setisFormDisabled]=useState(false)
    const {Tid} = useParams();
    const [messages,setmessages] = useState([]);
    const dispatch = useDispatch();
    //const Tid=1;
    const{isLoading,error,selectedTicket}=useSelector(state=>state.tickets);

    useEffect(()=>{

        if(selectedTicket.status==="Issue Resolved"){
            setisFormDisabled(true);
        }
        else{
            setisFormDisabled(false);
        }
    },[selectedTicket])
    useEffect(() => {
        dispatch(fetchSingleTicket(Tid));
      }, [Tid, dispatch]);
    
      useEffect(() => {
        if (selectedTicket) {
          setmessages(selectedTicket.messagehistory || []);
        } else {
          setmessages([]);
        }
      }, [selectedTicket]);

    

    return (
        <Container>
            {
                messages!==null?
            <Container>
                
                <Row>
                    <ClientBreadCrumb page="Ticket" />

                </Row>
                <Row>
                    {isLoading && <Spinner variant="primary" animation="border"/>}
                    {error && <Alert variant="danger">{error}</Alert>}
                </Row>
                <Row>
                    <Col className='text-weight-bolder text-secondary'>
                        
                        <div>Issue: {selectedTicket.issue || "Not found"}</div>
                        <div>Date opened: {new Date(selectedTicket.openAt).toLocaleString()}</div>
                        <div>Status: {selectedTicket.status }</div>
                        <div>Ticket ID: {selectedTicket._id }</div>


                        {/* <div>Description: {dummydata[0].descrption}</div> */}
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant='outline-info ' onClick={()=>{dispatch(closeTicketAction(Tid))}} disabled={isFormDisabled}>Close Ticket</Button>
                    </Col>
                </Row>
                <hr />
                <br />
                <Row>
                    
                    {selectedTicket.messagehistory&&(<MessageHistory history={messages}></MessageHistory>)}
                </Row>
                <br />
                <Row>
                    <Col>
                        <Chatbox messages={messages} setmessages={setmessages}></Chatbox>
                    </Col>
                </Row>
                <br />
                <br />

            </Container>
            :<Navigate to='/error404'></Navigate>}
        </Container>
    )
}
