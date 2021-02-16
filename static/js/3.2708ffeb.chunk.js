(this.webpackJsonpgdgtvpm=this.webpackJsonpgdgtvpm||[]).push([[3],{41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return v}));var r=i(0),c=(i(41),i(16)),s=(i(42),i(1)),a=Object(r.forwardRef)((function(e,t){return"button"===e.type?Object(s.jsx)("button",{ref:t,type:"button",onClick:e.onClick,className:"Button ".concat(e.selected?"Button__Selected":""," ").concat(e.className),children:Object(s.jsx)("span",{children:e.children})}):Object(s.jsx)("a",{ref:t,href:e.href,className:"Button ".concat(e.className),children:Object(s.jsx)("span",{children:e.children})})})),n=i(9);i(43);function l(e,t){var i=t.threshold,c=t.direction,s=t.delay,a=t.keep,l="";switch(c){case"left":l="FadeIn__Left";break;case"right":l="FadeIn__Right";break;case"up":l="FadeIn__Up";break;default:l=""}var o=["100","200","300","400","500"].includes(s)?"FadeIn__".concat(s):"",d=Object(r.useState)(!1),u=Object(n.a)(d,2),j=u[0],h=u[1],b=Object(r.useState)(!1),m=Object(n.a)(b,2),p=m[0],O=m[1];return Object(r.useEffect)((function(){var t=e.current;if(t){var r=new IntersectionObserver((function(e){!0===e[0].isIntersecting&&h(!0)}),{threshold:i||[.25]}),c=function(){return O(!0)};return r.observe(t),a||t.addEventListener("transitionend",c,!1),function(){r&&r.disconnect&&r.disconnect(),a||t&&t.removeEventListener("transitionend",c)}}}),[e,i,a]),p?"":"FadeIn ".concat(l," ").concat(o," ").concat(j?"FadeIn__Init":"")}var o=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),i=Object(r.useRef)(),n=Object(r.useRef)(),o=Object(r.useRef)(),d=l(e,{direction:"up",delay:"100"}),u=l(t,{direction:"up",delay:"200"}),j=l(i,{direction:"up",delay:"300"}),h=l(n,{direction:"up",delay:"400"}),b=l(o,{direction:"left",delay:"400"});return Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{className:"HeroContent",children:[Object(s.jsxs)("div",{className:"HeroText",children:[Object(s.jsx)("span",{ref:e,className:d+" Tag ",children:"Celebrating"}),Object(s.jsxs)("h1",{ref:t,className:u+" Heading",children:["Our Eighth Year",Object(s.jsx)("br",{})," Anniversary"]}),Object(s.jsx)("span",{ref:i,className:j+" Venue",children:"Series of events every month from Mar 6th."}),Object(s.jsx)(a,{ref:n,href:"/",className:h,children:"Register Now"})]}),Object(s.jsxs)("div",{ref:o,className:b+" HeroImg",children:[Object(s.jsx)("div",{className:"Circle Circle__Small"}),Object(s.jsx)("div",{className:"Circle Circle__Big"})]})]})})};function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}i(44);var h=function(e){var t=Object(r.useRef)(),i=Object(r.useRef)(),c=l(t,{direction:"up",delay:"100"}),a=l(i,{direction:"up",delay:"300"});return Object(s.jsxs)("div",{className:"SectionHeader",children:[Object(s.jsx)("h2",{ref:t,className:c+" SectionHeading",children:e.title}),Object(s.jsx)("p",{ref:i,className:a+" SectionDescription",children:e.description})]})};i(45);var b=function(e){var t=Object(r.useRef)(),i=l(t,{threshold:[.75],keep:!0});return Object(s.jsxs)("div",{className:"right"===e.align?"Speaker Speaker__Right":"Speaker",children:[Object(s.jsx)("div",{ref:t,className:i+" SpeakerImg","data-delay":"100",children:Object(s.jsx)("img",{src:e.img,alt:"text"})}),Object(s.jsxs)("div",{className:"SpeakerDetails",children:[Object(s.jsx)("h3",{className:i+" SpeakerName","data-direction":"right"===e.align?"left":"right","data-delay":"200",children:e.name}),Object(s.jsx)("span",{className:i+" SpeakerTitle","data-direction":"right"===e.align?"left":"right","data-delay":"300",children:e.title}),Object(s.jsx)("p",{className:i+" SpeakerDescrip","data-direction":"right"===e.align?"left":"right","data-delay":"400",children:e.description}),Object(s.jsxs)("p",{className:i+" SpeakerFollow","data-direction":"right"===e.align?"left":"right","data-delay":"500",children:[Object(s.jsxs)("span",{children:["Follow ",e.shortName," \u2014 "]}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"})})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"})})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})})]})]})]})},m=i.p+"static/media/img.e4605c62.png";var p=function(){var e=[{align:"left",img:m,name:"Vishnu Haridas",shortName:"Vishnu",title:"Web Developer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima  rchitecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam",social:{}},{align:"right",img:m,name:"Vishnu Haridas",shortName:"Vishnu",title:"Web Developer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima  rchitecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam",social:{}}];return Object(s.jsxs)(c.a,{children:[Object(s.jsx)(h,{title:"Speakers",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam"}),e.map((function(e,t){return Object(s.jsx)(b,j({},e),t)}))]})};i(46);function O(e){var t=Object(r.useRef)(),i=l(t,{threshold:[.25],direction:"up",delay:100});return Object(s.jsxs)("div",{ref:t,className:i+" ProgramItem",children:[Object(s.jsxs)("div",{className:"ProgramTime",children:[Object(s.jsx)("span",{className:"ProgramHour",children:e.time})," ",Object(s.jsx)("span",{className:"ProgramAM",children:e.am})]}),Object(s.jsxs)("div",{className:"ProgramDetails",children:[Object(s.jsx)("h3",{className:"ProgramTitle",children:e.title}),Object(s.jsx)("span",{className:"ProgramSpeaker",children:e.speakers.join(", ")})]})]})}var g=function(){var e=Object(r.useState)(1),t=Object(n.a)(e,2),i=t[0],o=t[1],d=Object(r.useRef)(),u=l(d,{threshold:[.75],direction:"up",delay:100});return Object(s.jsxs)(c.a,{children:[Object(s.jsx)(h,{title:"Programs",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi."}),Object(s.jsxs)("div",{ref:d,className:u+" ProgramDays",children:[Object(s.jsx)(a,{type:"button",onClick:function(){return o(1)},selected:1===i,children:"Mar 6th"}),Object(s.jsx)(a,{type:"button",onClick:function(){return o(2)},selected:2===i,children:"Apr 3th"}),Object(s.jsx)(a,{type:"button",onClick:function(){return o(3)},selected:3===i,children:"Next"})]}),(1===i?[{time:"8:00",am:"AM",title:"Design your open source strategy",speakers:["Chris Mathews"]},{time:"9:30",am:"AM",title:"Design your open source strategy",speakers:["Chris Mathews"]}]:[{time:"9:00",am:"AM",title:"Design your UX strategy",speakers:["Chris Mathews"]},{time:"10:30",am:"AM",title:"Design your UX strategy",speakers:["Chris Mathews"]}]).map((function(e,t){return Object(s.jsx)(O,j({},e),t)}))]})};var f=function(){return Object(s.jsx)(c.a,{children:Object(s.jsx)(h,{title:"About Us",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam hello again next, back again"})})};function v(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{}),Object(s.jsx)(g,{}),Object(s.jsx)(p,{}),Object(s.jsx)(f,{})]})}}}]);
//# sourceMappingURL=3.2708ffeb.chunk.js.map