import React from 'react';

 import NavBar  from "./components/Navbar"
 import ListItems from "./components/ListItems"
 import Check from "./components/Check"


 import {BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom"

  



function App() {
  return (
    

    <React.Fragment>

      <Router>
        <Switch>
          <Route exact path="/">
             <NavBar/>
              <ListItems/>
          </Route>
          <Route exact path="/check">
            <Check />
          </Route>

        </Switch>
      </Router>
     

    </React.Fragment>
    
   
  );
}

export default App;
