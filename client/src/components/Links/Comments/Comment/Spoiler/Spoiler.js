import React, { useState } from 'react';

import * as S from './style';

const Spoiler = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <S.Spoiler onClick={() => setShowMessage(true)} showMessage={showMessage}>
      {encodeMessage(children)}
    </S.Spoiler>
  );
};

function encodeMessage(msg) {
  const query = new URLSearchParams(msg);
  for (let dirtyMsg of query.keys()) {
    return dirtyMsg.substring(8);
  }
}

export default Spoiler;
