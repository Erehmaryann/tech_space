import React, { useMemo, useState } from "react";
import { ReportTable } from "./table/table";
import {
  ActivityTableContainer,
  ActivityTableHeader,
  BgContainer,
  ChartContainer,
  H4,
  IconContainer,
  MemberHeader,
  OverContainer,
  ReportContainer,
  Status,
  TableContainer,
} from "./reportStyles";
import { Div, ImgDiv } from "./reportStyles";
import ReportChart from "./chart";
import Image from "next/image";
import Link from "next/link";
import ReactSelect from "../common/select";
import { options } from "./report-dummyData";
import {
  DownloadIcon,
  RightIcon,
  TotalMembersIcon,
  TotalPostsIcon,
} from "./icon";

const Report = () => {
  const [option, setOption] = useState(options);

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

  const activityColumns = useMemo(
    () => [
      {
        Header: "Member’s name",
        accessor: "member_name",
        Cell: ({ cell: { value, row } }) => (
          <Div>
            <ImgDiv>
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
        Header: "Posts",
        accessor: "posts",
      },
    ],
    []
  );

  const activityData = useMemo(
    () => [
      {
        member_name: "Savannah Nguyen",
        posts: 7,
      },
      {
        member_name: "Ereh Maryann",
        posts: 5,
      },
      {
        member_name: "Eleanor Pena",
        posts: 2,
      },
    ],
    []
  );

  return (
    <ReportContainer>
      <h2>Overview</h2>
      <OverContainer>
        <div className="chart-table-container">
          <ChartContainer>
            <div className="first-div">
              <button className="download-button">
                Dowload &nbsp;
                <DownloadIcon />
              </button>

              <ReactSelect
                setOption={setOption}
                options={options}
                placeholder="pick"
              />
            </div>
            <div className="second-div">
              <p>Monthly visits</p>
              <h6>40k Avg Visits</h6>
            </div>
            <ReportChart />
          </ChartContainer>
          <TableContainer>
            <MemberHeader>
              <h4>New Members</h4>
              <Link href="/members">View all</Link>
            </MemberHeader>
            <ReportTable data={data} columns={columns} />
          </TableContainer>
        </div>
        <div className="total-num-post">
          <BgContainer bg="#409DE0">
            <IconContainer className="icon-container" bg="#FFFFFF">
              <TotalMembersIcon />
            </IconContainer>
            <H4 color="#fff">Total members</H4>
            <RightIcon color="#fff" />
          </BgContainer>
          <BgContainer bg="#fff" style={{ marginTop: "25px" }}>
            <IconContainer className="icon-container" bg="#f7f8f8">
              <TotalPostsIcon />
            </IconContainer>
            <H4 color="#374956">Total posts</H4>
            <RightIcon color="#374956" />
          </BgContainer>
          <ActivityTableContainer>
            <ActivityTableHeader>
              <h4>Activity</h4>
              <ReactSelect
                setOption={setOption}
                options={options}
                placeholder="pick"
              />
            </ActivityTableHeader>
            <ReportTable data={activityData} columns={activityColumns} />
          </ActivityTableContainer>
        </div>
      </OverContainer>
    </ReportContainer>
  );
};

export default Report;
