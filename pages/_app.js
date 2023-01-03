import "../styles/globals.css";
import Navigation from "../components/navigation/navigation";

export default function App({ Component, pageProps }) {
  
  return(<>
    <Navigation></Navigation>
    <Component {...pageProps} />
  </>
  )
}
