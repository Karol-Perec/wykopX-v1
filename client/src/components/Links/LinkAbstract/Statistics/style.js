import styled from 'styled-components';

import CommentMaterialIcon from '@material-ui/icons/Comment';
import ClockMaterialIcon from '@material-ui/icons/AccessTime';
import FireMaterialIcon from '@material-ui/icons/Whatshot';
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';

export const Container = styled.div`
  color: ${(props) => props.theme.ON_SURFACE_COLOR};
`;

export const VoteCount = styled.div``;

export const CommentCount = styled.div``;

export const LinkAge = styled.div``;

export const CommentIcon = styled(CommentMaterialIcon).attrs((props) => ({
  style: { color: props.theme.PRIMARY_COLOR },
}))``;

export const LinkAgeIcon = styled(ClockMaterialIcon).attrs((props) => ({
  style: { color: props.theme.PRIMARY_COLOR },
}))``;

export const VotedIconsContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const VotedIcon = styled(Logo).attrs((props) => ({
  style: { fill: props.theme.PRIMARY_COLOR },
  height: '24px',
  width: '24px',
}))`
  display: inline-block;
`;

export const IsHotIcon = styled(FireMaterialIcon).attrs((props) => ({
  style: { fill: props.theme.SECONDARY_COLOR, height: '14px', width: '14px'},
}))`
  position: absolute;
  top: 0%;
  left: 100%;
  transform: translate(-50%, -50%);
`;
