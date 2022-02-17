import { useContext } from 'react';
import styled from 'styled-components';

import useSelect from '../../hooks/useSelect';
import { ContentContext } from '../../contexts/ContentContext';

const TextArea = () => {
  const { content, setContent, handleContentChange } =
    useContext(ContentContext);

  const HandleClickBoldBtn = (e) =>
    useSelect(e, content, setContent, '**', '**');

  return (
    <Wrapper
      spellCheck="false"
      onClick={HandleClickBoldBtn}
      onChange={handleContentChange}
      value={content}
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
