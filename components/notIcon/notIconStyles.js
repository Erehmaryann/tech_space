import styled from "styled-components";

export const Div = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.item-count {
		position: absolute;
		font-size: 10px;
		font-weight: bolder;
		right: 8px;
        bottom: 17px;
        background: #CF2A2A;
        border-radius: 50%;
        padding: 1px 4px;
        color: white;
	}
`;
