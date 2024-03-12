import React, { useState, useEffect } from "react";
// Import icons from react-icons or any other library
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { getFAQ } from "../api/apiReq";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCardProps = {
  faq: FaqItem;
};

const FaqCard: React.FC<FaqCardProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
    className={`border p-2 sm:p-4 rounded-lg shadow-md mb-2 bg-white ${
      !isOpen ? "max-h-20 overflow-hidden" : "overflow-visible"
    }`}
  >
    <div className="flex justify-between cursor-pointer align-center" onClick={toggleOpen}>
      <div className="font-medium text-lg break-words " style={{wordBreak: 'break-all'}}>
      {  !isOpen ? (faq.question.length > 80 ? `${faq.question.slice(0, 80)}...` : faq.question): faq.question}
      </div>
      <div className="text-xl">
        {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </div>
    </div>
    {isOpen && (
      <div className="mt-2 text-gray-700 break-words text-responsive">{faq.answer}</div>
    )}
  </div>
  );
};

const tabs = ["Running", "Cycling", "Movemax", "Calories"];
const FaqComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [faqs, setFaqs] = useState([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const param = {
        category: activeTab.toLocaleLowerCase(),
      };
      const response: any = await getFAQ(param);
      console.log("response", response?.data);

      setFaqs(response?.data?.faqs);
      if (response?.status === 200) setLoader(true);
    };

    getData();
  }, [activeTab]);


  return (
    <>
      <div className="flex justify-center gap-2  flex-wrap">
        <div className="inline-grid grid-flow-col gap-2 auto-cols-max  bg-white">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`font-jost text-base font-medium cursor-pointer px-6 py-4 rounded ${
                activeTab === tab
                  ? "bg-light_blue text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => {setActiveTab(tab) ;setLoader(false)}}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      {!loader ? (
        <div className="flex align-center justify-center">
          <img src={"/images/loader.gif"} alt="loading......" className="h-16" />
        </div>
      ) : (
        <>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-4 w-full justify-center">
            {faqs?.length > 0 ? (
              faqs?.map((faq, index) => <FaqCard key={index} faq={faq} />)
            ) : (
              <div className="col-span-1 md:col-span-2 bg-white shadow-lg rounded-lg p-6 flex items-center justify-center text-center">
                <p className="text-lg font-semibold text-gray-700">
                  No FAQs added yet.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FaqComponent;
