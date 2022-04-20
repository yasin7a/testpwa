import React from "react";
import Link from "next/link";
import Head from "next/head";
import Cookies from "js-cookie";
export default function Home() {
  const [installable, setInstallable] = React.useState(false);
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);
  const [delPop, setDelpop] = React.useState(false);
  const [skip, setSkip] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      setInstallable(false);
      console.log("INSTALL: Success");
    });

    Cookies.get("skipPWA") && setSkip(true);
  }, []);
  React.useEffect(() => {
    setLoading(false);
    Cookies.get("skipPWA") && setSkip(true);
  }, []);

  const handleInstallClick = (e) => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  const handleDelete = () => {
    setDelpop(true);
  };
  const handleSkip = () => {
    setDelpop(true);
    var onemin = new Date(new Date().getTime() + 1 * 60 * 1000);
    Cookies.set("skipPWA", "true", { expires: onemin, path: "/" });
    alert("pwa pop up deleted for 2 days");
  };
  console.log("render");
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
  return (
    <>
      <Head>
        <title>Home page done</title>
      </Head>

      <Link href="/about">
        <a> About </a>
      </Link>
      <h2>Home page !!!push</h2>
      {!loading &&
        (skip ||
          (installable && (
            <div
              className="pwa-pop"
              style={{ display: delPop ? "none" : "block" }}
            >
              <h1> install app for better experience</h1>
              <button onClick={handleInstallClick}>INSTALL</button>
              <button onClick={handleDelete}>DELETE</button>
              <button onClick={handleSkip}>SKIP</button>
            </div>
          )))}
    </>
  );
}
