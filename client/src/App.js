import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import * as authActions from './store/Auth/actions';

import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import Wykopalisko from './containers/Wykopalisko/Wykopalisko';
import Hits from './containers/Hits/Hits';
import Mikroblog from './containers/Mikroblog/Mikroblog';
import Link from './containers/Link/Link';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';

const Container = styled.div`
  text-align: center;
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.authCheckState());
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/hity/:category(dnia|tygodnia|miesiaca|roku)?'>
        <Hits />
      </Route>
      <Route path='/wykopalisko/:category(aktywne|najnowsze|wykopywane|komentowane)?'>
        <Wykopalisko />
      </Route>
      <Route path='/mikroblog/:category(aktywne|najnowsze|hot6h|hot12h|hot24h)?'>
        <Mikroblog />
      </Route>
      <Route path='/link/:id(\d+)'>
        <Link />
      </Route>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route path='/hity/:category(dnia|tygodnia|miesiaca|roku)?'>
          <Hits />
        </Route>
        <Route path='/wykopalisko/:category(aktywne|najnowsze|wykopywane|komentowane)?'>
          <Wykopalisko />
        </Route>
        <Route path='/mikroblog/:category(aktywne|najnowsze|hot6h|hot12h|hot24h)?'>
          <Mikroblog />
        </Route>
        <Route path='/link/:id(\d+)'>
          <Link />
        </Route>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Layout>{routes}</Layout>
      </Container>
    </ThemeProvider>
  );
}

export default App;
