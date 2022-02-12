import React from "react";
import Layout from "../components/layouts/Layout";
import Preloader from "../components/common/preloader/preloader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
    // setLoading(true);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;
