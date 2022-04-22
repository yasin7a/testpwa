import "../styles/globals.css";
// import ReactOneSignal from "../components/onSignal";

import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ReactOneSignal /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
