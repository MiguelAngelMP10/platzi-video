import React, { useState, useEffect } from 'react';

import Search from '../components/Search';

import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitilState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {

  const initilState = useInitilState(API);
  const { mylist, trends, originals } = initilState;

  return (
    <>
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

    </>
  );
};

export default Home;
