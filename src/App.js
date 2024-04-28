import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        
          <Route path="dashboard" element={<DefaultLayout><ClientDashboard /></DefaultLayout>} />
          <Route path="addticket" element={<DefaultLayout><ClientAddTicket /></DefaultLayout>} />
          <Route path="ticketlists" element={<DefaultLayout><ClientTicketListing /></DefaultLayout>} />
          <Route path="ticket/:id" element={<DefaultLayout><ClientTicketPage /></DefaultLayout>} />
          <Route path="*" Component={Notfound}></Route>  
          



        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
