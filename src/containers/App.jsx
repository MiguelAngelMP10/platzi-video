import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((result) => result.json())
      .then((data) => setVideos(data));
  }, []);

  const { mylist, trends, originals } = videos;

  return (
    <div className='App'>
      <Header />
      <Search />

      {mylist !== undefined && mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends !== undefined && trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Plazi video'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />

          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
