import React from 'react';
import '../App.css'
import React_Image from '../images/react2.jpg';

const Home = () => (
    <div>
      <h2>Home component</h2>
      <img  src={ React_Image } alt="react_image" className="home_page_image"/>
    </div>
  );

export default Home;


