"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[925],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(6010),r="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),i=n(7294),r=n(2389),o=n(7392),s=n(7094),c=n(2466),l=n(6010),u="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,r,m=e.lazy,d=e.block,h=e.defaultValue,v=e.values,f=e.groupId,b=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),O=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,i.useState)(w),E=C[0],j=C[1],A=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=O[f];null!=D&&D!==E&&k.some((function(e){return e.value===D}))&&j(D)}var I=function(e){var t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==E&&(x(t),j(a),null!=f&&T(f,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var i=A.indexOf(e.currentTarget)-1;n=A[i]||A[A.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return A.push(e)},onKeyDown:P,onFocus:I,onClick:I},r,{className:(0,l.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),m?(0,i.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},2960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(9877),s=n(2360),c=["components"],l={},u="Create a connection",p={unversionedId:"tutorials/create-a-connection",id:"tutorials/create-a-connection",title:"Create a connection",description:"This section assumes the following items:",source:"@site/guides/tutorials/create-a-connection.md",sourceDirName:"tutorials",slug:"/tutorials/create-a-connection",permalink:"/aries-javascript-docs/guides/tutorials/create-a-connection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent Config",permalink:"/aries-javascript-docs/guides/tutorials/agent-config"},next:{title:"Issue a credential",permalink:"/aries-javascript-docs/guides/tutorials/issue-a-credential"}},m={},d=[{value:"1. Setting up the agents",id:"1-setting-up-the-agents",level:3},{value:"Bob",id:"bob",level:4},{value:"Acme",id:"acme",level:4},{value:"2. Creating an invitation",id:"2-creating-an-invitation",level:4},{value:"3. Receiving the invitation",id:"3-receiving-the-invitation",level:3},{value:"4. (additional) listen to incoming connection responses",id:"4-additional-listen-to-incoming-connection-responses",level:3},{value:"5. Full code snippets",id:"5-full-code-snippets",level:3},{value:"Useful resources",id:"useful-resources",level:3}],h={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-connection"},"Create a connection"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section assumes the following items:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/prerequisites"},"valid environment")," for development")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"basic knowledge of the required fields in the ",(0,r.kt)("a",{parentName:"p",href:"./agent-config"},"agent\nconfig"))))),(0,r.kt)("p",null,"In this tutorial we will create a connection as ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," with ",(0,r.kt)("em",{parentName:"p"},"Bob"),". We will\nstart with setting up both their agents with the minimal configuration required\nto follow this tutorial. After the initialization we will then create an\ninvitation as ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," and send it over to ",(0,r.kt)("em",{parentName:"p"},"Bob"),". ",(0,r.kt)("em",{parentName:"p"},"Bob")," will then accept\nthis invitation and at that point they have established a connection and they\nknow how to reach each other for sending a basic message, issuing a credential,\nverifying a proof, etc."),(0,r.kt)("h3",{id:"1-setting-up-the-agents"},"1. Setting up the agents"),(0,r.kt)("p",null,"First for both agents we must setup and initialize an agent to work with.\nDepending on your target, ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/react-native"},"React\nNative")," or\n",(0,r.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/react-native"},"Node.js"),", it might vary."),(0,r.kt)("p",null,"In this tutorial ",(0,r.kt)("em",{parentName:"p"},"Bob")," will be in a ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/react-native"},"React Native\nenvironment")," and ",(0,r.kt)("em",{parentName:"p"},"Acme Corp")," in\na ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/prerequisites/nodejs"},"Node.js environment"),"."),(0,r.kt)("h4",{id:"bob"},"Bob"),(0,r.kt)("p",null,"For bob we need to setup a basic agent with a wallet, mediator and outbound\ntransport."),(0,r.kt)("div",{className:"admonition admonition-bob alert alert--alert alert--bob"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83e\uddd4"),"bob")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-1",showLineNumbers:!0,"create-a-connection.ts":!0,"section-1":!0},"")))),(0,r.kt)("h4",{id:"acme"},"Acme"),(0,r.kt)("p",null,"For Acme we need to setup a basic agent with a wallet, inbound and outbound\ntransport."),(0,r.kt)("div",{className:"admonition admonition-acme alert alert--alert alert--acme"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83c\udfe2"),"acme")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-2",showLineNumbers:!0,"create-a-connection.ts":!0,"section-2":!0},"")))),(0,r.kt)("h4",{id:"2-creating-an-invitation"},"2. Creating an invitation"),(0,r.kt)("p",null,"Now that we have setup both agents, we can create an invitation from ",(0,r.kt)("em",{parentName:"p"},"Acme Corp"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"New",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"This method will create an invitation using the legacy method according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md"},"0434: Out-of-Band Protocol 1.1"),"."),(0,r.kt)("div",{className:"admonition admonition-acme alert alert--alert alert--acme"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83c\udfe2"),"acme")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-3",showLineNumbers:!0,"create-a-connection.ts":!0,"section-3":!0},'const outOfBandRecord = await agent.oob.createInvitation()\n\nconst serializedInvitation = outOfBandRecord.outOfBandInvitation.toUrl({ domain: "https://example.org" })\n'))))),(0,r.kt)(s.Z,{label:"Legacy",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"This method will create an invitation using the legacy method according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0160-connection-protocol/README.md"},"0160: Connection Protocol"),"."),(0,r.kt)("div",{className:"admonition admonition-acme alert alert--alert alert--acme"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83c\udfe2"),"acme")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-4",showLineNumbers:!0,"create-a-connection.ts":!0,"section-4":!0},"")))))),(0,r.kt)("h3",{id:"3-receiving-the-invitation"},"3. Receiving the invitation"),(0,r.kt)("p",null,"After we have created the invitation we have to transmit it to the other\nagent. Common practise, when sending it to a holder, it to embed the url inside\na QR code. This QR code can then be scanned by the holder, in this case ",(0,r.kt)("em",{parentName:"p"},"Bob"),".\nAfter this, because both have set ",(0,r.kt)("inlineCode",{parentName:"p"},"autoAcceptConnections")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the\nconnection is established."),(0,r.kt)("div",{className:"admonition admonition-bob alert alert--alert alert--bob"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83e\uddd4"),"bob")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"create-a-connection.ts section-5","create-a-connection.ts":!0,"section-5":!0},"")))),(0,r.kt)("h3",{id:"4-additional-listen-to-incoming-connection-responses"},"4. (additional) listen to incoming connection responses"),(0,r.kt)("p",null,"When you quickly want to use the event or the data of a response to a\nconnection request, you can start an ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO: agent event\nlistener"),"."),(0,r.kt)("p",null,"Another use case for this would be to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," of the\nconnection as it is only created when the invitation has been received by the\nother agent. The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," is very essential in processes like ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO:\nissuing a credential")," or ",(0,r.kt)("a",{parentName:"p",href:"https://example.org"},"TODO: verifying a\nproof"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectionRecord")," can also be retrieved with\n",(0,r.kt)("inlineCode",{parentName:"p"},"agent.connections.findAllByOutOfBandId(id)"),", but with this method there is no\nway of knowing if the invitation has been received."),(0,r.kt)("div",{className:"admonition admonition-acme alert alert--alert alert--acme"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83c\udfe2"),"acme")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts section-6",showLineNumbers:!0,"create-a-connection.ts":!0,"section-6":!0},"")))),(0,r.kt)("h3",{id:"5-full-code-snippets"},"5. Full code snippets"),(0,r.kt)("p",null,"Below are both code snippets for each agent. These can be used as base but\nshould be editted to fit your use case. The\n",(0,r.kt)("a",{parentName:"p",href:"./agent-config#walletconfigkey"},(0,r.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),' must be changed as it can\nlead to other people knowing your "password" to your wallet.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers create-a-connection.ts",showLineNumbers:!0,"create-a-connection.ts":!0},"")),(0,r.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0160-connection-protocol/README.md"},"0160: Connection Protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0434-outofband/README.md"},"0434: Out-of-Band Protocol 1.1"))))}v.isMDXComponent=!0}}]);