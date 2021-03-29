import React from 'react';
import ReactPlayer from 'react-player';

import * as S from './style';

const Media = ({ sourceUrl, preview }) => {
  const hqPreview = preview?.replace('w104h74', 'w300h223');
  const displayedPreview = hqPreview || preview;
  const isVideo = ReactPlayer.canPlay(sourceUrl);

  let media = null;
  if (isVideo) {
    media = <ReactPlayer url={sourceUrl} controls width='100%' height='100%' />;
  } else if (displayedPreview) {
    media = (
      <a href={sourceUrl}>
        <S.Image src={displayedPreview} alt={''} />
      </a>
    );
  }

  return <S.Container isEmbedingVideo={isVideo}>{media}</S.Container>;
};

export default Media;
