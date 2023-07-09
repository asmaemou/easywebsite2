import welcomeImage from "../welcome.jpeg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-1/2">
        <img
          className="w-full h-full object-cover"
          src={welcomeImage}
          alt="Welcome Image"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
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
          >
            Video Pub
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 w-3/4">
        <div className="bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 mr-2 md:mr-4">
          <p className="text-center">Easy partner sell more</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 mr-2 md:mr-4">
          <p className="text-center">Easy client save more</p>
        </div>
        <div className="bg-gray-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.easymaroc"
            className="text-center"
          >
            Download Application
          </a>
        </div>
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
