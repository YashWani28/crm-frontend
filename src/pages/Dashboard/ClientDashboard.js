import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col,Button } from 'react-bootstrap'
import { ClientTicketTable } from '../../components/ClientTicketTable/ClientTicketTable'
import dummydata from '../../assets/dummyticket.json';
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllTickets } from '../ClientTicketListingPage/ticketsAction';

export const ClientDashboard = () => {
    const {tickets}=useSelector(state=>state.tickets);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!tickets.length){
            dispatch(fetchAllTickets());
        }
    },[tickets,dispatch]);
    
    const pendingTickets = Array.isArray(tickets) ? tickets.filter(row => row.status !== "Issue Resolved") : [];
    const resolvedTickets = Array.isArray(tickets) ? tickets.length - pendingTickets.length : 0;
  return (
    <Container>
        <Row>
            <Col>
                <ClientBreadCrumb page="dashboard"></ClientBreadCrumb>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-3 mb-3'>
                <Link to="/addticket">
                    <Button variant='info' style={{fontSize:"2rem",padding:"10px 30px",color:"white"}}>
                        Create Ticket
                    </Button>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-4'>
                <div>Pending/Inresolution Tickets: {pendingTickets.length}</div>
                <div>Resolved Tickets: {resolvedTickets}</div>
                <div>Total Tickets: {tickets.length}</div>

            </Col>
        </Row>
        {/* <Row>Recently Added Tickets</Row>
        <hr/>
        <Row>
            <Col className='clientRecentTicket text-center'>
                <ClientTicketTable dummydata={dummydata}></ClientTicketTable>
            </Col>
        </Row> */}
    </Container>
  )
}
