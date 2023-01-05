"use strict";(self.webpackChunkexpertSDR3=self.webpackChunkexpertSDR3||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:0},i="Welcome",s={unversionedId:"index",id:"index",title:"Welcome",description:"My name is Jan Willem Luiten, callsign PA3GNW. In December 2022, on Black Friday, I purchased a SunSDR2 DX at Anico.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/jwluiten/jwluiten.github.io/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"SunSDR2 DX",permalink:"/docs/sunsdr2dx/"}},c={},l=[],u={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"My name is Jan Willem Luiten, callsign PA3GNW. In December 2022, on Black Friday, I purchased a SunSDR2 DX at ",(0,o.kt)("a",{href:"https://www.anico-hamshop.eu",target:"_blank"},"Anico"),".\nA couple of days later my SunSDR2 DX arrived. Unfortunately, I had to wait to unpack because I was busy at work. During the Christmas holidays, I finally found the time to unbox it, integrate it into my home network, and get it on the air. To be honest, that took me more time than I expected."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SunSDR2DX by Expert Electronics",src:n(3740).Z,width:"777",height:"512"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This website is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus"),". I warmly welcome anyone who wants to contribute. You are encouraged to fork my ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jwluiten/jwluiten.github.io"},"repo")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/contributing-to-projects"},"contribute")," to this website.")),(0,o.kt)("p",null,"In hindsight, I see a couple of reasons it took me fairly long to get it all up and running. Some aspects, like getting the mic input on my mac to work,\nwere only solved after days. Besides my own impatience, there are other aspects that caused it all to take longer than necessary."),(0,o.kt)("p",null,"A network capable Software Defined transceiver operated from a laptop, is a very different beast than a traditional Yaesu or Kenwoord transceiver. Traditional transceivers only need to be connected to a power supply and an antenna to be ready to operate."),(0,o.kt)("p",null,"SDR based transceivers like the SunSDR introduce a number of complications (challenges?) that need to be mastered. In order to work properly they need to be integrated in your home network. They are operated through a piece of software (Frontend) that must be installed on your laptop. In case of the SunSDR the latest version (ExpertSDR3), while easy to operate, has no manual yet. Also, information on the SunSDR is scattered over several places. While solutions for problems you might encounter are readily available, they are sometimes hard to find."),(0,o.kt)("p",null,"The challenges I encountered in getting my SunSDR on the air, are the reason for this website. My goal is to have a central location where I and others can write documentation and blog about our experiences with SunSDR, the expertSDR frontend and Ham Radio in general."))}p.isMDXComponent=!0},3740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SunSDR2DX-bca946f246442df81a8867b7c4c2d00d.jpg"}}]);