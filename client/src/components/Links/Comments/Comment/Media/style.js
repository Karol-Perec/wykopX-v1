import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: ${(props) => props.isContainingVideo ? 'calc(100vw - 180px)' : 'auto'};
  
  @media (min-width: 600px) {
    width: 390px;
  }

  aspect-ratio: ${(props) => 1 / props.ratio};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
