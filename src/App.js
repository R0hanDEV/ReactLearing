
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
import UseReducerExample from './modules/hooks/useReducer/useReducerExample';
import UseCallBackExample from './modules/hooks/useCallback/useCallBackExample';
import UseMemoexample from './modules/hooks/useMemo/useMemoexample';

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
        <Route sensitive={false} path='usestate' Component={UseStateExample}></Route>
        <Route sensitive={false} path='interview/usestate' Component={UseStateinterview}></Route>
        <Route sensitive={false} path='useeffect' Component={UseEffectExample}></Route>
        <Route sensitive={false} path='usereducer' Component={UseReducerExample}></Route>
        <Route sensitive={false} path='usecallback' Component={UseCallBackExample}></Route>
        <Route sensitive={false} path='usememo' Component={UseMemoexample}></Route>
        <Route sensitive={false} path='/product' exact element={<CreateContext><Product /></CreateContext>} />
        <Route sensitive={false} path='/cart' exact element={<CreateContext><Cart /></CreateContext>} />
      </Routes>
    </Router>
  );
}

export default App;
