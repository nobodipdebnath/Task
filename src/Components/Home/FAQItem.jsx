import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const FAQItem = ({faq}) => {
  const {question, answer } = faq;
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "p-6 rounded-xl bg-[#1C1A1A] border-[#FEE80138] border " : " border backdrop-blur-[1px] border-[#FEE80138] p-6 rounded-xl"}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left font-medium montserrat text-white text-2xl">{question}
        {open ? (
          <FaMinus className="text-2xl cursor-pointer text-white" />
        ) : (
          <FaPlus className="text-2xl cursor-pointer text-white" />
        )}
      </button>

      {open && (
        <>
            <p className="text-sm font-medium montserrat text-[#8E7D3F] mt-2">{answer}</p>
        </>
        
      )}
    </div>
  );
};

export default FAQItem;
