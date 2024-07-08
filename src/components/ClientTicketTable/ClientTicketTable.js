import React from 'react'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./ClientTicketTable.css";
import { useSelector } from 'react-redux';
import { convert } from '../../utils/serverDateToJSDate';

export const ClientTicketTable = () => {
    const {filteredTickets,isLoading,error} = useSelector(state => state.tickets);
    if(isLoading)return <h3>Loading...</h3>
    if(error)return <h3>{error}</h3>
    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Issue</th>
                    <th>Status</th>
                    <th>Opened Date</th>

                </tr>
            </thead>
            <tbody>
                {filteredTickets.length ? filteredTickets.map((data, indx) => {
                    return (
                        //! WOW !!!
                        <LinkContainer to={`/ticket/${indx}`} key={indx} className="table-link hoverrow">
                            <tr >
                                <td>{indx + 1}</td>
                                <td>{data.issue}</td>
                                <td>{data.status}</td>
                                <td>{convert(data.openAt)}</td>
                            </tr>
                        </LinkContainer>

                    )
                }) :
                    <tr>
                        <td colSpan={4}>No tickets !</td>
                    </tr>
                }

            </tbody>


        </Table>
    )
}
