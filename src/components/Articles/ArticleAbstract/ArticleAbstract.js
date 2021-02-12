import React from 'react';

const ArticleAbstract = ({
  author: { avatar, color, login },
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
    <div>
      {title}
      <p>{description}</p>
    </div>
  );
};

export default ArticleAbstract;
