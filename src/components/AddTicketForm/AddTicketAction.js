import {
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail,
  } from "./AddTicketSlicer";
  import { openNewTicket } from "../../api/ticketApi";
  
  export const openNewTicketAction = (frmData) => (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch(openNewTicketPending());
        const result = await openNewTicket(frmData);
        if (result.status === "error") {
          return dispatch(openNewTicketFail(result.message));
        }
        dispatch(openNewTicketSuccess(result.message));
      } catch (error) {
        console.log(error);
        dispatch(openNewTicketFail(error.message));
      }
    });
  };
  