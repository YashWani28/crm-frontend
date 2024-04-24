import logo from './logo.svg';
import './App.css';
import { ClientLogin } from './pages/ClientLogin/ClientLogin';
import { DefaultLayout } from './layout/DefaultLayout';
import { ClientDashboard } from './pages/Dashboard/ClientDashboard';
function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <ClientDashboard></ClientDashboard>
      </DefaultLayout>
    </div>
  );
}

export default App;
