import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-[#eff3ff] text-white mt-20">
      <div
        className="flex flex-row justify-between w-10/12 mx-auto mt-5 items-center
      text-center pt-8 text-gray-400 text-sm"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex flex-row justify-between space-x-4">
        <SocialIcon url="https://web.facebook.com/easylarache/videos/3293695087585784" bgColor='#079e7c' size="15" style={{ marginTop: "-3px"}} />
        <SocialIcon url="https://www.instagram.com/easy.maroc/?igshid=MzRlODBiNWFlZA%3D%3D" bgColor='#079e7c' size="15" style={{marginTop:"-3px"}} />
        </div>
        
      </div>
    </footer>
  );
};
export default Footer;