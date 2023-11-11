import { Container, Stack, Box, Typography,Button } from '@mui/material';
import React from 'react';



function App() {
  return (
   <Container maxWidth='sm' >
     <Stack flexDirection={'column'} >
      <Box sx={{my: 4}} >
        <Typography  variant='h4' component={'h1'} gutterBottom >
         Create react App on redux
        </Typography>
      </Box>
      <Button variant="contained">Contained</Button>
     </Stack>
   </Container>
  );
}

export default App;
