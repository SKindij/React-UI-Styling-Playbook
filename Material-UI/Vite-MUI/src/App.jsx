
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Boxes from './components/layout/Boxes';
import Grids from './components/layout/Grids';



import ProTip from './components/common/ProTip';
import Copyright from './components/common/Copyright';

export default function App() {
  return (
    <Container maxWidth="md" sx={{ border: '1px dashed grey' }}>

      <Typography variant="h4" component="h1" gutterBottom>
        Vite React Material UI
      </Typography>

      <Boxes />
      <Grids />




      <ProTip />
      <Copyright />   
         
    </Container>
  );
}
