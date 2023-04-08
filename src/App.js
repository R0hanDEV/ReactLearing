
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './home/login';
import Logout from './home/logout';
import UseStateExample from './modules/hooks/useStated/useState';
import UseStateinterview from './modules/interview/Hooks/useStateinterview';
import UseEffectExample from './modules/hooks/useEffect/useEffectExample';

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
        <Route path='interview/usestate' Component={UseStateinterview}></Route>
        <Route path='useEffect' Component={UseEffectExample}></Route>
        {/* <Route path='interview/usestate' Component={UseStateinterview}></Route> */}
      </Routes>
    </Router>

  );
}

export default App;
