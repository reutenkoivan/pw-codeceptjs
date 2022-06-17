"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||u;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<u;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2066:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(7462),a=r(3366),u=(r(7294),r(3905)),o=(r(5488),r(5162),["components"]),l={title:"buildFixture"},i=void 0,c={unversionedId:"build-fixture",id:"build-fixture",title:"buildFixture",description:"",source:"@site/../packages/test-fixture/doc/build-fixture.md",sourceDirName:".",slug:"/build-fixture",permalink:"/pw-codeceptjs/test-fixture/build-fixture",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ivan Reutenko",lastUpdatedAt:1655457915,formattedLastUpdatedAt:"6/17/2022",frontMatter:{title:"buildFixture"},sidebar:"defaultSidebar",previous:{title:"CodeceptFixture",permalink:"/pw-codeceptjs/test-fixture/codecept-fixture"}},s={},f=[],p={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(6010),u="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,o),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),u=r(6010),o=r(2389),l=r(7392),i=r(7094),c=r(2466),s="tabList__CuJ",f="tabItem_LNqP";function p(e){var t,r,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var O=null===d?d:null!=(t=null!=d?d:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==O&&!h.some((function(e){return e.value===O})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,E=w.setTabGroupChoices,k=(0,a.useState)(O),j=k[0],T=k[1],N=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=x[v];null!=C&&C!==j&&h.some((function(e){return e.value===C}))&&T(C)}var D=function(e){var t=e.currentTarget,r=N.indexOf(t),n=h[r].value;n!==j&&(P(t),T(n),null!=v&&E(v,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=N.indexOf(e.currentTarget)+1;r=null!=(n=N[a])?n:N[0];break;case"ArrowLeft":var u,o=N.indexOf(e.currentTarget)-1;r=null!=(u=N[o])?u:N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},b)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return N.push(e)},onKeyDown:Z,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);