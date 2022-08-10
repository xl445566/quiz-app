import type { NextPage } from "next";
import { DotProps } from "styled-components";

import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }
  50% { 
    margin-bottom: 3px;
  }
  100% { 
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  h5 {
    color: var(--pointer-color);
  }
`;

const Dot = styled.div<DotProps>`
  width: 3px;
  height: 3px;
  margin: 0 1.5px;
  border-radius: 50%;
  background-color: var(--point-color);

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loading: NextPage = () => {
  return (
    <Wrapper>
      <h5>불러오는 중</h5>

      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </Wrapper>
  );
};

export default Loading;
