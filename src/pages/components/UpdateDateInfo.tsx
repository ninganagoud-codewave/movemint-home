import React from 'react'

interface props {
    updatedDate ?:string
}
function UpdateDateInfo(props:props) {
    
 const {updatedDate} = props

 
 const dateObject = new Date(updatedDate ? updatedDate:'');

 const options :any = { year: 'numeric', month: 'long', day: 'numeric' };
    
 const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return (
    <div className='flex justify-center'>
       <div className='bg-light_blue rounded-3xl inline-block'>
            <p className="text-white font-jost text-base font-normal py-1.5 px-6">Updated on {updatedDate ? formattedDate : 'N/A'}</p>
       </div>
    </div>
  )
}

export default UpdateDateInfo
