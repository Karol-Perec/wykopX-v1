import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavItem from '../../components/Layout/NavItems/NavItem/NavItem';
import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import * as S from './style';

const categoryTypes = {
  aktywne: 'active',
  najnowsze: 'newest',
  wykopywane: 'voted',
  komentowane: 'commented',
};

const Wykopalisko = () => {
  const [linksList, setLinksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const params = useParams();
  const [category, setCategory] = useState(
    categoryTypes[params.category] || categoryTypes.aktywne
  );
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);
  useInfiniteScroll(loadingRef, setCurrentPage);

  useEffect(() => {
    setCategory(categoryTypes[params.category] || categoryTypes.aktywne);
  }, [params]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/upcoming/${category}/${currentPage}`).then(
      (resp) => {
        console.log(resp);
        setLinksList(linksList.concat(resp.data));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, [currentPage]);

  useEffect(() => {
    setLinksList([]);
    setCurrentPage(0);
  }, [category]);

  const categories = (
    <S.Categories>
      <NavItem
        link={'/wykopalisko/aktywne'}
        isActive={() => category === categoryTypes.aktywne}>
        Aktywne
      </NavItem>
      <NavItem link={'/wykopalisko/najnowsze'}>Najnowsze</NavItem>
      <NavItem link={'/wykopalisko/wykopywane'}>Wykopywane</NavItem>
      <NavItem link={'/wykopalisko/komentowane'}>Komentowane</NavItem>
    </S.Categories>
  );

  return (
    <div>
      {categories}
      <LinksList linksList={linksList} />
      <div ref={loadingRef}>{loading && <Spinner />}</div>
    </div>
  );
};

export default Wykopalisko;
