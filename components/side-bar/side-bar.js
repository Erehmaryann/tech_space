import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  SavedIcon,
  TrendIcon,
  HomeIcon,
  RequestsIcon,
  TopicsIcon,
  MembersIcon,
  ReportsIcon,
} from "./Icon";
import Navlink from "../navlink/navlink";
import Spinner from "../common/spinner/spinner";
import { makeApiCall } from "../../lib/api";
import { categoriesdata } from "./data";
import Cookies from "js-cookie";
import { Div } from "./sidebarStyles";

const SideBar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [active, setActive] = useState("Home");
  const [loading, setLoading] = useState(true);
  const [activeMembers, setActiveMembers] = useState([]);

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
  }, []);

  // logout
  const handleLogout = () => {
    Cookies.remove("user_token");
    Cookies.remove("user_details");
    router.push("/");
  };

  const data = [
    {
      img: <HomeIcon color={active === "Home"} />,
      name: "Home",
      link: "/dashboard/home",
    },
    {
      img: <SavedIcon color={active === "Saved"} />,
      name: "Saved",
      link: "/dashboard/saved-topics",
    },
    {
      img: <TrendIcon color={active === "Trending"} />,
      name: "Trending",
      link: "/dashboard/trending",
    },
  ];

  const adminData = [
    {
      img: <RequestsIcon color={active === "Requests"} />,
      name: "Requests",
      link: "/dashboard/requests",
    },
    {
      img: <TopicsIcon color={active === "Topics"} />,
      name: "Topics",
      link: "/dashboard/topics",
    },
    {
      img: <MembersIcon color={active === "Members"} />,
      name: "Members",
      link: "/dashboard/members",
    },
    {
      img: <ReportsIcon color={active === "Reports"} />,
      name: "Reports",
      link: "/dashboard/reports",
    },
  ];

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <Div>
      <div className="link-con">
        {path !== "/dashboard/requests" &&
          path !== "/dashboard/topics" &&
          path !== "/dashboard/members" &&
          path !== "/dashboard/reports" &&
          data.map((item, index) => (
            <div
              key={index}
              className={active === item.name ? "active" : ""}
              onClick={() => handleClick(item.name)}
            >
              <Navlink
                href={item.link}
                variant="link"
                img={item.img}
                name={item.name}
              />
            </div>
          ))}
        {(path === "/dashboard/requests" ||
          path === "/dashboard/topics" ||
          path === "/dashboard/members" ||
          path === "/dashboard/reports") &&
          adminData.map((item, index) => (
            <div
              key={index}
              className={active === item.name ? "active" : ""}
              onClick={() => handleClick(item.name)}
            >
              <Navlink
                href={item.link}
                variant="link"
                img={item.img}
                name={item.name}
              />
            </div>
          ))}
      </div>
      <div className="cate-con">
        {path !== "/dashboard/requests" &&
          path !== "/dashboard/topics" &&
          path !== "/dashboard/members" &&
          path !== "/dashboard/reports" && (
            <>
              <h3>CATEGORIES</h3>
              <div className="cate-link-con">
                {categoriesdata.map((item, index) => (
                  <div
                    key={index}
                    className={active === item.name ? "active" : ""}
                    onClick={() => handleClick(item.name)}
                  >
                    <Navlink
                      href={item.link}
                      variant="link"
                      img={item.img}
                      name={item.name}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
      {(path === "/dashboard/requests" ||
        path === "/dashboard/topics" ||
        path === "/dashboard/reports") && (
        <div className="contributors">
          <h2>Active Members</h2>
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
            activeMembers.map((data) => (
              <Navlink
                key={data?._id}
                variant="div"
                img={data?.profileimg}
                name={data?.name}
              />
            ))
          )}
        </div>
      )}
      {path === "/dashboard/members" && (
        <div
          style={{
            paddingLeft: "70px",
            paddingTop: "220px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          <span>Log-out</span>
        </div>
      )}
    </Div>
  );
};

export default SideBar;
