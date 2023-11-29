import { Avatar, Box, Button, Stack } from '@mui/material'
import React from 'react'

const following = [
    {mb_nick: 'ravshan'},
    {mb_nick: 'ulugbek'},
    {mb_nick: 'temur'},
]
export function MemberFollowing(props:any){
    return(
        <Stack>
          {following.map((following)=>{
            const image_url = 'home/papays';
            return(
                <Box className= 'follow_box' >
                 <Avatar alt='' src={image_url} sx={{width:89, height:89}} />
                 <div
                 style={{
                    width:'400px',
                    display:'flex',
                    flexDirection: 'column',
                    marginLeft:'25px',
                    height:'85%'

                 }}>
                   <span className='username_text' >USER</span>
                   <span className='name_text' >{following.mb_nick}</span>
                 </div>

                 {props.action_enabled && (
                    <Button
                    variant='contained'
                    startIcon= {
                        <img
                        src='/icons/follow_icon.svg'
                        alt=''
                        style={{width:'40px', marginLeft:'16px'}}
                         />
                    }
                    className='follow_cancel_btn'
                        > Bekor qilish
                    </Button>
                 )}

                
                </Box>
            )
          })}
        </Stack>
    )
}