import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Space</title>
        <meta name="description" content="Tech Space Programming " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Welcome To Tech-space</h1>
      </Main>
    </div>
  );
}
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
