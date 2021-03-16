import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';

export const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (min-width: 500px) {
    width: 190px;
    height: auto;
  }
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultPreviewImg = styled(Logo).attrs((props) => ({
  style: { fill: props.theme.ON_SURFACE_COLOR },
  height: '150px',
  width: '150px',
}))`
  display: inline-block;
  width: 100%;
  height: 100%;
`;