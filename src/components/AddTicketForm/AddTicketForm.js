import React from 'react'
import { Col, Container, Row,Form,FormGroup,FormControl,FormLabel,Button } from 'react-bootstrap'
import { ClientBreadCrumb } from '../ClientBreadCrumb/ClientBreadCrumb'

export const AddTicketForm = ({handleOnChange,handleOnClick}) => {
  return (

            <Form>
                <FormGroup>
                    <FormLabel>Issue</FormLabel>
                    <FormControl
                    type="text"
                    placeholder='What is your issue in short?'
                    minLength="3"
                    maxLength="100"
                    onChange={handleOnChange}
                    name='issue'
                    required
                    />
                <br/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Date</FormLabel>
                    <FormControl
                    type="date"                  
                    name='opendate'
                    onChange={handleOnChange}
                    required
                    />
                </FormGroup>
                <br/>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormControl
                    as="textarea"
                    placeholder='Describe your issue in short'
                    onChange={handleOnChange}
                    row="5"
                    type="text"     
                    name='desc'
                    required
                    />
                </FormGroup>
                <br/>
                <FormGroup>
                    <FormLabel>Feedback/Scope of improvement</FormLabel>
                    <FormControl
                    as="textarea"
                    row="3"
                    type="text"  
                    onChange={handleOnChange}

                    name='feedback'
                    />
                </FormGroup>
                <br/>
                <Button type="submit" style={{width:"100%"}} onClick={handleOnClick}>Create Ticket</Button>
            </Form>       
  )
}
