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
    border-radius: 5px;

    span {
      color: #409de0;
    }
  }
  .cate-con {
    padding-top: 3rem;
    border-top: 2px solid #f6f6f6;

    h3 {
      color: #409de0;
    }

    span {
      padding: 8px 0px 8px 15px;
    }
  }
  .contributors {
    h2 {
      padding-left: 1rem;
      color: #374956;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
