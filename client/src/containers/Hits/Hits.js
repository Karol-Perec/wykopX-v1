import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavItem from '../../components/Layout/NavItems/NavItem/NavItem';
import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import * as S from './style';

const categoryTypes = {
  dnia: 'day',
  tygodnia: 'week',
  miesiaca: 'month',
  roku: 'year',
};

const Hits = () => {
  const [linksList, setLinksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const params = useParams();
  const [category, setCategory] = useState(
    categoryTypes[params.category] || categoryTypes.tygodnia
  );
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);
  useInfiniteScroll(loadingRef, setCurrentPage);

  useEffect(() => {
    setCategory(categoryTypes[params.category] || categoryTypes.tygodnia);
  }, [params]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/hits/${category}/${currentPage}`).then(
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
    setLinksList([])
    setCurrentPage(0);
  }, [category]);

  const categories = (
    <S.Categories>
      <NavItem link={'/hity/dnia'}>Dnia</NavItem>
      <NavItem
        link={'/hity/tygodnia'}
        isActive={() => category === categoryTypes.tygodnia}>
        Tygodnia
      </NavItem>
      <NavItem link={'/hity/miesiaca'}>Miesiąca</NavItem>
      <NavItem link={'/hity/roku'}>Roku</NavItem>
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

export default Hits;
