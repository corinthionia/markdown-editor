import { createContext, useState } from 'react';

export const SelectionContext = createContext({
  state: { selectionStart: 0, selectionEnd: 0 },
  action: {
    setSelectionStart: () => {},
    setSelectionEnd: () => {},
  },
});

const SelectionContextProvider = ({ children }) => {
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const setSelectionStartHandler = (selectionStart) =>
    setSelectionStart(selectionStart);
  const setSelectionEndHandler = (selectionEnd) =>
    setSelectionEnd(selectionEnd);

  return (
    <SelectionContext.Provider
      value={{
        selectionStart,
        selectionEnd,
        setSelectionStartHandler,
        setSelectionEndHandler,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContextProvider;
