import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ArticlesList from '../../components/Articles/ArticlesList/ArticlesList';

const Hits = () => {
  // const hitsArticlesList = useSelector((state) => state.article.acticlesList);
  const dispatch = useDispatch();
  const [hitsArticlesList, setHitsArticlesList] = useState(null)

  useEffect(() => {
    axios.get('https://a2.wykop.pl/Hits/Popular/appkey/aNd401dAPp').then(
      (resp) => {
        console.log(resp);
        setHitsArticlesList(resp.data.data);
      },
      (err) => console.error(err)
    );
    // dispatch();
  }, [dispatch]);

  return (
    <div>
      <ArticlesList articlesAbstractsList={hitsArticlesList}/>
    </div>
  );
};

export default Hits;
