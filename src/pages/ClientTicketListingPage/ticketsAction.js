import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, filterTickets,fetchSingleTicketFail,fetchSingleTicketSuccess,fetchSingleTicketLoading,UpdateTicketFail,UpdateTicketLoading,UpdateTicketSuccess,CloseTicketFail,CloseTicketLoading,CloseTicketSuccess } from "./ticketSlice";
import { convert } from '../../utils/serverDateToJSDate';
import { getAllTickets,getSingleTicket,updateTicketMessage,closeTicket } from "../../api/ticketApi";

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

export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try{
        const result=await getSingleTicket(_id);
        dispatch(fetchSingleTicketSuccess(result));
    }
    catch(error){
        alert(error.message);
        dispatch(fetchSingleTicketFail(error.message));

    }
};

export const updateTicketMessageAction = (_id,sentby,message) => async(dispatch) =>{
    dispatch(UpdateTicketLoading());
    try{
        const result=await updateTicketMessage(_id,sentby,message);
        dispatch(UpdateTicketSuccess());
    }
    catch(error)
    {
        dispatch(UpdateTicketFail(error.message));
    }
}

export const closeTicketAction = (_id) => async(dispatch) =>{
    dispatch(CloseTicketLoading());
    try{
        const result=await closeTicket(_id);
        dispatch(CloseTicketSuccess());
        dispatch(fetchSingleTicket(_id));
    }
    catch(error)
    {
        dispatch(CloseTicketFail(error.message));
    }
}
