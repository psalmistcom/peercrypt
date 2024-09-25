import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, title, toggle, desc }) => {
  return (
    <div className="pt-10">
      <div
        className="py-25 px-[50] flex space-x-6 items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold"> {title}</p>
        <div className="text-[30px]">
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-primary-700 px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
