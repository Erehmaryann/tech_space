import React from "react";
import Layout from "../components/layouts/Layout";
import Preloader from "../components/common/preloader/preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
    // setLoading(true);
  }, []);
  return (
    <div style={{ margin: 0 }}>
      {loading ? (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default MyApp;
