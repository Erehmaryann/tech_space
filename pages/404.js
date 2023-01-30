import styled from "styled-components";
import NotFound from "../components/404/404";
import Head from "next/head";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Tech Space | Not Found</title>
      </Head>
      <Container>
        <NotFound />
        <h3>Page Not Found!!!</h3>
        <p>
          <Link href="/">
            <a>Go Back to Homepage</a>
          </Link>
        </p>
      </Container>
    </>
  );
};
const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  height: 100vh;

  p {
    cursor: pointer;
    color: #00bcd4;
    font-weight: bolder;
    :hover {
      color: blue;
      text-decoration: underline;
    }
  }

  h3 {
    color: black;
  }
`;
export default NotFoundPage;
