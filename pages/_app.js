import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/banner.css";
import "../styles/navbar.css";
import "../styles/skillset.css";
import "../styles/projects.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
