import type { NextPage } from "next";
import { DotProps } from "styled-components";

import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }
  50% { 
    margin-bottom: 5px;
  }
  100% { 
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot = styled.div<DotProps>`
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 2.5px;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loading: NextPage = () => {
  return (
    <Wrapper>
      <h4>불러오는 중</h4>

      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </Wrapper>
  );
};

export default Loading;
