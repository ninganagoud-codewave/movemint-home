import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import UpdateDateInfo from "../components/UpdateDateInfo";
import Content from "../components/Content";
import { getPolicy } from "../api/apiReq";

const heading = "Privacy Policy";
const subHeading =
  "Learn more about how Raremint collects and uses data and your rights as a user.";

function Policy() {
  const [data, setData] = useState<string>("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const response: any = await getPolicy();
      console.log("response", response?.data);

      setData(response?.data[0]?.content);
      if (response?.status === 200) setLoader(true);
      setUpdatedDate(response?.data[0]?.updatedAt);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-8 ">
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

export default Policy;
