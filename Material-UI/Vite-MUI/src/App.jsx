
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Header from './components/paperbase/Header';
import Content from './components/paperbase/Content';
import Navigator from './components/paperbase/Navigator';
import Paperbase from './components/paperbase/Paperbase';

import ProTip from './components/common/ProTip';
import Copyright from './components/common/Copyright';

export default function App() {
  return (
    <Container maxWidth="sm">

      <Navigator />

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vite React Material UI
        </Typography>
        <Header />
        <Content />               
      </Box>

      <Box sx={{ my: 4 }}>
        <Paperbase />
      </Box>

      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>  
         
    </Container>
  );
}
