import styled from 'styled-components';
import { useContext, useState } from 'react';
import { ContentContext } from '../../contexts/ContentContext';

import { SelectionContext } from '../../contexts/SelectionContext';

const TextArea = () => {
  const [inputText, setInputText] = useState('');
  const { content, setContentHandler } = useContext(ContentContext);

  const {
    selectionStart,
    selectionEnd,
    setSelectionStartHandler,
    setSelectionEndHandler,
  } = useContext(SelectionContext);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDragText = (e) => {
    const selectedObj = window.getSelection();
    // let selected = selectedObj.getRangeAt(0).toString(); // 선택한 text 출력

    const { baseOffset, extentOffset } = selectedObj;
    console.log(baseOffset, extentOffset);

    if (baseOffset < extentOffset) {
      setSelectionStartHandler(baseOffset);
      setSelectionEndHandler(extentOffset);
    } else {
      setSelectionStartHandler(extentOffset);
      setSelectionEndHandler(baseOffset);
    }

    console.log(selectionStart, selectionEnd);
    console.log('----------------');
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      console.log('엔터');
      console.log('content: ', content);

      setContentHandler(inputText);
    }
  };

  return (
    <Wrapper onKeyPress={handleEnterPress}>
      {/* <Textarea
        value={inputText}
        spellCheck="false"
        onClick={handleDragText}
        onChange={handleInputChange}
      /> */}
      <pre onClick={handleDragText} onChange={handleInputChange}>
        <h2>{'이렇게 해도 된다는 건가   띄쓰  오??'}</h2>
      </pre>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 92%;
  height: 89%;
  padding: 4%;

  font-size: 16px;
  line-height: 28px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 20px;
  border: none;
  outline: none;
  resize: none;

  background: pink;
`;

export default TextArea;
