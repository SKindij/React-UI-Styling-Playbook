
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProTip from '.components/common/ProTip';
import Copyright from '.components/common/Copyright';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Vite React Material UI
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
