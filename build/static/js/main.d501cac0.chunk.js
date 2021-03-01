(this["webpackJsonpcourse-directory"]=this["webpackJsonpcourse-directory"]||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(14),o=s.n(i),n=s(7),r=s(2),c=s(15),l=s(16),h=s(19),d=s(18),m=s(0),p=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleSubmit=function(t){t.preventDefault();var s=e.name.value,a=e.topic.value,i="teachers/".concat(a,"/").concat(s);e.props.history.push(i)},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"main-content home",children:[Object(m.jsx)("h2",{children:"Front End Course Directory"}),Object(m.jsxs)("p",{children:["This fun directory is a project for the ",Object(m.jsx)("em",{children:"React Router Basics"})," course on Treehouse."]}),Object(m.jsx)("p",{children:"Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development."}),Object(m.jsx)("p",{children:"We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind."}),Object(m.jsx)("hr",{}),Object(m.jsx)("h3",{children:"Featured Teachers"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",placeholder:"Name",ref:function(t){return e.name=t}}),Object(m.jsx)("input",{type:"text",placeholder:"Topic",ref:function(t){return e.topic=t}}),Object(m.jsx)("button",{type:"submit",children:"Go!"})]})]})}}]),s}(a.Component),u=function(e){return Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("p",{children:"The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses."})]})},g=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{className:"icn-logo",children:Object(m.jsx)("i",{className:"material-icons",children:"code"})}),Object(m.jsxs)("ul",{className:"main-nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{exact:!0,to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"/about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"/teachers",children:"Teachers"})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"/courses",children:"Courses"})})]})]})},b=[{name:"Angie McAngular",bio:"Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png",id:"teach-1"},{name:"NodeStradamus",bio:"'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png",id:"teach-2"},{name:"Geo 'Lo' Cation",bio:"Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png",id:"teach-3"},{name:"Ecma Scriptnstuff",bio:"Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png",id:"teach-4"},{name:"Jay Query",bio:"Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png",id:"teach-5"},{name:"Json Babel",bio:"All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.",img_src:"http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png",id:"teach-6"}],j=function(){var e=b.map((function(e){return Object(m.jsxs)("li",{className:"teacher",children:[Object(m.jsx)("img",{className:"teacher-img",src:e.img_src,alt:"teacher"}),Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{children:e.bio})]},e.id)}));return Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("h2",{children:"Teachers"}),Object(m.jsx)("ul",{className:"group",children:e})]})},f=function(e){return Object(m.jsxs)("li",{className:"course media group",children:[Object(m.jsx)("img",{className:"course-img",src:e.img,alt:"course"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("p",{children:e.desc})]})]})},v=function(e){var t=e.data.map((function(e){return Object(m.jsx)(f,{title:e.title,desc:e.description,img:e.img_src},e.id)}));return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:t})})},w=[{title:"CSS Basics",description:"CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.",img_src:"https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png",id:"css-1"},{title:"CSS Selectors",description:"In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.",img_src:"https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png",id:"css-2"},{title:"Responsive Layouts",description:"Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.",img_src:"https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png",id:"css-3"},{title:"CSS Flexbox Layout",description:"Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!",img_src:"https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png",id:"css-4"},{title:"CSS Transitions and Transforms",description:"CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms.",img_src:"https://achievement-images.teamtreehouse.com/css-transitions-and-transforms-badge-02.png",id:"css-5"},{title:"Bootstrap 4 Basics",description:"Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time.",img_src:"https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png",id:"css-6"}],x=[{title:"How to Make a Website",description:"If you\u2019ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",img_src:"https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",id:"html-1"},{title:"HTML Forms",description:"The web is a two-way communication medium. There\u2019s lots of HTML elements for displaying data and producing output, and conversely, there\u2019s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we\u2019ll learn about all the most important form elements that web professionals use on a daily basis.",img_src:"https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png",id:"html-2"},{title:"HTML Video and Audio",description:"Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",img_src:"https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png",id:"html-3"},{title:"SVG Basics",description:"Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",img_src:"https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png",id:"html-4"},{title:"Responsive Images",description:"Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.",img_src:"https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png",id:"html-5"},{title:"Introduction to HTML and CSS",description:"Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like. ",img_src:"https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png",id:"html-6"}],y=[{title:"JavaScript Basics",description:"JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.",img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png",id:"js-1"},{title:"JavaScript Loops, Arrays and Objects",description:"Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.",img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",id:"js-2"},{title:"jQuery Basics",description:"jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.",img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage1.png",id:"js-3"},{title:"AJAX Basics",description:"AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server.",img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage3.png",id:"js-4"},{title:"Interactive Web Pages with JavaScript",description:"In this course we\u2019ll create a to-do list application using JavaScript alone, without using any third party libraries. You\u2019ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward.",img_src:"https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-12.png",id:"js-5"},{title:"Node.js Basics",description:"In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform.",img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png",id:"js-6"}],O=function(){return Object(m.jsxs)("div",{className:"main-content not-found",children:[Object(m.jsx)("i",{className:"material-icons icn-error",children:"error_outline"}),Object(m.jsx)("h2",{children:"Page Not Found"})]})},S=function(e){var t=e.match;return Object(m.jsxs)("div",{className:"main-content courses",children:[Object(m.jsxs)("div",{className:"course-header group",children:[Object(m.jsx)("h2",{children:"Courses"}),Object(m.jsxs)("ul",{className:"course-nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"".concat(t.url,"/html"),children:"HTML"})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"".concat(t.url,"/css"),children:"CSS"})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"".concat(t.url,"/javascript"),children:"JavaScript"})})]})]}),Object(m.jsxs)(r.d,{children:[Object(m.jsx)(r.b,{exact:!0,path:t.path,render:function(){return Object(m.jsx)(r.a,{to:"".concat(t.path,"/html")})}}),Object(m.jsx)(r.b,{path:"".concat(t.path,"/html"),render:function(){return Object(m.jsx)(v,{data:x})}}),Object(m.jsx)(r.b,{path:"".concat(t.path,"/css"),render:function(){return Object(m.jsx)(v,{data:w})}}),Object(m.jsx)(r.b,{path:"".concat(t.path,"/javascript"),render:function(){return Object(m.jsx)(v,{data:y})}}),Object(m.jsx)(r.b,{component:O})]})]})},_=function(e){var t=e.match,s=t.params.lname?"".concat(t.params.fname," ").concat(t.params.lname):t.params.fname,a=t.params.topic;return Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("h2",{children:s}),Object(m.jsxs)("p",{children:["Introducing ",Object(m.jsx)("strong",{children:s}),", a teacher who loves teaching courses about ",Object(m.jsx)("strong",{children:a}),"!"]})]})},T=function(){return Object(m.jsx)(n.a,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(g,{}),Object(m.jsxs)(r.d,{children:[Object(m.jsx)(r.b,{exact:!0,path:"/",component:p}),Object(m.jsx)(r.b,{path:"/about",render:function(){return Object(m.jsx)(u,{title:"About"})}}),Object(m.jsx)(r.b,{exact:!0,path:"/teachers",component:j}),Object(m.jsx)(r.b,{path:"/teachers/:topic/:fname/:lname?",component:_}),Object(m.jsx)(r.b,{path:"/courses",component:S}),Object(m.jsx)(r.b,{component:O})]})]})})};s(33);o.a.render(Object(m.jsx)(T,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d501cac0.chunk.js.map