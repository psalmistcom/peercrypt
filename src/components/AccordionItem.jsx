import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({ open, title, toggle, desc }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="ml-6 py-2 space-y-2">
      <button
        className="flex space-x-6 w-full"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span>{title}</span>
        {accordionOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? " grid-rows-[1fr] opacity-100"
            : " grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mb-8">{desc}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
