import { Container, Stack, Box, Typography,Button } from '@mui/material';
import React from 'react';
import { RippleBadge } from './MaterialTheme/styled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './components/users';
import Dishes from './components/Dishes';


function App() {
  return (
    
   <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/dishes">
            <Dishes/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Container>
              <Home />
            </Container>
            
          </Route>
        </Switch>
      </div>
    </Router>
    
  
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}



