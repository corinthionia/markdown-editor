import { createContext, useState } from 'react';

export const InputContext = createContext({
  state: { inputText: '' },
  actions: {
    setInputText: () => {},
  },
});

const InputProvider = ({ children }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

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
