import React from "react";
import { MembersContainer, StyledTable, ImgDiv, Div } from "./memberStyles";
import { Table } from "./table/table";
import Image from "next/image";

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
              <Image
                src="/assets/svg/profilepix.svg"
                alt="dp"
                width={100}
                height={100}
              />
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
        member: "Savannah Nguyen",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Jenny Wilson",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Annette Black",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Kathryn Murphy",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Cameron Williamson",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Kristin Watson",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
      },
      {
        member: "Eleanor Pena",
        date_joined: "1/15/12",
        last_visited: "8/30/14",
        contact: "achurebeccatakim@gmail.com",
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
