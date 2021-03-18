import React from 'react';

import Media from '../Media/Media';
import * as S from './style';

const LinkContent = ({ link }) => {
  return (
    <S.Container>
      <S.Content>
        <Media sourceUrl={link.source_url} preview={link.preview} />
        <S.TextContent>
          <a href={link.source_url}>
            <S.Title>{link.title.replace(/&quot;/g, '"')}</S.Title>
            <S.Description>
              {link.description.replace(/&quot;/g, '"')}
            </S.Description>
          </a>
        </S.TextContent>
      </S.Content>
    </S.Container>
  );
};

export default LinkContent;
