import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --gray-scale-0: #F8F9FA;
        --gray-scale-1: #868E96;
        --gray-scale-2: #343B41;
        --gray-scale-3: #212529;
        --gray-scale-4: #121214;
        
        --font-size-0: 22px;
        --font-size-1: 18px;
        --font-size-2: 14px;
        --font-size-3: 12px;
        --font-size-4: 10px;
    }

    // * {
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;
    // }

    html, body, #root {
        display: flex;
        height: 100vh;
        width: 100vw;
        min-width: 250px;
        overflow-x: scroll;
    }

    body, html {
        background: #000000;
        font-family: 
    }
`;

export default GlobalStyle;
