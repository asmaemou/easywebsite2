import { RiPhoneLine, RiMailLine, RiFacebookLine, RiInstagramLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="flex items-center mb-4">
        <RiPhoneLine className="w-6 h-6 mr-2" />
        <p>Phone Number: +1 123 456 7890</p>
      </div>
      <div className="flex items-center mb-4">
        <RiMailLine className="w-6 h-6 mr-2" />
        <p>Email Address: info@example.com</p>
      </div>
      <div className="flex">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
          <RiFacebookLine className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <RiInstagramLine className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;