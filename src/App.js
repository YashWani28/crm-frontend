import logo from './logo.svg';
import './App.css';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { DefaultLayout } from './layout/DefaultLayout';
import { ClientDashboard } from './pages/Dashboard/ClientDashboard';
import { ClientAddTicket } from './pages/ClientAddTicket/ClientAddTicket';
import { ClientTicketListing } from './pages/ClientTicketListingPage/ClientTicketListing';
import { ClientTicketPage } from './pages/ClientTicketPages/ClientTicketPage';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <ClientTicketPage></ClientTicketPage>
      </DefaultLayout>
    </div>
  );
}

export default App;
