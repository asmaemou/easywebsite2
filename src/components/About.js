
const About = () => {
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto mt-20 h-screen">
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <p className="mb-4 max-w-lg text-center">
      We provide our services to two categories of customers, EASY partner shops and EASY consumer application users.
      </p>
      <div>
        <p className="font-bold mb-2 text-center mt-7 mb-11 text-2xl">Two categories:</p>
        <div className="flex gap-20 mt-4 w-10/12 mx-auto">
        <div className="bg-[#fec23f] p-6 rounded-lg hover:-translate-y-5 hover:-translate-x-2 duration-300">
        <p className="text-lg">
        EASY Service is a channel of bringing new customers to shops aimed at introducing the store to EASY customers to increase sales and raise the number of transactions.
EASY partners constitute a single , non-localized market that is widespread among neighborhoods and provides varied goods and services at a preferential cost to EASY users.
        </p>
        </div>


        <div className="bg-[#fec23f] p-6 rounded-lg hover:-translate-y-5 hover:translate-x-2 duration-300">
        <p className="text-lg">
        We propose to our users to subscribe in the EASY app which enables you to face price rising through the discounts received when you make any purchase at one of the EASY partner shops you find in the app. The app makes you up to date with the special offers proposed by the partners that appear below the app
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
