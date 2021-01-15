import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";

const Layout = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

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
        <Layout>
          <About />
          <Skills />
          <Projects />
        </Layout>
      </main>
    </div>
  );
}
