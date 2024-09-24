import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="container mx-auto relative mt-20 border-b border-neutral-800 min-h-[800px]">
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
            <div className="p-10 border bg-primary-800 border-neutral-700 rounded-xl">
              <div className="flex space-x-7">
                <div className="flex h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <h5 className="mt-1 mb-6 text-xl tracking-wide">
                  {feature.text}
                </h5>
              </div>
              <div>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>

              <a
                href={feature.link}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                {feature.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
