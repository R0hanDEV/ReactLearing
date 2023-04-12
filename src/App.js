
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './home/login';
import Logout from './home/logout';
import UseStateExample from './modules/hooks/useStated/useState';
import UseStateinterview from './modules/interview/Hooks/useStateinterview';
import UseEffectExample from './modules/hooks/useEffect/useEffectExample';
import Product from './modules/hooks/useContext.js/Product/product';
import Cart from './modules/hooks/useContext.js/Product/cart';
import CreateContext from './modules/hooks/useContext.js/CreateContext';

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
        <Route path='/product' exact element={<CreateContext><Product /></CreateContext>} />
        <Route path='/cart' exact element={<CreateContext><Cart /></CreateContext>} />
      </Routes>
    </Router>
  );
}

export default App;
