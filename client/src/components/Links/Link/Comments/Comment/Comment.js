import React from 'react';
import parse from 'html-react-parser';

import * as S from './style';

const Comment = ({ comment, responses }) => {
  console.log(comment.body);
  const parsedComment = comment.body ? parse(comment.body) : null;
  return (
    <>
      <S.Avatar src={comment.author.avatar} alt='user avatar' />
      <div>
        {parsedComment}
        {responses?.map((r) => (
          <Comment key={r.id} comment={r} />
        ))}
      </div>
    </>
  );
};

export default Comment;
