import Head from "next/head";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <H1>hello world</H1>
      </main>
    </div>
  );
}
