import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Layout = styled.section`
  max-width: 1525px;
  padding: 0 75px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Dropping</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Layout>
          <About />
          <Skills />
          <Projects />
        </Layout>
        <Contact />
      </main>
    </div>
  );
}
