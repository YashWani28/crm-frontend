import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col,Button } from 'react-bootstrap'
import { ClientTicketTable } from '../../components/ClientTicketTable/ClientTicketTable'
import dummydata from '../../assets/dummyticket.json';
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb';

export const ClientDashboard = () => {
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
                <div>Pending Tickets: 3</div>
                <div>Resolved Tickets: 47</div>
                <div>Total Tickets: 50</div>

            </Col>
        </Row>
        <Row>Recently Added Tickets</Row>
        <hr/>
        <Row>
            <Col className='clientRecentTicket text-center'>
                <ClientTicketTable dummydata={dummydata}></ClientTicketTable>
            </Col>
        </Row>
    </Container>
  )
}
