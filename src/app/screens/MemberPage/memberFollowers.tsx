import { Avatar, Box, Button, Stack } from '@mui/material';
import React from 'react'

const followers = [
    {mb_nick: 'botir', following: true},
    {mb_nick: 'botir', following: true},
    {mb_nick: 'botir', following: true},
];

export function MemberFollowers(props:any) {
    return(
        <Stack>
            {followers.map((follower)=> {
                const image_url = 'home/papays.png'
                return(
                    <Box className= 'follow_box' > 
                        <Avatar alt='' src={image_url} sx={{width:89, height:89}} />
                        <div
                        style={{
                            width: "400px",
                            display: 'flex',
                            flexDirection:'column',
                            marginLeft:'25px',
                            height:'85%',
                        }}>
                          <span className='usename_text' >USER</span>
                          <span className='name_text' >{follower.mb_nick}</span>
                        </div>
                        {props.actions_enabled && 
                        (follower.following ? (
                            <Button 
                            variant='contained'
                            className='following_already'
                            disabled >
                                Following
                            </Button>
                        )  : (
                            <Button
                            variant='contained'
                            startIcon={
                                <img
                                alt=''
                                src='/icons/follow_icon.svg'
                                style={{width:'40px'}}
                                />
                            }
                            className='follow_btn'
                            >Follow Back</Button>
                        ))}
                    </Box>
                )
            })}
        </Stack>
    )
}