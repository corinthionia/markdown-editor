import styled from 'styled-components';
import COLORS from '../../constants/COLORS';

import { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { SelectionContext } from '../../contexts/SelectionContext';

const Buttons = () => {
  const { content, setContentHandler } = useContext(ContentContext);
  const { selectionStart, selectionEnd } = useContext(SelectionContext);

  const handleClickBoldBtn = () => {
    if (selectionEnd - selectionStart !== 0) {
      setContentHandler(
        content.slice(0, selectionStart) +
          '**' +
          content.slice(selectionStart, selectionEnd) +
          '**' +
          content.slice(selectionEnd, content.length)
      );
    }
  };

  return (
    <Wrapper>
      <Btn onClick={handleClickBoldBtn}>B</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 4%;
  border-bottom: 1px solid ${COLORS.border};
`;

const Btn = styled.button`
  width: 4%;
  height: 100%;

  background: none;
  border: none;
  border-right: 1px solid ${COLORS.border};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export default Buttons;
