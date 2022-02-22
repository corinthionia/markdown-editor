import styled from 'styled-components';
import Editor from './components/editor/Editor';
import Viewer from './components/viewer/Viewer';
import COLORS from './constants/COLORS';
import InputProvider from './contexts/InputContext';

import SelectionContextProvider from './contexts/SelectionContext';

function App() {
  return (
    <Wrapper>
      <Header>🧞‍♂️ corinthionia / markdown-editor</Header>
      <InputProvider>
        <SelectionContextProvider>
          <Content>
            <Editor />
            <Viewer />
          </Content>
        </SelectionContextProvider>
      </InputProvider>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${COLORS.background};
`;

const Header = styled.header`
  width: 88%;
  height: 10%;

  display: flex;
  align-items: center;

  font-size: 20px;
  color: ${COLORS.white};
`;

const Content = styled.section`
  width: 88%;
  height: 90%;

  display: flex;
`;

export default App;
