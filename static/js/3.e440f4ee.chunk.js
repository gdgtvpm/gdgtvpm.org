(this.webpackJsonpgdgtvpm=this.webpackJsonpgdgtvpm||[]).push([[3],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(0),i=(n(41),n(16));function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(42);var o=n(1),l=Object(a.forwardRef)((function(e,t){return"button"===e.type?Object(o.jsx)("button",{ref:t,type:"button",onClick:e.onClick,className:"Button ".concat(e.selected?"Button__Selected":""," ").concat(e.className),children:Object(o.jsx)("span",{children:e.children})}):Object(o.jsx)("a",c(c({ref:t},e),{},{className:"Button ".concat(e.className),children:Object(o.jsx)("span",{children:e.children})}))})),d=n(9);n(43);function u(e,t){var n=t.threshold,i=t.direction,r=t.delay,s=t.keep,c="";switch(i){case"left":c="FadeIn__Left";break;case"right":c="FadeIn__Right";break;case"up":default:c="FadeIn__Up"}var o=["100","200","300","400","500"].includes(r)?"FadeIn__".concat(r):"",l=Object(a.useState)(!1),u=Object(d.a)(l,2),h=u[0],m=u[1],j=Object(a.useState)(!1),b=Object(d.a)(j,2),p=b[0],f=b[1];return Object(a.useEffect)((function(){var t=e.current;if(t){var a=new IntersectionObserver((function(e){!0===e[0].isIntersecting&&m(!0)}),{threshold:n||[.25]}),i=function(){return f(!0)};return a.observe(t),s||t.addEventListener("transitionend",i,!1),function(){a&&a.disconnect&&a.disconnect(),s||t&&t.removeEventListener("transitionend",i)}}}),[e,n,s]),p?"":"FadeIn ".concat(c," ").concat(o," ").concat(h?"FadeIn__Init":"")}var h=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),s=Object(a.useRef)(),c=u(e,{direction:"up",delay:"100"}),d=u(t,{direction:"up",delay:"200"}),h=u(n,{direction:"up",delay:"300"}),m=u(r,{direction:"up",delay:"400"}),j=u(s,{direction:"left",delay:"400"});return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"HeroContent",children:[Object(o.jsxs)("div",{className:"HeroText",children:[Object(o.jsx)("span",{ref:e,className:c+" Tag ",children:"Celebrating"}),Object(o.jsxs)("h1",{ref:t,className:d+" Heading",children:["Our Eighth Year",Object(o.jsx)("br",{})," Anniversary"]}),Object(o.jsx)("span",{ref:n,className:h+" Venue",children:"Series of events every month from Mar 6th."}),Object(o.jsx)(l,{ref:r,href:"https://gdg.community.dev/events/details/google-gdg-thiruvananthapuram-presents-ais-role-during-a-pandemic-by-senthil-kumar-anniversary-event-series-day-1/",className:m,target:"_blank",rel:"noreferrer",children:"Register Now"})]}),Object(o.jsxs)("div",{ref:s,className:j+" HeroImg",children:[Object(o.jsx)("div",{className:"Circle Circle__Small"}),Object(o.jsx)("div",{className:"Circle Circle__Big"})]})]})})};n(44);var m=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),i=u(t,{direction:"up",delay:"100"}),r=u(n,{direction:"up",delay:"300"});return Object(o.jsxs)("div",{className:"SectionHeader",children:[Object(o.jsx)("h2",{id:e.title.replace(" ",""),ref:t,className:i+" SectionHeading",children:e.title}),Object(o.jsx)("p",{ref:n,className:r+" SectionDescription",children:e.description})]})};n(45);var j=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],s=i[1],c=u(t,{threshold:[.75],keep:!0});return Object(o.jsxs)("div",{className:"right"===e.align?"Speaker Speaker__Right":"Speaker",children:[Object(o.jsx)("div",{ref:t,className:c+" SpeakerImg","data-delay":"100",children:Object(o.jsx)("img",{src:e.img,alt:"text"})}),Object(o.jsxs)("div",{className:"SpeakerDetails",children:[Object(o.jsx)("h3",{className:c+" SpeakerName","data-direction":"right"===e.align?"left":"right","data-delay":"200",children:e.name}),Object(o.jsx)("span",{className:c+" SpeakerTitle","data-direction":"right"===e.align?"left":"right","data-delay":"300",children:e.title}),Object(o.jsx)("div",{className:"SpeakerWrap",style:{display:r?"block":"-webkit-box"},children:e.description.map((function(t,n){return Object(o.jsx)("p",{className:c+" SpeakerDescrip","data-direction":"right"===e.align?"left":"right","data-delay":"400",children:t},n)}))}),Object(o.jsx)(l,{type:"button",className:c+" SpeakerWrapShow",onClick:function(){return s(!r)},"data-delay":"500",children:r?"Show less":"Show more"})]})]})},b=n.p+"static/media/senthil.7d702279.jpg";var p=function(){var e=[{align:"left",img:b,name:"Senthil \u200bKumar \u200bM",shortName:"Vishnu",title:"CEO CO-FOUNDER, Jiovio healthcare",description:["Senthil \u200bKumar \u200bM. \u200bhails \u200bfrom \u200bMadurai, \u200bTamilnadu India \u200bwith \u200ba \u200bgreat \u200bpassion \u200bfor innovating \u200bthrough \u200btechnology \u200bto \u200bsolve \u200breal-life \u200bproblems. He has \u200binnovated \u200bin \u200bfields \u200blike wireless \u200bnetwork, \u200bdefence, \u200bmaternal \u200bhealthcare, \u200band \u200bsafety \u200bsolutions \u200band \u200bfiled \u200bnearly \u200b10 patents \u200bfor \u200bthe \u200bsame.","Beginning his \u200bcareer \u200bas \u200ban \u200bengineer \u200bin \u200bSamsung \u200b| \u200bQualcomm \u200bFortune \u200b500 companies, \u200bhe \u200brealised he is destined to be an \u200bentrepreneur. He \u200bquit \u200bhis \u200bjob \u200bto \u200bfound \u200btwo tech \u200bstartups, \u200bGeomeo \u200band \u200bJioVio, \u200bin \u200burban \u200binfrastructure \u200band \u200bhealthcare \u200bsector respectively.","He has \u200bthe \u200bvision \u200bto \u200bbuild \u200btechnology-enabled \u200bself-sustaining \u200bcommunities \u200bin his \u200bregion. He believes \u200bthat \u200bwe \u200bcan \u200bachieve \u200bthis \u200bonly \u200bby \u200bbridging \u200bthe \u200bdigital \u200bdivide \u200bin \u200b \u200bsociety \u200band \u200bby empowering \u200bthe \u200bpowerless and vulnerable.","To \u200bthis \u200bend, he is actively engaged \u200bin \u200bcommunity \u200bempowerment \u200band \u200beducation \u200binitiatives especially \u200bamong \u200bgirls \u200band \u200byoung \u200bwomen \u200bthrough \u200b\u2018MetooMentor\u2019 \u200b\u2019 \u200ba \u200bnon-profit organisation \u200bthat \u200bmentors \u200byoung \u200bwomen \u200bto \u200binnovate \u200bthrough \u200btechnology. \u200bWith \u200ba handful \u200bof \u200bdedicated \u200bvolunteers, \u200bhe \u200bhas \u200breached \u200baround \u200b1000 \u200bgirls \u200bin \u200bMadurai, Tamilnadu. \u200bCurrently, \u200bthis \u200bcommunity \u200bdevelopment \u200binitiative \u200bhas \u200bevolved \u200binto \u200bone \u200bof \u200bthe largest \u200bphysical \u200b\u2018Meetup\u2019 \u200bcommunities \u200bin \u200bTamilnadu.","He \u200bhas also \u200boffered \u200bguest \u200blectures \u200bin \u200bmore \u200bthan \u200b80 \u200bhigher \u200beducation \u200binstitutes \u200bin \u200bIndia \u200band has \u200bbeen \u200bhonoured \u200bas \u200bthe \u200btop \u200b5 \u200bTechnology \u200bExplorers \u200bin \u200bIndia \u200bby \u200bNasscom. \u200bHe \u200bhas \u200bwon several \u200b\u2018hackathons\u2019 \u200bat \u200bthe \u200bnational \u200band \u200binternational \u200blevel. \u200bHe has also \u200brepresented \u200bIndia \u200bin \u2018Battlemesh \u200bResearch \u200bProgramme \u200bin \u200bEurope\u2019. \u200bAt \u200bpresent, he is \u200bexploring \u200b\u2018open-source ecosystem\u2019 \u200band \u200bactively \u200bengaging \u200bwith \u200bit \u200bas \u200bone \u200bof \u200bits \u200bcontributors."],social:{}}];return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(m,{title:"Speakers",description:"Lineup of rockstar speakers! We will begin with Senthil, who is a passionate engineer and an entrepreneur. He will discuss about the role of AI during a pandemic."}),e.map((function(e,t){return Object(o.jsx)(j,c({},e),t)}))]})};n(46);function f(e){var t=Object(a.useRef)(),n=u(t,{threshold:[.25],direction:"up",delay:100});return Object(o.jsxs)("div",{ref:t,className:n+" ProgramItem",children:[Object(o.jsxs)("div",{className:"ProgramTime",children:[Object(o.jsx)("span",{className:"ProgramHour",children:e.time})," ",Object(o.jsx)("span",{className:"ProgramAM",children:e.am})]}),Object(o.jsxs)("div",{className:"ProgramDetails",children:[Object(o.jsx)("h3",{className:"ProgramTitle",children:e.title}),Object(o.jsx)("span",{className:"ProgramSpeaker",children:e.speakers.join(", ")})]})]})}var g=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=[{time:"10:00",am:"AM",title:"AI's role in pandemic",speakers:["Senthil \u200bKumar"]}],h=[{time:"10:00",am:"AM",title:"TBD",speakers:["TBD"]}],j=[{time:"10:00",am:"AM",title:"TBD",speakers:["TBD"]}],b=Object(a.useRef)(),p=u(b,{threshold:[.75],direction:"up",delay:100});return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(m,{title:"Programs",description:"A virtual event series happening on weekends that you can attend from the comforts of your homes."}),Object(o.jsxs)("div",{ref:b,className:p+" ProgramDays",children:[Object(o.jsx)(l,{type:"button",onClick:function(){return r(1)},selected:1===n,children:"Mar 6th"}),Object(o.jsx)(l,{type:"button",onClick:function(){return r(2)},selected:2===n,children:"Apr 3th"}),Object(o.jsx)(l,{type:"button",onClick:function(){return r(3)},selected:3===n,children:"Next"})]}),function(){switch(n){case 1:return s;case 2:return h;case 3:return j;default:return[]}}().map((function(e,t){return Object(o.jsx)(f,c({},e),t)}))]})},O=(n(47),[{img:n.p+"static/media/Arun.74b909db.jpg",name:"Arun Shanker",title:"Community Organizer"},{img:n.p+"static/media/Remya.9e5ebe1a.jpg",name:"Remya P Vava",title:"Women Techmakers Ambassador / Community Co-Organizer"},{img:n.p+"static/media/Ananya.b90a73fd.jpg",name:"Ananya Raman Iyer",title:"Women Techmakers Ambassador / Community Co-Organizer"},{img:n.p+"static/media/Manikandan.b1ff4ff1.jpg",name:"Manikandan",title:"Assistant Organizer"},{img:n.p+"static/media/Vijay.ed4187f8.jpg",name:"Vijay Dev",title:"Assistant Organizer"}]);var v=function(){var e=Object(a.useRef)(),t=u(e,{threshold:[.75],keep:!0});return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(m,{title:"About Us",description:"We work as a family! Meet our pillars of strength. The team which puts their heart and soul in making the events happen."}),Object(o.jsx)("div",{ref:e,className:"Member",children:O.map((function(e,n){return Object(o.jsxs)("div",{className:t+" MemberItem","data-delay":100*n,"data-direction":n%2?"up":"down",children:[Object(o.jsx)("div",{className:"MemberImg",children:Object(o.jsx)("img",{src:e.img,alt:"text"})}),Object(o.jsx)("h3",{className:t+" MemberName",children:e.name}),Object(o.jsx)("span",{className:t+" MemberTitle",children:e.title})]},e.name)}))})]})};function y(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(g,{}),Object(o.jsx)(p,{}),Object(o.jsx)(v,{})]})}}}]);
//# sourceMappingURL=3.e440f4ee.chunk.js.map