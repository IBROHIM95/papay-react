import { TabContext, TabPanel,TabList } from '@mui/lab'
import { Box, Button, Container, Pagination, PaginationItem, Stack, Tab } from '@mui/material'
import React,{useState} from 'react'
import { MemberPosts } from './memberPosts'
import { ArrowBack, ArrowBackIos, ArrowForwardIos, FacebookOutlined, Instagram, SettingsOutlined, Telegram, YouTube } from '@mui/icons-material'
import { MemberFollowers } from './memberFollowers'
import { MemberFollowing } from './memberFollowing'
import { MySettings } from './mysettings'



export default function VisitMyPage(props:any) {
    const [value,setValue] =React.useState('1')

    const handleChange = (event:any, newValue: string)=>{
        setValue(newValue)
    }
    return(
        <div className='my_page' >
        <Container maxWidth= "lg"sx={{mt: '50px', mb: '50px'}} >
         <Stack className='my_page_frame' >
            <TabContext value={value}>
                <Stack className='my_page_left' >
                    <Box display={'flex'} flexDirection={'column'} >
                      <TabPanel value={'1'}>
                        <Box className= 'menu_name' >mening maqolalarim</Box>
                        <Box className= 'menu_content' >
                            <MemberPosts/>
                            <Stack 
                            sx={{my:'40px'}}
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            >
                                <Box className='bottom_box' >
                                    <Pagination
                                    count={3}
                                    page={1}
                                    renderItem={(item)=> (
                                       <PaginationItem
                                       components={{
                                        previous: ArrowBackIos,
                                        next: ArrowForwardIos,
                                       }}
                                       {...item}
                                       color='secondary'
                                       /> 
                                    )}
                                    />
                                </Box>
                            </Stack>
                        </Box>
                      </TabPanel>
                      <TabPanel value='2' >
                        <Box className= 'menu_name' >Followers</Box>
                        <Box className= 'menu_contact' >
                            <MemberFollowers action_enabled={true} />
                        </Box>
                      </TabPanel>

                      <TabPanel value='3' >
                        <Box className= 'menu_name' >Following</Box>
                        <Box className= 'menu_contact' >
                            <MemberFollowing action_enabled={true} />
                        </Box>
                      </TabPanel>

                      <TabPanel value='4' >
                        <Box className= 'menu_name' >maqola yozish</Box>
                        <Box className= 'menu_contact' >
                        </Box>
                      </TabPanel>

                      <TabPanel value='5' >
                        <Box className= 'menu_name' >Tanlangan maqola</Box>
                        <Box className= 'menu_contact' >
                        </Box>
                      </TabPanel>
                      <TabPanel value='6' >
                        <Box className= 'menu_name' >Malumolarni o'zgartirish</Box>
                        <Box sx={{ml:'200px', mr:'200px'}} className= 'menu_contact' >
                            <MySettings  />
                        </Box>
                      </TabPanel>
                    </Box>
                </Stack>
                <Stack className='my_page_right' >
                    <Tab/>
                   
                    <Box className='order_info_box' >
                     {/* <a href=''  onClick={() => setValue('6')} className='setting_btn'  >
                       
                    </a>  */}
                     <Tab
                       style={{flexDirection:'column', marginLeft:'100px'}}
                       
                       value={'6'}
                       component= {() => (

                     <Button className='setting_btn'
                        variant='contained' 
                        onClick={() => setValue('6')}>
                           <SettingsOutlined/>
                        </Button>
                       ) }/>
                    <Box 
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    >
                     <div className='order_user_img' >
                        <img src="/home/papays.png" alt=""
                        className='order_user_avatar' />
                     </div>  
                     
                     <span className='order_user_name' >Ali</span>
                     <span className='order_user_prof' >USER</span>
                    </Box>  
                    <Box>
                        <FacebookOutlined/>
                        <Instagram/>
                        <Telegram/>
                        <YouTube/>
                    </Box>
                    <Box className="user_media_box" >
                        <p className='follows' >Followers: 3</p>
                        <p className='follows' >Followings: 2</p>
                    </Box>
                    <p className='user_desc' >qoshimcha malumot kiritilmagan</p>
                    <Box
                    display={'flex'}
                    justifyContent={'flex-end'}
                    sx={{mt:'10px'}}>
                     <TabList
                     onChange={handleChange}
                     aria-label= 'lab API tabs example'>
                       <Tab
                       style={{flexDirection:'column'}}
                       value={'4'}
                       component= {() => (
                        <Button 
                        variant='contained' 
                        onClick={() => setValue('4')}>
                          Maqola yozish
                        </Button>
                       ) }/>

                         
                    </TabList>  
                    </Box>
                     </Box>

                     <Box className={"my_page_menu"}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"1"}
                    component={() => (
                      <div className={`menu_box ${value}`}>
                        <img src="/icons/pencil.svg" alt="" />
                        <span>Maqolalarim</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                        <div className={`menu_box ${value}`}>
                            <img src="/icons/group.svg" alt="" />
                            <span>Follower</span>
                        </div>
                    )}
                  />
                   <Tab
                    style={{ flexDirection: "column" }}
                    value={"6"}
                    component={() => (
                        <div className={`menu_box ${value}`}>
                            {/* <img src="/icons/user.svg" alt="" /> */}
                            <span>Following</span>
                        </div>
                    )}
                  />
                </TabList>
              </Box>
                </Stack>
            </TabContext>
         </Stack>
        </Container>
        </div>
    )
}