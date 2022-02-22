import { useContext } from 'react';
import styled from 'styled-components';

import { InputContext } from '../../contexts/InputContext';
import { SelectionContext } from '../../contexts/SelectionContext';

const TextArea = () => {
  const { inputText, handleInputChange } = useContext(InputContext);
  const { setSelectionStartHandler, setSelectionEndHandler } =
    useContext(SelectionContext);

  const handleDragText = (e) => {
    setSelectionStartHandler(e.target.selectionStart);
    setSelectionEndHandler(e.target.selectionEnd);
  };

  return (
    <Wrapper
      value={inputText}
      spellCheck="false"
      onClick={handleDragText}
      onChange={handleInputChange}
    ></Wrapper>
  );
};

const Wrapper = styled.textarea`
  width: 92%;
  height: 89%;
  padding: 4%;

  border: none;
  resize: none;

  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

export default TextArea;
