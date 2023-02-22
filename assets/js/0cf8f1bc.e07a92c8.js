"use strict";(self.webpackChunkpw_codeceptjs=self.webpackChunkpw_codeceptjs||[]).push([[611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||c;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=["components"],i={title:"clearField"},l=void 0,p={unversionedId:"fixture/clear-field",id:"fixture/clear-field",title:"clearField",description:"API",source:"@site/../../../../packages/test/doc/fixture/clear-field.md",sourceDirName:"fixture",slug:"/fixture/clear-field",permalink:"/pw-codeceptjs/test/fixture/clear-field",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677081722,formattedLastUpdatedAt:"2/22/2023",frontMatter:{title:"clearField"},sidebar:"defaultSidebar",previous:{title:"clearCookie",permalink:"/pw-codeceptjs/test/fixture/clear-cookie"},next:{title:"click",permalink:"/pw-codeceptjs/test/fixture/click"}},u={},s=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2}],d={toc:s},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"api"},"API"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"interface I {\n  clearField(locator: string): Promise<void>\n}\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { test } from '@pw-codeceptjs/test'\n\ntest('Example', async ({ I }) => {\n  await I.amOnPage('https://playwright.dev')\n  await I.click('.DocSearch-Button')\n  await I.appendField('api', { locator: '.DocSearch-Input' })\n\n  await I.clearField('.DocSearch-Input')\n})\n")))}m.isMDXComponent=!0}}]);