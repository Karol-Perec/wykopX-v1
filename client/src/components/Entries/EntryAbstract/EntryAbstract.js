import React from 'react';

import * as S from './style';

const EntryAbstract = ({
  id,
  author,
  blocked,
  body,
  commentsCount,
  date,
  embed,
  favourite,
  status,
  userVote,
  voteCount,
  comments,
}) => {
  console.log(comments);


  return <S.Container>{id}</S.Container>;
};

export default EntryAbstract;
