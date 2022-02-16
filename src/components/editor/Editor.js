import styled from 'styled-components';
import COLORS from '../../constants/COLORS';
import Buttons from './Buttons';
import TextArea from './TextArea';

const Editor = () => {
  return (
    <Wrapper>
      <Buttons />
      <TextArea />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;

  border-radius: 4px 0 0 0;
  border-right: 1.5px solid ${COLORS.border};
  background: ${COLORS.white};
`;

export default Editor;
