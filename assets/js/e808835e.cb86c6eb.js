"use strict";(self.webpackChunkpw_codeceptjs=self.webpackChunkpw_codeceptjs||[]).push([[421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={title:"click"},l=void 0,p={unversionedId:"fixture/click",id:"fixture/click",title:"click",description:"API",source:"@site/../../../../packages/test/doc/fixture/click.md",sourceDirName:"fixture",slug:"/fixture/click",permalink:"/pw-codeceptjs/test/fixture/click",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1677081722,formattedLastUpdatedAt:"2/22/2023",frontMatter:{title:"click"},sidebar:"defaultSidebar",previous:{title:"clearField",permalink:"/pw-codeceptjs/test/fixture/clear-field"},next:{title:"closeTab",permalink:"/pw-codeceptjs/test/fixture/close-tab"}},s={},u=[{value:"API",id:"api",level:2},{value:"Example",id:"example",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface I {\n  click(\n    locator: string,\n    options?: {\n      createsNewPage?: boolean;\n      button?: 'left'|'right'|'middle';\n      clickCount?: number;\n      delay?: number;\n      force?: boolean;\n      modifiers?: Array<'Alt'|'Control'|'Meta'|'Shift'>;\n      noWaitAfter?: boolean;\n      position?: { x: number; y: number };\n      timeout?: number;\n      trial?: boolean;\n    }\n  ): Promise<void>\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { test } from '@pw-codeceptjs/test'\n\ntest('Example', async ({ I }) => {\n  await I.amOnPage('https://playwright.dev')\n  await I.click('text=GitHub', { createsNewPage: true }) // click and switch to page which was opened\n})\n")))}m.isMDXComponent=!0}}]);