import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  height: 41px;
  background: #ffffff;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0px 5px 8px rgba(64, 157, 224, 0.15);
  background: ${(props) => (props.isGoogleSignIn ? "#fff" : "#409DE0")};
  color: ${(props) => (props.isGoogleSignIn ? "#109FEF" : "#fff")};
  border: none;

  span {
    margin-right: 10px;
  }
`;
