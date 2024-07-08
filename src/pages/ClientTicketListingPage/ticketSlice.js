import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    filteredTickets: [],
}

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        fetchTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state, action) => {
            state.tickets = action.payload;
            state.filteredTickets = action.payload;
            state.isLoading = false;
        },
        fetchTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        filterTickets: (state, action) => {
            state.filteredTickets = action.payload;
        }
    }
});

const { reducer, actions } = ticketListSlice;
export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, filterTickets } = actions;
export default reducer;
