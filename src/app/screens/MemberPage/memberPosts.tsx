import { CheckBox, Favorite, FavoriteBorder, RemoveRedEye } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import moment from 'moment'
import React,{ChangeEvent, useRef, useState} from 'react'

export function MemberPosts(props:any) {
    return (
      <Box className='post_content' >
        {['1', '2', '3', ].map((article)=> {
            return (
                <Stack className='all_article_box' sx={{cursor:'pointer'}} >
                    <Box
                    className= 'all_article_img'
                    sx={{ backgroundImage: `url('/home/papays.png')` }}>
                    </Box>
                    <Box sx={{ml:'20px'}} >
                        <Box className='' display={'flex'} flexDirection={'row'}>
                        <img src="/home/papays.png" width={'35px'} 
                        alt=""
                        style={{borderRadius:'50%', backgroundSize:'cover'}} />
                        <span className='all_article_author_user' > Ali</span>
                       
                    </Box>
                    <Box display={'flex'}
                    flexDirection={'column'}
                    sx={{mt:'15px'}} >
                     <span className='all_article_title' >
                        Restoranlarga baho</span>
                        <p className='all_article_desc' >Burak ajoyib restaurant</p>
                    </Box>
                    </Box>
                    
                    <Box>
                        <Box className='article_share'
                        style={{width: '100%', height:'auto'}}
                        sx={{mb:'10px'}}>
                         <Box  
                         className='article_share_main'
                         style={{
                            color:'#fff',
                            marginLeft:'150px',
                            display: 'flex',
                            alignItems : 'center',
                         }}>
                           <span>{moment().format('YY-MM-HH:mm')}</span>
                           {/* <CheckBox
                           
                           sx={{ml: '40px'}}
                           icon={<FavoriteBorder/>} 
                           checkedIcon={<Favorite style={{color: 'red'}} />}
                           ckecked={false} /> */}

                           <span style={{marginRight:'18px'}} >100</span>
                           <RemoveRedEye/>
                           <span style={{marginRight:'18px'}} >1000</span>
                         </Box>
                        </Box>
                    </Box>
                </Stack>
            )
        })}
      </Box>
    )
}