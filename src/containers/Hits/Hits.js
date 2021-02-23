import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from '../../axios';
import NavItem from '../../components/Layout/NavItems/NavItem/NavItem';
import LinksList from '../../components/Links/LinksList/LinksList';
import Spinner from '../../components/UI/Spinner/Spinner';

import { validateLinks } from '../../utils/LinksUtils';

import * as S from './style';

const Hits = () => {
  const match = useRouteMatch();
  const [hitsLinksList, setHitsLinksList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/Hits/Week').then(
      (resp) => {
        console.log(resp);
        const validatedLinks = validateLinks(resp.data.data);
        setHitsLinksList(validatedLinks);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
  }, []);

  console.log(match);
  const categories = (
    <S.Categories>
      <NavItem link={'/hity/dnia'}>Dnia</NavItem>
      <NavItem link={'/hity/tygodnia'}>Tygodnia</NavItem>
      <NavItem link={'/hity/miesiaca'}>Miesiąca</NavItem>
      <NavItem link={'/hity/roku'}>Roku</NavItem>
    </S.Categories>
  );

  let links = <Spinner />;
  if (!loading) {
    links = <LinksList linksList={hitsLinksList} />;
  }

  return (
    <div>
      {categories}
      {links}
    </div>
  );
};

export default Hits;
