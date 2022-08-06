import type { NextPage } from "next";

import Section from "../../src/common/components/Section";
import Title from "../../src/common/components/Title";
import Strong from "../../src/common/components/Strong";

const Note: NextPage = () => {
  return (
    <>
      <Section>
        <Title>
          <Strong>오답노트</Strong>
        </Title>
      </Section>
    </>
  );
};

export default Note;
