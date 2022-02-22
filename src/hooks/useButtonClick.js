import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import { SelectionContext } from '../contexts/SelectionContext';

const useButtonClick = (insertedCharStart, insertedCharEnd) => {
  const { inputText, setInputTextHandler } = useContext(InputContext);
  const { selectionStart, selectionEnd } = useContext(SelectionContext);

  const handleClickButton = () => {
    if (selectionEnd - selectionStart !== 0) {
      setInputTextHandler(
        inputText.slice(0, selectionStart) +
          insertedCharStart +
          inputText.slice(selectionStart, selectionEnd) +
          insertedCharEnd +
          inputText.slice(selectionEnd, inputText.length)
      );
    }
  };

  return handleClickButton;
};

export default useButtonClick;
