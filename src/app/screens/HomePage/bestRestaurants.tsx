import {  Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import CallIcon from '@mui/icons-material/Call'

import { Card,
     CardOverflow,
      CssVarsProvider, 
      IconButton, Link, 
      Typography,AspectRatio
     } from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";


export function BestRestaurant() {
    return (
        <div className="best_restaurant_frame" >
            <img src='/icons/Group.svg' alt="" 
            style={{position: 'absolute', left: '6%',  }}
            />
            <Container sx={{paddingTop:'153px'}}  >
               <Stack flexDirection={'column'} alignItems={'center'} >
                <Box color={'#e3c08d'} > Zo'r Restaranlar </Box>
                <Stack sx={{mt: '43px', flexDirection:'row'}} >
               <CssVarsProvider>
               <Card
               variant="outlined"
               sx={{minHeight: 483, minWidth:320, mr: '35px'}}>
                 <CardOverflow>
                    <AspectRatio>
                     <img src={'restaurant/Monitor.jpg'} alt="" />
                    </AspectRatio>
                    <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="neutral"
                sx={{
                    position: 'absolute',
                    zIndex: '2',
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 3,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                 </CardOverflow>
                 <Typography level="h2" sx={{fontSize: 'md', mt: 2
                }}>
                  Turkish kebab
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<LocationOnRoundedIcon/>}
                  textColor='neutral.700'
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<CallIcon/>}
                  textColor='neutral.700'
                  >
                    +998 952443104
                  </Link>
                </Typography>
                <CardOverflow variant="soft"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
                borderColor: 'neutral.outlineBorder',
                bgcolor: 'background.level1',
              }}
              >

                

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      
                    }}
                  >
                    100{""}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.700",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
               </Card>
               <Card
               variant="outlined"
               sx={{minHeight: 483, minWidth:320, mr: '35px'}}>
                 <CardOverflow>
                    <AspectRatio>
                     <img src={'restaurant/Monitor.jpg'} alt="" />
                    </AspectRatio>
                    <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="neutral"
                sx={{
                    position: 'absolute',
                    zIndex: '2',
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 3,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                 </CardOverflow>
                 <Typography level="h2" sx={{fontSize: 'md', mt: 2
                }}>
                  Turkish kebab
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<LocationOnRoundedIcon/>}
                  textColor='neutral.700'
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<CallIcon/>}
                  textColor='neutral.700'
                  >
                    +998 952443104
                  </Link>
                </Typography>
                <CardOverflow variant="soft"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
                borderColor: 'neutral.outlineBorder',
                bgcolor: 'background.level1',
              }}
              >

                

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      
                    }}
                  >
                    100{""}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.700",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
               </Card>
               <Card
               variant="outlined"
               sx={{minHeight: 483, minWidth:320, mr: '35px'}}>
                 <CardOverflow>
                    <AspectRatio>
                     <img src={'restaurant/Monitor.jpg'} alt="" />
                    </AspectRatio>
                    <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="neutral"
                sx={{
                    position: 'absolute',
                    zIndex: '2',
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 3,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                 </CardOverflow>
                 <Typography level="h2" sx={{fontSize: 'md', mt: 2
                }}>
                  Turkish kebab
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<LocationOnRoundedIcon/>}
                  textColor='neutral.700'
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<CallIcon/>}
                  textColor='neutral.700'
                  >
                    +998 952443104
                  </Link>
                </Typography>
                <CardOverflow variant="soft"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
                borderColor: 'neutral.outlineBorder',
                bgcolor: 'background.level1',
              }}
              >

                

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      
                    }}
                  >
                    100{""}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.700",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
               </Card>
               <Card
               variant="outlined"
               sx={{minHeight: 483, minWidth:320, mr: '35px'}}>
                 <CardOverflow>
                    <AspectRatio>
                     <img src={'restaurant/Monitor.jpg'} alt="" />
                    </AspectRatio>
                    <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="neutral"
                sx={{
                    position: 'absolute',
                    zIndex: '2',
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 3,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                 </CardOverflow>
                 <Typography level="h2" sx={{fontSize: 'md', mt: 2
                }}>
                  Turkish kebab
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<LocationOnRoundedIcon/>}
                  textColor='neutral.700'
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{mt : 0.5, mb:2}} >
                  <Link 
                  href =''
                  startDecorator= {<CallIcon/>}
                  textColor='neutral.700'
                  >
                    +998 952443104
                  </Link>
                </Typography>
                <CardOverflow variant="soft"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
                borderColor: 'neutral.outlineBorder',
                bgcolor: 'background.level1',
              }}
              >

                

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      
                    }}
                  >
                    100{""}
                    <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.700",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
               </Card>
               </CssVarsProvider>
               </Stack>
               <Stack
               flexDirection={'row'}
               justifyContent={'flex-end'}
               style={{width:'100%', marginTop:'16px'}}
               >
               <Button style={{background: '#1976d2', color:'#FFFF'}} >
                Barchasini ko'rish
               </Button  >
               </Stack>
               </Stack>
            </Container>
        </div>
    )
}