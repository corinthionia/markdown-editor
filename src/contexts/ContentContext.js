import { createContext, useState } from 'react';

export const ContentContext = createContext({
  state: { content: [] },
  actions: {
    setContent: () => {},
  },
});

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(localStorage.getItem('content') || []);

  const setContentHandler = (content) => setContent(content);

  return (
    <ContentContext.Provider value={{ content, setContentHandler }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;