import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* This is to eliminate the effect of jumping layout when switching between pages
     with enough content to scroll */

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    /* font-family: "Nunito"; */
    /* font-size: 62.5%; */
    
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  :root {
  
    /* COLORS */
  
    /* AMARANTH */
    
    --amaranth100: hsl(344, 100%, 92%);
    --amaranth200: hsl(342, 90%, 84%);
    --amaranth300: hsl(342, 89%, 71%);
    --amaranth400: hsl(343, 87%, 64%);
    --amaranth500: hsl(342, 86%, 54%);
    --amaranth600: hsl(342, 90%, 43%);
    --amaranth700: hsl(342, 89%, 33%);
    --amaranth800: hsl(342, 90%, 23%);
    --amaranth900: hsl(340, 100%, 16%);
    
    /* MALIBU */
    
    --malibu100: hsl(190, 100%, 92%);
    --malibu200: hsl(191, 98%, 84%);
    --malibu300: hsl(191, 98%, 75%);
    --malibu400: hsl(189, 98%, 68%);
    --malibu500: hsl(192, 98%, 63%);
    --malibu600: hsl(193, 95%, 47%);
    --malibu700: hsl(193, 99%, 33%);
    --malibu800: hsl(194, 98%, 22%);
    --malibu900: hsl(194, 100%, 16%);
    
    /* SUNSHADE */
    
    --sunshade100: hsl(39, 100%, 88%);
    --sunshade200: hsl(37, 100%, 82%);
    --sunshade300: hsl(33, 100%, 77%);
    --sunshade400: hsl(37, 100%, 67%);
    --sunshade500: hsl(36, 100%, 59%);
    --sunshade600: hsl(36, 100%, 50%);
    --sunshade700: hsl(35, 100%, 42%);
    --sunshade800: hsl(35, 100%, 32%);
    --sunshade900: hsl(37, 100%, 22%);
    
    /* CATALINA BLUE */
    
    --catalinaBlue100: hsl(212, 96%, 89%);
    --catalinaBlue200: hsl(210, 90%, 70%);
    --catalinaBlue300: hsl(212, 88%, 49%);
    --catalinaBlue400: hsl(212, 92%, 34%);
    --catalinaBlue500: hsl(213, 92%, 24%);
    --catalinaBlue600: hsl(211, 92%, 19%);
    --catalinaBlue700: hsl(212, 94%, 14%);
    --catalinaBlue800: hsl(213, 96%, 10%);
    --catalinaBlue900: hsl(214, 100%, 8%);
    
    /* GREY */
    
    --grey100: hsl(214, 28%, 95%);
    --grey200: hsl(212, 28%, 87%);
    --grey300: hsl(212, 27%, 70%);
    --grey400: hsl(212, 28%, 58%);
    --grey500: hsl(213, 29%, 49%);
    --grey600: hsl(211, 28%, 36%);
    --grey700: hsl(212, 28%, 24%);
    --grey800: hsl(212, 33%, 18%);
    --grey900: hsl(213, 36%, 11%);
    
    /* UNIVERSAL COLORS */
    
    --black: #000000;
    --white: #ffffff;
    
    /* GRADIENTS */
    
    /* linear-gradient(156.48deg, #D00B46 20.92%, #45D9FD 82.93%); */
    --cardLinearGradient: linear-gradient(156.48deg, var(--amaranth600) 20.92%, var(--malibu500) 82.93%);
    /* --footerLinearGradient: linear-gradient(53.47deg, #022145 43.32%, #45D9FD 100%); */
    --footerLinearGradient: linear-gradient(53.47deg, var(--catalinaBlue700) 43.32%, var(--malibu500) 100%);
    
    /* --headerLinearGradient: linear-gradient(261.12deg, #FFAC30 0%, #EE2560 110.78%); */
    --headerLinearGradient: linear-gradient(261.12deg, var(--sunshade500) 0%, var(--amaranth500) 110.78%);
    
    /* TYPOGRAPHY */
    
    /* FONT SIZES */
    
    --font72: 72px;
    --font60: 60px;
    --font48: 48px;
    --font36: 36px;
    --font30: 30px;
    --font24: 24px;
    --font20: 20px;
    --font18: 18px;
    --font16: 16px;
    --font14: 14px;
    --font12: 12px;
    
    /* FONT FAMILIES */
    
    --primaryFont: 'Nunito';
    
    
    /* CARDS */
    
    --cardBorderRadius: 25px;
    
    /* BOX SHADOWS */
    
    --cardBoxShadow: 0px 3px 3px rgba(0, 0, 0, 0.5), 0px 6px 10px rgba(0, 0, 0, 0.25);
    --cardElementTextShadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  
  }
  
  /* END OF :root selector */
    
    html {
      color: var(--grey800);
    }
    
    body {
      /* font-size: 2rem; */
    }
    
    a {
      color: var(--grey800);
    }
    
    ::selection {
      background-color: var(--sunshade500);
    }
    
    /* Scrollbar Styles */
    body::-webkit-scrollbar {
      width: 12px;
    }
    html {
      scrollbar-width: thin;
      scrollbar-color: var(--amaranth500) var(--catalinaBlue700);
    }
    body::-webkit-scrollbar-track {
      background: var(--catalinaBlue700);
    }
    body::-webkit-scrollbar-thumb {
      background-color: var(--amaranth500);
      /* border-radius: 6px; */
      /* border: 3px solid var(--amaranth700); */
    }
    

  
  
`
export default GlobalStyle
