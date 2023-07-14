
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Website v.0.0.1 by SKindij
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
