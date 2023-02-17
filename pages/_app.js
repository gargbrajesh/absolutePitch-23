import { useEffect } from 'react';
import '../styles/globals.css'
import {deleteCookie } from 'cookies-next';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    alert("Your volume level will be set to maximum if you refresh. You will have to reset the volume level. ");
   const jssStyles = document.querySelector('#jss-server-side');
   if(jssStyles){
    jssStyles.parentElement.removeChild(jssStyles);
   }
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
