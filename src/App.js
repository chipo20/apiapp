import {Route,Switch }  from "react-router-dom"

import './App.css';
import User from "./component/User";
import UserProfile from './component/UserProfile';


function App() {
 
return (

  <div>
    <Switch>
<Route exact path="/" component={User} />
<Route exact path="/:id" component={UserProfile} />

    


</Switch>
  </div>
)
}
export default App;
