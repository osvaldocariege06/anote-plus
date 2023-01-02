import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    
    :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;


  color-scheme: light dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --color-main-dark: #000505;
  --color-main-light: #FEFCFD;
  --color-primary: #3B3355;
  --color-secondary: #242424;
  --color-text-hover-dark: #5D5D81;
  --color-text-hover-light: #BFCDE0;
  --color-danger: #970202;

}

a {
  font-weight: 500;
  color: var(--color-text-hover-dark);
  text-decoration: inherit;
}
a:hover {
  color: var(--color-text-hover-light);
}

html {
  background-color: var(--color-main-dark);
    color: var(--color-main-light);
}

body {
    width: 100%;
    height: 100%;
    background-color: var(--color-main-dark);
    color: var(--color-main-light);
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

// React Modal
.react-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 875px;
  background-color: var(--color-primary);
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

@media (prefers-color-scheme: light) {
  
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}


`;
