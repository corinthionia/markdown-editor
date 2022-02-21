import { createContext, useCallback, useState } from 'react';

export const ContentContext = createContext({
  state: { content: '' },
  actions: {
    setContent: () => {},
  },
});

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState('');

  const setContentHandler = useCallback((content) => setContent(content), []);

  return (
    <ContentContext.Provider value={{ content, setContentHandler }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
