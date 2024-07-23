import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, FormGroup, FormControl,Alert,Spinner, FormLabel, Button } from 'react-bootstrap';
import { ClientBreadCrumb } from '../ClientBreadCrumb/ClientBreadCrumb';
import { useDispatch, useSelector } from "react-redux";
import { resetSuccessMSg } from './AddTicketSlicer';
import { openNewTicketAction } from './AddTicketAction';

export const AddTicketForm = () => {
    const dispatch = useDispatch();
    const initialdata = {
        "issue": "",
        "desc": "",
        "feedback": ""
    };

    const [formData, setFormData] = useState(initialdata);

    const { isLoading, error, successMsg } = useSelector(
        (state) => state.openTicket
    );

    useEffect(() => {
        return () => {
          successMsg && dispatch(resetSuccessMSg());
        };
      }, [dispatch, formData]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        //* code for ticket creation API
        console.log("Form Data:", formData);
        dispatch(openNewTicketAction(formData))
    };

    return (
        <Container>
            <div>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMsg && <Alert variant="primary">{successMsg}</Alert>}
                {isLoading && <Spinner variant="primary" animation="border" />}
            </div>
            <Form>
                <FormGroup>
                    <FormLabel>Issue</FormLabel>
                    <FormControl
                        type="text"
                        placeholder='What is your issue in short?'
                        minLength="3"
                        maxLength="100"
                        value={formData.issue}
                        onChange={handleOnChange}
                        name='issue'
                        required
                    />
                    <br />
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        as="textarea"
                        placeholder='Describe your issue in short'
                        onChange={handleOnChange}
                        value={formData.desc}
                        rows="5"
                        name='desc'
                        required
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <FormLabel>Feedback/Scope of improvement</FormLabel>
                    <FormControl
                        as="textarea"
                        value={formData.feedback}
                        rows="3"
                        onChange={handleOnChange}
                        name='feedback'
                    />
                </FormGroup>
                <br />
                <Button type="submit" style={{ width: "100%" }} onClick={handleOnClick}>Create Ticket</Button>
                <br />
            </Form>
        </Container>
    );
};
