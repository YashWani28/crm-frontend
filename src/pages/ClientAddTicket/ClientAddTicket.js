import React,{useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb'
import { AddTicketForm } from '../../components/AddTicketForm/AddTicketForm'
export const ClientAddTicket = () => {
    const initialdata = {
        "issue":"",
        "opendate":"",
        "desc":"",
        "feedback":""
    }
    const [formData,setformData] = useState(initialdata);
    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setformData({...formData,[name]:value})
        console.log(formData);
    }
    const handleOnClick = (e)=>{
        e.preventDefault();
        //* code for ticket creation API
        console.log("Answer:",formData);
    }
    return (
        <Container style={{ maxWidth: "70%" }}>
            <Row>
                <Col>
                    <ClientBreadCrumb page="Add Ticket"></ClientBreadCrumb>
                </Col>
            </Row>
            <Row>
                <h1 className='text-center'>Create a Ticket</h1>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnChange={handleOnChange} formData={formData} handleOnClick={handleOnClick}></AddTicketForm>
                </Col>
            </Row>
        </Container>
    )
}
