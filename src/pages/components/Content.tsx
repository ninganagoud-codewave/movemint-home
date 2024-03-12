import React from 'react'
import parse from 'html-react-parser'
import NoContent from './NoContent'


interface props {
    data:string
}

const Content: React.FC<props> = ({ data }) => {
    return (
      <div>
        {data ? parse(data) : <NoContent />}
      </div>
    );
  };
  
  export default Content;