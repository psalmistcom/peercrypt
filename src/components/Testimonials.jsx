import Marquee from "react-fast-marquee";
import { testimonials } from "../constants";
import { CircleUser } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="container mx-auto relative mt-20 overflow-hidden">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-4 py-2 shadow-2xl">
          A trading experience people love to talk about
        </span>
        <h2 className="mt-2 lg:mt-4 font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          Testimonials
        </h2>
      </div>
      <div className="flex justify-start mt-10 lg:mt-10 items-center">
        <Marquee pauseOnHover={true} autoFill>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-700 w-72 p-10 mx-2 rounded-lg shadow-xl"
            >
              <p className="text-sm leading-normal tracking-wide font-light">
                {testimonial.text}
              </p>
              <div className="flex space-x-4 mt-10 items-center">
                <CircleUser className="rounded-full h-6 w-6" />
                <p className="font-bold">{testimonial.user}</p>
              </div>
            </div>
          ))}
        </Marquee>
        {/* {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 shadow-2xl bg-primary-700 rounded-xl hover:bg-primary-800 transition-all">
              <div className="flex space-x-7">
                <div className="flex h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {testimonial.icon}
                </div>
                <h5 className="mt-1 mb-6 text-xl tracking-wide">
                  {testimonial.text}
                </h5>
              </div>
              <div>
                <p className="text-md p-2 text-neutral-500">
                  {testimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Testimonials;
