import { createContext } from 'react';
import useInput from '../hooks/useInput';

export const ContentContext = createContext({
  state: { content: '' },
  actions: {
    setContent: () => {},
  },
});

const ContentProvider = ({ children }) => {
  const [content, setContent, handleContentChange] = useInput('');

  return (
    <ContentContext.Provider
      value={{ content, setContent, handleContentChange }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
