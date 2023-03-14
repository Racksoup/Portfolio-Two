import React from 'react';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='Projects'>
      <h2>Projects</h2>
      <h4>Looking for a unique website with style?</h4>
      <button className='Start'>Get Started</button>
      <div className='Line'>
        <p>Need to see the code?</p>
        <button className='Github'>GitHub</button>
      </div>
      <div className='Section'>
        <h3>Websites</h3>
        <div className='Underline' />
        <div className='Items'>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
        </div>
      </div>
      <div className='Section'>
        <h3>Game Addons</h3>
        <div className='Underline' />
        <div className='Items'>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
          <a href=''>
            <h5>Panda NFT's</h5>
            <img src='' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
