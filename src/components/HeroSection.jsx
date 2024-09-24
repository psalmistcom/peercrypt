import Curve from "../assets/hero/curve.png";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center lg:my-20 ">
      <span className="bg-neutral-900 text-orange-500 rounded-full mb-3 text-sm font-medium px-4 py-2 uppercase shadow-2xl">
        Quick Information goes here
      </span>
      <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] text-center">
        Explore the Possibilities of <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Crypto with PeerCrypt
        </span>
      </h1>
      <p className="mt-5 text-lg text-center text-neutral-200 max-w-4xl">
        Safe & fastest way to Buy & Sell cryptos with easy to use interface and
        fastest transaction!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="tracking-wide bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-12 mx-3 rounded-md hover:bg-gradient-to-l"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
