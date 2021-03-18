import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-color: ${(props) => props.theme.ON_SURFACE_2_COLOR};

  box-sizing: border-box;
  box-shadow: 0 3px 3px 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px 5px;
  margin: auto auto;
  margin-bottom: 5px;
  padding: 15px;
  width: 95%;
  height: auto;
  max-width: 900px;

  @media (min-width: 600px) {
    display: block;
  }
`;