import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <Link href="/">
        <a> Home </a>
      </Link>
      <h2>About page</h2>
    </>
  );
}
