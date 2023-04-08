
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './home/login';
import Logout from './home/logout';
import UseStateExample from './modules/hooks/useStated/useState';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login}>
        </Route>
        <Route path='/login' Component={Login}>
        </Route>
        <Route path='/logout' Component={Logout}>
        </Route>
        <Route path='usestate' Component={UseStateExample}></Route>
      </Routes>
    </Router>

  );
}

export default App;
