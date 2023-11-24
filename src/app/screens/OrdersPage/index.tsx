import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Box, Container,Stack } from "@mui/material";
import React, { useState } from 'react';
import PausedOrders from "../../components/orders/paused";
import ProccesOrders from "../../components/orders/procces";
import FinishidOrders from "../../components/orders/finished";
import '../../css/order.css'
import {  LocationOnOutlined,  } from '@mui/icons-material';
import Marginer from '../../components/marginer';





export function OrdersPage() {
    const [value, setValue]= useState('1');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue)
    }
    return (
        <div className="order_page" >
        <Container
        maxWidth= 'lg'
        style={{display: 'flex', flexDirection: 'row'}}
        sx={{mt: '50px', mb:'50px'}}>
          <Stack className= 'order_left'  >
           <TabContext value={value}>
            <Box className= 'order_nav_frame' >
                <Box sx={{borderBottom:1, borderColor: 'divider'}} >
                  <TabList
                  onChange={handleChange} aria-label="lab API tabs example"
                  style= {{display: 'flex', justifyContent: 'space-between'}}
                  >
                    <Tab label=" Buyurtmalar " value='1' />
                    <Tab label="Jarayonlar" value='2' />
                    <Tab label="Yakunlangan" value='3' />
                </TabList>
                </Box>
            </Box>
            <Stack className='order_main_content' > 
              <PausedOrders/> 
              <ProccesOrders/>
              <FinishidOrders/> 
            </Stack>
        </TabContext>
        </Stack>

        <Stack  className='order_right'>
          <Box  className='order_right_1' >
            <img src="/home/papays.png" alt="" />
            <h1>Ali</h1>
            <p>Foydalanuvchi</p>
            <Marginer  direction="horizontal"  height="1" width="332" bg="#5352516f" />
            <Box sx={{ display: 'flex' ,flexDirection:'row'}} className='order_right_1_location' >
              <LocationOnOutlined  sx={{marginBottom: '8px'}} />
              <p style={{marginLeft:'20px', fontSize: '18px'}} >Seoul  </p>
            </Box>
          </Box>
          <Stack className='order_right_2'> 
            <Box> <input type="text" placeholder='card number' /> </Box>
            <Box sx={{ paddingLeft:'5px' ,mr: '4px', display:'flex', flexDirection:'row', justifyContent:'space-around', width: '350px'}} > 
              <input style={{width:'160px'}} type="text" placeholder='date' />
              <input style={{width:'160px'}} type="text" placeholder='CCV' />
            </Box>
            <Box> <input type="text" placeholder='name' /> </Box>
            <Box className='order_right_img'   > 
              <img src="/home/Brands.png" alt="" />
              <img src="/home/Shape2.png" alt="" />
            </Box>
            
            </Stack>

         
        </Stack>
        </Container>
        </div>
        
    )
}