/* eslint-disable @next/next/no-img-element */
// import ActiveLink from '../common/activelink/activelink';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navlink = ({ img, name, variant, href }) => {
    const [active, setActive] = useState("Home");

    const handleClick = (name) => {
        setActive(name);
    };

    return (
        <ParentDiv>
            {variant === 'link' ? (
                <Link
                    href={href}
                    onClick={() => handleClick("Home")}
                    className={active === name ? 'active' : ''}
                >
                    <a style={{ display: "flex", alignItems: "center" }}>
                        <img src={img} alt={`${name}-img`} style={{ padding: "0.5rem", display: "inline-block" }} />
                        <span style={{ paddingLeft: "0.5rem", display: "inline-block", fontWeight: "bold" }}>{name}</span>
                    </a>
                </Link>
            ) : (
                <Div>
                    <img src={img} alt={`${name}-img`} className='p-1' />
                    <span className='ps-4'>{name}</span>
                </Div>
            )}
        </ParentDiv>
    );
};

const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .active {
        color: "#409DE0";
    }
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    &.p-1 {
        padding: 0.5rem;
        display: inline-block;
    }
    &.ps-4 {
        padding-left: 1.5rem;
        display: inline-block;
        font-weight: bold;
    }
`;

export default Navlink;
