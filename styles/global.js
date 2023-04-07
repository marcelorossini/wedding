import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
    @font-face {
    font-family: "Refira Asri Regular";
    src: 
        url("./assets/fonts/Refira Asri/RefiraAsri-Regular.otf") format("truetype");
    }
    @font-face {
        font-family: "TT Hoves";
        src: url("./assets/fonts/TTHoves/TTHoves-Regular.eot");
        src: local("./assets/fonts/TTHoves/TT Hoves Regular"), local("./assets/fonts/TTHoves/TTHoves-Regular"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.eot?#iefix") format("embedded-opentype"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.woff2") format("woff2"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.woff") format("woff"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.ttf") format("truetype");
    }
    @font-face {
        font-family: "TT Hoves";
        src: url("./assets/fonts/TTHoves/TTHoves-Regular.eot");
        src: local("./assets/fonts/TTHoves/TT Hoves Regular"), local("./assets/fonts/TTHoves/TTHoves-Regular"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.eot?#iefix") format("embedded-opentype"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.woff2") format("woff2"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.woff") format("woff"),
            url("./assets/fonts/TTHoves/TTHoves-Regular.ttf") format("truetype");
    }
    :root {
    --color-primary: rgba(96, 126, 72,1);
    --color-primary-90: rgba(96, 126, 72,.9);
    --color-primary-80: rgba(96, 126, 72,.8);
    --color-primary-70: rgba(96, 126, 72,.7);
    --color-primary-60: rgba(96, 126, 72,.6);
    --color-primary-50: rgba(96, 126, 72,.5);
    --color-primary-40: rgba(96, 126, 72,.4);
    --color-primary-30: rgba(96, 126, 72,.3);
    --color-primary-20: rgba(96, 126, 72,.2);
    --color-primary-10: rgba(96, 126, 72,.1);
    --padding-default: 20px;
    }   
    html, body {
    margin: 0;
    padding: 0;
    height: 100%;  
    }
    *,
    *:before,
    *:after {
    margin: 0;
    padding: 0;
    font-family: "Refira Asri Regular";
    box-sizing: border-box;
    color: var(---color-text-primary);
    }
    ul {
    list-style: none;   
    }
    a {
    text-decoration: none;
    color: inherit;
    }
    button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    }
    p {
    display: inline-block;
    }

    .remove-white {
        mix-blend-mode: multiply;
    }
`;
