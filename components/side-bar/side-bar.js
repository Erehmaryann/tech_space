import Navlink from "../Navlink/navlink";
import styled from "styled-components";
import { useState } from "react";

const data = [
  {
    img: "/assets/svg/home.svg",
    name: "Home",
    link: "/home",
  },
  {
    img: "/assets/svg/saved.svg",
    name: "Saved",
    link: "/home",
  },
  {
    img: "/assets/svg/trending.svg",
    name: "Trending",
    link: "/home",
  },
];

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <Div>
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
      <div className="">
        <h3>CATEGORIES</h3>
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding: 3rem 1rem;
  width: 200px;
  .active {
    border: 1px solid #409de0;
    padding: 2px 5px;
    border-radius: 5px;

    path {
      fill: #409de0
    }

    span {
      color: #409de0;
    }
  }
`;

export default SideBar;
