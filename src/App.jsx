import React from 'react';
import AnimatedTitle from './components/AnimatedTitle';
import SocialLinks from './components/SocialLinks';
import './styles/globals.css';
import './styles/App.css';
import ProfilePic from './assets/images/ProfilePic.png'; // Import the profile picture
import Background from './assets/images/Background.jpg'; // Import the background image
import NatRotator from './components/NatRotator';
import YouTube from './components/YouTube';
import natVideo from './assets/images/nat_video.mp4';
import nat1 from './assets/images/nat1.jpg';
import nat2 from './assets/images/nat2.jpg';
import oscar from './assets/images/oscar.jpg';


const App = () => {
  return (
    <>
      <section>
        <div className="app">
          <img src={Background} alt="Background" className="background-image-rectangle" />
          <img src={ProfilePic} alt="Profile" className="profile-pic" /> {/* Profile Picture centered on rectangle */}
          <div className="header">
            <SocialLinks />
          </div>
          <div className="content">
            <AnimatedTitle />
            <p className="subtitle">Film Writer, Director</p>
          </div>

          <div className="centered-black-rectangle">
            <div className="natrotator-wrapper">
              <NatRotator
                items={[
                  { type: 'video', src: natVideo },
                  { type: 'image', src: nat1 },
                  { type: 'image', src: nat2 },
                  { type: 'image', src: oscar },
                ]}
                intervalVd={28000}
                intervalImg={8000}

              />
            </div>
            <div className="mobile-award-section">
              <p>Parking won Best Tamil Film and Best Screenplay at the 71st National Film Awards, honored by President Droupadi Murmu. Its screenplay joins the Academy Library's Permanent Core Collection.</p>
            </div>
          </div>

          <div className="award-banner">
            <div className="award-title">71st National Film Awards</div>
            <div className="award-wins">Best Tamil Film & Best Screenplay</div>
            <div className="award-film">Parking</div>
            <div className="award-honor">Honored by President Droupadi Murmu</div>
            {/* Spacer */}
            <div className="award-spacer"></div>
            <div class="award-title">Academy Library Honors</div>
            <div class="award-wins">Parking Screenplay</div>
            <div class="award-honor">Added to Permanent Core Collection</div>
          </div>
        </div>
      </section>

      <section className="youtube-section">
        <div>
          <YouTube />
        </div>
      </section>

      <footer className="footer">
        <p> Managed by AK.</p>
      </footer>
    </>
  );
};

export default App;