import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-[#eff3ff] text-white mt-40">
      <div
        className="footer-container flex flex-row justify-center items-center w-10/12 mx-auto mt-5 text-center text-gray-400 text-sm"
      >
        <span className="mr-4">© 2020 Appy. All rights reserved.</span>
        <span className="mr-4">Terms · Privacy Policy</span>
        <div className="flex flex-row justify-center space-x-4">
          <SocialIcon url="https://web.facebook.com/easylarache/videos/3293695087585784" bgColor='#079e7c' size="15" style={{ width: "35px", height: "35px", marginLeft: "10px" }} />
          <SocialIcon url="https://www.instagram.com/easy.maroc/?igshid=MzRlODBiNWFlZA%3D%3D" bgColor='#079e7c' size="15" style={{ width: "35px", height: "35px", marginLeft: "10px" }} />
          <SocialIcon url="https://wa.me/message/H2BEQDJRQ63NM1" network="whatsapp" bgColor='#079e7c' size="15" style={{ width: "35px", height: "35px", marginLeft: "10px" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
