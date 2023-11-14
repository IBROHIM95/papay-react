import { Container, Stack, Box, Typography,Button } from '@mui/material';
import React, { useState } from 'react';
import { RippleBadge } from './MaterialTheme/styled';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import '../app/css/navbar.css'
import '../app/css/footer.css'
import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { MemberPage } from './screens/MemberPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarHome } from './components/header';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarOthers } from './components/header/others';
import { Footer } from './components/footer';


function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  
  

  return (
    
   <Router>
      
        {main_path == '/' ? (<NavbarHome  setPath = {setPath} />) :
          main_path.includes('/restaurant') ? (
            <NavbarRestaurant  setPath = {setPath} />
          )  : (<NavbarOthers setPath = {setPath} />
          )}     

        <Switch>
          <Route path="/restaurant">
            <RestaurantPage/>
          </Route>
          <Route path="/community">
            <CommunityPage/>
          </Route>
          <Route path="/orders">
            <OrdersPage/>
          </Route>
          <Route path="/member-page">
            <MemberPage/>
          </Route>
          <Route path="/help">
            <HelpPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
              <HomePage />
          </Route>
        </Switch>
       <Footer/>
    </Router>
    
  
  );
}

export default App;

// function HomePage() {
//   return <h2>HomePage</h2>;
// }



