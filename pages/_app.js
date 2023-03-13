import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import Preloader from "../components/common/preloader/preloader";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary";
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
        <GoogleOAuthProvider
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
        >
          <Provider store={store}>
            <Layout>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
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
        </GoogleOAuthProvider>
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
