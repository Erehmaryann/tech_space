import Navlink from "../navlink/navlink";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { SavedIcon, TrendIcon, HomeIcon } from './Icon';

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
        {/* <ul> */}
        <li><Link href="/home"><a>All</a></Link></li>
        <li><Link href="/programming"><a>Programming</a></Link></li>
        <li><Link href="/web-development"><a>Web development</a></Link></li>
        <li><Link href="/networking"><a>Networking</a></Link></li>
        <li><Link href="computer-repair"><a>Computer repair/ maintenance</a></Link></li>
        <li><Link href="android-ios"><a>Android/IOS</a></Link></li>
        <li><Link href="phone-technology"><a>Phone and Technology</a></Link></li>
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

  .link-con {
    padding-bottom: 3rem;
  }

  .active {
    /* border: 1px solid #409de0; */
    border-radius: 5px;

    span {
      color: #409de0;
    }
  }
  .cate-con {
    padding-top: 3rem;
    border-top: 3px solid #F6F6F6;

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
