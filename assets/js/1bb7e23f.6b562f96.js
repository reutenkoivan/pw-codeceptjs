"use strict";(self.webpackChunkpw_codeceptjs=self.webpackChunkpw_codeceptjs||[]).push([[734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"waitForURL"},l=void 0,c={unversionedId:"fixture/wait-for-url",id:"fixture/wait-for-url",title:"waitForURL",description:"API",source:"@site/../../../../packages/test/doc/fixture/wait-for-url.md",sourceDirName:"fixture",slug:"/fixture/wait-for-url",permalink:"/pw-codeceptjs/test/fixture/wait-for-url",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677081722,formattedLastUpdatedAt:"2/22/2023",frontMatter:{title:"waitForURL"},sidebar:"defaultSidebar",previous:{title:"waitForText",permalink:"/pw-codeceptjs/test/fixture/wait-for-text"},next:{title:"workWithTab",permalink:"/pw-codeceptjs/test/fixture/work-with-tab"}},u={},s=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2}],f={toc:s},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface I {\n  waitForURL(\n      url: string|RegExp|((url: URL) => boolean),\n      options?: { timeout?: number; waitUntil?: 'load'|'domcontentloaded'|'networkidle'|'commit' }\n  ): Promise<void>\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { test } from '@pw-codeceptjs/test'\n\ntest('Example', async ({ I }) => {\n  await I.amOnPage('https://playwright.dev')\n  await I.waitForURL('playwright.dev')\n})\n")))}m.isMDXComponent=!0}}]);