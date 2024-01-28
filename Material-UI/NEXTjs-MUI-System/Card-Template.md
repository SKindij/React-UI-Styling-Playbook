# MUI Card Templates
Cards contain content and actions about a single subject.

> Although cards can support multiple actions, UI controls, and an overflow menu,
> use restraint and remember that cards are meant to be entry points to more complex and detailed information.

## Card Media [MUI](https://mui.com/material-ui/react-card/)

> When `component="img"`, CardMedia relies on `object-fit` for centering the image.
> It's not supported by IE11.

Example of a card using an image to reinforce the content.
```typescript
// surface-level container for grouping related components
import Card from '@mui/material/Card';
// an optional wrapper for the Card header
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// container for displaying background images and gradient layers
import CardMedia from '@mui/material/CardMedia';
// the wrapper for the Card content
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// an optional wrapper that groups a set of buttons
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// allows users to interact with the specified area of the Card
import { CardActionArea } from '@mui/material';

import Chevrolet from '../Images/Chevrolet.jpg'

export default function MediaCard() {
  return (
    <div style={{margin: '25%'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="140"
        image={Chevrolet} alt="Chevrolet"         
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chevrolet is an iconic American car brand known for its reliable, dependable, and 
          affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable 
          car brands in the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
```

Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a `CardActionArea` component.




## Layout with Material UI Cards










