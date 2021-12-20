"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"deployment",title:"Deployment"},s=void 0,c={unversionedId:"tutorial/dao/deployment",id:"tutorial/dao/deployment",isDocsHomePage:!1,title:"Deployment",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/Deployment.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/deployment",permalink:"/docs/tutorial/dao/deployment",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/Deployment.md",tags:[],version:"current",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/tutorial/dao/configuration"},next:{title:"Tribute UI",permalink:"/docs/tutorial/dao/interacting"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Deploying your DAO",id:"deploying-your-dao",children:[{value:"Command line",id:"command-line",children:[]}]},{value:"Problems?",id:"problems",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u26a1\ufe0f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2699\ufe0f All the environment variables must be set in the ",(0,a.kt)("em",{parentName:"p"},".env")," file as indicated in the previous section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udcb2 Make sure you have ETH in your account (2 ETH should be more than enough)."))),(0,a.kt)("h2",{id:"deploying-your-dao"},"Deploying your DAO"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you are on the branch ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/releases/tag/v1.0.6"},"release-v1.0.6")," which is the version that contains the contracts integrated with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-ui"},"TributeUI"),"."))),(0,a.kt)("h3",{id:"command-line"},"Command line"),(0,a.kt)("p",null,"The deployment process is triggered by the script ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:*"),", where the ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," indicates which network the contracts are going to be deployed."),(0,a.kt)("p",null,"Execute the following command from the root directory of ",(0,a.kt)("inlineCode",{parentName:"p"},"tribute-contracts")," project to deploy all the contracts to Rinkeby:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy:rinkeby\n")),(0,a.kt)("p",null,"\ud83c\udf7a Sit back and have some drink while the deployment script is executed. It may take from 10 to 20 minutes to create all the smart contracts."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The deployment is slow mainly because we publish all the smart contracts at once, even the ones that are not in use by the DAO. We certainly don't do that for Mainnet deployments, but we are constantly working to improve the developer experience, and minimize the gas costs."))),(0,a.kt)("p",null,"At the end of the deployment process you should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"...\n************************\nDaoRegistry: 0x...\nBankExtension: 0x...\nNFTExtension: 0x...\nERC20Extension: 0x...\n************************\n\n- Saving migration to chain.\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.51462506 ETH\n\n\nSummary\n=======\n> Total deployments:   34\n> Final cost:          0.51610942 ETH\n")),(0,a.kt)("p",null,"\u26a1\ufe0f Awesome!! You have deployed your DAO to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network, and now it is time to interact with it using our dApp called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-ui"},"Tribute UI")),". Checkout the next section to dive into that."),(0,a.kt)("h2",{id:"problems"},"Problems?"),(0,a.kt)("p",null,"Ask for help on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}u.isMDXComponent=!0}}]);