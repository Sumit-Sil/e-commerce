import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from './routing/Routing';

function App() {
  return (
    <div className="App">
    <Routing/>
    <ToastContainer/>
    </div>
  );
}

export default App;
