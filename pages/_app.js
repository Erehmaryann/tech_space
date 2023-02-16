import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import Preloader from "../components/common/preloader/preloader";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);
  return (
    <div style={{ margin: 0 }}>
      {loading ? (
        <>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  success: {
                    style: {
                      background: "#183F3F",
                      color: "white",
                      fontSize: "14px",
                    },
                  },
                  error: {
                    style: {
                      background: "red",
                      color: "white",
                      fontSize: "14px",
                    },
                  },
                }}
              />
            </Layout>
          </Provider>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

// initialize store and wrapper store
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
