"use strict";(self.webpackChunkpw_codeceptjs=self.webpackChunkpw_codeceptjs||[]).push([[184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],c={title:"Expect"},i=void 0,s={unversionedId:"expect/index",id:"expect/index",title:"Expect",description:"Re-export of test-assertions solution from playwright library.",source:"@site/../../../../packages/test/doc/expect/index.md",sourceDirName:"expect",slug:"/expect/",permalink:"/pw-codeceptjs/test/expect/",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677081722,formattedLastUpdatedAt:"2/22/2023",frontMatter:{title:"Expect"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/pw-codeceptjs/test/"},next:{title:"amOnPage",permalink:"/pw-codeceptjs/test/fixture/am-on-page"}},l={},u=[{value:"Using",id:"using",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Re-export of ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-assertions"},"test-assertions")," solution from playwright library."),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { test, expect } from '@pw-codeceptjs/test'\n\ntest('Example', async ({}) => {\n  expect(1).toEqual(1)\n})\n")))}m.isMDXComponent=!0}}]);