import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path= '/' component= {Home}></Route>
        <Route exact path= '/rooms' component = {Rooms} />
        <Route exact path = '/single-room' component = {SingleRoom}/>
        <Route component = {Error}/>
      </Switch>
    </>
  );
}

export default App;
