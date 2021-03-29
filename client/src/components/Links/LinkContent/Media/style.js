import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (min-width: 600px) {
    width: ${(props) => (props.isEmbedingVideo ? '100%' : '40%')};
  }
`;

export const Image = styled.img`
  width: 100%;
`;
