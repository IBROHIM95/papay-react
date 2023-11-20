import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import { url } from "inspector";
import React from "react";


export function BestDishes() {
    return (
        <div className="best_dishes_frame" >
            <Container   >
                <Stack flexDirection={'column'} alignItems={'center'} >
                    <Box color={'#e3c08d'}>Trendagi ovqatlar</Box>
                    <Stack sx={{mt: '43px'}} flexDirection={'row'}  >
                       <Box className="dish_box"  >
                        <Stack className="dish_img" 
                        sx={{backgroundImage: `url('/restaurant/Monitor.jpg')`}} >
                         <div className={'dish_sale'} >normal size</div>
                         <div className='view_btn' >
                            Batafsil ko'rish
                            <img src={'icons/Arrow.svg'} alt="" 
                            style={{marginLeft: '9px'}}/>
                         </div>
                        </Stack>
                        <Stack className="dish_desc" >
                          <span className="dish_title_text" >Chicken Mayo</span>
                          <span className="dish_desc_text" >
                            <MonetizationOn/>
                                11
                          </span>
                        </Stack>
                       </Box>
                       <Box className="dish_box"  >
                        <Stack className="dish_img" 
                        sx={{backgroundImage: `url('/restaurant/Monitor.jpg')`}} >
                         <div className={'dish_sale'} >normal size</div>
                         <div className='view_btn' >
                            Batafsil ko'rish
                            <img src={'icons/Arrow.svg'} alt="" 
                            style={{marginLeft: '9px'}}/>
                         </div>
                        </Stack>
                        <Stack className="dish_desc" >
                          <span className="dish_title_text" >Chicken Mayo</span>
                          <span className="dish_desc_text" >
                            <MonetizationOn/>
                                11
                          </span>
                        </Stack>
                       </Box>
                       <Box className="dish_box"  >
                        <Stack className="dish_img" 
                        sx={{backgroundImage: `url('/restaurant/Monitor.jpg')`}} >
                         <div className={'dish_sale'} >normal size</div>
                         <div className='view_btn' >
                            Batafsil ko'rish
                            <img src={'icons/Arrow.svg'} alt="" 
                            style={{marginLeft: '9px'}}/>
                         </div>
                        </Stack>
                        <Stack className="dish_desc" >
                          <span className="dish_title_text" >Chicken Mayo</span>
                          <span className="dish_desc_text" >
                            <MonetizationOn/>
                                11
                          </span>
                        </Stack>
                       </Box>
                       <Box className="dish_box"  >
                        <Stack className="dish_img" 
                        sx={{backgroundImage: `url('/restaurant/Monitor.jpg')`}} >
                         <div className={'dish_sale'} >normal size</div>
                         <div className='view_btn' >
                            Batafsil ko'rish
                            <img src={'icons/Arrow.svg'} alt="" 
                            style={{marginLeft: '9px'}}/>
                         </div>
                        </Stack>
                        <Stack className="dish_desc" >
                          <span className="dish_title_text" >Chicken Mayo</span>
                          <span className="dish_desc_text" >
                            <MonetizationOn/>
                                11
                          </span>
                        </Stack>
                       </Box>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}