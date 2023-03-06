import styled from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <Root className='App'>
      <GlobalStyle />
      <Router />
    </Root>
  );
}

const Root = styled.div`
  max-width: 390px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default App;
