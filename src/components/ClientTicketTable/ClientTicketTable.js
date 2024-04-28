import React from 'react'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./ClientTicketTable.css";

export const ClientTicketTable = ({ dummydata }) => {
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
                {dummydata.length ? dummydata.map((data, indx) => {
                    return (
                        //! WOW !!!
                        <LinkContainer to={`/ticket/${indx}`} key={indx} className="table-link hoverrow">
                            <tr >
                                <td>{indx + 1}</td>
                                <td>{data.issue}</td>
                                <td>{data.status}</td>
                                <td>{data.opendate}</td>
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
