/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ParentDiv, Div } from './navlinkStyles';

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

export default Navlink;
