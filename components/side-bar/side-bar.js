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
import { Div } from "./sidebarStyles";

const SideBar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [active, setActive] = useState("Home");
  const data = [
    {
      img: <HomeIcon color={active === "Home"} />,
      name: "Home",
      link: "/home",
    },
    {
      img: <SavedIcon color={active === "Saved"} />,
      name: "Saved",
      link: "/saved-topics",
    },
    {
      img: <TrendIcon color={active === "Trending"} />,
      name: "Trending",
      link: "/trending",
    },
  ];

  const adminData = [
    {
      img: <RequestsIcon color={active === "Requests"} />,
      name: "Requests",
      link: "/requests",
    },
    {
      img: <TopicsIcon color={active === "Topics"} />,
      name: "Topics",
      link: "/topics",
    },
    {
      img: <MembersIcon color={active === "Members"} />,
      name: "Members",
      link: "/members",
    },
    {
      img: <ReportsIcon color={active === "Reports"} />,
      name: "Reports",
      link: "/reports",
    },
  ];

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <Div>
      <div className="link-con">
        {path !== "/requests" &&
          path !== "/topics" &&
          path !== "/members" &&
          path !== "/reports" &&
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
        {(path === "/requests" ||
          path === "/topics" ||
          path === "/members" ||
          path === "/reports") &&
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
        {path !== "/requests" &&
          path !== "/topics" &&
          path !== "/members" &&
          path !== "/reports" && (
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
      {(path === "/requests" || path === "/topics" || path === "/reports") && (
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
      {path === "/members" && (
        <div
          style={{
            paddingLeft: "70px",
            paddingTop: "220px",
          }}
        >
          <Navlink variant="link" name="Log-out" href="/" />
        </div>
      )}
    </Div>
  );
};

export default SideBar;
