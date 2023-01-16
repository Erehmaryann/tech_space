import React, { useMemo } from "react";
import { ReportTable } from "./table/table";
import {
  MemberHeader,
  OverContainer,
  ReportContainer,
  Status,
  TableContainer,
} from "./reportStyles";
import ReportChart from "./chart";
import Link from "next/link";

const Report = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Member’s name",
        accessor: "member_name",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value, row } }) => (
          <Status status={value}>{value}</Status>
        ),
      },
      {
        Header: "Date registered",
        accessor: "date_joined",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        member_name: "Savannah Nguyen",
        status: "Online",
        date_joined: "2nd May 2022",
      },
      {
        member_name: "Ereh Maryann",
        status: "Online",
        date_joined: "18th Aug 2022",
      },
      {
        member_name: "Eleanor Pena",
        status: "Offline",
        date_joined: "18th Nov 2022",
      },
    ],
    []
  );

  return (
    <ReportContainer>
      <h2>Overview</h2>
      <OverContainer>
        <div className="chart-table-container">
          <ReportChart />
          <TableContainer>
            <MemberHeader>
              <h4>New Members</h4>
              <Link href="/members">View all</Link>
            </MemberHeader>
            <ReportTable data={data} columns={columns} />
          </TableContainer>
        </div>
        <div className="total-num-post"></div>
      </OverContainer>
    </ReportContainer>
  );
};

export default Report;
