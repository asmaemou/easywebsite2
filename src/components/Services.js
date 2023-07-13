
const Services = () => {
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto mt-20 h-screen">
      <h1 className="text-5xl font-bold mb-4">Our Services</h1>
      <div>
        <p className="font-bold mb-2 text-center mt-7 mb-17 text-2xl">Two Types of Clients</p>
        <div className="flex gap-20 mt-8 w-10/12 mx-auto">
        <div className="bg-[#fec23f] p-6 rounded-lg hover:-translate-y-5 hover:-translate-x-2 duration-300">

          <h1 className="font-bold mb-2 text-center">Easy partner sell more:</h1>
          <p className="text-lg">
          We propose to our users to subscribe in the EASY app which enables you to face price rising through the discounts received when you make any purchase at one of the EASY partner shops you find in the app. The app makes you up to date with the special offers proposed by the partners that appear below the app
            </p>
          </div>

          <div className="bg-[#fec23f] p-6 rounded-lg hover:-translate-y-5 hover:translate-x-2 duration-300">
          <h1 className="font-bold mb-2 text-center">Easy client save more:</h1>
        <p className="text-lg">
        We propose to our users to subscribe in the EASY app which enables you to face price rising through the discounts received when you make any purchase at one of the EASY partner shops you find in the app. The app makes you up to date with the special offers proposed by the partners that appear below the app
        </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Services;