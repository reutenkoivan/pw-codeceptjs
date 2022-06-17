"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[577],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),i=n(5162),u=["components"],s={title:"@pw-codeceptjs/base-extension",sidebar_label:"Installation",sidebar_position:1},c=void 0,p={unversionedId:"index",id:"index",title:"@pw-codeceptjs/base-extension",description:"Adding dependency",source:"@site/../packages/extensions/base/doc/index.md",sourceDirName:".",slug:"/",permalink:"/pw-codeceptjs/extensions/base/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1655457915,formattedLastUpdatedAt:"6/17/2022",sidebarPosition:1,frontMatter:{title:"@pw-codeceptjs/base-extension",sidebar_label:"Installation",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Entities",permalink:"/pw-codeceptjs/extensions/base/entities"}},d={},m=[{value:"Adding dependency",id:"adding-dependency",level:2},{value:"Import",id:"import",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-dependency"},"Adding dependency"),(0,o.kt)(l.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npm add -D "@pw-codeceptjs/base-extension"\n'))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'yarn add -D "@pw-codeceptjs/base-extension"\n')))),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseExtension } from '@pw-codeceptjs/base-extension'\n"))),(0,o.kt)(i.Z,{value:"CommonJS",label:"CommonJS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { BaseExtension } = require('@pw-codeceptjs/base-extension')\n")))))}b.isMDXComponent=!0},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,a.useState)(k),j=O[0],E=O[1],N=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var Z=x[b];null!=Z&&Z!==j&&g.some((function(e){return e.value===Z}))&&E(Z)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==j&&(I(t),E(r),null!=b&&T(b,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,l=N.indexOf(e.currentTarget)-1;n=null!=(o=N[l])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);