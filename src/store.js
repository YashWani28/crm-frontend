import {configureStore} from "@reduxjs/toolkit";

import ticketsreducer from './pages/ClientTicketListingPage/ticketSlice'

const store=configureStore({
    reducer:{
        tickets:ticketsreducer
    },
});

export default store;