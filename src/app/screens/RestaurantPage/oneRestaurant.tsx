

import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Favorite, FavoriteBorder, MonetizationOn } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarIcon from "@mui/icons-material/Star";


const restaurant_list = Array.from(Array(20).keys())
const product_list = Array.from(Array(8).keys())

export function OneRestaurant() {
  return <div className={"single_restaurant"} >
    <Container>
      <Stack flexDirection={'column'} alignItems={'center'} >
        <Stack className="avatar_big_box" >
          <Box className="top_text" >
            <p>Kebab restaurant</p>
            <Box  className="single_search_big_box" >
              <form className="single_search_form"  action="" method="" >
                <input 
                type="search"
                className="single_searchInput"
                name="Single_resSearch"
                placeholder="Qidiruv" />
                <Button
                className="single_button_search"
                variant="contained"
                endIcon= {<SearchIcon/>}>
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>
        </Stack>

        <Stack 
        style={{width: '100%', display: 'flex'}}
        flexDirection={'row'}
        sx={{mt: '35px'}} >
          <Box className="prev_btn restaurant-prev" >
            <ArrowBackIosNewIcon
             sx={{fontSize: 40, cursor:'pointer'}} 
             style={{color : 'white'}} />
          </Box>
          {/* <Swiper
          className='restaurant_avatars_wrapper'
          slidesPerView={7}
          centeredSlides= {false}
          spaceBetween={30}
          navigation= {{
            nextEl: 'restaurant_next',
            prevEl: 'restaurant_prev',
          }}>
            {restaurant_list.map((ele, order) => {
              return(
                <SwiperSlide
                style={{cursor:'pointer'}}
                key={order}
                className='restaurant_avatars'>

                 <img src="/restaurant/Monitor.jpg" alt="" />
                 <span>Burak</span>
                </SwiperSlide>
              )
            } )}
          </Swiper> */}

           <Swiper
              className={"restaurant_avatars_wrapper"}
              slidesPerView={5}
              centeredSlides={false}
              spaceBetween={30}
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
                    <img alt="" src={"/restaurant/Monitor.jpg"} />
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

        <Stack
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'flex-end'}
        width={'90%'}
        sx={{mt: '65px'}}>
          <Box className='dishs_filter_box' >
            <Button variant='contained' color='secondary' >new</Button>
            <Button variant='contained' color='secondary' >price</Button>
            <Button variant='contained' color='secondary' >likes</Button>
            <Button variant='contained' color='secondary' >views</Button>
          </Box>

        </Stack>
        <Stack 
        style={{ width: "100%", display: "flex", minHeight: "60px" }}
        flexDirection={"row"}>
          <Stack className='dish_category_box' >
           <div  className="dish_category_main" >
            <Button className="button"  variant='contained' color='secondary' >boshqa</Button>
            <Button className="button"  variant='contained' color='secondary' >desert</Button>
            <Button className="button"  variant='contained' color='secondary' >ichimlik</Button>
            <Button className="button"  variant='contained' color='secondary' >salad</Button>
            <Button className="button"  variant='contained' color='secondary' >ovqatlar</Button>
           </div>
        </Stack>
      
        <Stack className={"dish_wrapper"}>
              {product_list.map((ele, index) => {
                const size_volume = "normal size";

                return (
                  <Box className={"dish_box"} key={`${index}`}>
                    <Box
                      className="dish_img"
                      sx={{
                        backgroundImage: `url(
                        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
                      )`,
                      }}
                    >
                      <div className={"dish_sale"}>{size_volume}</div>
                      <Button
                        className={"like_view_btn"}
                        style={{ left: "36px" }}
                      >
                        <Badge badgeContent={8} color={"primary"}>
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={`${index}`}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            checked={true}
                          />
                        </Badge>
                      </Button>
                      <Button className={"view_btn"}>
                        <img
                          src={"/icons/shopping_cart.svg"} alt=""
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className={"like_view_btn"}
                        style={{ right: "36px" }}
                      >
                        <Badge badgeContent={1000} color="primary">
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "white" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>

                    <Box className={"dish_desc"}>
                      <span className={"dish_title_text"}>Chicken Mayo</span>
                      <span className={"dish_desc_text"}>
                        <MonetizationOn />
                        11
                      </span>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
        </Stack>
        
        
      </Stack>
    </Container>

    <div className={"review_for_restaurant"}>
        <Container
          sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={"category_title"}>Opinions about the restaurant</Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box className={"review_box"} key={index}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img alt="" src={"/home/papays.png"} className={"review_img"} />
                  </Box>
                  <span className={"review_name"}>Kim Jeong Won</span>
                  <span className={"review_prof"}>User</span>
                  <p className={"review_desc"}>
                    I really like the food by this restaurant and the atmosphere
                    is very good.
                  </p>
                  <div className={"review_stars"}>
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

    <Container className="member_reviews">
        <Box className={"category_title"}>About Restaurant</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          width={"90%"}
          sx={{ mt: "70px" }}
        >
          <Box
            className={"about_left"}
            sx={{ backgroundImage: `url(/home/upload.png)` }}
          >
            <div className={"about_left_desc"}>
              <span>Burak</span>
              <p>The most delicious cuisine!</p>
            </div>
          </Box>
          <Box className={"about_right"}>
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box display={"flex"} flexDirection={"row"} key={index}>
                  <div className={"about_right_img"}></div>
                  <div className={"about_right_desc"}>
                    <span>Lorem ipsum  elit. Voluptates voluptatem facere tenetur?</span>
                  <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Stack
          sx={{ mt: "60px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={"category_title"}>Address</Box>
          <iframe
            style={{ marginTop: "60px", border: "0" }} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.8835780281747!2d69.29937721208222!3d41.33314489923764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b9b1c6a531%3A0xdb141e6021e00414!2sKish-Mish!5e0!3m2!1sen!2skr!4v1700436171857!5m2!1sen!2skr"
            width="1320"
            height="500"
            loading="lazy"
          ></iframe>
        </Stack>
      </Container>
      
  </div>;
}