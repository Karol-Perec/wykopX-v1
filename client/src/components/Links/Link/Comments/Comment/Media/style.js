import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  aspect-ratio: ${(props) => 1/props.ratio};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
