import React, { useState } from "react";
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
import { categoriesdata, conData } from "./data";
import Cookies from "js-cookie";

import { Div } from "./sidebarStyles";

const SideBar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [active, setActive] = useState("Home");
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
          {conData.map((data, index) => (
            <Navlink
              key={index}
              variant="div"
              img={data.img}
              name={data.name}
            />
          ))}
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
