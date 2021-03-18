import styled from 'styled-components';

export const Div = styled.div`
  position: fixed;
  width: 200px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  padding: 32px 16px;
  box-sizing: border-box;

  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translate(-100%)')};

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  height: auto;
`;
