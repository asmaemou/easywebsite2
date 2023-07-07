
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 md:p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to the Home Page</h1>
        <p className="text-center">This is a box created using Tailwind CSS and React!</p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 w-3/4">
        <div className="bg-blue-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
          <p className="text-center">Small Box 1</p>
        </div>
        <div className="bg-green-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
          <p className="text-center">Small Box 2</p>
        </div>
        <div className="bg-yellow-200 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <p className="text-center">Small Box 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
