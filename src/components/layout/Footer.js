import React from "react";
import { SocialIcon } from "react-social-icons";
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
          <SocialIcon url="https://github.com/nixxx136" color="000000" />
          <a> </a>
          <SocialIcon url="https://www.linkedin.com/in/penghuanni/" />
          <a> </a>
          <SocialIcon url="https://www.facebook.com/nipenghuan" />
          <a> </a>
          <SocialIcon url="https://twitter.com/nipenghuan" />
          <a> </a>
          <SocialIcon url="http://d.umn.edu/~nixxx136/" />
          <a> </a>
          <SocialIcon url="https://www.google.com/search?q=penghuan+ni&ie=utf-8&oe=utf-8&client=firefox-b-ab" />
          <div> <br/> </div>
          <div>@ 2018 by Penghuan Ni</div>
          <div> <br/> </div>
      </div>
    );
  }
}

export default Footer;
