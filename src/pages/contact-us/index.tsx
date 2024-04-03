import React, { useState, useEffect } from "react";
import {  submitContactUs } from "../api/apiReq";

const heading = "About Us";
const subHeading = "Read about Movemint";

function About() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitClicked, setSubmitClicked] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setLoading] = useState(false);




  const [updatedDate, setUpdatedDate] = useState("");
  const [loader, setLoader] = useState<boolean>(false);

//   useEffect(() => {
//     const getData = async () => {
//       const response: any = await getAboutUs();
//       console.log("response", response?.data);

//       setEmail(response?.data[0]?.content);
//       setUpdatedDate(response?.data[0]?.updatedAt);
//       if (response?.status === 200) setLoader(true);
//     };

//     getData();
//   }, []);

const validateEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    try{
      setSubmitClicked(true)
      if(!email)return setError('Enter valid email ID!')
      if (email&&!validateEmail(email)) return setError('Please enter a valid email address.');
      setLoading(true)
      let res =await submitContactUs({email})
      if(res?.status==200){
          setSuccess('Thank you for contacting us! We’ll get back to you soon')
          setSubmitClicked(false)
          setError('')
          setEmail("")
          setLoading(false)

          setTimeout(()=>{
            setSuccess('')
          },3000)
      }
    }catch(e:any){      
      setError(e.response.data.message??"Something went wrong");

      setTimeout(()=>{
        setSubmitClicked(false)
        setEmail("")
        setLoading(false)
        setError('');
      },3000)
    }
  }

  return (
    <div>
      <div className="flex gap-y-8 align-center justify-center">
       <div className="px-2 py-4 contact-container flex align-center justify-center">
        <div className="px-2 py-4 w-[80%] ">
        <h1 className="header-text">Any queries? <span>
Let’s talk
  </span></h1>
  <p className="contact-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non earum voluptatem distinctio, repudiandae fugit quaerat nesciunt vero voluptatibus incidunt?</p>

  
<form className="max-w-md mx-auto" onSubmit={handleSubmit}>   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      
        <input
        value={email}
        type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Enter your email"  
        onChange={(e)=>{
            setSubmitClicked(false)
            setError('')
            setEmail(e.target.value)
            setSuccess('')
            setLoading(false)
        }}
        />
        <button
        
        disabled={isLoading?true:false}
        type="submit" className="cursor-pointer text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">
          <img src="images/search-icon.svg"/>
        </button>
    </div>
  {isSubmitClicked&&error?
  <div className="error-container">
  <p className="error"><span><img src={"images/cross.svg"}/></span>{error}</p>
  </div>
  :""
  }
  {success?
   <div className="error-container">
    <p className="error success"><span><img src={"images/right.svg"}/></span>{success}</p>
    </div>:''}
</form>
<p className="bottom-label">By clicking send link you agree to receive message.</p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default About;
