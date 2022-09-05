import React from 'react';
import NavBar from './components/Nav/NavBar';


import './App.css'
import Hero from './components/Hero/Hero';
import ThinkN from './components/ThinkN/ThinkN';
import Discounts from './components/Discounts/Discounts';
import Vacation from './components/Vacation/Vacation';
import People from './components/PeopleAbout/People';
import LeatestBlog from './components/LeatestBlog/LeatestBlog';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  //commets
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ThinkN/>
      <Discounts/>
      <Vacation/>
      <People/>
      <LeatestBlog/>
      <Subscribe/>
    </div>
  );
};

export default App;