import styled, {createGlobalStyle} from 'styled-components';
import BGImage from '../images/bg.jpg';

export const GlobalStyle = createGlobalStyle `
    html{
        heigh: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-image: url(${BGImage});
        backgrounf-size: cover;
    }

    body {
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        font-family: Anime Ace , sans-serif;
        font-size: 30px;
    }

    img{  
        height: 300px;    
        align: left;
        right: 10vh ;
        bottom: 10vh;
        display: flex;
        position: absolute;
        }  
        
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 40px;

    p {
        color: #fffff;
    }

    root {
      display: grid;
      grid-template-columns: auto auto auto;
      align-content: center;
      justify-content: center;
    }

    .score {
        color: #ffffff;
        font-size: 1.3rem;
        margin-top: 30px;
        box-shadow:inset 0px 1px 0px 0px #efdcfb;
        background:linear-gradient(to bottom, #f0dcf5 5%, #caa5d4 100%);
        background-color:#dfbdfa;
        border-radius:6px;
        border:1px solid #c584f3;
        padding-left: 20px;
        padding-right: 20px;
        padding: 10px
    }

    h1 { 
        color: white;
        font-family: Anime Ace , sans-serif;
        background-image: linea-gradient(180deg, #fff, #333333);
        background-size: 100%;
        backgorund-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-coor: transparent;
        filter: drop-shadow(2px 2px #664f6b);
        font-size: 60px;
        text-align: center;
        margin: 20px;

    }

    .start, .next {
        box-shadow:inset 0px 1px 0px 0px #efdcfb;
        background:linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
        background-color:#dfbdfa;
        border-radius:6px;
        border:1px solid #c584f3;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family: Anime Ace , sans-serif;
        font-size:20px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px #9752cc;
        
    }

    .start, .next:hover {
        background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%);
        background-color:#bc80ea;
    }

    .start, .next:active {
        position:relative;
        top:1px;      
    }

    .next {
        margin: 20px;
        padding: 15px;
    }

    .start {
        max-width: 200px;
    }

`
