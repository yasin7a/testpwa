import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  let addBtn = React.useRef();
  let [popout, setpopout] = React.useState(false);
  let [ispop, setIspop] = React.useState(false);
  let handlePop = () => {
    setpopout(true);
  };

  React.useLayoutEffect(() => {
    window.onload = () => {
      let deferredPrompt;

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
        deferredPrompt = e;
        listenToUserAction();
      });
      function listenToUserAction() {
        addBtn.current?.addEventListener("click", actions);
      }

      let actions = () => {
        setpopout(true);

        deferredPrompt?.prompt();
        deferredPrompt?.userChoice.then((choice) => {
          if (choice.outcome === "accepted") {
            console.log("User accepted");
            setIspop(true);
          } else {
            console.log("User dismissed");
          }
        });
        deferredPrompt = null;
      };
      window.addEventListener("appinstalled", () => {
        deferredPrompt = null;
        setIspop(true);
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
            <h2>For better experience install in mobile</h2>
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
