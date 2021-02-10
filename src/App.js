import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import Layout from './components/Layout/Layout';

const Div = styled.div`
  text-align: center;
`;

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Layout />
      </Div>
    </ThemeProvider>
  );
}

export default App;
