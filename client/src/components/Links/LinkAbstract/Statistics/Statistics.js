import React from 'react';

import { calculateAprroximatedAge } from '../../../../utils/dateUtils';
import * as S from './style';

const Statistics = ({ date, isHot, commentsCount, voteCount }) => {
  return (
    <S.Container>
      <S.StatisticsElement>
        <S.VotedIconsContainer>
          <S.VotedIcon />
          {isHot ? <S.IsHotIcon /> : null}
        </S.VotedIconsContainer>

        <span>{voteCount}</span>
      </S.StatisticsElement>

      <S.StatisticsElement>
        <S.CommentIcon />
        <span>{commentsCount}</span>
      </S.StatisticsElement>

      <S.StatisticsElement>
        <S.LinkAgeIcon />
        <span>{calculateAprroximatedAge(date)}</span>
      </S.StatisticsElement>
    </S.Container>
  );
};

export default Statistics;
