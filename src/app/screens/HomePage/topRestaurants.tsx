import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopRestaurant() {
    return (
        <div className="top_restaurant_frame" >
 <Container   >
     <Stack
      flexDirection={'column'}
      alignItems={'center'}
      sx={{mt: '45px'}}
      >
         <Box className="category_title" >
             TOP Restaurantlar
         </Box>
         <Stack sx={{mt: '43px', display: 'flex', flexDirection: 'row' }} flexDirection={'row'} m={'16px'} >
             <CssVarsProvider>
            <Card 
              sx={{ 
                minHeight: '430px', 
                minWidth: '325px', 
                mr : '35px', 
                cursor:'pointer' }}>
             <CardCover>
                <img
                  src="/restaurant/Monitor.jpg"
                  alt=""
                  loading="lazy"
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Turkish kebab
                </Typography>
                <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                  Seoul. Itaewon
                </Typography>
              </CardContent>
              <CardOverflow
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
              }}
              >

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
                    bottom: 45,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: 'row'
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
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
            </Card>
            <Card 
              sx={{ 
                minHeight: '430px', 
                minWidth: '325px', 
                mr : '35px', 
                cursor:'pointer' }}>
             <CardCover>
                <img
                  src="/restaurant/Monitor.jpg"
                  alt=""
                  loading="lazy"
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Turkish kebab
                </Typography>
                <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                  Seoul. Itaewon
                </Typography>
              </CardContent>
              <CardOverflow
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
              }}
              >

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
                    bottom: 45,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                  <Favorite  style={{fill: 'white'}} />
                </IconButton>

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: 'row'
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
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
            </Card>
            <Card 
              sx={{ 
                minHeight: '430px', 
                minWidth: '325px', 
                mr : '35px', 
                cursor:'pointer' }}>
             <CardCover>
                <img
                  src="/restaurant/Monitor.jpg"
                  alt=""
                  loading="lazy"
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Turkish kebab
                </Typography>
                <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                  Seoul. Itaewon
                </Typography>
              </CardContent>
              <CardOverflow
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
              }}
              >

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
                    bottom: 45,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                 <Favorite  style={{fill: 'white'}} />
                </IconButton>

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: 'row'
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
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
            </Card>
            <Card 
              sx={{ 
                minHeight: '430px', 
                minWidth: '325px', 
                mr : '35px', 
                cursor:'pointer' }}>
             <CardCover>
                <img
                  src="/restaurant/Monitor.jpg"
                  alt=""
                  loading="lazy"
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  Turkish kebab
                </Typography>
                <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                  Seoul. Itaewon
                </Typography>
              </CardContent>
              <CardOverflow
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1.5,
                py : 1.5,
                px: 'var(--Card-padding)',
                borderTop: '1px solid',
              }}
              >

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
                    bottom: 45,
                    transform: 'translateY(50%)',
                    color: 'rgba(0,0,0,4)'
                }}
                >
                 <Favorite  style={{fill: 'white'}} />
                </IconButton>

                <Typography
                    level="body-sm"
                    sx={{
                      fontweight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: 'row'
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
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

              </CardOverflow>
            </Card>
                        </CssVarsProvider>
                    
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}