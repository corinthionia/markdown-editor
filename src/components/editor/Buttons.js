import styled from 'styled-components';
import COLORS from '../../constants/COLORS';

import useButtonClick from '../../hooks/useButtonClick';

const Buttons = () => {
  return (
    <Wrapper>
      <Btn onClick={useButtonClick('**', '**')}>B</Btn>
      <Btn onClick={useButtonClick('_', '_')}>I</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 4%;
  border-bottom: 1px solid ${COLORS.border};

  display: flex;
  flex-direction: row;
`;

const Btn = styled.button`
  width: 4%;
  height: 100%;

  background: none;
  border: none;
  border-right: 1px solid ${COLORS.border};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export default Buttons;
