import React from 'react';
import EntryAbstract from '../EntryAbstract/EntryAbstract';

import * as S from './style';

const EntriesList = ({ entriesList }) => {
  let entries = null;
  if (entriesList) {
    entries = entriesList.map((entry) => (
      <EntryAbstract {...entry} key={entry.id} />
    ));
  }

  return <S.Container>{entries}</S.Container>;
};

export default EntriesList;
