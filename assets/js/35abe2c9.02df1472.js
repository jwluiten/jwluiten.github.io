"use strict";(self.webpackChunkjwluiten_github_io=self.webpackChunkjwluiten_github_io||[]).push([[413],{3905:(e,A,t)=>{t.d(A,{Zo:()=>a,kt:()=>d});var l=t(7294);function i(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);A&&(l=l.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){i(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,l,i=function(e,A){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],A.indexOf(t)>=0||(i[t]=e[t]);return i}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var g=l.createContext({}),c=function(e){var A=l.useContext(g),t=A;return e&&(t="function"==typeof e?e(A):n(n({},A),e)),t},a=function(e){var A=c(e.components);return l.createElement(g.Provider,{value:A},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var A=e.children;return l.createElement(l.Fragment,{},A)}},p=l.forwardRef((function(e,A){var t=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),s=c(t),p=i,d=s["".concat(g,".").concat(p)]||s[p]||m[p]||r;return t?l.createElement(d,n(n({ref:A},a),{},{components:t})):l.createElement(d,n({ref:A},a))}));function d(e,A){var t=arguments,i=A&&A.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=p;var o={};for(var g in A)hasOwnProperty.call(A,g)&&(o[g]=A[g]);o.originalType=e,o[s]="string"==typeof e?e:i,n[1]=o;for(var c=2;c<r;c++)n[c]=t[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6583:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>g,contentTitle:()=>n,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=t(7462),i=(t(7294),t(3905));const r={},n="Using notch filters",o={unversionedId:"ExpertSDR3/using-notch-filters/index",id:"ExpertSDR3/using-notch-filters/index",title:"Using notch filters",description:"Notch filters suppress interfering signals.",source:"@site/docs/02-ExpertSDR3/03-using-notch-filters/index.md",sourceDirName:"02-ExpertSDR3/03-using-notch-filters",slug:"/ExpertSDR3/using-notch-filters/",permalink:"/docs/ExpertSDR3/using-notch-filters/",draft:!1,editUrl:"https://github.com/jwluiten/jwluiten.github.io/tree/main/docs/02-ExpertSDR3/03-using-notch-filters/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using microphones",permalink:"/docs/ExpertSDR3/using-microphones"}},g={},c=[{value:"Video",id:"video",level:2},{value:"Notch filters using ExpertSDR3",id:"notch-filters-using-expertsdr3",level:2}],a={toc:c};function s(e){let{components:A,...r}=e;return(0,i.kt)("wrapper",(0,l.Z)({},a,r,{components:A,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-notch-filters"},"Using notch filters"),(0,i.kt)("p",null,"Notch filters suppress interfering signals.\nThese might be signals from neighboring stations or some other unknown source.\nNotch filters allow you to eliminate this interference.\nUsing notch filters, you might work that rare DX you would miss without them."),(0,i.kt)("p",null,"There is the ",(0,i.kt)("img",{alt:"ANF",src:t(7484).Z,width:"64",height:"30"}),", the Automatic Notch Filter (ANF).\nIn my experience the ANF does an excellent job identifying and eliminating interfering signals.\nIn most cases it will succesfully suppres most interfering signals.\nIn rare cases where ANF is not able to succesfully suppress the interfering signals, the ",(0,i.kt)("img",{alt:"NF+",src:t(8651).Z,width:"56",height:"30"}),"filter is your last resort.\nYou can add up to eight manually adjustable filters."),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("p",null,"Expert Electronics posted a video on their youtube channel explaining how to use notch filters in ExpertSDR2."),(0,i.kt)("iframe",{width:"747",height:"420",src:"https://www.youtube.com/embed/q4jM3S7dI0k?rel=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),(0,i.kt)("h2",{id:"notch-filters-using-expertsdr3"},"Notch filters using ExpertSDR3"),(0,i.kt)("p",null,"With respect to NFs there are a few subtle differences between ExpertSDR2 and ExpertSDR3. Using ExpertSDR3 on my MacBook, I observed the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left double-click")," deletes a notch filter"),(0,i.kt)("li",{parentName:"ul"},"finger ",(0,i.kt)("inlineCode",{parentName:"li"},"slide-up")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"slide-down")," on a Magic Mouse shifts the filter down or up in frequency"),(0,i.kt)("li",{parentName:"ul"},"ExpertSDR3 does not show the parameters of the NF")))}s.isMDXComponent=!0},8651:(e,A,t)=>{t.d(A,{Z:()=>l});const l="data:image/png;base64,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"},7484:(e,A,t)=>{t.d(A,{Z:()=>l});const l="data:image/png;base64,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"}}]);