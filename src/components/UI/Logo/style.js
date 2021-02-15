import styled from 'styled-components';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';

export const Div = styled.div`
  height: 50px;
  box-sizing: border-box;
  margin: 10px
`;

export const Img = styled(Logo).attrs((props) => ({
  style: {fill: props.theme.PRIMARY_COLOR},
  height: '100%',
  width: '100%',
}))`
  display: inline-block;
`;
