import React, { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';

import * as S from './style';

const Media = ({
  type,
  url,
  source,
  preview,
  plus18,
  size,
  animated,
  ratio,
}) => {
  const mediaContainerRef = useRef();
  const hqPreview = null; //preview?.replace('w104h74', 'w207h139');
  const displayedPreview = hqPreview || preview;
  const isVideo = type === 'video' && ReactPlayer.canPlay(url);

  let media = null;
  if (isVideo) {
    media = (
      <ReactPlayer
        url={url}
        controls
        light={displayedPreview}
        width='100%'
        height='100%'
      />
    );
  } else if (type === 'image') {
    media = (
      <a href={url}>
        <S.Image src={url} alt={''} />
      </a>
    );
  } else {
    return null;
  }

  return (
    <S.Container
      ref={mediaContainerRef}
      ratio={ratio}
      isContainingVideo={isVideo}>
      {media}
    </S.Container>
  );
};

export default Media;
