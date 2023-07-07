
const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold mb-2">Block 1</h2>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Write your paragraph here"
          ></textarea>
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold mb-2">Block 2</h2>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Write your paragraph here"
          ></textarea>
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold mb-2">Block 3</h2>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Write your paragraph here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Services;
