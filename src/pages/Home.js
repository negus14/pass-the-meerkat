// Home.js
import React from 'react';
import './Home.css';
import YouTube from '../components/YouTube';
import Spotify from '../components/Spotify';
import TikTok from '../components/TikTok';
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Home = () => {
  
  const videoUrl = 'https://www.tiktok.com/@9inedegrees/video/7352094227683118369';  // Replace with the TikTok video URL
  const videoId = 'E3hnA2MAgWc';  // Replace with actual YouTube video ID

  return (
    <div>
      <section className="section" id="section1">
        {/* <h1>PASS THE MEERKAT</h1> */}
        {/* <image src="../assets/logo.jpg" id="logo"></image> */}
        <img className="logo" src={logo} id="logo" alt="Logo" />
      </section>

      <section className="section" id="section2">
          <p>Armed with microphones, friendship and a bunch of instantly relatable stories, Pass The Meerkat is a critically acclaimed group of guys from London. Relatable and light-hearted, Pass The Meerkat isn’t trying to be self-righteous or provide a political commentary of the state of events at any given time but is  instead, pure, unapologetic entertainment.</p>
          <div>
          <a href="https://www.tiktok.com/@9inedegrees?lang=en" target="_blank" rel="noopener noreferrer">
          <div></div>
            <FaTiktok className="icon tiktok-icon" size={40} title="TikTok" color="white"/>
          </a>
          <a href="https://www.instagram.com/passthemeerkat/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram-icon" size={40} title="Instagram" color="white"/>
          </a>
          <a href="https://www.youtube.com/@9ineDegrees" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon youtube-icon" size={40} title="YouTube" color="white"/>
          </a>
          <a href="https://x.com/passthemeerkat?lang=en" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon twitter-icon" size={40} title="X (formerly Twitter)" color="white"/>
          </a>
          <a href="https://www.facebook.com/passthemeerkat/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook-icon" size={40} title="Facebook" color="white"/>
          </a>
          </div>
      </section>

      <section className="section" id="section3">
        <h1>Storytime</h1>
        <TikTok videoUrl={videoUrl} />
      </section>

      <section className="section" id="section4">
        <YouTube videoId={videoId}/>
        <h1>Chattings</h1>
      </section>

      <section className="section" id="section5">
        <h1>(On the go)</h1>
          <Spotify/>
      </section>
  </div>   
  );  
};

export default Home;
