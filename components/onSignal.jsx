

import React from "react";
//************ for _document page ************************************/

// class ReactOneSignal extends React.Component {
//   oneSignal = () => {
//     return {
//       __html: `window.OneSignal = window.OneSignal || [];
//       OneSignal.push(function() { OneSignal.init({ appId: "8e8bea0f-e465-437c-824e-968451c7537c" }); });`,
//     };
//   };

//   render = () => {
//     return (
//       <>
//         <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
//         <script dangerouslySetInnerHTML={this.oneSignal()} />
//       </>
//     );
//   };
// }

// export default ReactOneSignal;


//************ for _app page ************************************/









import Script from "next/script";
class ReactOneSignal extends React.Component {
  render = () => {
    return (
      <>
        <Script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          strategy="beforeInteractive"
        />
        <Script
          id="my-script"
          dangerouslySetInnerHTML={{
            __html: `window.OneSignal = window.OneSignal || []; 
      OneSignal.push(function() { OneSignal.init({ appId: "8e8bea0f-e465-437c-824e-968451c7537c" }); });`,
          }}
        />
      </>
    );
  };
}

export default ReactOneSignal;
