import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { useState } from 'react';

export default function Search({ addTofavourites }) {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const fetchData = function (search) {
    return axios.get(`https://images-api.nasa.gov/search?q=${search}`);
  };

  const handleCick = function (e) {
    if (e.key === 'Enter') {
      const searchItems = async function () {
        let items = await fetchData(search);
        setItems(items.data.collection.items);
      };
      searchItems();
    }
  };

  return (
    <div style={{ padding: '1rem 0' }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleCick}
      />
      {items.map((item, index) => (
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
              onClick={() => addTofavourites(item)}
            >
              Like
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
