import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import Comments from '../../components/Links/Comments/Comments';
import Spinner from '../../components/UI/Spinner/Spinner'
import LinkContent from '../../components/Links/LinkContent/LinkContent'
import * as S from './style';

const Link = () => {
  const [link, setLink] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    axios.get('/api/link/' + match.params.id).then(
      (resp) => {
        console.log(resp.data);
        setLink(resp.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }, [match.params.id]);

  let feed = <Spinner />;
  if (link) {
    feed = (
      <>
        <LinkContent link={link} />
        <Comments comments={link.comments} />
      </>
    );
  }

  return <S.Container>{feed}</S.Container>;
};

export default Link;
