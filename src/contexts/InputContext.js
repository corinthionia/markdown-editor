import { createContext, useEffect, useState } from 'react';

export const InputContext = createContext({
  state: { inputText: '' },
  actions: {
    setInputText: () => {},
  },
});

const InputProvider = ({ children }) => {
  const [inputText, setInputText] = useState(
    localStorage.getItem('content') || ''
  );

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('content', inputText);
  }, [inputText]);

  const setInputTextHandler = (inputText) => setInputText(inputText);

  return (
    <InputContext.Provider
      value={{ inputText, handleInputChange, setInputTextHandler }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;
