import React, { useState, useEffect, useRef } from 'react';
import Media from './Media/Media';
import Statistics from './Statistics/Statistics';

import * as S from './style';

const LinkAbstract = ({
  buryCount,
  canVote,
  commentsCount,
  date,
  description,
  id,
  isHot,
  plus18,
  preview,
  relatedCount,
  sourceUrl,
  status,
  tags,
  title,
  voteCount,
}) => {
  return (
    <S.Container>
      <Statistics
        date={date}
        isHot={isHot}
        commentsCount={commentsCount}
        voteCount={voteCount}
      />
      <Media sourceUrl={sourceUrl} preview={preview} />
      <S.EntryLink to={'/link/' + id}>
        <S.Title>{title.replace(/&quot;/g, '"')}</S.Title>
        <S.Description>{description.replace(/&quot;/g, '"')}</S.Description>
      </S.EntryLink>
    </S.Container>
  );
};

export default LinkAbstract;
