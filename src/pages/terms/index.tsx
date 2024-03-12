import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import UpdateDateInfo from "../components/UpdateDateInfo";
import Content from "../components/Content";
import { getTerms } from "../api/apiReq";

const heading = "Terms & Conditions";
const subHeading =
  "Read our terms below to learn more about your rights and responsibilities as a Raremint user.";

function Terms() {
  const [data, setData] = useState<string>("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const response: any = await getTerms();
      console.log("response", response?.data);

      setData(response?.data[0]?.content);
      setUpdatedDate(response?.data[0]?.updatedAt);
      if (response?.status === 200) setLoader(true);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-8">
        <Heading heading={heading} subHeading={subHeading} />
        {!loader ? (
          <div className="flex align-center justify-center">
            <img src={"/images/loader.gif"} alt="loading......" className="h-16"/>
          </div>
        ) : (
          <>
            <UpdateDateInfo updatedDate={updatedDate} />
            <Content data={data} />
          </>
        )}
      </div>
    </div>
  );
}

export default Terms;
