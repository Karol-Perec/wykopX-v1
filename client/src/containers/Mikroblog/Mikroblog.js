import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavItem from '../../components/Layout/NavItems/NavItem/NavItem';
import EntriesList from '../../components/Entries/EntriesList/EntriesList';
import Spinner from '../../components/UI/Spinner/Spinner';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import * as S from './style';

const categoryTypes = {
  aktywne: 'active',
  najnowsze: 'newest',
  hot6h: 'hot6h',
  hot12h: 'hot12h',
  hot24h: 'hot24h',
};

const Mikroblog = () => {
  const [entriesList, setEntriesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const params = useParams();
  const [category, setCategory] = useState(
    categoryTypes[params.category] || categoryTypes.hot12h
  );
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);
  useInfiniteScroll(loadingRef, setCurrentPage);

  useEffect(() => {
    setCategory(categoryTypes[params.category] || categoryTypes.hot12h);
  }, [params]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/mikroblog/${category}/${currentPage}`).then(
      (resp) => {
        console.log(resp);
        setEntriesList(entriesList.concat(resp.data));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, [currentPage]);

  useEffect(() => {
    setEntriesList([]);
    setCurrentPage(0);
  }, [category]);

  const categories = (
    <S.Categories>
      <NavItem link={'/mikroblog/najnowsze'}>Najnowsze</NavItem>
      <NavItem link={'/mikroblog/aktywne'}>Aktywne</NavItem>
      <NavItem link={'/mikroblog/hot6h'}>Gorące 6h</NavItem>
      <NavItem
        link={'/mikroblog/hot12h'}
        isActive={() => category === categoryTypes.hot12h}>
        Gorące 12h
      </NavItem>
      <NavItem link={'/mikroblog/hot24h'}>Gorące 24h</NavItem>
    </S.Categories>
  );

  return (
    <div>
      {categories}
      <EntriesList entriesList={entriesList} />
      <div ref={loadingRef}>{loading && <Spinner />}</div>
    </div>
  );
};

export default Mikroblog;
