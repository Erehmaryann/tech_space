import { Div } from "./sidebarStyles";
import React, { useState } from "react";
import Navlink from "../navlink/navlink";
import { SavedIcon, TrendIcon, HomeIcon } from './Icon';

import { categoriesdata } from "./data";

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const data = [
    {
      img: <HomeIcon color={active === 'Home'} />,
      name: "Home",
      link: "/home",
    },
    {
      img: <SavedIcon color={active === 'Saved'} />,
      name: "Saved",
      link: "/saved-topics",
    },
    {
      img: <TrendIcon color={active === 'Trending'} />,
      name: "Trending",
      link: "/trending",
    },
  ];

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <Div>
      <div className="link-con">
        {data.map((item, index) => (
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
          ))
          }
        </div>
      </div>
    </Div>
  );
};

export default SideBar;
