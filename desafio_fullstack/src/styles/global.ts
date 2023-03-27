import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #283618;
        --color-primary-focus: #a3b18a;
        --color-primary-negative: #588157;
        --color-secondary: #344e41;

        --gray-scale-0: #F8F9FA;
        --gray-scale-1: #868E96;
        --gray-scale-2: #343B41;
        --gray-scale-3: #212529;
        --gray-scale-4: #121214;
        
        --font-size-0: 24px;
        --font-size-1: 20px;
        --font-size-2: 14px;
        --font-size-3: 12px;
        --font-size-4: 10px;
    }

    html, body, #root {
        display: flex;
        height: auto;
        width: 100vw;
        min-width: 250px;
    }

    body, html {
        background: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer
    }

    li {
        padding-inline-start: 0;
        list-style:none;
    }
`;

export default GlobalStyle;
