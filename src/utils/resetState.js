import { useDispatch } from 'react-redux';
import { resetTicketState } from '../pages/ClientTicketListingPage/ticketSlice';
import { resetUserState } from '../pages/Dashboard/userSlice';
import { resetLoginState } from '../components/ClientLoginForm/clientLoginSlice';
import { resetSuccessMSg } from '../components/AddTicketForm/AddTicketSlicer';
export const useResetState = () => {
  const dispatch = useDispatch();
  
  const resetState = () => {
    dispatch(resetTicketState());
    dispatch(resetUserState());
    dispatch(resetLoginState());
    dispatch(resetSuccessMSg());

  };
  
  return resetState;
};