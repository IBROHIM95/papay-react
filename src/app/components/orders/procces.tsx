
import { TabPanel } from "@mui/lab";
import { Box, Button, Stack} from "@mui/material";
import React from "react";

const pausedOrders = [
    [1,2,3],
    [1,2,3],
    [1,2,3],

]

export default function ProccesOrders(props:any) {
    return(
        <TabPanel value={"2"}>
         <Stack>
            {pausedOrders?.map((order) => {
                return (
                <Box className = 'order_main_box' >
                  <Box className = 'order_box_scroll' >
                    {order.map((item) => {
                        const image_path = `/home/sandwish.png`
                        return (
                          <Box className = 'ordersName_price' >
                            <img src={image_path} className="orderDishImg" alt="" />
                            <p className="titleDish" >SandWish</p>
                            <Box className="priceBox" >
                                <p>$7</p>
                                <p>+</p>
                                <p>3</p>
                                <p>=</p>
                                <p style={{marginLeft: '15px'}} >$21</p>
                            </Box>
                          </Box>
                        )
                    } )}
                  </Box>   

                  <Box className="total_price_box black_solid" >
                     <Box className="boxTotal"  >
                        <p>mahsulot narxi</p>
                        <p>$21</p>
                         <p>+</p>
                        <p>yetkazish xizmati</p>
                        <p>$2</p>
                        <p>=</p>
                        <p>jami narx</p>
                        <p>$23</p>
                     </Box>
                     <Button style={{color: 'black', marginRight:'5px', width: '170px', fontSize: '10px', borderRadius:'20px', background: 'rgb(196, 65, 65)'}} >Bekor qilish</Button>
                     <Button style={{marginRight:'5px',color: 'black',width: '96px', fontSize: '10px', borderRadius:'20px', background: 'rgb(65, 131, 196)'}}  >To'lash</Button>
                  </Box>   
                </Box>
                )
            })}
         </Stack>
        </TabPanel>
    )
}