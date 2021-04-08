import React, { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';

import * as S from './style';

const Media = ({ sourceUrl, preview, linkTo }) => {
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
        onClickPreview={() => enlargeMediaContainer(mediaContainerRef)}
      />
    );
  } else {
    media = (
      <Link to={linkTo}>
        {displayedPreview ? (
          <S.PreviewImg src={displayedPreview} alt={''} />
        ) : (
          <S.DefaultPreviewImg />
        )}
      </Link>
    );
  }

  return <S.Container ref={mediaContainerRef}>{media}</S.Container>;
};

function enlargeMediaContainer(mediaContainerRef) {
  mediaContainerRef.current.style.width = '100%';
  mediaContainerRef.current.style.transition = 'width 0.3s ease-in-out';
};

export default Media;
