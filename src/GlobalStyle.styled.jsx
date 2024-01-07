import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  p,
  h1,
  h2,
  h3,
  ul,
  a{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none

  }

  img{
    display: block;
    height: auto;
    width: 100px;
  }
`