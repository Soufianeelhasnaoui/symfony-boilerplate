(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(130)),c={title:"Docker Compose",slug:"/development-environment/docker-compose"},i={unversionedId:"02_Development Environment/1_Docker Compose",id:"02_Development Environment/1_Docker Compose",isDocsHomePage:!1,title:"Docker Compose",description:"Docker and Docker Compose are the core technologies that orchestrate the",source:"@site/docs/02_Development Environment/1_Docker Compose.md",slug:"/development-environment/docker-compose",permalink:"/symfony-boilerplate/docs/development-environment/docker-compose",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/tree/master/docs/docs/02_Development Environment/1_Docker Compose.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/symfony-boilerplate/docs/installation"},next:{title:"Vagrant",permalink:"/symfony-boilerplate/docs/development-environment/vagrant"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Add a new service",id:"add-a-new-service",children:[{value:"Application Layer",id:"application-layer",children:[]},{value:"Data Layer",id:"data-layer",children:[]}]},{value:"Extend a Docker Image",id:"extend-a-docker-image",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com"}),"Docker")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),"Docker Compose")," are the core technologies that orchestrate the\nservices of the boilerplate."),Object(o.b)("p",null,"They will help you set up a complete development environment close to your target production infrastructure."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud83d\ude80","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"make up"),": starts the Docker Compose stack."),Object(o.b)("li",{parentName:"ul"},"\ud83d\udea6","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"make down"),": stops the Docker Compose stack."),Object(o.b)("li",{parentName:"ul"},"\ud83d\ude87","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"make api"),": runs ",Object(o.b)("inlineCode",{parentName:"li"},"bash")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"api")," service."),Object(o.b)("li",{parentName:"ul"},"\ud83d\ude87","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"make webapp"),": runs ",Object(o.b)("inlineCode",{parentName:"li"},"bash")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"webapp")," service."),Object(o.b)("li",{parentName:"ul"},"\ud83d\udcda","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose logs -f"),": displays the logs of ",Object(o.b)("strong",{parentName:"li"},"all")," your services."),Object(o.b)("li",{parentName:"ul"},"\ud83d\udcd8","\xa0","\xa0",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose logs -f [SERVICE_NAME]")," displays the logs of one service.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Your development environment mostly consists of two files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"docker-compose.yml")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},".env")," file (and its template ",Object(o.b)("em",{parentName:"li"},".env.dist"),")")),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"docker-compose.yml")," file lists all the services of the boilerplate and their configuration.\nThe services use mostly environment variables to configure themselves.\nMost of the time, you will set their values directly in the ",Object(o.b)("em",{parentName:"p"},"docker-compose.yml")," file."),Object(o.b)("p",null,"However, you don't want to commit your secrets to your Git repository. Also, you may want to reuse some values across\ndifferent services."),Object(o.b)("p",null,"Docker Compose provides an easy way for such scenarios; it can read the values from the ",Object(o.b)("em",{parentName:"p"},".env")," file."),Object(o.b)("p",null,"For instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-.env",metastring:'title=".env"',title:'".env"'}),"FOO=hello\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'service_foo:\n    environment:\n      FOO: "$FOO"\n')),Object(o.b)("p",null,"Becomes at runtime (e.g., when running a Docker Compose command):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'service_foo:\n    environment:\n      FOO: "hello"\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","When adding a new variable in the ",Object(o.b)("em",{parentName:"p"},".env")," file, don't forget to update the template ",Object(o.b)("em",{parentName:"p"},".env.dist")," with it.\nIt will help other developers to notice this change and update their ",Object(o.b)("em",{parentName:"p"},".env")," files accordingly."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","You should never commit the ",Object(o.b)("em",{parentName:"p"},".env")," file as it may contain secrets; always use dummy values for your secrets\nin the ",Object(o.b)("em",{parentName:"p"},".env.dist")," template."))),Object(o.b)("h2",{id:"add-a-new-service"},"Add a new service"),Object(o.b)("p",null,"The existing services might not be enough for your use cases.\nYou may therefore add new services to your ",Object(o.b)("em",{parentName:"p"},"docker-compose.yml")," file."),Object(o.b)("h3",{id:"application-layer"},"Application Layer"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'services:\n\n    your_service_name:\n        image: an_image:a_tag\n        labels:\n            - traefik.enable=true\n            - traefik.http.routers.your_service_name_router.rule=Host(`your_service_subdomain.$DOMAIN`)\n            # If your service runs on another port than 80.\n            # - traefik.http.routers.your_service_name_router.service=your_service_name_service\n            # - traefik.http.services.your_service_name_service.loadbalancer.server.port=3000\n        environment:\n            FOO: "BAR"\n        volumes:\n            - src/your_service_source_code_folder:/path/in/the/docker/container    \n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Always add a service source code in the ",Object(o.b)("em",{parentName:"p"},"src")," folder."))),Object(o.b)("h3",{id:"data-layer"},"Data Layer"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'services:\n\n    your_service_name:\n        image: an_image:a_tag\n        environment:\n            FOO: "BAR"\n        volumes:\n            - your_service_name_data:/path/in/the/docker/container\n\nvolumes:\n\n      your_service_name_data:\n        driver: local\n')),Object(o.b)("h2",{id:"extend-a-docker-image"},"Extend a Docker Image"),Object(o.b)("p",null,"You might need to extend a Docker image for installing one or more packages."),Object(o.b)("p",null,"For instance, let's say you want to install the ",Object(o.b)("inlineCode",{parentName:"p"},"pdftk")," package for the API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile",metastring:'title="src/api/Dockerfile"',title:'"src/api/Dockerfile"'}),"FROM thecodingmachine/php:7.4-v3-apache AS extended\n\n# Always use the root user for installing packages.\nUSER root\n\n# Install PDFtk.\nRUN DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends pdftk &&\\\n    # Print versions of PDFtk.\n    pdftk --version\n\n# Go back to the default Docker image user.\nUSER docker\n\nFROM extended\n# Your production Docker image instructions.\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'api:\n  #image: thecodingmachine/php:7.4-v3-apache\n  build:\n    context: "./src/api"\n    target: "extended"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-makefile",metastring:'title="Makefile"',title:'"Makefile"'}),"# Start the Docker Compose stack.\nup:\n    docker-compose up --build -d\n")))}m.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,u=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);