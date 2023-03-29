"use strict";(self.webpackChunkexpertSDR3=self.webpackChunkexpertSDR3||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0},i="Welcome",s={unversionedId:"index",id:"index",title:"Welcome",description:"Hello and Welcome. My name is Jan Willem Luiten, callsign PA3GNW. In December 2022, on Black Friday, I purchased a SunSDR2 DX at Anico.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/jwluiten/jwluiten.github.io/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"SunSDR2 DX",permalink:"/docs/sunsdr2dx/"}},l={},c=[{value:"Why is this difficult?",id:"why-is-this-difficult",level:2},{value:"Split functionality",id:"split-functionality",level:3},{value:"Networking",id:"networking",level:3},{value:"Operating System",id:"operating-system",level:3},{value:"No central source of information",id:"no-central-source-of-information",level:3},{value:"Why is this easy?",id:"why-is-this-easy",level:2},{value:"Look ma, no cables",id:"look-ma-no-cables",level:3},{value:"Transceiver Control Interface",id:"transceiver-control-interface",level:3},{value:"Let&#39;s help each other",id:"lets-help-each-other",level:2},{value:"Call to participate",id:"call-to-participate",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"Hello and Welcome. My name is Jan Willem Luiten, callsign PA3GNW. In December 2022, on Black Friday, I purchased a SunSDR2 DX at ",(0,a.kt)("a",{href:"https://www.anico-hamshop.eu",target:"_blank"},"Anico"),".\nA couple of days later my SunSDR2 DX arrived. Unfortunately, I had to wait to unpack because I was busy at work. During the Christmas holidays, I finally found the time to unbox it, integrate it into my home network, and get it on the air. To be honest, that took me longer than I expected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SunSDR2DX by Expert Electronics",src:n(3740).Z,width:"777",height:"512"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This website is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"Docusaurus"),". I warmly welcome anyone who wants to contribute. You are encouraged to fork my ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jwluiten/jwluiten.github.io"},"repo")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/contributing-to-projects"},"contribute")," to this website.")),(0,a.kt)("h2",{id:"why-is-this-difficult"},"Why is this difficult?"),(0,a.kt)("p",null,"In hindsight, I see a couple of reasons it took me fairly long to get it all up and running. Some aspects, like getting the mic input on my mac to work,\nwere only solved after days. Besides my own impatience, there are other aspects that caused it all to take longer than necessary."),(0,a.kt)("p",null,"A network capable Software Defined Radio operated from a laptop, is a very different beast than a traditional Yaesu, ICOM or Kenwood transceiver. Traditional transceivers only need to be connected to a power supply and an antenna to be ready to operate. SDR based transceivers like the SunSDR introduce a number of complications and challenges that need to be mastered."),(0,a.kt)("h3",{id:"split-functionality"},"Split functionality"),(0,a.kt)("p",null,"With traditional transceivers, all functionality resides in a single box, the transceiver. Software Defined Radios are comprised of two separate parts; the SDR transceiver, a piece of advanced hardware and a software front-end that runs on a laptop. The SDR hardware and the software front-end exchange information over a network connection. In Software Defined Radios, most of the functionality of the transceiver moved to the front-end. Setting the frequency, applying filters, using LSB, USB or FM all are determined and implemented in the front-end."),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("p",null,"The SDR hardware digitizes and pre-processes the received signals. This digitized stream of information is transmitted over the network to the front-end software. The front-end is what you ","\u2014","as a user","\u2014"," perceive as your transceiver. Using this front-end you operate the SDR hardware. Through the front-end you instruct the SDR hardware to transmit, switch on the PA or switch antennas."),(0,a.kt)("p",null,"Obviously, the network connection between the SDR hardware and the laptop running the front-end must be impeccable. It must provide an uninterrupted high-bandwidth exchange of data between hardware and software."),(0,a.kt)("p",null,"In order to work properly the SunSDR transceiver needs to be integrated into your home network. While most HAM operators are fairly proficient in this area of competence, this can present its challenges. The documentation on this site will guide you through this."),(0,a.kt)("h3",{id:"operating-system"},"Operating System"),(0,a.kt)("p",null,"The SunSDR transceivers are ","\u2014","like most Software Defined Radios","\u2014"," operated through a piece of software (front-end) that must be installed on your laptop. This not only brings all capabilities but also all complexities of the Operating System into play."),(0,a.kt)("h3",{id:"no-central-source-of-information"},"No central source of information"),(0,a.kt)("p",null,"Information on the SunSDR is scattered over several places. While solutions for problems you might encounter are readily available, they are sometimes hard to find. To make matter worse, the latest version (ExpertSDR3 1.0.2 beta), while easy to operate and similar to ExpertSDR3, has no manual at the time of this writing."),(0,a.kt)("h2",{id:"why-is-this-easy"},"Why is this easy?"),(0,a.kt)("p",null,"Once you've got your SunSDR and ExpertSDR up and running, you're bound to find out that a growing number of relevant progams seamlessly integrate with expertSDR. Spots from the DX-cluster show up in the frequency spectrum of expertSDR. Skimmers tap into data provided by expertSDR and decode CW and a myriad of other digital modes."),(0,a.kt)("h3",{id:"look-ma-no-cables"},"Look ma, no cables"),(0,a.kt)("p",null,"CAT interfaces (Computer Aided Tuning) and CI-V adapters are no match for what expertSDR has to offer. Physical cables, the CI-V Interface and the CAT protocol all became obsolete."),(0,a.kt)("h3",{id:"transceiver-control-interface"},"Transceiver Control Interface"),(0,a.kt)("p",null,"Expert Electronics is setting a benchmark with their TCI protocol. Many suppliers already adapted their software to the TCI protocol. ",(0,a.kt)("a",{parentName:"p",href:"https://www.lw-sdc.com"},"SDC (Software Defined Connectors)"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.dogparksoftware.com/MacLoggerDX.html"},"MacLoggerDX")," and many others run flawlessly with ExpertSDR3. Chasing DX, running digital modes and finding a running spot all of a sudden became a breeze."),(0,a.kt)("h2",{id:"lets-help-each-other"},"Let's help each other"),(0,a.kt)("p",null,"The challenges I encountered in getting my SunSDR on the air, are the reason for this website. My goal is to help other Hams by creating a central location where I and others can write documentation and blog about our experiences with SunSDR, the expertSDR front-end and Ham Radio in general."),(0,a.kt)("h2",{id:"call-to-participate"},"Call to participate"),(0,a.kt)("p",null,"I welcome everyone who wants to participate in growing our community."))}p.isMDXComponent=!0},3740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/SunSDR2DX-bca946f246442df81a8867b7c4c2d00d.jpg"}}]);