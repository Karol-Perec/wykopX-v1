import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

const validateLinks = (links) => {
  return links.map((e) => {
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      sourceUrl: e.source_url,
      preview: e.preview,
      voteCount: e.vote_count,
      commentsCount: e.comments_count,
      date: e.date,
      plus18: e.plus18,
      isHot: e.is_hot,
    };
  });
};

const Hits = () => {
  const [hitsLinksList, setHitsLinksList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://a2.wykop.pl/Hits/Week/appkey/aNd401dAPp').then(
      (resp) => {
        console.log(resp);
        const validatedLinks = validateLinks(resp.data.data)
        setHitsLinksList(validatedLinks);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, []);

  let links = <Spinner />;
  if (!loading) {
    links = <LinksList entriesList={hitsLinksList} />;
  }

  return <div>{links}</div>;
};

export default Hits;
