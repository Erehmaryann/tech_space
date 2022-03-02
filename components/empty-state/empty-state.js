import React from 'react';
import styled from 'styled-components';

const EmptyState = ({ text, para }) => {
    return (
        <Div>
            <h4>{text}</h4>
            <small>{para}</small>
        </Div>
    );
};

const Div = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    width: 700px;
    height: 500px;
    background-color: #F5F5F5;
    margin: 16px 0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;

    h5 {
        color: #374956;
    }

    small {
        color: #C4C4C4;
    } 
`;

export default EmptyState;