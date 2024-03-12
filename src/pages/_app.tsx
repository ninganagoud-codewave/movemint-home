import type { AppProps } from "next/app";
import Layout from "./layout";
import "../styles/globals.css";
import { useRouter } from 'next/router'; 


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); 
  const path = router.pathname
  console.log(path);
  
  return (
    <Layout>
      <div className={`min-h-screen  px-10 pb-4 ${path==='/'?'background' :'bg-background_white'}`}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
