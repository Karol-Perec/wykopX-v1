import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';

export const Container = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  
  aspect-ratio: 16 / 9;
  @supports not (aspect-ratio: 16 / 9) {
    ::before {
      float: left;
      padding-top: 56.25%;
      content: '';
    }

    ::after {
      display: block;
      content: '';
      clear: both;
    }
  }

  @media (min-width: 600px) {
    width: 190px;
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
