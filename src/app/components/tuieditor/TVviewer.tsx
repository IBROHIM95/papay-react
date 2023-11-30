import { Box, Stack } from '@mui/material';
import { Viewer } from '@toast-ui/react-editor';
import React,{useEffect, useRef, useState} from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';




const TVviewer = (props:any) => {
    const editorRef = useRef();


    return (
        <Stack  sx={{background: 'white', mt: '30px', borderRadius:'10px'}} >
          <Box sx={{m: '40px'}} >
            <Viewer 
            // ref={editorRef}
            initialValue={props.text}
             />
          </Box>
        </Stack>
    )
}

export default TVviewer