import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Chatui from './components/Chatui';
import Protected from './Protected';
import Updateuser from './components/Updateuser';

function App() {
  
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/chatui">
          {/* <Chatui /> */}
          <Protected Cmp={Chatui} />
        </Route>
        <Route path="/updateuser">
          {/* <Chatui /> */}
          <Protected Cmp={Updateuser} />
        </Route>
      </div>
    </Router>
  );
}



export default App;