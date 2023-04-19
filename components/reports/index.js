/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useMemo, useState, useEffect } from "react";
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
import Link from "next/link";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
// import ReactSelect from "../common/select";
import Moment from "react-moment";
// import { options } from "./report-dummyData";
import {
  DownloadIcon,
  RightIcon,
  TotalMembersIcon,
  TotalPostsIcon,
} from "./icon";

const Report = () => {
  // const [option, setOption] = useState(options);
  // const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [activeMembers, setActiveMembers] = useState([]);
  const [membersStat, setMembersStat] = useState([]);
  const [monthlyStat, setMonthlyStat] = useState([]);

  useEffect(() => {
    const getActiveMembers = makeApiCall(`/topContributors`)
      .then((responseData) => {
        setActiveMembers(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    getActiveMembers;

    const getMembersStatus = makeApiCall(`/stats/users`)
      .then((responseData) => {
        setMembersStat(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    getMembersStatus;

    const getMonthStatus = makeApiCall(`/stats/months`)
      .then((responseData) => {
        setMonthlyStat(responseData?.message);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });

    getMonthStatus;
  }, []);

  const registeredUsers = monthlyStat.map((month) => month?.registeredUsers);

  const columns = useMemo(
    () => [
      {
        Header: "Member’s name",
        accessor: "fullname",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <Status status={value}>{value ? "Online" : "Offline"}</Status>
        ),
      },
      {
        Header: "Date registered",
        accessor: "date",
        Cell: ({ cell: { value } }) => (
          <Div>
            <Moment format="DD MMMM YYYY" withTitle>
              {value}
            </Moment>
          </Div>
        ),
      },
    ],
    []
  );

  const activityColumns = useMemo(
    () => [
      {
        Header: "Member’s name",
        accessor: "name",
        Cell: ({ cell: { value, row } }) => (
          <Div>
            <ImgDiv>
              <img
                src={row?.original?.profileimg || "/assets/svg/profilepix.svg"}
                alt="dp"
                width={"30px"}
                height={"30px"}
              />
            </ImgDiv>
            <p>{value}</p>
          </Div>
        ),
      },
      {
        Header: "Posts",
        accessor: "count",
      },
    ],
    []
  );

  // const handleDownload = () => {
  //   const canvas = chartRef.current.chartInstance.canvas;
  //   const dataUrl = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");
  //   link.download = "chart.png";
  //   link.href = dataUrl;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

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

              {/* <ReactSelect
                setOption={setOption}
                options={options}
                placeholder="pick"
              /> */}
            </div>
            <div className="second-div">
              <p>Monthly visits</p>
              <h6>40k Avg Visits</h6>
            </div>
            <ReportChart data={registeredUsers && registeredUsers} />
          </ChartContainer>
          <TableContainer>
            <MemberHeader>
              <h4>New Members</h4>
              <Link href="/dashboard/members">View all</Link>
            </MemberHeader>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}
              >
                <Spinner color="#409de0" />
              </div>
            ) : (
              <ReportTable data={membersStat} columns={columns} />
            )}
          </TableContainer>
        </div>
        <div className="total-num-post">
          <a href="/dashboard/requests">
            <BgContainer bg="#409DE0">
              <IconContainer className="icon-container" bg="#FFFFFF">
                <TotalMembersIcon />
              </IconContainer>
              <H4 color="#fff">Total members</H4>
              <RightIcon color="#fff" />
            </BgContainer>
          </a>
          <a href="/dashboard/requests">
            <BgContainer bg="#fff" style={{ marginTop: "25px" }}>
              <IconContainer className="icon-container" bg="#f7f8f8">
                <TotalPostsIcon />
              </IconContainer>
              <H4 color="#374956">Total posts</H4>
              <RightIcon color="#374956" />
            </BgContainer>
          </a>
          <ActivityTableContainer>
            <ActivityTableHeader>
              <h4>Activity</h4>
            </ActivityTableHeader>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}
              >
                <Spinner color="#409de0" />
              </div>
            ) : (
              <ReportTable data={activeMembers} columns={activityColumns} />
            )}
          </ActivityTableContainer>
        </div>
      </OverContainer>
    </ReportContainer>
  );
};

export default Report;
