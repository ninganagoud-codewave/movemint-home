import React, { useState ,useEffect} from "react";
import { useRouter } from 'next/router'; 

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter(); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const pathToActiveLink = (path: string) => {
      switch (path) {
        case "/about":
          return "About Us";
        case "/faq":
          return "FAQs";
        case "/policy":
          return "Privacy Policy";
        case "/terms":
          return "Terms & Conditions";
          case "/":
            return "Home";
        default:
          return ""; 
      }
    };

    
    const activeLinkText = pathToActiveLink(router.pathname);
    setActiveLink(activeLinkText);
  }, [router.pathname]);

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    let path = "";
    switch (link) {
      case "About Us":
        path = "/about";
        break;
      case "FAQs":
        path = "/faq";
        break;
      case "Privacy Policy":
        path = "/policy";
        break;
        case "Contact Us":
          path = "/contact-us";
          break;
      case "Terms & Conditions":
        path = "/terms";
        break;
      case "Home":
        path='/'
        break;
      default:
        path = "/";
        break;
    }
    router.push(path); // Navigate to the specified path
  };

  return (
    <nav className="header-container">
      <div className="flex justify-between items-center px-6 py-4 cursor-pointer header-container">
        <div onClick={() => handleSetActiveLink("")}>
          <img
            src={"/images/movemintLogo.svg"}
            alt="Movemint Logo"
            style={{ height: "4rem", width: "115px" }}
          />
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex gap-6 items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {["Home","About Us", "FAQs", "Privacy Policy", "Terms & Conditions"].map(
            (link) => (
              <div
                key={link}
                className={`cursor-pointer font-jost font-normal text-base ${
                  activeLink === link ? "active-border" : ""
                }`}
                onClick={() => handleSetActiveLink(link)}
              >
                {link}
              </div>
            )
          )}
        </div>
        <div className="hidden md:block border-light_blue rounded-lg border px-8 py-3 cursor-pointer font-jost text-light_blue text-base font-semibold contact-us-btn" onClick={()=>handleSetActiveLink("Contact Us")}>
          Contact Us
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-light_blue rounded-lg border px-8 py-3 cursor-pointer font-jost text-light_blue text-base font-semibold m-6 border-solid ">
          Contact Us
        </div>
      )}
    </nav>
  );
};

export default Nav;
