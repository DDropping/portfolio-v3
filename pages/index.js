import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/navbar";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Dropping</title>
        <link rel="icon" href="/icons/icon-144x144.png" />
      </Head>

      <main>
        <Navbar />
        <Header />
      </main>
    </div>
  );
}
