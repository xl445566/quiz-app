import type { NextPage } from "next";
import { RecordProps } from "../../types/index";

import styled from "styled-components";

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 50vh;
  border: 1px dotted var(--light-gray-color);
  color: var(--dark-gray-color);
`;

const ItemList = styled.article`
  min-width: 80vw;
  max-width: 80vw;
  min-height: 50vh;
  max-height: 50vh;
  border: 2px solid var(--point-color);
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Item = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 30px;
  border-bottom: 1px solid var(--light-gray-color);
  line-height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const Record: NextPage<RecordProps> = ({ data, onClick }) => {
  return (
    <>
      {data.ids.length ? (
        <ItemList data-cy="memoList">
          {data.ids.reverse().map((value, index) => {
            return (
              <Item
                data-cy={"memo" + index}
                key={value}
                onClick={onClick}
                data-full-name={value}
              >
                {value}
              </Item>
            );
          })}
        </ItemList>
      ) : (
        <Empty data-cy="empty">작성된 오답 노트가 없습니다.</Empty>
      )}
    </>
  );
};

export default Record;
