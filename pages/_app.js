import "../styles/globals.css";
import React from "react";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.OneSignal = window.OneSignal || [];
      OneSignal.push(function () {
        OneSignal.init({
          appId: "8e8bea0f-e465-437c-824e-968451c7537c",
          notifyButton: {
            enable: true,
          },
        });
      });
    }
    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
