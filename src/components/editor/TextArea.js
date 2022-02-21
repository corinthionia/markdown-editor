import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../contexts/ContentContext';
import { SelectionContext } from '../../contexts/SelectionContext';

const TextArea = () => {
  const [inputText, setInputText] = useState(
    localStorage.getItem('content') || ''
  );
  const { content, setContentHandler } = useContext(ContentContext);
  const { setSelectionStartHandler, setSelectionEndHandler } =
    useContext(SelectionContext);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'UPDATE':
  //       return { inputText: state.inputText };
  //     default:
  //       throw new Error();
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, {
  //   inputText: localStorage.getItem('content') || '',
  // });

  useEffect(() => {
    setContentHandler(inputText);
    localStorage.setItem('content', content);
  }, [inputText]);

  const handleDragText = (e) => {
    setSelectionStartHandler(e.target.selectionStart);
    setSelectionEndHandler(e.target.selectionEnd);
  };

  return (
    <Wrapper
      spellCheck="false"
      onClick={handleDragText}
      onChange={handleInputChange}
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
