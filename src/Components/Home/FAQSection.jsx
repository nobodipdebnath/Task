import FAQItem from "./FAQItem";

const FAQSection = () => {
  const faqData = [
    {
      question: "1. How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
      question: "2. Is it suitable for all ages and body types?",
      answer:
        "Yes! It is designed to fit a wide range of ages and body types comfortably.",
    },
    {
      question: "3. Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely! Consistent use helps reduce back pain and improve posture alignment.",
    },
    {
      question: "4. Does it have smart features like vibration alerts?",
      answer:
        "Some models come with vibration alerts that notify you when slouching.",
    },
  ];
  return (
    <div className="feature pb-25 ">
        <h1 className="text-center text-[50px] nunito font-semibold pt-25 text-white">Frequently asked <span className="text-[#FEE801]">questions</span></h1>
      <div className="max-w-5xl mx-auto lg:px-4 py-10 ">
        <div className="flex flex-col mx-4 md:mx-0 mt-10 gap-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
