import { faqData } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import AccordionItem from "./AccordionItem";

const Faq = () => {
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
          <h2 className="mb-2 mx-6 text-3xl lg:text-4xl tracking-wide font-semibold">
            F.A.Q
          </h2>
          <p className="mx-6">Find answers to questions others have asked</p>
        </div>
        <div className="w-full lg:w-1/2">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} title={faq.title} desc={faq.desc} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
