(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(130)),o={title:"Authentication",slug:"/security/authentication"},c={unversionedId:"08_Security/2_Authentication",id:"08_Security/2_Authentication",isDocsHomePage:!1,title:"Authentication",description:"GraphQL",source:"@site/docs/08_Security/2_Authentication.md",slug:"/security/authentication",permalink:"/symfony-boilerplate/docs/security/authentication",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/08_Security/2_Authentication.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/symfony-boilerplate/docs/security"},next:{title:"Access Control",permalink:"/symfony-boilerplate/docs/security/access-control"}},l=[{value:"GraphQL",id:"graphql",children:[]},{value:"Sessions",id:"sessions",children:[]},{value:"Cookie",id:"cookie",children:[]},{value:"<code>auth</code> Store",id:"auth-store",children:[]},{value:"Authentication Workflow",id:"authentication-workflow",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"graphql"},"GraphQL"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphqlite.thecodingmachine.io/"}),"GraphQLite")," exposes three GraphQL entry points\n(you do not have to create them manually):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"login")," mutation: takes a ",Object(r.b)("inlineCode",{parentName:"li"},"userName")," and a ",Object(r.b)("inlineCode",{parentName:"li"},"password"),". It returns a ",Object(r.b)("inlineCode",{parentName:"li"},"User")," type on success."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"logout")," mutation."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"me")," query: returns a ",Object(r.b)("inlineCode",{parentName:"li"},"User")," type if authenticated, null otherwise.")),Object(r.b)("p",null,"GraphQLite hooks itself to the authentication mechanisms of Symfony, but it needs some help with that task."),Object(r.b)("p",null,"For instance, the class ",Object(r.b)("inlineCode",{parentName:"p"},"UserProvider"),".\nIts goal is to tell which class represents our users and load an instance of this class according to the session's data."),Object(r.b)("p",null,"We tell Symfony that we use this custom user provider in the configuration file ",Object(r.b)("em",{parentName:"p"},"src/api/config/packages/security.yaml"),"."),Object(r.b)("p",null,"In the application, we defined that class ",Object(r.b)("inlineCode",{parentName:"p"},"User")," represents our users.\nIt implements the ",Object(r.b)("inlineCode",{parentName:"p"},"UserInterface")," from Symfony."),Object(r.b)("p",null,"There are many methods to implement, but the most important ones are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getUsername"),': the "username" value (the user\'s email in our case).'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getPassword"),": the salted / encoded password (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," provides the implementation - see ",Object(r.b)("em",{parentName:"li"},"BaseUser")," class)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getRoles"),": the Symfony permissions (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"ROLE_FOO"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ROLE_BAR"),", etc.) - more on that later.")),Object(r.b)("p",null,"In the Symfony Boilerplate, we have already implemented those methods! \ud83d\ude09"),Object(r.b)("h2",{id:"sessions"},"Sessions"),Object(r.b)("p",null,"We store the sessions' data in the MySQL database (",Object(r.b)("inlineCode",{parentName:"p"},"sessions")," table). We configured this behavior in the configuration\nfiles ",Object(r.b)("em",{parentName:"p"},"src/api/config/packages/framework.yaml")," and ",Object(r.b)("em",{parentName:"p"},"src/api/config/services.yaml"),". "),Object(r.b)("p",null,"The migration ",Object(r.b)("em",{parentName:"p"},"src/api/migrations/Version20200424093138.php")," generates the ",Object(r.b)("inlineCode",{parentName:"p"},"sessions")," table."),Object(r.b)("h2",{id:"cookie"},"Cookie"),Object(r.b)("p",null,"On login, Symfony provides a ",Object(r.b)("inlineCode",{parentName:"p"},"PHPSESSID")," cookie to the browser. On logout or session expiration, it deletes this cookie."),Object(r.b)("p",null,"This cookie is only available on the main domain and its subdomains. For instance, if your API URL is ",Object(r.b)("inlineCode",{parentName:"p"},"https://api.foo.com"),"\nand you call the ",Object(r.b)("inlineCode",{parentName:"p"},"login")," mutation from ",Object(r.b)("inlineCode",{parentName:"p"},"https://foo.com"),", the cookie will be available. It will not be the case\nfrom ",Object(r.b)("inlineCode",{parentName:"p"},"https://bar.com"),". "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","You may customize the domain thanks to the ",Object(r.b)("inlineCode",{parentName:"p"},"COOKIE_DOMAIN")," environment variable from the ",Object(r.b)("inlineCode",{parentName:"p"},"api")," service."))),Object(r.b)("h2",{id:"auth-store"},Object(r.b)("inlineCode",{parentName:"h2"},"auth")," Store"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth")," store centralizes the data of the authenticated user on the web application"),Object(r.b)("p",null,"We use this store in many parts of the security process."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The state:")," ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth/state.js")),Object(r.b)("p",null,"It contains a ",Object(r.b)("inlineCode",{parentName:"p"},"user")," object with the following values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"firstName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lastName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"locale")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"profilePicture")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"role"))),Object(r.b)("p",null,"We initialize these values with empty strings or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," for the profile picture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Getters:")," ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth/getters.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isAuthenticated"),": it returns ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the ",Object(r.b)("inlineCode",{parentName:"li"},"user"),"'s ",Object(r.b)("inlineCode",{parentName:"li"},"email")," property from the state is empty. It might return ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"\neven if the user has no more session in the API, but we will see below how to handle such a case."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isGranted"),": it returns ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the user has the authorization level of the given role.")),Object(r.b)("p",null,"It would be best to use these getters mostly for displaying (or not) an element in the UI."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Mutations:")," ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth/mutations.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setUser"),": sets the state's ",Object(r.b)("inlineCode",{parentName:"li"},"user")," object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setUserLocale"),": sets the state's ",Object(r.b)("inlineCode",{parentName:"li"},"user"),"'s ",Object(r.b)("inlineCode",{parentName:"li"},"locale")," property."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setUserProfilePicture"),": sets the state's ",Object(r.b)("inlineCode",{parentName:"li"},"user"),"'s ",Object(r.b)("inlineCode",{parentName:"li"},"profilePicture")," property."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"resetUser"),": resets the state's ",Object(r.b)("inlineCode",{parentName:"li"},"user")," object with empty strings.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Actions:")," ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth/actions.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"me"),": calls the ",Object(r.b)("inlineCode",{parentName:"li"},"me")," GraphQL query and, according to the result,\nsets the state's ",Object(r.b)("inlineCode",{parentName:"li"},"user")," object or resets it.")),Object(r.b)("p",null,"Most of the store is available through the ",Object(r.b)("inlineCode",{parentName:"p"},"Auth")," mixin:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Vue component <script> block"',title:'"Vue',component:!0,"<script>":!0,'block"':!0}),"import { Auth } from '@/mixins/auth'\n\nexport default {\n  mixins: [Auth],\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","A mixin content merges with the content of your Vue component."))),Object(r.b)("h2",{id:"authentication-workflow"},"Authentication Workflow"),Object(r.b)("p",null,"On the ",Object(r.b)("em",{parentName:"p"},"src/webapp/pages/login.vue")," page, we call the ",Object(r.b)("inlineCode",{parentName:"p"},"login")," GraphQL mutation. On success, we feed the state\nof the ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/auth")," store, thanks to the ",Object(r.b)("inlineCode",{parentName:"p"},"setUser")," mutation."),Object(r.b)("p",null,"As explained before, the API sets the ",Object(r.b)("inlineCode",{parentName:"p"},"PHPSESSID")," cookie in the browser. "),Object(r.b)("p",null,"When in SPA mode, the browser sets the header ",Object(r.b)("inlineCode",{parentName:"p"},"Cookie")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"PHPSESSID")," on each HTTP request to the API. "),Object(r.b)("p",null,"However, the first time the user lands on the application, Nuxt.js server-renders the current page. It also renders pages\nhaving the ",Object(r.b)("inlineCode",{parentName:"p"},"asyncData")," attribute on the server."),Object(r.b)("p",null,"In the file ",Object(r.b)("em",{parentName:"p"},"src/webapp/store/actions.js"),",\nthere is an ",Object(r.b)("inlineCode",{parentName:"p"},"nuxtServerInit")," method, which Nuxt.js calls before server-rendering every page.\nIn this function, we:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Set the header ",Object(r.b)("inlineCode",{parentName:"li"},"Cookie")," for every server-side GraphQL requests."),Object(r.b)("li",{parentName:"ol"},"Call the ",Object(r.b)("inlineCode",{parentName:"li"},"me")," action to fetch (or not) the user data (useful when the user refreshes the page).")))}b.isMDXComponent=!0}}]);