import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EntryLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-radius: 5px 5px;
  margin: 20px; /////
  padding: 20px; ////////
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.ON_SURFACE_COLOR};
  font-size: 20px;
  font-weight: 500;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.ON_SURFACE_2_COLOR};
  font-size: 0.8rem;
`;
