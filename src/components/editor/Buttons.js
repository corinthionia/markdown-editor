import styled from 'styled-components';
import COLORS from '../../constants/COLORS';
import useSelect from '../../hooks/useSelect';

const Buttons = () => {
  // const HandleClickBoldBtn = (e) =>
  //   useSelect(e, content, setContent, '**', '**');

  return (
    <Wrapper>
      <Btn>B</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 4%;
  border-bottom: 1px solid ${COLORS.border};
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
