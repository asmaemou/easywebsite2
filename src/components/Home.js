import { Link } from "react-router-dom";
import welcomeImage from "../welcome.jpeg";

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-1/2">
        <img
          className="max-h-96 w-full object-cover"
          src={welcomeImage}
          alt="Welcome Image"
        />
        {/* <div className="absolute inset-0 bg-gray-900 opacity-10"></div> */}
      </div>
      <div className="bg-gray-200 p-4 md:p-8 rounded-lg mt-8 w-3/4">
        <h1 className="text-3xl font- bold text-center mb-4">
          Welcome to Easy Service
        </h1>
        <p className="text-center">
          We form the largest decentralized market for discounts in the region.
        </p>
        <div className="flex justify-center">
          <a
            href="https://web.facebook.com/easylarache/videos/3293695087585784"
            className="text-green-600 underline"
            target="_blank" rel="noreferrer"
          >
            Video Pub
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 w-3/4 gap-20">
        <div className="text-center bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 mr-2 md:mr-4 hover:scale-125 hover:bg-yellow-500 bg-yellow-400">
          <Link to={"/services"}>Easy partner sell more</Link>
        </div>
        <div className="text-center bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 mr-2 md:mr-4 hover:scale-125 hover:bg-yellow-500 bg-yellow-400">
          <Link to={"/services"}>Easy client save more</Link>
        </div>
      </div>
      <div className="bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 flex justify-center items-center hover:scale-125 hover:bg-yellow-500 bg-yellow-400">
          <a
            href="https://play.google.com/store/apps/details?id=com.easymaroc"
            className="text-center"
            id="downloadButton"
          >
            Download Application
          </a>
        </div>
      <div className="bg-gray-200 p-4 md:p-8 rounded-lg mt-8 w-3/4">
        <p className="text-center">
          Service is a decentralized market consisting of shops located in the
          city neighborhoods that provide various services and goods with
          exclusive offers and discounts.
        </p>
      </div>
    </div>
  );
};

export default Home;
