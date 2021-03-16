import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-color: ${(props) => props.theme.ON_SURFACE_2_COLOR};
  box-sizing: border-box;
  box-shadow:  0 3px 3px 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px 5px;
  margin: auto auto; /////
  margin-bottom: 20px;
  padding: 20px; ////////
  width: 95%;
  max-width: 600px;
`;

// export const FullEntry = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

// export const Title = styled.h2`
//   color: ${(props) => props.theme.ON_SURFACE_COLOR};
//   font-size: 20px;
//   font-weight: 500;
// `;

// export const Description = styled.p`
//   color: ${(props) => props.theme.ON_SURFACE_2_COLOR};
//   font-size: 0.8rem;
// `;
