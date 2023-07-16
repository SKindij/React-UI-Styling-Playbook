import Box from '@mui/material/Box';

export default function Boxes() {
  return (
  <>
    <Box sx={{ 
      width: 700, height: 100,
      backgroundColor: 'primary.main',
      '&:hover': {
        opacity: [0.9, 0.8, 0.7],
      },
      my: 4, 
    }}>       
      MUI Box backgroundColor: primary.main          
    </Box>

    <Box sx={{ 
      width: 700, height: 100,
      backgroundColor: 'secondary.main',
      '&:hover': {
        opacity: [0.9, 0.8, 0.7],
      },
      my: 4 }}>
        MUI Box backgroundColor: secondary.main
    </Box>

    <Box sx={{ 
      width: 700, height: 100,
      backgroundColor: 'warning.main',
      '&:hover': {
        opacity: [0.9, 0.8, 0.7],
      },
      my: 4 }}>
        MUI Box backgroundColor: warning.main
    </Box>     
  </>    
  );
}
