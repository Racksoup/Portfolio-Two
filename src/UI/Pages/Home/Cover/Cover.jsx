import React from 'react';
import './Cover.scss';
import Youtube from '../../../../images/SocialMediaIcons/youtube.png';
import Twitter from '../../../../images/SocialMediaIcons/twitter.png';
import Twitch from '../../../../images/SocialMediaIcons/twitch.png';
import Reddit from '../../../../images/SocialMediaIcons/reddit.png';
import Discord from '../../../../images/SocialMediaIcons/discord.png';
import Desk from '../../../../images/Desk.png';
import DotArrow from '../../../../images/DotArrow.png';

const Cover = () => {
  return (
    <div className='Cover'>
      <div className='Container'>
        <div className='Header'>
          <h2>CONNOR RACK</h2>
          <div className='Links'>
            <a href='www.youtube.com' target='_blank'>
              <img src={Youtube} alt='Youtube' />
            </a>
            <a href='www.twitch.com' target='_blank'>
              <img src={Twitch} alt='Twitch' />
            </a>
            <a href='www.twitter.com' target='_blank'>
              <img src={Twitter} alt='Twitter' />
            </a>
            <a href='www.reddit.com' target='_blank'>
              <img src={Reddit} alt='Reddit' />
            </a>
            <a href='www.discord.com' target='_blank'>
              <img src={Discord} alt='Discord' />
            </a>
          </div>
        </div>

        <div className='Content'>
          <div className='Left'>
            <div className='Top'>
              <h1>Web Designer</h1>
              <h1>Game Dev</h1>
              <h1>Content Creator</h1>
            </div>
            <div className='Bottom'>
              <a href='www.connorrack.ca' target='_blank'>
                <button className='BusinessLink'>Need A Website?</button>
              </a>
              <div className='BlogLinks'>
                <a href='www.rackhistory.ca' target='_blank'>
                  <button className='Btn Btn-History'>History Blog</button>
                </a>
                <a href='www.rackdev.ca' target='_blank'>
                  <button className='Btn Btn-Dev'>Dev Blog</button>
                </a>
              </div>
            </div>
          </div>
          <div className='Right'>
            <img src={Desk} alt='Desk' />
          </div>
        </div>

        <div className='LeadButton'>
          <button>Bio & Projects</button>
          <img src={DotArrow} alt='DotArrow' />
        </div>
      </div>
    </div>
  );
};

export default Cover;
