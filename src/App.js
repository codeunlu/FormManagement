import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 
import {useState} from 'react';
import {ComplaintForm} from './components/ComplaintForm';
import Thanks from './components/Thanks';

function App() {
  const [appValue,setAppValue] = useState({});

  const changeDetails = (val) => {
    setAppValue(val);
  };
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Redirect to="/create-incident"></Redirect>
       </Route>
       <Route exact path="/create-incident">
         <ComplaintForm values={changeDetails}/>
       </Route>
       <Route path="/thank-you" >
         <Thanks details={appValue}/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
