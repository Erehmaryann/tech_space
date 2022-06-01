/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styled from 'styled-components';

const Navlink = ({ img, name, variant, href }) => {

    return (
        <ParentDiv>
            {variant === 'link' ? (
                <Link
                    href={href}
                >
                    <a style={{ display: "flex", alignItems: "center" }}>
                        <div className="" style={{ padding: "0.5rem", display: "inline-block" }}>
                            {img}
                        </div>
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
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    .p-1 {
        padding: 0.2rem;
        display: inline-block;
    }
    .ps-4 {
        padding-left: 0.5rem;
        display: inline-block;
        font-weight: bold;
        font-size: 15px;
        color: #409de0
    }
`;

export default Navlink;
