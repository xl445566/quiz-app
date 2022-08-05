import type { NextPage } from "next";
import { InstructionProps, Contents } from "../../types/index";

import Section from "../../common/components/Section";
import Title from "../../common/components/Title";
import Li from "../../common/components/Li";
import Strong from "../../common/components/Strong";

const Instrunction: NextPage<InstructionProps> = ({ data }) => {
  return (
    <Section>
      <Title>
        <Strong>{data.title}</Strong>
      </Title>

      <ul>
        {data.contents.map((value: Contents) => {
          return <Li key={value.id}>{value.content}</Li>;
        })}
      </ul>
    </Section>
  );
};

export default Instrunction;
