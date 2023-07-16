
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Grids() {
  return (
  <>
    <Box sx={{ flexGrow: 1, mb: '25px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>

   <Box sx={{ flexGrow: 1, mb: '25px' }}>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6} md={4}>
        <Item>1 - xs=6 md=4</Item>
      </Grid>
      <Grid item xs={6} md={8}>
        <Item>2 - xs=6 md=8</Item>
      </Grid>
      <Grid item xs={6} md={8}>
        <Item>3 - xs=6 md=8</Item>
      </Grid>
      <Grid item xs={6} md={4}>
        <Item>4 - xs=6 md=4</Item>
      </Grid>
    </Grid>
   </Box>

  </>
  );
}
