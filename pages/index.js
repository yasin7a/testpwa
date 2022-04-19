import React from "react";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  const [installable, setInstallable] = React.useState(false);
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);
  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      console.log("INSTALL: Success");
    });
  }, []);
  const handleInstallClick = (e) => {
    setInstallable(false);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };
  console.log("render");
  return (
    <>
      <Head>
        <title>Home page done</title>
      </Head>

      <Link href="/about">
        <a> About </a>
      </Link>
      <h2>Home page</h2>
      {installable && (
        <button className="install-button" onClick={handleInstallClick}>
          INSTALL ME
        </button>
      )}
    </>
  );
}
