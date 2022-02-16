import styled from 'styled-components';

const TextArea = () => {
  return <Wrapper spellCheck="false"></Wrapper>;
};

const Wrapper = styled.textarea`
  width: 92%;
  height: 89%;
  padding: 4%;

  border: none;
  resize: none;

  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
  }
`;

export default TextArea;
