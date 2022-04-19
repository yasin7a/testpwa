import React from "react";
import Link from "next/link";
import Head from "next/head";
let deferredPrompt;
export default function Home() {
  const [installable, setInstallable] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      console.log("INSTALL: Success");
    });
  }, []);
  const handleInstallClick = (e) => {
    setInstallable(false);
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
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
        <title>Home page</title>
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
