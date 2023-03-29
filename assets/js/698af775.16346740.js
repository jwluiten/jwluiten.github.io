"use strict";(self.webpackChunkjwluiten_github_io=self.webpackChunkjwluiten_github_io||[]).push([[721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={authors:"jwluiten",tags:["macOS","microphone","expertSDR3"]},i="Mic problem on macOS solved",c={permalink:"/blog/2022/12/30/mic-problem-solved",editUrl:"https://github.com/jwluiten/jwluiten.github.io/tree/main/blog/2022-12-30-mic-problem-solved/index.md",source:"@site/blog/2022-12-30-mic-problem-solved/index.md",title:"Mic problem on macOS solved",description:"On macOS, applications that want to use the microphone need to be granted access. This has been the case for quite a while. Applications that were not granted acces yet, show a dialog to request the user's permission. In my case that dialog never showed. So I created a bug report. After a while I received a message that referred to the README.txt that was included in the latest expertSDR3 version (1.0.2 beta).",date:"2022-12-30T00:00:00.000Z",formattedDate:"December 30, 2022",tags:[{label:"macOS",permalink:"/blog/tags/mac-os"},{label:"microphone",permalink:"/blog/tags/microphone"},{label:"expertSDR3",permalink:"/blog/tags/expert-sdr-3"}],readingTime:.65,hasTruncateMarker:!1,authors:[{name:"Jan Willem Luiten",title:"Website maintainer",url:"https://github.com/jwluiten",imageURL:"https://github.com/jwluiten.png",key:"jwluiten"}],frontMatter:{authors:"jwluiten",tags:["macOS","microphone","expertSDR3"]}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On macOS, applications that want to use the microphone need to be granted access. This has been the case for quite a while. Applications that were not granted acces yet, show a dialog to request the user's permission. In my case that dialog never showed. So I created a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpertSDR3/ExpertSDR3-BUG-TRACKER/issues/531"},"bug report"),". After a while I received a message that referred to the README.txt that was included in the latest expertSDR3 version (1.0.2 beta)."),(0,a.kt)("p",null,"Long story short, after copying ",(0,a.kt)("inlineCode",{parentName:"p"},"expertSDR3")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications"),", opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal")," application and executing the following command solved the problem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"codesign --force --deep --sign - /Applications/ExpertSDR3.app\n")),(0,a.kt)("p",null,"To verify access was granted open ",(0,a.kt)("inlineCode",{parentName:"p"},"System Preferences")," and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Privacy & Security"),". Next select ",(0,a.kt)("inlineCode",{parentName:"p"},"Microphone"),". If granting access for expertSDR3 succeeded you should see the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microphone Security",src:r(4253).Z,width:"1654",height:"1164"})))}u.isMDXComponent=!0},4253:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/microphone-security-850d160f50171a57c64b06edf6361590.png"}}]);