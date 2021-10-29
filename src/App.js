import './App.css';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      안녕하세요
    </div>
  );
}

export default App;
