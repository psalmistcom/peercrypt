import { features } from "../constants";

const HowItWorks = () => {
  return (
    <div className="container mx-auto relative mt-20 border-b border-neutral-800 overflow-hidden">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-4 py-2 shadow-2xl">
          Trade with confident on a transparent exchange market
        </span>
        <h2 className="mt-4 lg:mt-8 font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          How it{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Works
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 shadow-2xl bg-primary-700 rounded-xl hover:bg-primary-800 transition-all">
              <div className="flex space-x-7">
                <div className="flex h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <h5 className="mt-1 mb-6 text-xl tracking-wide">
                  {feature.text}
                </h5>
              </div>
              <div>
                <p className="text-md p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-12">
        <a
          href="#"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg tracking-wide"
        >
          Start trading
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
