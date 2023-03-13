import React from 'react';
import './Entertainment.scss';
import Vector1 from '../../../../images/Vector 1.png';
import Vector2 from '../../../../images/Vector 2.png';
import Vector3 from '../../../../images/Vector 3.png';
import Reddit from '../../../../images/SocialMediaIcons/reddit.png';

const Entertainment = () => {
  return (
    <div className='Entertainment'>
      <div className='Container'>
        <h3>Stream</h3>
        <div className='Content'>
          <img src={Vector3} alt='Vector' className='Img-1' />
          <div className='FlavorText'>
            <h5>
              Prime Content, History, News, Politics, Gaming. Giga-Chad Stream. Elephant, Where?
            </h5>
            <button className='Twitch'>Twitch</button>
          </div>
          <iframe width='465' height='331' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
        </div>
        <h3>Videos</h3>
        <div className='Content'>
          <img src={Vector2} alt='Vector' className='Img-2' />
          <iframe width='465' height='331' src='https://www.youtube.com/embed/tgbNymZ7vqY'></iframe>
          <div className='FlavorText'>
            <h5>
              Welcome to a destination unknown. Join the club! Stay up to date with my newest
              videos!
            </h5>
            <button className='Youtube'>Youtube</button>
          </div>
        </div>
        <h3>Blogs</h3>
        <h4>Relevant history and development topics</h4>
        <div className='Blogs'>
          <img src={Vector1} alt='Vector' className='Vector' />
          <div className='Blogsx'>
            <div className='Blog'></div>
            <div className='Blog'></div>
          </div>
          <div className='Reddit'>
            <p>Check out the subreddit!</p>
            <button>
              <img src={Reddit} alt='Reddit' className='Reddit-Btn' />
              <p>Reddit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
