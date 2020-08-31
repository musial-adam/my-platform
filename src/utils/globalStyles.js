import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* This is to eliminate the effect of jumping layout when switching between pages
     with enough content to scroll */

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    font-family: "Nunito";
    font-size: 62.5%;
    
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
      font-size: 2rem;
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
    
    
    
    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

    /* Document
      ========================================================================== */

    /**
    * 1. Correct the line height in all browsers.
    * 2. Prevent adjustments of font size after orientation changes in iOS.
    */

    html {
      line-height: 1.15; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    /* Sections
      ========================================================================== */

    /**
    * Remove the margin in all browsers.
    */

    body {
      margin: 0;
    }

    /**
    * Render the 'main' element consistently in IE.
    */

    main {
      display: block;
    }

    /**
    * Correct the font size and margin on 'h1' elements within 'section' and
    * 'article' contexts in Chrome, Firefox, and Safari.
    */

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    /* Grouping content
      ========================================================================== */

    /**
    * 1. Add the correct box sizing in Firefox.
    * 2. Show the overflow in Edge and IE.
    */

    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }

    /**
    * 1. Correct the inheritance and scaling of font size in all browsers.
    * 2. Correct the odd 'em' font sizing in all browsers.
    */

    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /* Text-level semantics
      ========================================================================== */

    /**
    * Remove the gray background on active links in IE 10.
    */
    sss
    a {
      background-color: transparent;
    }

    /**
    * 1. Remove the bottom border in Chrome 57-
    * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
    */

    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }

    /**
    * Add the correct font weight in Chrome, Edge, and Safari.
    */

    b,
    strong {
      font-weight: bolder;
    }

    /**
    * 1. Correct the inheritance and scaling of font size in all browsers.
    * 2. Correct the odd 'em' font sizing in all browsers.
    */

    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /**
    * Add the correct font size in all browsers.
    */

    small {
      font-size: 80%;
    }

    /**
    * Prevent 'sub' and 'sup' elements from affecting the line height in
    * all browsers.
    */

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    /* Embedded content
      ========================================================================== */

    /**
    * Remove the border on images inside links in IE 10.
    */

    img {
      border-style: none;
    }

    /* Forms
      ========================================================================== */

    /**
    * 1. Change the font styles in all browsers.
    * 2. Remove the margin in Firefox and Safari.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    /**
    * Show the overflow in IE.
    * 1. Show the overflow in Edge.
    */

    button,
    input { /* 1 */
      overflow: visible;
    }

    /**
    * Remove the inheritance of text transform in Edge, Firefox, and IE.
    * 1. Remove the inheritance of text transform in Firefox.
    */

    button,
    select { /* 1 */
      text-transform: none;
    }

    /**
    * Correct the inability to style clickable types in iOS and Safari.
    */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }

    /**
    * Remove the inner border and padding in Firefox.
    */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    /**
    * Restore the focus styles unset by the previous rule.
    */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    /**
    * Correct the padding in Firefox.
    */

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    /**
    * 1. Correct the text wrapping in Edge and IE.
    * 2. Correct the color inheritance from 'fieldset' elements in IE.
    * 3. Remove the padding so developers are not caught out when they zero out
    *    'fieldset' elements in all browsers.
    */

    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }

    /**
    * Add the correct vertical alignment in Chrome, Firefox, and Opera.
    */

    progress {
      vertical-align: baseline;
    }

    /**
    * Remove the default vertical scrollbar in IE 10+.
    */

    textarea {
      overflow: auto;
    }

    /**
    * 1. Add the correct box sizing in IE 10.
    * 2. Remove the padding in IE 10.
    */

    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }

    /**
    * Correct the cursor style of increment and decrement buttons in Chrome.
    */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }

    /**
    * 1. Correct the odd appearance in Chrome and Safari.
    * 2. Correct the outline style in Safari.
    */

    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    /**
    * Remove the inner padding in Chrome and Safari on macOS.
    */

    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    /**
    * 1. Correct the inability to style clickable types in iOS and Safari.
    * 2. Change font properties to 'inherit' in Safari.
    */

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }

    /* Interactive
      ========================================================================== */

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
      display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
      display: list-item;
    }

    /* Misc
      ========================================================================== */

    /**
    * Add the correct display in IE 10+.
    */

    template {
      display: none;
    }

    /**
    * Add the correct display in IE 10.
    */

    [hidden] {
      display: none;
    }

  
  
`
export default GlobalStyle
