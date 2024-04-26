import logo from './logo.svg';
import './App.css';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { DefaultLayout } from './layout/DefaultLayout';
import { ClientDashboard } from './pages/Dashboard/ClientDashboard';
import { ClientAddTicket } from './pages/ClientAddTicket/ClientAddTicket';
import { ClientTicketListing } from './pages/ClientTicketListingPage/ClientTicketListing';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <ClientTicketListing></ClientTicketListing>
      </DefaultLayout>
    </div>
  );
}

export default App;
