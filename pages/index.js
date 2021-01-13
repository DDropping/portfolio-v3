import Head from "next/head";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Dropping</title>
        <link rel="icon" href="/icons/icon-144x144.png" />
      </Head>

      <main>
        <H1>hello world</H1>
      </main>
    </div>
  );
}
