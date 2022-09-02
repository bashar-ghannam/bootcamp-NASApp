import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  const [APOD, setAPOD] = useState({});
  const [favourites, setfavourites] = useState([]);

  useEffect(() => {
    const fetchAPOD = async function () {
      let { explanation, title, url, media_type } = await (
        await fetchData()
      ).data;
      setAPOD({ explanation, title, url, media_type });
    };
    fetchAPOD();
  }, []);

  const addTofavourites = async function (item) {
    setfavourites([...favourites, item]);
    console.log(favourites);
  };

  const RemoveFromfavourites = async function (title) {
    let newfavourites = favourites.filter(
      (item) => item.data[0].title !== title
    );
    setfavourites(newfavourites);
  };

  const fetchData = function () {
    return axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=zKLaIMvLkSNDuOSrA1lRW8NQB9ltLuuhjpmwUDk1'
    );
  };

  return (
    <div className="App">
      <h1>NASApp</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link> | <Link to="/search">Search</Link> |{' '}
        <Link to="/favourites">Favourites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home APOD={APOD} />} />
        <Route
          path="/search"
          element={<Search addTofavourites={addTofavourites} />}
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              RemoveFromfavourites={RemoveFromfavourites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
