import { SendOutlined } from "@mui/icons-material"
import { Avatar, Box, Stack } from "@mui/material"
import React, {useState} from "react"


export default function CommunityChats() {
    const [messagesList, setMessagesList] = useState([])
    return (
        <Stack className="chat_frame" >
          <Box display={'flex'} justifyContent={'center'} className="chat_top" > Jonli Muloqot </Box>
          <Box className="chat_content" >
          <Stack className="chat_main" >
            <Box
            sx={{background:'#E4E4E4',
             borderRadius: '10px', width:' 250px'}}
            >
              <div style={{marginLeft:'5px'}} >Bu yer jonli muloqot</div>
            </Box>
            <Box
            sx={{background:'#D0ECE8', borderRadius:'10px' , marginLeft:'100px' ,marginTop:'10px', width:'200px'}}
            >
              <div style={{marginLeft:'5px'}} >Bu sizning habaringiz</div>
            </Box>
            <Box
             flexDirection={'row'}
             style = {{display: 'flex'}}
             sx={{m: '10px 0px'}}>
            <Avatar alt="martin" src="home/papays.png" />
            <div className="msg_left" >Bu yerda boshqalarni habari</div>
            </Box>
          </Stack>
          </Box>
          <Box className= 'chat_bott' >
            <input
            type="text"
            name="message"
            className="msg_input"
            placeholder="Xabar jo'natish"
            />
            <button className="send_msg_btn" >
                <SendOutlined sx={{border: 'none'}} />
            </button>
          </Box>
        </Stack>
    )
}