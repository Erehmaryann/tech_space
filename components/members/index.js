import React, { useEffect, useState } from "react";
import { makeApiCall } from "../../lib/api";
import { MembersContainer, StyledTable, ImgDiv, Div } from "./memberStyles";
import { Table } from "./table/table";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Moment from "react-moment";

const Member = () => {
  const [loading, setLoading] = useState(true);
  const [getAllMembers, setGetAllMembers] = useState([]);

  useEffect(() => {
    // make a GET request to retrieve data from the API endpoint
    const fetchData = makeApiCall(`/allMembers`)
      .then((responseData) => {
        setGetAllMembers(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    fetchData;
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Member",
        accessor: "fullname",
        Cell: ({ cell: { value, row } }) => (
          <Div>
            <ImgDiv>
              <Image
                src={row?.original?.profileimg || "/assets/svg/profilepix.svg"}
                alt="dp"
                width={100}
                height={100}
              />
            </ImgDiv>
            <p>{value || "No name"}</p>
          </Div>
        ),
      },
      {
        Header: "Date joined",
        accessor: "date",
        Cell: ({ cell: { value } }) => (
          <Div>
            <Moment format="D MMM YYYY" withTitle>
              {value}
            </Moment>
          </Div>
        ),
      },
      {
        Header: "Last visited",
        accessor: "lastvisit",
        Cell: ({ cell: { value } }) => (
          <Div>
            <Moment format="D MMM YYYY" withTitle>
              {value}
            </Moment>
          </Div>
        ),
      },
      {
        Header: "Contact",
        accessor: "email",
        Cell: ({ cell: { value } }) => <Div>{value || "No email"}</Div>,
      },
    ],
    []
  );

  return (
    <MembersContainer>
      <h2>Members</h2>
      <StyledTable>
        <Table data={getAllMembers} columns={columns} loading={loading} />
      </StyledTable>
    </MembersContainer>
  );
};

export default Member;
