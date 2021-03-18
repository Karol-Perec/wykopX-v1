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

  return <S.Container>{body}</S.Container>;
};

export default EntryAbstract;
