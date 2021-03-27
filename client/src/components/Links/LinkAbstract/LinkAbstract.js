import React from 'react';
import { Link } from 'react-router-dom';

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
      <S.Content>
        <Media sourceUrl={sourceUrl} preview={preview} linkTo={'/link/' + id} />
        <S.TextContent>
          <Link to={'/link/' + id}>
            <S.Title>{title?.replace(/&quot;/g, '"')}</S.Title>
            <S.Description>{description?.replace(/&quot;/g, '"')}</S.Description>
          </Link>
        </S.TextContent>
      </S.Content>
    </S.Container>
  );
};

export default LinkAbstract;
