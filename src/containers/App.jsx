import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitilState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {

  const initilState = useInitilState(API);
  const { mylist, trends, originals } = initilState;

  return (
    <div className='App'>
      <Header />
      <Search />

      {mylist !== undefined && mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist !== undefined && mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
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
          {originals !== undefined && originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
