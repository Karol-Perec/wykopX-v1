import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

import * as S from './style';

const enlargeMediaContainer = (mediaContainerRef) => () => {
  mediaContainerRef.current.style.width = '100%';
  mediaContainerRef.current.style.height = '100%';
  mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
};

const Media = ({ sourceUrl, preview }) => {
  const mediaContainerRef = useRef();
  const hqPreview = preview?.replace('w104h74', 'w207h139');
  const displayedPreview = hqPreview || preview;

  let media = null;
  if (ReactPlayer.canPlay(sourceUrl)) {
    media = (
      <ReactPlayer
        url={sourceUrl}
        controls
        light={displayedPreview}
        width='100%'
        height='100%'
        onClickPreview={enlargeMediaContainer(mediaContainerRef)}
      />
    );
  } else if (displayedPreview) {
    media = <S.PreviewImg src={displayedPreview} alt={''} />;
  } else {
    media = <S.DefaultPreviewImg />
  }

  return <S.Container ref={mediaContainerRef}>{media}</S.Container>;
};

export default Media;
