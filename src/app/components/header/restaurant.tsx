import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavbarRestaurant(props :any) {
    return <div className='format_restaurant home_navbar' > 
    <Container>
        <Stack className='navbar_config'  
        flexDirection={'row'}
        justifyContent={'space-between'} >
            <Box>
             <img src="/icons/Papay.svg" alt="" />
            </Box>
            <Stack 
            justifyContent={'space-evenly'}
            alignItems={'center'}
            className='navbar_links'
            flexDirection={'row'} >
            
            <Box className = 'hover-line' onClick = {props.setPath} >
                <NavLink to='/'  >
                   Bosh Sahifa
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/restaurant' activeClassName='underline' >
                   oshxona
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/orders' activeClassName='underline' >
                   Buyurtma
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/community' activeClassName='underline' >
                   Jamiyat
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/help' activeClassName='underline' >
                  Yordam
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/member-page' activeClassName='underline' >
                   Saxifam
                </NavLink>
            </Box>
            <Box className = 'hover-line'   >
               <IconButton
               aria-label = 'cart'
               id = 'basic-button'
               aria-controls = {undefined}
               aria-haspopup = 'true'
               aria-expanded = {undefined}

               >
                <Badge>
                  <img  src={'/icons/shopping.svg'} />
                </Badge>
               </IconButton>
            </Box>
            <Box>
                <Button
                variant='contained'
                style={{color: '#FFFFF', background: '#1976d2'}}>
                 KIRISH
                </Button>
            </Box>
            </Stack>
        </Stack>

        
    </Container>
     </div>
}