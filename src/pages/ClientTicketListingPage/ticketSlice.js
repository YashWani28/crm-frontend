import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    isLoading: false,
    error: '',
    filteredTickets: [],
    selectedTicket:{}
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
        },
        resetTicketState:(state)=>{
            state.tickets= initialState.tickets
            state.isLoading= initialState.isLoading
            state.error= initialState.error
            state.filteredTickets= initialState.filteredTickets
        },
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true;
            state.selectedTicket={};
        },
        fetchSingleTicketSuccess: (state, action) => {
            state.selectedTicket = action.payload;
            state.isLoading = false;
            state.error = "";

        },
        fetchSingleTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        UpdateTicketLoading: (state) => {
            state.isLoading = true;
            
        },
        UpdateTicketSuccess: (state) => {
           
            state.isLoading = false;
            state.error = "";

        },
        UpdateTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        CloseTicketLoading: (state) => {
            state.isLoading = true;
            
        },
        CloseTicketSuccess: (state) => {
           
            state.isLoading = false;
            state.error = "";

        },
        CloseTicketFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
        

    }
});

const { reducer, actions } = ticketListSlice;
export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, filterTickets,resetTicketState,fetchSingleTicketLoading, fetchSingleTicketSuccess, fetchSingleTicketFail,UpdateTicketLoading,UpdateTicketFail,UpdateTicketSuccess,CloseTicketFail,CloseTicketSuccess,CloseTicketLoading} = actions;
export default reducer;
