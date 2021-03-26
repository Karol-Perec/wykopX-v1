import React from 'react';
import parse from 'html-react-parser';

import * as S from './style';
import { Link } from 'react-router-dom';
import Spoiler from './Spoiler/Spoiler';
import Media from './Media/Media';

const Comment = ({ comment, responses }) => {
  const parsedComment = parseCommentHtmlText(comment.body);
  return (
    <>
      <S.CommentContainer>
        <Link to={'/ludzie/' + comment.author.login}>
          <S.Avatar src={comment.author.avatar} alt='user avatar' />
        </Link>

        <S.Content>
          <Link to={'/ludzie/' + comment.author.login}>
            <strong>
              <S.Username color={comment.author.color}>
                {comment.author.login}
              </S.Username>
            </strong>
          </Link>
          <S.CommentText>{parsedComment}</S.CommentText>
          {comment.embed && <Media {...comment.embed} />}
        </S.Content>
      </S.CommentContainer>
      <S.CommentContainer></S.CommentContainer>
      <S.ResponsesContainer>
        {responses?.map((r) => (
          <Comment key={r.id} comment={r} />
        ))}
      </S.ResponsesContainer>
    </>
  );
};

function parseCommentHtmlText(text) {
  if (!text) {
    return null;
  }
  const parsedText = parse(text);
  const textWithTweakedAnchorElements = parsedText?.map?.((el) => {
    if (el.type === 'a') {
      if (el.props.href.match(/(?:s|^)@.+(?:s|$)/g)) {
        return (
          <Link key={el.key} to={'/ludzie/' + el.props.href.substring(1)}>
            {el.props.children}
          </Link>
        );
      }
      if (el.props.href.match(/(?:s|^)spoiler:.+(?:s|$)/g)) {
        return <Spoiler key={el.key}>{el.props.href}</Spoiler>;
      }
    }
    return el;
  });

  return textWithTweakedAnchorElements || parsedText;
}

export default Comment;
