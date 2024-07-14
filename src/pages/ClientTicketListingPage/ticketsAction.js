import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, filterTickets } from "./ticketSlice";
import { convert } from '../../utils/serverDateToJSDate';
import { getAllTickets } from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        const data = await getAllTickets();
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
