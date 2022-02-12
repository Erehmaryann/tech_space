import React from "react";
import Layout from "../components/layouts/Layout";
import Preloader from "../components/common/preloader/preloader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
      }
    </>
  );
}

export default MyApp;
