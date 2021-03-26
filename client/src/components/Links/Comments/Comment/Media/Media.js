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

  let media = null;
  if (type === 'video' && ReactPlayer.canPlay(url)) {
    media = (
      <ReactPlayer
        url={url}
        controls
        light={displayedPreview}
        width='100%'
        height='100%'
        onClickPreview={() => enlargeMediaContainer(mediaContainerRef)}
      />
    );
  } else if (type === 'image') {
    media = (
      <a href={url}>
        <S.Image src={url} alt={''} />
      </a>
    );
  }

  return <S.Container ref={mediaContainerRef} ratio={ratio}>{media}</S.Container>;
};

function enlargeMediaContainer(mediaContainerRef) {
  mediaContainerRef.current.style.width = '100%';
  mediaContainerRef.current.style.height = '100%';
  mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
}

export default Media;
