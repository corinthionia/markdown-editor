import styled from 'styled-components';
import COLORS from '../../constants/COLORS';

const Viewer = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;

  border-radius: 0 4px 0 0;
  background: ${COLORS.white};
`;

export default Viewer;
