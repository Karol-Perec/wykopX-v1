import styled from 'styled-components';

export const OuterDiv = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const InnerDiv = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.ON_SURFACE_COLOR};
`;
