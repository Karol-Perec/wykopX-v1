import styled from 'styled-components';

import CommentIcon from '@material-ui/icons/Comment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {ReactComponent as Logo} from '../../../../assets/images/logo.svg';

export const Container = styled.div`
  background-color: ${(props) => props.theme.SURFACE_COLOR};
  border-radius: 5px 5px;
  margin: 20px;
  padding: 20px;
`;

export const VoteCount = styled.div``;

export const CommentCount = styled.div``;

export const LinkAge = styled.div``;

export const CommentIcons = styled(CommentIcon).attrs((props) => ({
  style: {color: props.theme.PRIMARY_COLOR},
}))`
`;

export const LinkAgeIcon = styled(AccessTimeIcon).attrs((props) => ({
  style: {color: props.theme.PRIMARY_COLOR},
}))`
`;

export const VotedIcon = styled(Logo).attrs((props) => ({
  style: {fill: props.theme.PRIMARY_COLOR},
  height: '24px',
  width: '24px',
}))`
  display: inline-block;
`;
