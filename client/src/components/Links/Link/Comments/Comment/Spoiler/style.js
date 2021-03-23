import styled from 'styled-components';

export const Spoiler = styled.div`
  filter: ${(props) => (props.showMessage ? 'none' : 'blur(3px)')};
`;
