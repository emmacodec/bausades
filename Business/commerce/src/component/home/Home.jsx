import React from 'react';
import MainCarousel from './Carousel';
import ShoppingList from './ShoppingList';

const Home = () => {
  return (
    <div className='home'>
      <MainCarousel />
      <ShoppingList />
    </div>
  )
};

export default Home;
