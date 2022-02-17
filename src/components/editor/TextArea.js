import { useContext, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useSelect from '../../hooks/useSelect';

const TextArea = () => {
  const [inputText, setInputText, handleInputChange] = useInput('');

  const HandleClickBoldBtn = (e) =>
    useSelect(e, inputText, setInputText, '**', '**');

  return (
    <Wrapper
      spellCheck="false"
      onClick={HandleClickBoldBtn}
      onChange={handleInputChange}
      value={inputText}
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
