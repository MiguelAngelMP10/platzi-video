import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />

      {myList !== undefined && myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList !== undefined && myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
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

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
