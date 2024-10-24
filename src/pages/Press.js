import React from 'react';
import './Press.css';
import preview1 from '../assets/preview1.png'; // Import image 1
import preview2 from '../assets/preview2.png'; // Import image 2
import preview3 from '../assets/preview3.png'; // Import image 3
import preview4 from '../assets/preview4.png'; // Import image 4
import preview5 from '../assets/preview5.png'; // Import image 5
import preview6 from '../assets/preview6.png'; // Import image 6

const Press = () => {
  const links = [
    { 
      name: "Guap Meets the Cast of Pass the Meerkat", 
      url: "https://guap.co/guap-meets-the-cast-of-pass-the-meerkat/", 
      image: preview1 
    } ,
    { 
      name: "Pass the Meerkat Season Five", 
      url: "https://www.voice-online.co.uk/entertainment/2023/08/18/pass-the-meerkat-season-five-go-get-your-fix/", 
      image: preview2 
    },
    { 
      name: "Lagos, Rebecca Sterling, and More", 
      url: "https://www.independent.co.uk/life-style/lagos-rebecca-sterling-k-brown-mandy-moore-liberia-b2546045.html", 
      image: preview3 
    },
    { 
      name: "Catching Up with the London Lads", 
      url: "https://www.animationmagazine.net/2023/08/catching-up-with-the-london-lads-from-pass-the-meerkat/", 
      image: preview4 
    },
    { 
      name: "The Success Behind Pass the Meerkat", 
      url: "https://www.wework.com/en-GB/ideas/community-stories/member-spotlight/the-success-behind-the-curiously-named-hit-show-pass-the-meerkat", 
      image: preview5 
    },
    { 
      name: "Pass the Meerkat Car Breakdown", 
      url: "https://grmdaily.com/pass-the-meerkat-car-breakdown/", 
      image: preview6 
    }
  ];
 
  return (
    <div className="links-grid">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {/* Make the image a clickable link */}
            <img src={link.image} alt={link.name} className="link-image" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Press;
