import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { getFAQ } from "../api/apiReq";
import InfiniteScroll from "react-infinite-scroll-component";

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
        !isOpen ? "overflow-hidden" : "overflow-visible"
      }`}
    >
      <div
        className="flex justify-between cursor-pointer align-center"
        onClick={toggleOpen}
      >
        <div
          className="font-medium text-lg break-words "
          style={{ wordBreak: "break-all" }}
        >
          {!isOpen
            ? faq.question.length > 100
              ? `${faq.question.slice(0, 100)}...`
              : faq.question
            : faq.question}
        </div>
        <div className="text-xl">
          {isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700 break-words text-responsive">
          {parse(faq.answer)}
        </div>
      )}
    </div>
  );
};

const tabs = ["Running", "Steps", "Calories", "Movemax"];
const FaqComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [faqs, setFaqs] = useState([]);
  const [count, setCount] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const param = {
        category: activeTab.toLocaleLowerCase(),
        pageNumber: 1,
        limit: 10,
        ...(searchTerm && {search:searchTerm})
      };
      const response: any = await getFAQ(param);
      console.log("response", response?.data);
      setHasMore(response?.data?.loadMore);
      setFaqs(response?.data?.faqs);
      setCount(response?.data?.count);
      if (response?.status === 200) {
        setLoader(true);
        setPageNumber(1);
      }
    };

    getData();
  }, [activeTab , searchTerm]);

  const fetchData = async () => {
    console.log("i called ...");

    const param = {
      category: activeTab.toLocaleLowerCase(),
      pageNumber: pageNumber + 1,
      limit: 10,
    };

    const response: any = await getFAQ(param);
    setFaqs(faqs.concat(response?.data?.faqs));
    setHasMore(response?.data?.loadMore);
    if (response?.status === 200) {
      setLoader(true);
      setPageNumber(pageNumber + 1);
    }
  };

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
              onClick={() => {
                setActiveTab(tab);
                setLoader(false);
                setSearchTerm('');
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search FAQs..."
          className="search-input mb-4 mt-2 px-4 py-2 border rounded-lg w-full max-w-4xl mx-auto shadow-sm focus:outline-none focus:ring-2 focus:ring-light_blue focus:border-transparent"
        />
      {!loader ? (
        <div className="flex align-center justify-center">
          <img
            src={"/images/loader.gif"}
            alt="loading......"
            className="h-16"
          />
        </div>
      ) : (
        <>
          <InfiniteScroll
            dataLength={count}
            next={fetchData}
            loader={
              <p style={{ textAlign: "center" }}>
                <h4>Loading...</h4>
              </p>
            }
            hasMore={hasMore}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b></b>
              </p>
            }
          >
            <div className="mx-auto grid grid-cols-1  max-w-4xl gap-4 w-full justify-center">
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
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default FaqComponent;
