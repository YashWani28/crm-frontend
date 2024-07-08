import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, filterTickets } from "./ticketSlice";
import { convert } from '../../utils/serverDateToJSDate';

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const response = await fetch('http://localhost:3001/v1/tickets/alltickets', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoieWFzaG5pdGlud2FuaUBnbWFpbC5jb20ifSwiaWF0IjoxNzIwNDMyNTQ4LCJleHAiOjE3MjA0MzYxNDh9.8YVE9zcz3VUDwnFdb0LB54WsOIJouRQeXLZRxFA6EJI',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        dispatch(fetchTicketSuccess(data));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }
};

export const applyFilters = (searchStr, statusDate) => (dispatch, getState) => {
    const { tickets } = getState().tickets;
    console.log(statusDate.date);
    const filteredTickets = tickets.filter(ticket => {
        let matchesSearch = ticket.issue.toLowerCase().includes(searchStr.toLowerCase());
        let matchesStatus = statusDate.status === 'All' || ticket.status === statusDate.status;
        let matchesDate = !statusDate.date || convert(ticket.openAt) === statusDate.date;
        return matchesSearch && matchesStatus && matchesDate;
    });
    dispatch(filterTickets(filteredTickets));
};
