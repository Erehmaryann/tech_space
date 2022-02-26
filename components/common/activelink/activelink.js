import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || "";
    // pages/[slug] wil be matched via props.as
    // pages/home.js will be matched via props.href
    const className = asPath === props.href || asPath === props.as ?
        // .trim removes the space between the className and the activeClassName
        `${childClassName} ${activeClassName}`.trim() : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className
            })}
        </Link>
    );
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired
};

export default ActiveLink;
