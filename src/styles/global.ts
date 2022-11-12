import { createGlobalStyle } from "styled-components";
 
export default createGlobalStyle`
    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        padding-left: 30%;
        padding-top: 5%;
        padding-bottom: 5%;
        text-align: center;
    }
    body{
        background-image: linear-gradient(45deg, rgb(247, 0, 0), rgb(26, 64, 235));
    }
`