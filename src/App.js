import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import {Notfound} from './pages/NotFoundPage404/Notfound';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { ClientDashboard } from './pages/Dashboard/ClientDashboard';
import { ClientAddTicket } from './pages/ClientAddTicket/ClientAddTicket';
import { ClientTicketListing } from './pages/ClientTicketListingPage/ClientTicketListing';
import { ClientTicketPage } from './pages/ClientTicketPages/ClientTicketPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<ClientLogin />} />
        
          <Route path="dashboard" element={<PrivateRoute><ClientDashboard /></PrivateRoute>} />
          <Route path="addticket" element={<PrivateRoute><ClientAddTicket /></PrivateRoute>} />
          <Route path="ticketlists" element={<PrivateRoute><ClientTicketListing /></PrivateRoute>} />
          <Route path="ticket/:Tid" element={<PrivateRoute><ClientTicketPage /></PrivateRoute>} />
          <Route path="*" Component={Notfound}></Route>  
          



        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
