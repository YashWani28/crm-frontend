import {configureStore} from "@reduxjs/toolkit";

import ticketsreducer from './pages/ClientTicketListingPage/ticketSlice'
import loginreducer from './components/ClientLoginForm/clientLoginSlice';
import userreducer from './pages/Dashboard/userSlice';
import addticketreducer from './components/AddTicketForm/AddTicketSlicer';

const store=configureStore({
    reducer:{
        tickets:ticketsreducer,
        login:loginreducer,
        user:userreducer,
        openTicket:addticketreducer,

    },
}); 

export default store;