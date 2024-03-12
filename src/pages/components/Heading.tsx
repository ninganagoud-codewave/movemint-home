import React from "react";

interface headingProps {
  heading: string;
  subHeading: string;
}

const Heading: React.FC<headingProps> = (props) => {
  const { heading, subHeading } = props;

  return (
    <div className="flex justify-center w-full flex-col">
      <p className="font-jost font-semibold text-heading text-center">
        {heading}
      </p>
      <p className="font-jost text-subHeading font-light text-center">
        {subHeading}
      </p>
    </div>
  );
};

export default Heading;
