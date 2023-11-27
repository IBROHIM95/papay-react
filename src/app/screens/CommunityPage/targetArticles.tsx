import { Favorite, RemoveRedEye, ViewArray, WatchRounded } from "@mui/icons-material";
import { Box, Link, Stack } from "@mui/material"
import React from "react"


export default function TargetArticles(props:any) {
    return (
       <Stack>
        {props.targetBoArticles?.map((article: any, index: string)=> {
            const art_image_url = '/communityimg/community1.png';
            return(
                <Link
                className= 'all_article_box'
                sx={{textDecoration: 'none'}}
                href= {``}>
                 <Box className= 'all_article_img ' sx={{backgroundImage: `url(${art_image_url})`}}>
                 </Box>
                 <Box className= 'all_article_container' >
                  <Box  alignItems={'center'} display={'flex'}
                    sx={{ml:' 10px', mt: '20px', gap:'10px'}}  >
                    <img 
                    src="/home/papays.png" alt="" 
                    width={'35px'}
                    style={{borderRadius: '50%', backgroundSize: 'cover'}}/>
                    <span style={{color: 'whiteSmoke'}}  className="all_article_author_user" >Ali</span>
                    
                  </Box><div style={{marginLeft:' 10px', marginTop:' 30px', fontFamily: 'Poppins', color: 'rgb(158, 158, 79)' }} >Lorem ipsum dolor sit.</div>
                  <Box  className= 'all_article_bottom'
                   >
                    <p style={{marginRight: '30px'}} >1995.06.22</p>
                    <Favorite/>
                    <p>1</p>
                    <RemoveRedEye/>
                    <p>100</p>
                  </Box>

                 </Box>
                </Link>
            )
        })}
       </Stack>
    )
}