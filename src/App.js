import logo from './logo.svg';
import './App.css';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { DefaultLayout } from './layout/DefaultLayout';
import { ClientDashboard } from './pages/Dashboard/ClientDashboard';
import { ClientAddTicket } from './pages/ClientAddTicket/ClientAddTicket';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <ClientAddTicket></ClientAddTicket>
      </DefaultLayout>
    </div>
  );
}

export default App;
