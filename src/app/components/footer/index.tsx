import { Box, Container, Stack } from '@mui/material';
import React from 'react';

export function Footer() {
    return <div className='footer_config' >
 <Container>
    <Stack className='main_footer_container'
            flexDirection={'column'} >
        <Stack flexDirection={'row'} style={{height: '242px'}} >
            <Stack className='info' flexDirection={'column'}  >
                <Box  >  <img src="/icons/Papay2.svg" alt="" /> </Box>
                <Box className='main_text' > Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Commodi consequatur illum cum exercitationem natus, veritatis eos.
                </Box> 
                <Stack className='contact_links' >
                  <Box><img src={'/icons/facebook.svg'} /></Box>
                  <Box><img src={'/icons/instagram.svg'} /></Box>
                  <Box><img src={'/icons/twitter.svg'} /></Box>
                  <Box><img src={'/icons/youtube.svg'} /></Box>
                </Stack>
            </Stack>
            <Stack className='parts' >
                <Box className='part_subject'  >Bo'limlar</Box>
                <Box className='divider' > a</Box>
                <Box className='targets' >Bosh  Sahifa  Oshhonalar  Jamiyat  Yordam</Box>
            </Stack>
            <Stack className='find_us' >
              <Box  className='find' >Bizni Top</Box>
              <Box className='divider2' ></Box>
              <Stack className='details' sx={{mt:'19px'}} >
              <Box className='detail_first' >L.</Box>
              <Box className='detail_second' >Uzbekistan</Box>
              </Stack>
              <Stack className='details' sx={{mt:'42px'}} >
              <Box className='detail_first' >P.</Box>
              <Box className='detail_second' >+99895 244 32 04</Box>
              </Stack>
              <Stack className='details' sx={{mt:'9px'}} >
              <Box className='detail_first' >E.</Box>
              <Box className='detail_second' >Papays@restaurant.com</Box>
              </Stack>
            </Stack>
        </Stack>
            <Box className='liner' ></Box>
            <Box className='copyrights' >
                Copyright Papays 2022, All right reserved
            </Box>
           
    </Stack>
</Container>
    </div>
}