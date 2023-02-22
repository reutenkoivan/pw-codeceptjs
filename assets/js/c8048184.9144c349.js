"use strict";(self.webpackChunkpw_codeceptjs=self.webpackChunkpw_codeceptjs||[]).push([[748],{9437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(7294),a=n(6010),r=n(2600),c=n(9960),l=n(2263);const s={heroBanner:"heroBanner_XzOL",buttons:"buttons_MteR"};var i=n(7462),u=n(8066);const p={features:"features_HYnv",featureSvg:"featureSvg_jd0e"};var d=[{title:"Declarative:",description:o.createElement(o.Fragment,null,o.createElement("b",null,"pw-codeceptjs")," was designed for creating more understandable tests, which can be read everyone in your team."),fileName:"base.spec.ts",code:"\nimport { test } from '@pw-codeceptjs/test'\n\ntest.describe('Fixture', () => {\n  test('test #1', async ({ I }) => {\n    await I.amOnPage('https://playwright.dev/')\n    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })\n  })\n})".trim()},{title:"Configurable:",description:o.createElement(o.Fragment,null,"Extensions provide to expand base functionality."),fileName:"extension.spec.ts",code:"\nimport { test } from '@pw-codeceptjs/test'\n\ntest.describe('Fixture', () => {\n  test('test #1', async ({ I }) => {\n    await I.amOnPage('https://playwright.dev/')\n    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })\n    await I.use.utils.wait(3)\n  })\n})\n".trim()}];function m(e){var t=e.title,n=e.description,a=e.code,r=e.fileName;e.id;return o.createElement("div",{style:{width:"100%",padding:10}},o.createElement("div",null,o.createElement("h3",null,t),o.createElement("p",null,n)),o.createElement("div",null,o.createElement(u.Z,{language:"typescript",title:r,children:a})))}function y(){return o.createElement("section",{className:p.features},o.createElement("div",{className:"container"},o.createElement("div",{className:"row row--align-stretch"},d.map((function(e,t){return o.createElement(m,(0,i.Z)({key:t},e,{id:t}))})))))}function g(){var e=(0,l.Z)().siteConfig;return o.createElement("header",{className:(0,a.Z)("hero hero--primary",s.heroBanner)},o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__title"},e.title.toLowerCase()),o.createElement("p",{className:"hero__subtitle"},e.tagline),o.createElement("div",{className:s.buttons},o.createElement(c.Z,{className:"button button--secondary button--lg",to:"/test"},"Start"))))}function h(){var e=(0,l.Z)().siteConfig;return o.createElement(r.Z,{title:e.title,description:"Custom fixture for declarative writing playwright tests."},o.createElement(g,null),o.createElement("main",null,o.createElement(y,null)))}},8066:(e,t,n)=>{n.d(t,{Z:()=>E});var o=n(7462),a=n(7294),r=n(6010);const c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var l={Prism:n(7410).default,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=i({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==a&&(r.style=void 0!==r.style?i({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,c=i({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?i({},c.style,a):a),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),s(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,c=0,l=[],s=[l];c>-1;){for(;(r=o[c]++)<a[c];){var i=void 0,m=t[c],y=n[c][r];if("string"==typeof y?(m=c>0?m:["plain"],i=y):(m=d(m,y.type),y.alias&&(m=d(m,y.alias)),i=y.content),"string"==typeof i){var g=i.split(u),h=g.length;l.push({types:m,content:g[0]});for(var v=1;v<h;v++)p(l),s.push(l=[]),l.push({types:m,content:g[v]})}else c++,t.push(m),n.push(i),o.push(0),a.push(i.length)}c--,t.pop(),n.pop(),o.pop(),a.pop()}return p(l),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var h=n(6594);var v=n(5999);const f={copyButton:"copyButton_eDfN",copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function k(e){var t=e.code,n=(0,a.useState)(!1),o=n[0],c=n[1],l=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var c=document.getSelection(),l=!1;c.rangeCount>0&&(l=c.getRangeAt(0)),o.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(i){}a.remove(),l&&(c.removeAllRanges(),c.addRange(l)),r&&r.focus()}(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(f.copyButton,"clean-btn",o&&f.copyButtonCopied),onClick:s},a.createElement("span",{className:f.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:f.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:f.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const b={codeBlockContainer:"codeBlockContainer_I0IT",codeBlockContent:"codeBlockContent_wNvx",codeBlockTitle:"codeBlockTitle_BvAR",codeBlock:"codeBlock_jd64",codeBlockStandalone:"codeBlockStandalone_csWH",codeBlockLines:"codeBlockLines_mRuA"};function E(e){var t,n=e.children,c=e.className,s=void 0===c?"":c,i=e.metastring,u=e.title,p=e.language,d=(0,h.LU)().prism,m=(0,a.useState)(!1),y=m[0],v=m[1];(0,a.useEffect)((function(){v(!0)}),[]);var f=(0,h.bc)(i)||u,E=(0,h.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(g,(0,o.Z)({},l,{key:String(y),theme:E,code:"",language:"text"}),(function(e){var t=e.className,o=e.style;return a.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,b.codeBlockStandalone,"thin-scrollbar",b.codeBlockContainer,s,h.kM.common.codeBlock),style:o},a.createElement("code",{className:b.codeBlockLines},n))}));var B=Array.isArray(n)?n.join(""):n,w=null!=(t=null!=p?p:(0,h.Vo)(s))?t:d.defaultLanguage,N=(0,h.nZ)(B,i,w),_=N.highlightLines,C=N.code;return a.createElement(g,(0,o.Z)({},l,{key:String(y),theme:E,code:C,language:null!=w?w:"text"}),(function(e){var t,n=e.className,c=e.style,l=e.tokens,i=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,r.Z)(b.codeBlockContainer,s,(t={},t["language-"+w]=w&&!s.includes("language-"+w),t),h.kM.common.codeBlock)},f&&a.createElement("div",{style:c,className:b.codeBlockTitle},f),a.createElement("div",{className:b.codeBlockContent,style:c},a.createElement("pre",{tabIndex:0,className:(0,r.Z)(n,b.codeBlock,"thin-scrollbar")},a.createElement("code",{className:b.codeBlockLines},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return _.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,o.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(k,{code:C})))}))}}}]);