import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { ClientBreadCrumb } from '../../components/ClientBreadCrumb/ClientBreadCrumb';
import { ClientTicketTable } from '../../components/ClientTicketTable/ClientTicketTable';
import dummydata from "../../assets/dummyticket.json";

export const ClientTicketListing = () => {
    const [searchStr, setSearchStr] = useState('');
    const [displayData, setDisplayData] = useState(dummydata);

    const initialstatusdate = {
        "status": "All",
        "date": ""
    }
    const [statusdate, setstatusdate] = useState(initialstatusdate);

    useEffect(() => {
        search(searchStr);
    }, [searchStr]);

    useEffect(() => {
        setstatusdate(statusdate);
        //! add filter function here
        filters();
    }, [statusdate])

    const handleOnChangeSearch = (e) => {
        setSearchStr(e.target.value);
    };

    const handleOnChangeParams = (e) => {
        const { name, value } = e.target;
        setstatusdate(statusdate => ({ ...statusdate, [name]: value }));

    };

    const search = (value) => {
        const filteredData = dummydata.filter((row) =>
            row.issue.toLowerCase().includes(value.toLowerCase())
        );
        setDisplayData(filteredData);
    };

    const filters = () => {
        let filterdate = statusdate.date;
        let filterstatus = statusdate.status;
        if (statusdate.date === '') {
            filterdate = false
        }
        if (statusdate.status === 'All') {
            filterstatus = false;
        }
        const filteredData = dummydata.filter((row) => !filterstatus || row.status === filterstatus).filter((row1) => !filterdate || row1.opendate === filterdate)
        setDisplayData(filteredData);

    }

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
                <ClientTicketTable dummydata={displayData} />
            </Row>
        </Container>
    );
};
