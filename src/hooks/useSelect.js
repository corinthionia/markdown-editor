import { useState } from 'react';

const useSelect = (
  e,
  inputText,
  setInputText,
  insertedSrtStart,
  insertedSrtEnd
) => {
  const text = e.target.value;

  const selectionStart = e.target.selectionStart;
  const selectionEnd = e.target.selectionEnd;

  if (selectionEnd - selectionStart !== 0) {
    setInputText(
      text.slice(0, selectionStart) +
        insertedSrtStart +
        text.slice(selectionStart, selectionEnd) +
        insertedSrtEnd +
        text.slice(selectionEnd, text.length)
    );
  }

  return inputText;
};

export default useSelect;
