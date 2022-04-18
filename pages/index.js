import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  let addBtn = React.useRef();

  let [popout, setpopout] = React.useState(false);
  let [ispop, setIspop] = React.useState(false);
  const [promptInstall, setPromptInstall] = React.useState(null);
  let handlePop = () => {
    setpopout(true);
  };

  React.useEffect(() => {
    window.onload = () => {

      // if (
      //   window.matchMedia("(display-mode: standalone)").matches ||
      //   window.navigator.standalone === true
      // ) {
      //   setIspop(true);
      //   setpopout(true);

      //   deferredPrompt = null;
      // }

      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        setPromptInstall(e);
        setpopout(false);
      });

      addBtn.current?.addEventListener("click", () => {
        setpopout(true);
        promptInstall.prompt();
        promptInstall.userChoice.then((choice) => {
          if (choice.outcome === "accepted") {
            console.log("User accepted");
          } else {
            console.log("User dismissed");
          }
        });
        setPromptInstall(null);
      });

      window.addEventListener("appinstalled", () => {
        setPromptInstall(null);
        console.log("PWA was installed");
      });
    };
  }, []);

  return (
    <>
      {popout ? (
        <></>
      ) : (
        <div style={{ display: ispop ? "none" : "block" }}>
          <div
            style={{
              backgroundColor: "blue",
              textAlign: "center",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <h2>For better experience install in mobile!!y</h2>
            <button ref={addBtn}>Install</button>
            <button onClick={handlePop} style={{ marginLeft: "200px" }}>
              ❌
            </button>
          </div>
        </div>
      )}

      <Head>
        <title>Home page</title>
      </Head>

      <Link href="/about">
        <a> About </a>
      </Link>
      <h2>Home page</h2>
    </>
  );
}
