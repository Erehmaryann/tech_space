import styled from 'styled-components';

export const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Div = styled.div`
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
