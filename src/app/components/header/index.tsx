import { Container, Stack, Box,Button, IconButton,Badge } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


export function NavbarHome(props: any) {
    return <div className='format home_navbar' > 
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
                <NavLink to='/' activeClassName='underline' >
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
                <NavLink to='/member-page' activeClassName='underline' >
                   Saxifam
                </NavLink>
            </Box>
            <Box className = 'hover-line' onClick = {props.setPath}  >
                <NavLink to='/help' activeClassName='underline' >
                  Yordam
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

        <Stack className='head_information' >
            <Stack
            flexDirection={'column'}
            style={{marginTop: '86px', marginLeft: '24px'}}
            >
              <Box>
                <img src="/icons/Welcome.svg" alt="" />
              </Box>
              <Box className= 'define_retaurant' >
                The authentic restaurant & cafe</Box>
              <Box className= 'timeline_service'>
                24 soat xizmatizdamiz
              </Box>
              <Box sx={{mt: '90px'}} >
                 <Button
                 variant='contained'
                 style={{
                    width: '210px',
                    height: '60px',
                    background: '#1976d2',
                    color: '#FFFFFF'
                 }}>
                    RO'YHATTAN O'TISH
                 </Button>
              </Box>
            </Stack>
            <Box className='big_img' >
                
            </Box>
              
            
        </Stack>
    </Container>
    
     </div>
}