import styled from "styled-components";

export const Div = styled.div`
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

    span {
      padding: 8px 0px 8px 15px; 
    }
  }
`;
