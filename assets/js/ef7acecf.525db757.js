"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(3117),r=n(7294),o=n(4334),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var b=n(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={},l="Create a connection",c={unversionedId:"tutorials/create-a-connection",id:"tutorials/create-a-connection",title:"Create a connection",description:"This section assumes the following items:",source:"@site/guides/tutorials/create-a-connection.md",sourceDirName:"tutorials",slug:"/tutorials/create-a-connection",permalink:"/guides/tutorials/create-a-connection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/guides/tutorials/agent-config/logging"},next:{title:"Issue a credential",permalink:"/guides/tutorials/issue-a-credential"}},u={},p=[{value:"1. Setting up the agents",id:"1-setting-up-the-agents",level:3},{value:"Bob",id:"bob",level:4},{value:"Acme",id:"acme",level:4},{value:"2. Creating an invitation",id:"2-creating-an-invitation",level:4},{value:"3. Receiving the invitation",id:"3-receiving-the-invitation",level:3},{value:"4. (additional) listen to incoming connection responses",id:"4-additional-listen-to-incoming-connection-responses",level:3},{value:"5. Full code snippets",id:"5-full-code-snippets",level:3},{value:"Useful resources",id:"useful-resources",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-connection"},"Create a connection"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section assumes the following items:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation"},"valid environment")," for development")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"basic knowledge of the required fields in the ",(0,r.kt)("a",{parentName:"p",href:"./agent-config"},"agent\nconfig"))))),(0,r.kt)("p",null,"In this tutorial we will create a connection as ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," with ",(0,r.kt)("em",{parentName:"p"},"Bob"),". We will\nstart with setting up both their agents with the minimal configuration required\nto follow this tutorial. After the initialization we will then create an\ninvitation as ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," and send it over to ",(0,r.kt)("em",{parentName:"p"},"Bob"),". ",(0,r.kt)("em",{parentName:"p"},"Bob")," will then accept\nthis invitation and at that point they have established a connection and they\nknow how to reach each other for sending a basic message, issuing a credential,\nverifying a proof, etc."),(0,r.kt)("h3",{id:"1-setting-up-the-agents"},"1. Setting up the agents"),(0,r.kt)("p",null,"First for both agents we must setup and initialize an agent to work with.\nDepending on your target, ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/react-native"},"React\nNative")," or\n",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/react-native"},"Node.js"),", it might vary."),(0,r.kt)("p",null,"In this tutorial ",(0,r.kt)("em",{parentName:"p"},"Bob")," will be in a ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/react-native"},"React Native\nenvironment")," and ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," in\na ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/nodejs"},"Node.js environment"),"."),(0,r.kt)("h4",{id:"bob"},"Bob"),(0,r.kt)("p",null,"For bob we need to setup a basic agent with a wallet, mediator and outbound\ntransport."),(0,r.kt)("admonition",{type:"bob"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-1",showLineNumbers:!0,"create-a-connection.ts":!0,"section-1":!0},""))),(0,r.kt)("h4",{id:"acme"},"Acme"),(0,r.kt)("p",null,"For Acme we need to setup a basic agent with a wallet, inbound and outbound\ntransport."),(0,r.kt)("admonition",{type:"acme"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-2",showLineNumbers:!0,"create-a-connection.ts":!0,"section-2":!0},""))),(0,r.kt)("h4",{id:"2-creating-an-invitation"},"2. Creating an invitation"),(0,r.kt)("p",null,"Now that we have setup both agents, we can create an invitation from ",(0,r.kt)("em",{parentName:"p"},"Acme Corp"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"New",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"This method will create an invitation using the legacy method according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md"},"0434: Out-of-Band Protocol 1.1"),"."),(0,r.kt)("admonition",{type:"acme"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-3",showLineNumbers:!0,"create-a-connection.ts":!0,"section-3":!0},"const outOfBandRecord = await agent.oob.createInvitation()\n\nconst serializedInvitation = outOfBandRecord.outOfBandInvitation.toUrl({ domain: 'https://example.org' })\n")))),(0,r.kt)(i.Z,{label:"Legacy",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"This method will create an invitation using the legacy method according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0160-connection-protocol/README.md"},"0160: Connection Protocol"),"."),(0,r.kt)("admonition",{type:"acme"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-4",showLineNumbers:!0,"create-a-connection.ts":!0,"section-4":!0},""))))),(0,r.kt)("h3",{id:"3-receiving-the-invitation"},"3. Receiving the invitation"),(0,r.kt)("p",null,"After we have created the invitation we have to transmit it to the other\nagent. Common practise, when sending it to a holder, it to embed the url inside\na QR code. This QR code can then be scanned by the holder, in this case ",(0,r.kt)("em",{parentName:"p"},"Bob"),".\nAfter this, because both have set ",(0,r.kt)("inlineCode",{parentName:"p"},"autoAcceptConnections")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the\nconnection is established."),(0,r.kt)("admonition",{type:"bob"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"create-a-connection.ts section-5","create-a-connection.ts":!0,"section-5":!0},""))),(0,r.kt)("h3",{id:"4-additional-listen-to-incoming-connection-responses"},"4. (additional) listen to incoming connection responses"),(0,r.kt)("p",null,"When you quickly want to use the event or the data of a response to a\nconnection request, you can start an ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO: agent event\nlistener"),"."),(0,r.kt)("p",null,"Another use case for this would be to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," of the\nconnection as it is only created when the invitation has been received by the\nother agent. The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," is very essential in processes like ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO:\nissuing a credential")," or ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO: verifying a\nproof"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," can also be retrieved with\n",(0,r.kt)("inlineCode",{parentName:"p"},"agent.connections.findAllByOutOfBandId(id)"),", but with this method there is no\nway of knowing if the invitation has been received."),(0,r.kt)("admonition",{type:"acme"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-6",showLineNumbers:!0,"create-a-connection.ts":!0,"section-6":!0},""))),(0,r.kt)("h3",{id:"5-full-code-snippets"},"5. Full code snippets"),(0,r.kt)("p",null,"Below are both code snippets for each agent. These can be used as base but\nshould be editted to fit your use case. The\n",(0,r.kt)("a",{parentName:"p",href:"./agent-config#walletconfigkey"},(0,r.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),' must be changed as it can\nlead to other people knowing your "password" to your wallet.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts",showLineNumbers:!0,"create-a-connection.ts":!0},"")),(0,r.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0160-connection-protocol/README.md"},"0160: Connection Protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md"},"0434: Out-of-Band Protocol 1.1"))))}h.isMDXComponent=!0}}]);