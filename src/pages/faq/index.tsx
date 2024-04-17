import React from "react";
import FaqComponent from "../components/FAQCard";

const subHeading =
  "Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum";

function index() {
  return (
    <div>
    <div className="flex flex-col gap-y-8 ">
      <div className="flex justify-center w-full flex-col">
        <div className='flex justify-center w-full'>
          <p className="font-jost font-semibold text-heading text-center text-light_blue text-responsive text-heading mr-2">FAQs</p> 
          <p className="font-jost font-semibold text-heading text-center text-light_blue text-responsive text-heading mr-2"> - </p> 
          <p className="font-jost font-semibold text-heading text-center text-responsive text-heading">Frequently Asked Questions</p> 
        </div>
        <p className="font-jost text-subHeading font-light text-center text-responsive text-subHeading">
          {subHeading}
        </p>
      </div>
      <FaqComponent/>
    </div>
  </div>
  );
}

export default index;
