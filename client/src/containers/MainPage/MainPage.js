import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const MainPage = () => {
  const [linksList, setLinksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);
  useInfiniteScroll(loadingRef, setCurrentPage);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/main/' + currentPage).then(
      (resp) => {
        setLinksList(linksList.concat(resp.data));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, [currentPage]);

  return (
    <div>
      <LinksList linksList={linksList} />
      <div ref={loadingRef}>{loading && <Spinner />}</div>
    </div>
  );
};

export default MainPage;
