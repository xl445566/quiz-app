import styled from "styled-components";

const Li = styled.li`
  padding: 10px;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.8rem;
  }
`;

export default Li;
