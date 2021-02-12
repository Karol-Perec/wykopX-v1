import React, { useEffect } from 'react';
import ArticleAbstract from '../ArticleAbstract/ArticleAbstract';

const ArticlesList = ({ articlesAbstractsList = [] }) => {
  const articlesAbstracts = articlesAbstractsList ? articlesAbstractsList.map((articleAbstract) => (
    <ArticleAbstract {...articleAbstract} key={articleAbstract.id} />
  )) : null;

  return <div>{articlesAbstracts}</div>;
};

export default ArticlesList;
