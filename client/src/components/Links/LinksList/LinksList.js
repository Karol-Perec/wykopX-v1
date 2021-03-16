import React from 'react';
import LinkAbstract from '../LinkAbstract/LinkAbstract';

import * as S from './style'

const LinksList = ({ linksList }) => {
  let links = null;
  if (linksList) {
    links = linksList.map((link) => (
      <LinkAbstract {...link} key={link.id} />
    ));
  }

  return <S.Container>{links}</S.Container>;
};

export default LinksList;
