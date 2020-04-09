(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{1321:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));n(17),n(4),n(3),n(1),n(12),n(10),n(22);var a=n(59),l=n(65);n(36);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/installation.mdx"}});var c={_frontmatter:o},b=l.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(b,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"installation"},"Installation"),Object(a.b)("hr",null),Object(a.b)("p",null,"You can install Hegel CLI using npm or yarn:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @hegel/cli\n# or\n$ yarn global add @hegel/cli\n")),Object(a.b)("p",null,"Or install localy only for your project:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm install -D @hegel/cli\n# or\n$ yarn add -D @hegel/cli\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Hegel was developed for current LTS version of ",Object(a.b)("a",r({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js (12.16.1)"),". So, you need to have at least 12 version.")),Object(a.b)("p",null,"And run Hegel inside your project:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ hegel\nNo errors!\n")),Object(a.b)("h2",{id:"setup-project"},"Setup Project"),Object(a.b)("p",null,"Also you need to setup a compiler which will strip away Hegel types. The same as Flow, you can choose between Babel and ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.npmjs.com/package/flow-remove-types"}),"flow-remove-types"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm i -D @babel/core @babel/cli @babel/preset-flow\n")),Object(a.b)("p",null,"After that you need to create a .babelrc file at the root of your project with next content:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "presets": [["@babel/preset-flow", { "all": true }]]\n}\n')),Object(a.b)("p",null,"Now you can run it manualy:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npx babel directory_with_your_project_files/ -- -d compilation_destination_directory\n")),Object(a.b)("p",null,"Or you can add script inside your package.json:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-project",\n  "scripts": {\n    "build": "babel directory_with_your_project_files/ -d compilation_destination_directory/",\n  }\n}\n')),Object(a.b)("p",null,"And run it by:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm run build\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",r({parentName:"p"},{href:"https://babeljs.io/setup"}),'"More about Babel setup"'))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/installation.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-installation-mdx-de583f524be1361ede70.js.map