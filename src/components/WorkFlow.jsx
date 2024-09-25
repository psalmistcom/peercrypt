import { CheckCircle2 } from "lucide-react";
import p2p from "../assets/p2p_trading.png";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Workflow = () => {
  return (
    <div className="container mx-auto my-20 pb-2 md:pb-20 border-b border-gray-900">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-wrap justify-center"
      >
        <div className="p-2 w-full lg:w-1/2">
          <img src={p2p} alt="Coding" className="opacity-75 w-auto h-auto" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-12 mx-6 text-3xl lg:text-4xl tracking-wide">
            Trade with{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Transparency
            </span>
          </h2>
          <div>
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-6">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Workflow;
