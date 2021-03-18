import React, { useState } from 'react';

import Comment from './Comment/Comment';
import * as S from './style';

const orderOptions = {
  newest: 'newest',
  oldest: 'oldest',
  best: 'best',
};

const orderComparators = {
  newest: (c1, c2) => new Date(c2.date) - new Date(c1.date),
  oldest: (c1, c2) => new Date(c1.date) - new Date(c2.date),
  best: (c1, c2) => c2.vote_count - c1.vote_count,
};

const Comments = ({ comments, responses }) => {
  const [order, setOrder] = useState(orderOptions.best);

  const headComments = comments
    .filter((c) => c.id === c.parent_id)
    .sort(orderComparators[order])
    .map((c) => (
      <S.Container>
        <Comment
          key={c.id}
          comment={c}
          responses={comments.filter(
            (r) => r.parent_id === c.id && r.id !== c.id
          )}
        />
      </S.Container>
    ));

  return headComments;
};

export default Comments;
