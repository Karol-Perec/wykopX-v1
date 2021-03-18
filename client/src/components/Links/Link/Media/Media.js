import React from 'react';
import ReactPlayer from 'react-player';

import * as S from './style';

const Media = ({ sourceUrl, preview }) => {
  const hqPreview = preview?.replace('w104h74', 'w300h223');
  const displayedPreview = hqPreview || preview;

  let media = null;
  if (ReactPlayer.canPlay(sourceUrl)) {
    media = <ReactPlayer url={sourceUrl} controls width='100%' height='100%' />;
  }
  if (displayedPreview) {
    media = (
      <a href={sourceUrl}>
        <img src={displayedPreview} alt={''} />
      </a>
    );
  }

  return <S.Container>{media}</S.Container>;
};

export default Media;
