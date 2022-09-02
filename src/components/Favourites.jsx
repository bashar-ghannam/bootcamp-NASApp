import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

export default function Favourites({ favourites, RemoveFromfavourites }) {
  return (
    <div style={{ padding: '1rem 0' }}>
      {favourites.map((item, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardHeader title={item.data[0].title} />
          <CardMedia
            component="img"
            height="194"
            image={item.links[0].href}
            alt={item.data[0].title}
          />
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => RemoveFromfavourites(item.data[0].title)}
            >
              Un Like
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
