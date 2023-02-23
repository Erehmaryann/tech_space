import React, { useState, useEffect } from "react";
import Head from "next/head";
import Request from "../../components/requests";
import styled from "styled-components";
import { useUser } from "../../helper/get-user";
import { makeApiCall } from "../../lib/api";

const Requests = () => {
  const user = useUser();
  console.log(user, "user.....");

  // const getUsers = async () => {
  // const response = makeApiCall("/getuser", "GET");
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    makeApiCall(`/getuser/${user._id}`)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user._id]);

  console.log(data, "daat");

  return (
    <>
      <Head>
        <title>Tech Space | Requests</title>
      </Head>
      <Container>
        <Request />
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #e5e5e5;
  width: 50%;
`;

export default Requests;
