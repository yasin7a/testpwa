import React from "react";

class ReactOneSignal extends React.Component {
  oneSignal = () => {
    return {
      __html: `window.OneSignal = window.OneSignal || []; 
      OneSignal.push(function() { OneSignal.init({ appId: "8e8bea0f-e465-437c-824e-968451c7537c" }); });`,
    };
  };

  render = () => {
    return (
      <>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
        <script dangerouslySetInnerHTML={this.oneSignal()} />
      </>
    );
  };
}

export default ReactOneSignal;
