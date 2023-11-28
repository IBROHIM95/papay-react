import { CloudDownloadOutlined } from '@mui/icons-material'

import { Box, Button, Stack } from '@mui/material'
import React from 'react'


export function MySettings() {
    return(
        <Stack className= 'my_settings_page' >
         <Box>
            <img
            className='mb_img'
            style={{borderRadius: '50%'}}
            width={'100px'}
            height={'100px'} 
            src="/home/papays.png" alt="" />
            <div className='media_change_box' >
              <span>Rasm Yuklash</span>
              <p>JPG, JPEG, PNG rasmlarni yuklay olasiz</p>
              <div>
                <Button component= 'label' style={{minWidth:'0'}} >
                    <CloudDownloadOutlined/>
                    <input type="file" hidden />
                </Button>
              </div>
            </div>
        </Box>  
        <Box className='input_frame'>
            <div className='long_input' >
                <label className='spec_label' htmlFor="">Ism</label>
                <input type="text"
                className='spec_input mb_nick'
                placeholder='Ali'
                name='mb_nick' />
            </div>
        </Box>
        <Box className='input_frame' >
          <div className='short_input' >
            <label htmlFor="" className="spec_label">Telefon raqam</label>
            <input type="text" className="spec_input mb_phone "
            name='mb_phone'
            placeholder='123123 123' />
          </div>
          <div className="short_input">
            <label htmlFor="" className="spec_label">Manzil</label>
            <input type="text" className="spec_input  mb_address"
            placeholder='termez ibn sino 12' 
            name='mb_address'/>
          </div>
        </Box>
        <Box className='input_frame'>
          <div className="long_input">
            <label htmlFor="" className="spec_label">Malumot</label>
            <textarea name="mb_description" id="" 
            placeholder='mavjud emas'
            className='spec_textarea mb_description'/>
          </div>
        </Box>
        <Box display={'flex'} justifyContent={'flex-end'} sx={{mt:'25px'}} >
            <Button variant='contained' >Saqlash</Button>
        </Box>
        </Stack>
    )
}