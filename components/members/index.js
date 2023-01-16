import React from "react";
import { MembersContainer, StyledTable } from "./memberStyles";
import { Table } from "./table/table";
import styled from "styled-components";

const ImgDiv = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid red;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 20px;
  }
`;
const Member = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Member",
        accessor: "member",
        Cell: ({ cell: { value, row } }) => (
          <Div>
            <ImgDiv
            // onClick={() =>
            //   // history.push(`/dashboard/allmerchants/${row.original.id}`)
            //   // handleApproval("approve")
            // }
            >
              {/* <p className="text-[#EF8A0E]">{value}</p> */}
              {/* <div className="merchant-name__span-dot"></div> {value} */}
            </ImgDiv>
            <p>{value}</p>
          </Div>
        ),
      },
      {
        Header: "Date joined",
        accessor: "date_joined",
      },
      {
        Header: "Last visited",
        accessor: "last_visited",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
      {
        member: "Bala Blu",
        date_joined: "5115EW231",
        last_visited: "500",
        contact: "500",
      },
    ],
    []
  );

  // const Styled.div``
  return (
    <MembersContainer>
      <h2>Members</h2>
      <StyledTable>
        <Table data={data} columns={columns} />
      </StyledTable>
    </MembersContainer>
  );
};

export default Member;
