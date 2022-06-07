"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[577],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6957:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(8215),s=["components"],u={title:"@pw-codeceptjs/base-extension",sidebar_label:"Entities",sidebar_position:1},c=void 0,p={unversionedId:"index",id:"index",title:"@pw-codeceptjs/base-extension",description:"BaseExtension",source:"@site/../packages/extensions/base/doc/index.md",sourceDirName:".",slug:"/",permalink:"/pw-codeceptjs/extensions/base/",tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1654599017,formattedLastUpdatedAt:"6/7/2022",sidebarPosition:1,frontMatter:{title:"@pw-codeceptjs/base-extension",sidebar_label:"Entities",sidebar_position:1},sidebar:"defaultSidebar"},d={},m=[{value:"BaseExtension",id:"baseextension",level:3},{value:"Import",id:"import",level:4},{value:"API",id:"api",level:4}],f={toc:m};function b(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"baseextension"},"BaseExtension"),(0,o.kt)("p",null,"Provide base contract between extension and main playwright fixture."),(0,o.kt)("h4",{id:"import"},"Import"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseExtension } from '@pw-codeceptjs/base-extension'\n"))),(0,o.kt)(l.Z,{value:"CommonJS",label:"CommonJS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { BaseExtension } = require('@pw-codeceptjs/base-extension')\n")))),(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Browser, BrowserContext, Page } from '@playwright/test'\nimport { Signale } from 'signales'\n\nexport type ExtensionMetaType = {\n  tabID: number\n}\n\nexport type ExtensionUtilsType = {\n  getPage: () => Promise<Page>\n}\n\nexport type ExtensionBusType = {\n  browser: Browser;\n  browserName: string;\n  context: BrowserContext;\n  meta: ExtensionMetaType\n  extensionName: string;\n  utils: ExtensionUtilsType;\n}\n\nexport class BaseExtension {\n  protected readonly browser: Browser\n  protected readonly context: BrowserContext\n  protected readonly utils: ExtensionUtilsType\n  protected readonly meta: ExtensionMetaType\n  protected readonly browserName: string\n  protected readonly logger: typeof Signale\n\n  /* === Hooks === === === === === === === === === === === === === === === === === === === === */\n\n  init(options: { extensions: codeceptjsFixtureTypes.extensions }): Promise<void> {}\n  _before(): Promise<void> {}\n  _after(): Promise<void> {}\n\n  /* === API === === === === === === === === === === === === === === === === === === === === */\n\n  enableLogs(): void {}\n  disableLogs(): void {}\n}\n")))}b.isMDXComponent=!0},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),o=t(2389),i=t(9366),l=t(6010),s="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.UB)(),h=x.tabGroupChoices,w=x.setTabGroupChoices,E=(0,a.useState)(g),T=E[0],k=E[1],O=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=h[m];null!=P&&P!==T&&v.some((function(e){return e.value===P}))&&k(P)}var N=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==T&&(j(n),k(r),null!=m&&w(m,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}}}]);