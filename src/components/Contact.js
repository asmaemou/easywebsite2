import { RiPhoneLine, RiMailLine, RiFacebookLine, RiInstagramLine } from 'react-icons/ri';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
      <>
      <div className="flex flex-row justify-between w-10/12 mx-auto mt-5">
      <div>
        <div className="flex flex-row gap-4 items-center">
          <RiPhoneLine w-6 h-6 mr-2 />
          <p>+212 668661680</p>
        </div>
      </div>
      <div>
      <div className="flex flex-row gap-4 items-center">
          <RiMailLine className="w-6 h-6 mr-2" />
          <p>amouradi2002@gmail.com</p>
        </div>
      </div>
      <div>
      <div className="flex flex-row gap-4 items-center">
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
      <ContactForm>

      </ContactForm>
      </>
  );
};
export default Contact;