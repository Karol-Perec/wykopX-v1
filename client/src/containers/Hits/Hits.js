import React, { useEffect, useState, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import NavItem from '../../components/Layout/NavItems/NavItem/NavItem';
import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

import useInfiniteScroll from '../../hooks/useInfiniteScroll'

import * as S from './style';

const Hits = () => {
  const [hitsLinksList, setHitsLinksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);
  useInfiniteScroll(loadingRef, setCurrentPage);

  useEffect(() => {
    setLoading(true);
    axios.get('/hits/' + currentPage).then(
      (resp) => {
        console.log(resp);
        setHitsLinksList(hitsLinksList.concat(resp.data));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, [currentPage]);

  const categories = (
    <S.Categories>
      <NavItem link={'/hity/dnia'}>Dnia</NavItem>
      <NavItem link={'/hity/tygodnia'}>Tygodnia</NavItem>
      <NavItem link={'/hity/miesiaca'}>Miesiąca</NavItem>
      <NavItem link={'/hity/roku'}>Roku</NavItem>
    </S.Categories>
  );

  return (
    <div>
      {categories}
      <LinksList linksList={hitsLinksList} />
      <div ref={loadingRef}>{loading && <Spinner />}</div>
    </div>
  );
};

export default Hits;
