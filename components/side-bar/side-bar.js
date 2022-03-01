import Navlink from "../navlink/navlink";
import styled from "styled-components";
import Link from "next/link";
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
      <div className="cate-con">
        <h3>CATEGORIES</h3>
        {/* <ul> */}
        <li><Link href="/home"><a>All</a></Link></li>
        <li><Link href=""><a>Programming</a></Link></li>
        <li><Link href=""><a>Web development</a></Link></li>
        <li><Link href=""><a>Networking</a></Link></li>
        <li><Link href=""><a>Computer repair/ maintenance</a></Link></li>
        <li><Link href=""><a>Android/IOS</a></Link></li>
        <li><Link href=""><a>Phone and Technology</a></Link></li>
        {/* </ul> */}
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding: 3rem 1.5rem;
  height: 50vh;
  width: 25%;
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
  .active {
    border: 1px solid #409de0;
    padding: 2px 5px;
    border-radius: 5px;

    /* path {
      fill: #409de0
    } */

    span {
      color: #409de0;
    }
  }
  .cate-con {
    padding-top: 80px;

    h3 {
      color: #409de0;
    }

    li {
      list-style-type: none;
      padding: 8px 0px 8px 15px; 
    }
  }
`;

export default SideBar;
