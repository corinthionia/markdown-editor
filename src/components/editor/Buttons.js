import { useContext } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/COLORS';

import { InputContext } from '../../contexts/InputContext';
import { SelectionContext } from '../../contexts/SelectionContext';

const Buttons = () => {
  const { inputText, setInputTextHandler } = useContext(InputContext);
  const { selectionStart, selectionEnd } = useContext(SelectionContext);

  const handleClickBoldBtn = () => {
    if (selectionEnd - selectionStart !== 0) {
      setInputTextHandler(
        inputText.slice(0, selectionStart) +
          '**' +
          inputText.slice(selectionStart, selectionEnd) +
          '**' +
          inputText.slice(selectionEnd, inputText.length)
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
