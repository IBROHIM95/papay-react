import {  Favorite, FavoriteBorder, RemoveRedEye } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Marginer from "../../components/marginer";
import { FreeMode, Navigation,  Thumbs } from 'swiper'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";




const restaurant_list = Array.from(Array(20).keys())
const chosen_list = Array.from(Array(3).keys())

export function ChosenDish () {
  const label ={inputProps : {'aria-label' : 'Checkbox demo'}}
  return <div className="chosen_dish_page" >
    <Container className="dish_container" >
      <Stack className="chosen_dish_slider" >
        <Swiper  
          className="dish_swiper"
          loop= {true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs, FreeMode]} >
          {chosen_list.map((ele)=> {
            const image_path = `/home/sandwish.png`;
            return (
              <SwiperSlide>
                <img  style={{width: '100%', height: '100%'}} src={image_path} alt="" />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Stack 
        className="swiper2"
        style={{width: '100%', display: 'flex'}}
        flexDirection={'row'}
        sx={{mt: '35px'}} >
          <Box className="prev_btn restaurant-prev" >
            <ArrowBackIosNewIcon
             sx={{fontSize: 40, cursor:'pointer'}} 
             style={{color : 'white'}} />
          </Box>
           <Swiper
              className={"restaurant_avatars_wrapper"}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={-10}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {restaurant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={"restaurant_avatars"}
                  >
                    <img alt="" src={"/home/sandwish.png"} />
                    <span>Burak</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          <Box className='next_btn restaurant-next'
           style= {{color:'white' }} sx={{cursor: 'pointer'}} >
            <ArrowForwardIosIcon
            sx={{fontSize: 40}}/>

          </Box>
        </Stack>
      </Stack>


      <Stack className="chosen_dish_info_container" >
        <Box className="chosen_dish_info_box" >
          <strong className="dish_txt" >Sweet Sandwich</strong>
          <span className="resto_name" >Kebab</span>
          <Box  className="rating_box" >
            <Rating sx={{ml:'30px'}} name="half-rating " defaultValue={3.5} precision={0.5} />
            <div className="evaulation_box" >
              <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '20px',
            }}
              >
                <Checkbox
                {...label}
                icon={<FavoriteBorder/>}
                checkedIcon= {<Favorite  style={{color: 'red'}} />}
                /*@ts-ignore*/
                checked={false}
                />

                <span>98 ta</span>
                
              </div>
              <div>
                  <RemoveRedEye sx={{mr: '5px', mt: '5px'}} />
                  
                </div><span>1000 ta</span>
            </div>
          </Box>
          <p style={{marginLeft: '30px',  height: '112px'}} className="dish_desc_info" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sequi aliquam delectus eveniet, incidunt eos!</p>
          <Marginer
          
          direction="horizontal"
          height="1"
          width="100%"
          bg="#000000"
          />
          <div className="dish_price_box" >
            <span style={{marginLeft:' 30px'}} >Narxi</span>
            <span style={{marginRight: '30px'}} >$11</span>
          </div>
          <div className="button_box" >
            <Button sx={{boxShadow: '0px 4px 90px rgba(16, 41, 234, 0.655)'}} variant="contained" >Savatga qo'shish</Button>
          </div>
        </Box>
      </Stack>
     
    </Container>
  </div>;
}