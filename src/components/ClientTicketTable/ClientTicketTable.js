import React from 'react'
import { Table } from 'react-bootstrap'
export const ClientTicketTable = ({dummydata}) => {
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
            {dummydata.length ? dummydata.map((data,indx)=>{
                return (
                    <tr key={indx+1}>
                        <td>{indx+1}</td>
                        <td>{data.subject}</td>
                        <td>{data.status}</td>
                        <td>{data.opendate}</td>
                    </tr>
                )
            }):
            <tr>
                <td colSpan={4}>No tickets !</td>
            </tr>
            }
            
        </tbody>
            
        
    </Table>
  )
}
