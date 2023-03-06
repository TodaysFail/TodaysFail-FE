import styled from 'styled-components';
import Router from './router/Router';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
