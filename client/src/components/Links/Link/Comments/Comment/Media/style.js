import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  
  @media (min-width: 600px) {
    width: 50%;
  }

  aspect-ratio: ${(props) => 1 / props.ratio};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
