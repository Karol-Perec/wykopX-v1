import React from 'react';

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

function calculateAprroximatedAge(date) {
  const startDate = new Date(date);
  const now = new Date();

  const ageInSeconds = (now - startDate) / 1000;
  if (!ageInSeconds) {
    return '';
  }

  if (ageInSeconds < 60) return Math.floor(ageInSeconds) + ' s';

  const ageInMinutes = ageInSeconds / 60;
  if (ageInMinutes < 60) return Math.floor(ageInMinutes) + ' min';

  const ageInHours = ageInMinutes / 60;
  if (ageInHours < 24) return Math.floor(ageInHours) + ' h';

  const ageInDays = ageInHours / 24;
  if (ageInDays < 7) return Math.floor(ageInDays) + ' d';

  const ageInWeeks = ageInDays / 7;
  if (ageInWeeks < 5) return Math.floor(ageInDays) + ' w';

  const ageInMonths = ageInDays / 30;
  if (ageInMonths < 12) return Math.floor(ageInMonths) + ' m';

  const ageInYears = Math.floor(ageInMonths / 12);
  const monthsRest = ageInMonths - ageInYears * 12;
  return `${ageInYears} y ${monthsRest} m`;
}

export default Statistics;
