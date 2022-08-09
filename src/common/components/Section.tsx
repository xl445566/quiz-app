import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 40%;
  min-height: 40vh;
  text-align: center;

  @media ${(props) => props.theme.mobile} {
    ul {
      font-size: 15px;
    }
  }
  @media ${(props) => props.theme.desktop} {
    justify-content: center;
    ul {
      font-size: 25px;
    }
  }
`;

export default Section;
