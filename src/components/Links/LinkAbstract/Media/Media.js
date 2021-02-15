import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

import * as S from './style';

const enlargeMediaContainer = (mediaContainerRef) => () => {
  mediaContainerRef.current.style.width = '500px';
  mediaContainerRef.current.style.height = '250px';
};

const addDefaultImageSrc = (e) => {
  e.target.src = 'wykop.png'
}

const Media = ({sourceUrl, preview}) => {
  const [isVideo, setisVideo] = useState(false);
  const mediaContainerRef = useRef();

  useEffect(() => {
    setisVideo(ReactPlayer.canPlay(sourceUrl));
  }, [sourceUrl]);

  let media = (
    <S.PreviewImg
      src={preview}
      alt={''}
      onError={addDefaultImageSrc}></S.PreviewImg>
  );
  if (isVideo) {
    media = (
      <ReactPlayer
        url={sourceUrl}
        controls
        light
        width='100%'
        height='100%'
        onClickPreview={enlargeMediaContainer(mediaContainerRef)}
      />
    );
  }

  return (
    <div>
      <S.Container ref={mediaContainerRef}>{media}</S.Container>
    </div>
  );
};

export default Media;
