import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './globalStyle'

import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import Hits from './containers/Hits/Hits';
import Link from './components/Links/Link/Link';

const Div = styled.div`
  text-align: center;
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const routes = (
    <Switch>
      <Route path='/hity/:period(dnia|tygodnia|miesiaca|roku)?'>
        <Hits />
      </Route>
      <Route path='/link/:id'>
        <Link />
      </Route>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <GlobalStyle />
        <Layout>{routes}</Layout>
      </Div>
    </ThemeProvider>
  );
}

export default App;
