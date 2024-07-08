import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb';
import { ClientTicketTable } from '../../components/ClientTicketTable/ClientTicketTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTickets, applyFilters } from './ticketsAction';

export const ClientTicketListing = () => {
    const [searchStr, setSearchStr] = useState('');
    const [statusDate, setStatusDate] = useState({ status: "All", date: "" });
    const dispatch = useDispatch();
    //const tickets = useSelector(state => state.ticketList.filteredTickets);

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);

    useEffect(() => {
        dispatch(applyFilters(searchStr, statusDate));
    }, [searchStr, statusDate, dispatch]);

    const handleOnChangeSearch = (e) => {
        setSearchStr(e.target.value);
    };

    const handleOnChangeParams = (e) => {
        const { name, value } = e.target;
        setStatusDate(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <ClientBreadCrumb page="Ticket List" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Link to='/addticket'>
                        <Button className='info'>Create Ticket</Button>
                    </Link>
                </Col>
                <Col>
                    <Form>
                        <FormGroup as={Row}>
                            <FormLabel column sm={2}>Issue name: </FormLabel>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    placeholder="Search..."
                                    name="ticketsearch"
                                    onChange={handleOnChangeSearch}
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="statusField">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select style={{ width: "100%" }} onChange={handleOnChangeParams} name="status">
                                        <option value="All">All</option>
                                        <option value="In Resolution">In Resolution</option>
                                        <option value="Response Pending">Response Pending</option>
                                        <option value="Issue Resolved">Issue Resolved</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="dateField">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control style={{ width: "100%" }} type="date" onChange={handleOnChangeParams} name="date" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <br />
            <Row>
                <ClientTicketTable  />
            </Row>
        </Container>
    );
};
