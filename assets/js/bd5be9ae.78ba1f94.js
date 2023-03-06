"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(3117),r=n(7294),i=n(4334),o=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(2389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={},l="Issue a credential",u={unversionedId:"tutorials/issue-a-credential",id:"tutorials/issue-a-credential",title:"Issue a credential",description:"Using AnonCreds and the",source:"@site/guides/tutorials/issue-a-credential.md",sourceDirName:"tutorials",slug:"/tutorials/issue-a-credential",permalink:"/guides/tutorials/issue-a-credential",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a connection",permalink:"/guides/tutorials/create-a-connection"},next:{title:"Using PostgreSQL as Database in Node.js",permalink:"/guides/tutorials/postgres-database-nodejs/"}},c={},p=[{value:"1. Setting up the agents",id:"1-setting-up-the-agents",level:3},{value:"Holder",id:"holder",level:4},{value:"Issuer",id:"issuer",level:4},{value:"2. Registering the schema and credential definition",id:"2-registering-the-schema-and-credential-definition",level:3},{value:"3. Listening for incoming credentials",id:"3-listening-for-incoming-credentials",level:3},{value:"4. Issuing a credential",id:"4-issuing-a-credential",level:3},{value:"5. Full code snippets",id:"5-full-code-snippets",level:3},{value:"Useful resources",id:"useful-resources",level:3},{value:"Side notes",id:"side-notes",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issue-a-credential"},"Issue a credential"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://anoncreds-wg.github.io/anoncreds-spec/"},"AnonCreds")," and the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md"},"Issue Credential V2\nProtocol"),"\nor the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md"},"Issue Credential V1\nProtocol"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section assumes the following items:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation"},"valid environment")," for development")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Basic knowledge of the required fields in the ",(0,r.kt)("a",{parentName:"p",href:"./agent-config"},"agent\nconfig"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"./create-a-connection"},"connection between the ",(0,r.kt)("em",{parentName:"a"},"Holder")," and ",(0,r.kt)("em",{parentName:"a"},"Issuer")))))),(0,r.kt)("p",null,"In this tutorial we will issue a credential from the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," to a ",(0,r.kt)("em",{parentName:"p"},"Holder"),". We\nwill start with setting up both their agents with the minimal configuration\nrequired to follow this tutorial. After the initialization we will then create\na schema, credential definition and a credential as the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," and send the\ncredential over to the ",(0,r.kt)("em",{parentName:"p"},"Holder"),". The ",(0,r.kt)("em",{parentName:"p"},"holder")," will then accept this credential\nand automatically store it in their wallet."),(0,r.kt)("h3",{id:"1-setting-up-the-agents"},"1. Setting up the agents"),(0,r.kt)("p",null,"First for both agents we must setup and initialize an agent to work with.\nDepending on your target, ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/react-native"},"React\nNative")," or\n",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/react-native"},"Node.js"),", it might vary."),(0,r.kt)("p",null,"In this tutorial the ",(0,r.kt)("em",{parentName:"p"},"Holder")," will be in a ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/nodejs"},"Node.js\nenvironment")," and the ",(0,r.kt)("em",{parentName:"p"},"Issuer"),"\nalso in a ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/installation/nodejs"},"Node.js environment"),"."),(0,r.kt)("h4",{id:"holder"},"Holder"),(0,r.kt)("p",null,"For the ",(0,r.kt)("em",{parentName:"p"},"Holder")," we need to setup a basic agent with a wallet, mediator,\noutbound transport and a ledger."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to follow this tutorial in a mobile environment:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"agentDependencies")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"@aries-framework/react-native")),(0,r.kt)("li",{parentName:"ol"},"It is very important to note that mobile agents do not support HTTP by default.\nIt is recommended to do everything over HTTPS, but for development HTTP can be\nenabled for\n",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9"},"iOS"),"\nand\n",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51902629/how-to-allow-all-network-connection-types-http-and-https-in-android-9-pie"},"Android"),"."))),(0,r.kt)("admonition",{type:"holder"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-1",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-1":!0},""))),(0,r.kt)("h4",{id:"issuer"},"Issuer"),(0,r.kt)("p",null,"For the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," the setup is almost the same as the ",(0,r.kt)("em",{parentName:"p"},"Holder"),". The difference\nis, is that the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," does not need a mediator but an\n",(0,r.kt)("inlineCode",{parentName:"p"},"HttpInboundTransport"),"."),(0,r.kt)("p",null,"It is also very important for the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," to have a public DID, for the\nbinding with a credential definition, amongst other things. For this demo we\nwill use ",(0,r.kt)("a",{parentName:"p",href:"http://test.bcovrin.vonx.io"},"BCovrin Test"),". If you want to follow\nthis tutorial, you have to register a public DID\n",(0,r.kt)("a",{parentName:"p",href:"http://test.bcovrin.vonx.io"},"here")," via the Wallet seed field (this must be the\nsame as the seed inside the config under the key\n",(0,r.kt)("a",{parentName:"p",href:"./agent-config#publicdidseed"},(0,r.kt)("inlineCode",{parentName:"a"},"publicDidSeed")),")."),(0,r.kt)("p",null,"In order to reach the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," we have to add a list of\n",(0,r.kt)("a",{parentName:"p",href:"./agent-config#endpoints"},(0,r.kt)("inlineCode",{parentName:"a"},"endpoints"))," of the agent that exposes the\n",(0,r.kt)("inlineCode",{parentName:"p"},"inboundTransport")," to the public. In the example below we add an\n",(0,r.kt)("inlineCode",{parentName:"p"},"inboundTransport")," and use port ",(0,r.kt)("inlineCode",{parentName:"p"},"3000"),". For development purposes it is\nrecommended to use a tunneling service for this, like\n",(0,r.kt)("a",{parentName:"p",href:"https://ngrok.com"},"Ngrok"),". Ngrok will allow you to reach your locally exposed\nendpoint from the public. If a tunneling service is used, make sure to use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS")," variant as mobile environments, by default, do not accept ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),"\nanymore."),(0,r.kt)("p",null,"To install ",(0,r.kt)("a",{parentName:"p",href:"https://ngrok.com"},"Ngrok")," and expose the port to the public the\nfollowing commands can be used:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"yarn",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn global add ngrok\n\nngrok http <PORT>\n"))),(0,r.kt)(o.Z,{label:"npm",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install --global ngrok\n\nngrok http <PORT>\n")))),(0,r.kt)("admonition",{type:"issuer"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-2",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-2":!0},""))),(0,r.kt)("h3",{id:"2-registering-the-schema-and-credential-definition"},"2. Registering the schema and credential definition"),(0,r.kt)("p",null,"When we want to issue a credential we must first create a blueprint, the\nschema, of the credential and bind it to a specific issuer, the credential\ndefinition. This binding makes sure that when you want to verify the\ncredential, you can request that it must be issued from a specific party."),(0,r.kt)("admonition",{type:"issuer"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-3",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-3":!0},"")),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-4",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-4":!0},""))),(0,r.kt)("h3",{id:"3-listening-for-incoming-credentials"},"3. Listening for incoming credentials"),(0,r.kt)("p",null,"When we want to accept a credential, we have to listen to incoming credentials\nand handle accordingly. In this example we do not have any user interaction,\nbut is likely that your application would have a user-interface which would\ndisplay the credential. When receiving a credential offer you can get the\nvalues from ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialExchangeRecord.credentialAttributes"),"."),(0,r.kt)("admonition",{type:"holder"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-5",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-5":!0},""))),(0,r.kt)("h3",{id:"4-issuing-a-credential"},"4. Issuing a credential"),(0,r.kt)("p",null,"Now that everything is setup on both sides, the ",(0,r.kt)("em",{parentName:"p"},"Issuer")," can now offer a\ncredential to the ",(0,r.kt)("em",{parentName:"p"},"Holder"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In this example we do not instantiate a connection and assume that there is\none. Please refer to this guide ",(0,r.kt)("a",{parentName:"p",href:"./create-a-connection"},"Create a connection"),"\nto get a connection and connectionId")),(0,r.kt)("admonition",{type:"issuer"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts section-6",showLineNumbers:!0,"issue-a-credential.ts":!0,"section-6":!0},""))),(0,r.kt)("h3",{id:"5-full-code-snippets"},"5. Full code snippets"),(0,r.kt)("p",null,"Below are both code snippets for each agent. These can be used as base but\nshould be editted to fit your use case. The\n",(0,r.kt)("a",{parentName:"p",href:"./agent-config#walletconfigkey"},(0,r.kt)("inlineCode",{parentName:"a"},"walletConfig.key")),' must be changed as it can\nlead to other people knowing your "password" to your wallet.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers issue-a-credential.ts",showLineNumbers:!0,"issue-a-credential.ts":!0},"")),(0,r.kt)("h3",{id:"useful-resources"},"Useful resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://anoncreds-wg.github.io/anoncreds-spec/"},"AnonCreds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0036-issue-credential/README.md"},"Issue Credential V1\nProtocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0453-issue-credential-v2/README.md"},"Issue Credential V2\nProtocol"))),(0,r.kt)("h3",{id:"side-notes"},"Side notes"),(0,r.kt)("p",null,"As of v0.3.0 you should keep in mind that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When when attempting to register a credential that already exists on the ledger but is not in your wallet, AFJ will throw an error (as opposed to returning the credential definition from the ledger in prior versions)"),(0,r.kt)("li",{parentName:"ol"},"Attempting to register a new credential definition that is already in the wallet in AFJ will return the stored definition ",(0,r.kt)("em",{parentName:"li"},"without")," attempting to register it on the ledger.")),(0,r.kt)("p",null,"These choices are intentional. In case 1, it is assumed that this workflow is a mistake. In case 2. it is assumed that having registered the credential on the ledger is implied."))}h.isMDXComponent=!0}}]);