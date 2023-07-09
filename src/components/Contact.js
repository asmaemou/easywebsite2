import { RiPhoneLine, RiMailLine, RiFacebookLine, RiInstagramLine } from 'react-icons/ri';
import contactBackground from '../contactP.jpeg';



const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-1/3">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${contactBackground})` }}></div>
      </div>
      <div className="gap-20 grid grid-cols-3"  >
      <div>
        <div>
          <RiPhoneLine w-6 h-6 mr-2 />
          <p>Phone Number: +212 668-543004</p>
        </div>
      </div>
      <div>
      <div>
          <RiMailLine className="w-6 h-6 mr-2" />
          <p>Email Address: easymaroc07@gmail.com</p>
        </div>
      </div>
      <div>
      <div>
          <a href="https://www.facebook.com/easylarache" target="_blank" rel="noopener noreferrer" className="mr-2">
            <RiFacebookLine className="w-6 h-6" />
          </a>
          <span>
          <a href="https://www.instagram.com/easy.maroc/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
            <RiInstagramLine className="w-6 h-6" />
          </a>
          </span>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
      </div>
    </div>
    
  );
};

export default Contact;