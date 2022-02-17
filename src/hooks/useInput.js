import { useState } from 'react';

const useInput = (initialText) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return [inputText, setInputText, handleInputChange];
};

export default useInput;
