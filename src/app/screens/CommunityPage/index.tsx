import { Box, Container, Stack, Tab } from "@mui/material";
import React from 'react';
import CommunityChats from "./communityChats";
import '../../../app/css/community.css'
import { TabContext, TabPanel } from "@mui/lab";
import { TabList } from "@mui/lab";
import TargetArticles from "./targetArticles";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marginer from "../../components/marginer";


const targetBoArticles = [1,2,3,4,5];

export  function CommunityPage(props:any ) {
    const [value, setValue] = React.useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handlePaginationChange = (event: any, value: number) => {
        console.log(value);
        
    }
    return (
        <div className="community_page" >
            <div className="community_frame" >
                 <Container sx={{mt: '50px', mb:'50px'}} >
                  <Stack flexDirection={'row'} justifyContent={'space-between'}  >
                    <CommunityChats/>
                    <Stack 
                    className="community_all_frame"
                    inputMode= {'text'} 
                    style={{border: '1px solid #fff '}}>
                      <TabContext value={value} >
                        <Box className="article_tabs" >
                          <Box sx={{borderBottom: 1, borderColor: 'divider'}} >
                           <TabList 
                           
                           onChange= {handleChange}
                           aria-label="lab API tabs example"
                           style={{borderColor: 'blue'}} >
                             <Tab label='Bacha Maqolalar' value={'1'} />
                             <Tab label='Mashxurlar' value={'2'} />
                             <Tab label='Oshhonaga baho' value={'3'} />
                             <Tab label='Hikoyalar' value={'4'} />
                           </TabList>
                          </Box>
                        </Box>
                        <Box className="article_main" >
                           <TabPanel value="1"><TargetArticles targetBoArticles= {targetBoArticles} /></TabPanel>
                           <TabPanel value="2"><TargetArticles targetBoArticles= {targetBoArticles} /></TabPanel>
                           <TabPanel value="3"><TargetArticles targetBoArticles= {targetBoArticles} /></TabPanel>
                           <TabPanel value="4"><TargetArticles targetBoArticles= {targetBoArticles} /></TabPanel>
                        </Box>

                        <Box
                        
                        sx={{marginBottom: '5px',  display:' flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center'}} className={'article_bott'} >
                            <Marginer direction="horizontal" width='863' height="1" bg="#E4E4E4" />
                        <Pagination
                          count={3}
                         renderItem={(item) => (
                         <PaginationItem
                          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                          {...item}
                          color="secondary"
                             />              
                           )}
                           onChange={handlePaginationChange}
                         />  
                        </Box>
                      </TabContext>
                    </Stack>
                  </Stack>
                 </Container>
            </div>
            
        </div>
       
    )
}