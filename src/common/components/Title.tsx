import styled, { TitleProps } from "styled-components";

const Title = styled.h1<TitleProps>`
  padding: 20px;
  color: var(--point-color);
  font-size: ${(props) => {
    if (!props.size) {
      return "1.0rem";
    } else {
      return `${props.size}px`;
    }
  }};

  @media ${(props) => props.theme.desktop} {
    font-size: 2rem;
  }
`;

export default Title;
