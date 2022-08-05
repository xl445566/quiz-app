import type { NextPage } from "next";
import { DescriptionProps } from "../../types/index";

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
`;

const Title = styled.h1`
  padding: 20px;
`;

const List = styled.li`
  padding: 5px;
`;

const Description: NextPage<DescriptionProps> = ({ description }) => {
  return (
    <Section>
      <Title>{description.title}</Title>

      <ul>
        {description.contents.map((value) => {
          return <List key={value.id}>{value.content}</List>;
        })}
      </ul>
    </Section>
  );
};

export default Description;
