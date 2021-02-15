import React, { useEffect } from 'react';
import LinkAbstract from '../LinkAbstract/LinkAbstract';

import * as S from './style'

const EntriesList = ({ entriesList = [] }) => {
  let entries = null;
  if (entriesList) {
    entries = entriesList.map((entry) => (
      <LinkAbstract {...entry} key={entry.id} />
    ));
  }

  return <S.Container>{entries}</S.Container>;
};

export default EntriesList;
