import React from 'react';
import './Home.scss';
import About from './About/About.jsx';
import Cover from './Cover/Cover.jsx';
import Entertainment from './Entertainment/Entertainment.jsx';
import Projects from './Projects/Projects.jsx';
import Footer from './Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='Home'>
      <Cover />
      <About />
      <Entertainment />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
