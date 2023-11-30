import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Stack, Tab, Typography } from "@mui/material";
import React from 'react';
import '../../../app/css/help.css'
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ExpandMoreOutlined } from "@mui/icons-material";



export function HelpPage() {

    const [value, setValue]  =React.useState('1');
    const faq = [
        {
            question: 'tolov qanday amalga oshiriladi',
            answer: 'Tolov payme va click orqali amalga oshiriladi'
        },
        {
            question: 'buyurtmalar qancha vaqtga yetib keladi',
            answer: 'har xil vaqtda'
        },
        {
            question: 'sayt kafolatlimi',
            answer: 'albatta'
        },
        {
            question: 'saytda muammobolsa kimga murojat qilamiz',
            answer: 'adminga hat yozing'
        },
        {
            question: 'sayt kafolatlimi',
            answer: 'albatta'
        },
        {
            question: 'saytda muammobolsa kimga murojat qilamiz',
            answer: 'adminga hat yozing'
        },
        {
            question: 'sayt kafolatlimi',
            answer: 'albatta'
        },
        {
            question: 'saytda muammobolsa kimga murojat qilamiz',
            answer: 'adminga hat yozing'
        },
        
    ];

    const rules = [
       `
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
        saytdan tolaqonli yangi buyurmalarni qilish jonli muloqotlar qilish
        jonli muqotlardan foydalanish uchun ro'yhatdan otish shart.
       `
    ];
    const handleChange = (event: any, newValue: string) => {
      setValue(newValue)
    };
    return (
        <div className="help_page" >
        <Container sx={{mt:'50px', mb:'50px'}} >
         <TabContext value={value}>
          <Box className="help_menu"  >
            <Box sx={{borderBottom:1 ,borderColor:'divider'}} >
                <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{display:'flex', justifyContent:'space-between'}}
                >
                <Tab label='Qoidalar'  value={'1'} />
                <Tab label= 'FAQ'  value={'2'}/>
                <Tab label= 'Adminga xat' value={'3'} />
                </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className="help_main_content" >
             <TabPanel value="1">
               <Stack className="theRules_box" >
                <Box  className="theRulesFrame" >
                    {rules.map((ele,number)=>{
                        return <p>{ele}</p>;
                    })}
                </Box>
               </Stack>
             </TabPanel>
             <TabPanel value={'2'} >
              <Stack className="accordian_menu" >
                {faq.map((ele,number)=> {
                    return (
                    <Accordion>
                     <AccordionSummary
                     expandIcon= {<ExpandMoreOutlined/>}
                     aria-controls="panelia-content"
                     id= 'panelia-header'>
                     <Typography>{ele.question}</Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography>{ele.answer}</Typography>
                     </AccordionDetails>
                     
                    </Accordion>
                    )
                })}
              </Stack>
             </TabPanel>
             <TabPanel value={'3'} >
               <Stack className="admin_letter_box" >
                <Stack className="admin_letter_container" >
                  <Box className="admin_letter_frame" >
                    <span>Adminga xabar qoldirish</span>
                    <p style={{color:'#4F547B'}} >
                      Assalom aleukum. Adminga xabar qoldirish uchun
                      formulanu to'ldiring
                     </p> 
                  </Box>
                  <form 
                  action={'#'}
                  method="POST"
                  className="admin_letter_frame" >
                  
                  <div className="admin_input_box" >
                    <label >Ism</label>
                    <input type="text"
                    name="mb_nick"
                    placeholder="ism"
                    style={{height:'60px' , width:'1110px'}} />
                  </div>
                  <div className="admin_input_box" >
                    <label htmlFor="">Elektron manzil</label>
                    <input type="text"
                    style={{height:'60px' , width:'1110px' }}
                      name="mb_email"
                      placeholder="Elektron Manzil" />
                  </div>
                  <div className="admin_input_box" >
                    <label htmlFor="">Xabar</label>
                    <textarea style={{height:'180px', width:'1110px'}} name="mb_msg" placeholder="Xabar"  id="" ></textarea>
                  </div>
                  <Box className= 'admin_button'
                  display={'flex'}
                  alignItems={'flex-end'}
                  sx={{mt:'30px'}} >
                    <Button type="submit" variant="contained" >
                        Jo'natish
                    </Button>
                  </Box>
                </form>  
                </Stack>
               </Stack>
             </TabPanel>
            </Stack>
          </Stack>
         </TabContext>
        </Container>
        </div>
        
    )
}