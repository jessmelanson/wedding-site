(this["webpackJsonpwedding-website"]=this["webpackJsonpwedding-website"]||[]).push([[0],{101:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(0),a=i(11),r=i(82),c=i(124),o=i(125),l=Object(r.a)({typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),u=function(e){var t=e.children;return Object(s.jsxs)(c.a,{theme:l,children:[Object(s.jsx)(o.a,{}),t]})},d=i(39),m=i(13),p=i(21),b=i(17),j=i(128),g=i(105),h=i(42),x=i(33),O=i(126),f=i(45),v=function(e){var t=e.children,i=Object(x.a)(),n=Object(O.a)(i.breakpoints.down("sm"));return Object(s.jsx)(f.a,{component:"h1",variant:n?"h2":"h1",gutterBottom:!0,children:t})},w=i(127),N=Object(w.a)((function(e){return{paragraph:{marginBottom:e.spacing(2)}}})),k=function(e){var t=e.children,i=e.classNames,n=N();return Object(s.jsx)(f.a,{component:"p",className:i?"".concat(n.paragraph," ").concat(i):n.paragraph,variant:"body1",children:t})},y=Object(g.a)((function(e){return{heroBase:{padding:e.spacing(2)},imageFullBleed:function(e){var t=e.backgroundImage;return{backgroundImage:e.gradient?"linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(".concat(t,")"):"url(".concat(t,")"),backgroundPosition:"right bottom",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh",width:"100vw",maxWidth:"100%"}},textOnly:{backgroundColor:e.palette.grey[100],width:"100%",minHeight:10*e.spacing(3)},imageShort:function(t){return{background:t.gradient?"linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(".concat(t.backgroundImage,")"):"url(".concat(t.backgroundImage,")"),backgroundSize:"cover",width:"100%",minHeight:10*e.spacing(4)}},heroTextBase:{position:"relative",zIndex:0},imageFullBleedHeroText:{top:"10%"},imageShortHeroText:{top:e.spacing(8)},textOnlyHeroText:{top:e.spacing(5)},centerHeroText:{top:e.spacing(8),textAlign:"center"}}})),S=function(e){var t=e.backgroundImage,i=e.center,n=e.classNames,a=e.description,r=e.gradient,c=e.title,o=e.variant,l=y({backgroundImage:t,gradient:r});return Object(s.jsx)("div",{className:function(){var e="".concat(l.heroBase," ").concat(l[o]);return n&&(e+=" ".concat(n)),e}(),children:Object(s.jsxs)(j.a,{className:i?"".concat(l.heroTextBase," ").concat(l.centerHeroText):"".concat(l.heroTextBase," ").concat(l["".concat(o,"HeroText")]),maxWidth:"md",children:[Object(s.jsx)(v,{children:c}),a&&Object(s.jsx)(k,{children:a})]})})},P=i(129),q=Object(w.a)((function(e){return{section:Object(b.a)({margin:"".concat(e.spacing(4),"px 0")},e.breakpoints.down("sm"),{margin:"".concat(e.spacing(3),"px 0")})}})),A=function(e){var t=e.children,i=Object(x.a)(),n=Object(O.a)(i.breakpoints.down("sm"));return Object(s.jsx)(f.a,{component:"h2",variant:n?"h3":"h2",gutterBottom:!0,children:t})},L=function(e){var t=e.title,i=e.text,n=e.children,a=q();return Object(s.jsxs)(P.a,{container:!0,className:a.section,spacing:2,children:[Object(s.jsxs)(P.a,{item:!0,xs:12,children:[Object(s.jsx)(A,{children:t}),i&&i.split("\n\n").map((function(e){return Object(s.jsx)(k,{children:e})}))]}),n]})},I=Object(g.a)((function(e){return{skyPhoto:Object(b.a)({backgroundPosition:"65% 100%"},e.breakpoints.down("sm"),{backgroundPosition:"65% 80%"})}})),B=function(){var e=I();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:h.b.image,classNames:e.skyPhoto,description:h.b.description,title:h.b.title,variant:"imageFullBleed"}),Object(s.jsx)(j.a,{maxWidth:"md",children:h.a.sections.map((function(e){var t=e.title,i=e.text;return Object(s.jsx)(L,{title:t,text:i},t)}))})]})},M=i(43),C=i(35),F=i(130),T=i(131),H=Object(w.a)((function(e){return{card:{height:"100%"},role:{fontStyle:"italic"},pic:{width:"100%"}}})),R=function(e){var t=e.title,i=e.cards,n=Object(C.a)(Object(C.a)({},q()),H());return Object(s.jsxs)(P.a,{className:n.section,container:!0,spacing:2,children:[Object(s.jsx)(P.a,{item:!0,xs:12,children:Object(s.jsx)(A,{children:t})}),i.map((function(e){var t=e.name,i=e.image,a=e.role,r=e.bio;return Object(s.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(s.jsx)(F.a,{className:n.card,children:Object(s.jsx)(T.a,{children:Object(s.jsxs)(P.a,{container:!0,spacing:2,children:[Object(s.jsx)(P.a,{item:!0,xs:4,children:Object(s.jsx)("img",{alt:"".concat(t,", ").concat(a),className:n.pic,src:i})}),Object(s.jsxs)(P.a,{item:!0,xs:8,children:[Object(s.jsx)(f.a,{component:"h3",variant:"h6",gutterBottom:!0,children:t}),Object(s.jsx)(k,{classNames:n.role,children:a})]}),Object(s.jsx)(P.a,{item:!0,xs:12,children:Object(s.jsx)(k,{children:r})})]})})})},t)}))]})},z=function(){var e=M.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:M.b.image,description:M.b.description,gradient:!0,title:M.b.title,variant:"imageShort"}),Object(s.jsx)(j.a,{maxWidth:"md",children:e.map((function(e){var t=e.cards,i=e.title;return Object(s.jsx)(R,{cards:t,title:i},i)}))})]})},D=i(59),J=i(104),W=i(132),Z=i(133),U=i(134),Q=i(135),G=i(136),E=i(137),V=Object(w.a)((function(e){return{table:{maxWidth:"100%",margin:e.spacing(1)},cell:{minWidth:"15%"}}})),Y=function(e){var t=e.headings,i=e.rows,n=V();return Object(s.jsx)(J.a,{className:n.table,children:Object(s.jsx)(W.a,{children:Object(s.jsxs)(Z.a,{"aria-label":"schedule table",stickyHeader:!0,children:[Object(s.jsx)(U.a,{children:Object(s.jsx)(Q.a,{children:t.map((function(e){return Object(s.jsx)(G.a,{className:n.cell,children:e},e)}))})}),Object(s.jsx)(E.a,{children:i.map((function(e){var t=e.cells,i=e.title;return Object(s.jsx)(Q.a,{children:t.map((function(e){return Object(s.jsx)(G.a,{children:e},e)}))},i)}))})]})})})},K=Object(w.a)({archPic:{backgroundPositionY:"30%"}}),_=function(){var e=K(),t=D.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:D.b.image,classNames:e.archPic,gradient:!0,title:D.b.title,variant:"imageShort"}),Object(s.jsx)(j.a,{maxWidth:"md",children:t.map((function(e){var t=e.headings,i=e.rows,n=e.title,a=e.text;return Object(s.jsx)(L,{title:n,text:a,children:Object(s.jsx)(P.a,{item:!0,xs:12,children:Object(s.jsx)(Y,{headings:t,rows:i})})},n)}))})]})},X=i(142),$=i(60),ee=i(138),te=i(139),ie=i(140),se=i(141),ne=i(78),ae=i.n(ne),re=i(79),ce=i.n(re),oe=Object(w.a)((function(e){return{listItem:{padding:"".concat(e.spacing(1),"px 0")}}})),le=function(e){var t=e.address,i=e.phone,n=oe();return Object(s.jsxs)(ee.a,{children:[Object(s.jsxs)(te.a,{className:n.listItem,children:[Object(s.jsx)(ie.a,{children:Object(s.jsx)(ae.a,{})}),Object(s.jsx)(se.a,{children:t})]}),Object(s.jsxs)(te.a,{className:n.listItem,children:[Object(s.jsx)(ie.a,{children:Object(s.jsx)(ce.a,{})}),Object(s.jsx)(se.a,{children:i})]})]})},ue=Object(w.a)((function(e){return{widget:function(t){var i=t.size;return Object(b.a)({borderRadius:e.spacing(1)/2,border:"1px solid ".concat(e.palette.grey[500]),width:"95%",minHeight:"small"===i?10*e.spacing(4):10*e.spacing(9)},e.breakpoints.down("xs"),{minHeight:"small"===i?10*e.spacing(3):10*e.spacing(8)})}}})),de=function(e){var t=e.size,i=e.title,n=e.src,a=ue({size:t});return Object(s.jsx)("iframe",{frameBorder:0,className:a.widget,src:n,title:i})},me=function(e){var t=e.children,i=Object(x.a)(),n=Object(O.a)(i.breakpoints.down("sm"));return Object(s.jsx)(f.a,{component:"h3",variant:n?"h6":"h5",gutterBottom:!0,children:t})},pe=Object(w.a)((function(e){return{fireplacePic:{backgroundPositionY:"45%"},button:{margin:"".concat(e.spacing(2),"px 0")}}})),be=function(){var e=pe(),t=$.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:$.b.image,classNames:e.fireplacePic,gradient:!0,title:$.b.title,variant:"imageShort"}),Object(s.jsx)(j.a,{maxWidth:"md",children:t.map((function(t){var i=t.title,a=t.options;return Object(s.jsx)(L,{title:i,children:a.map((function(t){var i=t.address,a=t.buttonLabel,r=t.description,c=t.mapSrc,o=t.mapTitle,l=t.phone,u=t.url;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)(P.a,{item:!0,xs:12,md:8,children:[Object(s.jsx)(me,{children:o}),Object(s.jsx)(k,{children:r}),i&&l&&Object(s.jsx)(le,{address:i,phone:l}),Object(s.jsx)(X.a,{"aria-label":"Visit ".concat(o," website"),className:e.button,color:"primary",href:u,variant:"contained",children:a})]}),Object(s.jsx)(P.a,{item:!0,xs:12,md:4,children:Object(s.jsx)(de,{size:"small",title:o,src:c})})]},o)}))},i)}))})]})},je=i(61),ge=Object(w.a)({giftPic:{backgroundPositionY:"40%"}}),he=function(){var e=ge(),t=je.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:je.b.image,classNames:e.giftPic,gradient:!0,title:je.b.title,variant:"imageShort"}),Object(s.jsx)(j.a,{maxWidth:"md",children:t.map((function(e){var t=e.title,i=e.text,n=e.registrySrc,a=e.registryTitle;return Object(s.jsx)(L,{title:t,text:i,children:Object(s.jsx)(de,{src:n,title:a,size:"large"})})}))})]})},xe=i(62),Oe=Object(w.a)((function(e){return{section:{padding:e.spacing(2)},title:{textTransform:"uppercase"},text:{fontWeight:"normal"}}})),fe=function(e){var t=e.title,i=e.text,n=Oe(),a=Object(x.a)(),r=Object(O.a)(a.breakpoints.down("sm"))?"h5":"h4",c=Object(O.a)(a.breakpoints.down("sm"))?"h6":"h5";return Object(s.jsxs)("div",{className:n.section,children:[Object(s.jsx)(f.a,{className:n.title,component:"p",variant:r,gutterBottom:!0,children:t}),Object(s.jsx)(f.a,{className:n.text,component:"p",variant:c,gutterBottom:!0,children:i})]})},ve=Object(w.a)((function(e){return{program:Object(b.a)({textAlign:"center",padding:"".concat(e.spacing(4),"px 0")},e.breakpoints.down("sm"),{padding:"".concat(e.spacing(3),"px 0")})}})),we=function(){var e=ve(),t=xe.b.title,i=xe.b.image,n=xe.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:i,center:!0,gradient:!0,title:t,variant:"imageShort"}),Object(s.jsx)(j.a,{className:e.program,maxWidth:"md",children:n.map((function(e){var t=e.heading,i=e.text;return Object(s.jsx)(fe,{title:t,text:i})}))})]})},Ne=i(63),ke=Object(w.a)((function(e){var t;return{photos:(t={lineHeight:0,columnCount:3},Object(b.a)(t,e.breakpoints.down("sm"),{columnCount:2}),Object(b.a)(t,e.breakpoints.down("xs"),{columnCount:1}),t),photo:{width:"100%",height:"auto",minWidth:10*e.spacing(3),minHeight:10*e.spacing(1),margin:e.spacing(1)}}})),ye=function(e){var t=e.photos,i=Object(C.a)(Object(C.a)({},q()),ke());return Object(s.jsx)("div",{className:"".concat(i.section," ").concat(i.photos),children:t.map((function(e){var t=e.title,n=e.url;return Object(s.jsx)("img",{className:i.photo,src:n,alt:t,title:t},t)}))})},Se=function(){var e=Ne.a.description,t=Ne.a.title;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{description:e,title:t,variant:"textOnly"}),Object(s.jsx)(j.a,{maxWidth:"lg",children:Object(s.jsx)(ye,{photos:Ne.b})})]})},Pe=i(67),qe=Object(w.a)((function(e){return{text:{padding:0,margin:0},list:{marginTop:e.spacing(2)}}})),Ae=function(e){var t=e.question,i=e.answer,a=qe(),r=Object(m.g)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(te.a,{className:a.listItem,children:Object(s.jsx)(se.a,{children:Object(s.jsx)(f.a,{className:a.text,component:"span",variant:"h6",children:t})})}),Object(s.jsx)(te.a,{className:a.listItem,children:Object(s.jsx)(se.a,{children:Object(s.jsx)(f.a,{className:a.text,component:"span",variant:"body1",children:i.map((function(e){return Object(s.jsxs)(n.Fragment,{children:["text"===e.type&&e.content,"externalLink"===e.type&&Object(s.jsx)("a",{href:e.href,target:e.target,children:e.content}),"internalLink"===e.type&&Object(s.jsx)(d.b,{onClick:function(){return t=e.href,r.push(t),void window.scrollTo(0,0);var t},children:e.content}),"locationList"===e.type&&Object(s.jsx)("ul",{className:a.list,children:e.content.map((function(e){var t=e.title,i=e.address,n=e.phone;return Object(s.jsxs)("li",{children:[t,Object(s.jsx)(le,{address:i,phone:n})]},t)}))})]},e.content)}))})})})]})},Le=function(){var e=q(),t=Pe.b.title,i=Pe.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{title:t,variant:"textOnly"}),Object(s.jsx)(j.a,{maxWidth:"md",children:Object(s.jsx)(ee.a,{className:e.section,children:i.map((function(e){var t=e.question,i=e.answer;return Object(s.jsx)(Ae,{question:t,answer:i})}))})})]})},Ie=i(64),Be=Object(w.a)({letterPic:{backgroundPositionY:"38%"}}),Me=function(){var e=Be(),t=Ie.b.title,i=Ie.b.image,n=Ie.a.sections;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S,{backgroundImage:i,classNames:e.letterPic,gradient:!0,title:t,variant:"imageShort"}),Object(s.jsx)(j.a,{maxWidth:"md",children:n.map((function(e){var t=e.title,i=e.text,n=e.rsvpSrc,a=e.rsvpTitle;return Object(s.jsx)(L,{title:t,text:i,children:Object(s.jsx)(de,{src:n,title:a,size:"large"})})}))})]})},Ce=i(83),Fe=i(143),Te=i(81),He=i.n(Te),Re=i(80),ze=i.n(Re),De=Object(w.a)((function(e){return{navButtonContainer:{borderRadius:e.spacing(1)/2,backgroundColor:"rgba(250, 250, 250, 0.5)",margin:e.spacing(1),position:"fixed",top:0,left:0,zIndex:999},navButton:{padding:e.spacing(1)}}})),Je=function(e){var t=e.onClick,i=e.open,n=Object(x.a)(),a=De(),r=Object(O.a)(n.breakpoints.down("sm")),c=i?"Close menu":"Open menu",o=i?Object(s.jsx)(ze.a,{}):Object(s.jsx)(He.a,{});return Object(s.jsxs)("div",{className:a.navButtonContainer,children:[r&&Object(s.jsx)(Fe.a,{"aria-label":c,className:a.navButton,color:"inherit",disableRipple:!0,disableFocusRipple:!0,onClick:t,children:o}),!r&&Object(s.jsx)(X.a,{"aria-label":c,className:a.navButton,disableRipple:!0,disableFocusRipple:!0,onClick:t,size:"large",startIcon:o,children:Object(s.jsx)("span",{className:a.openMenuLabel,children:"Menu"})})]})},We=i(146),Ze=Object(w.a)((function(e){return{menu:{backgroundColor:e.palette.background.paper,minWidth:10*e.spacing(3)},link:{color:"inherit",textDecoration:"none"}}})),Ue=function(e){var t=e.onClose,i=e.open,a=Object(m.g)(),r=Ze(),c=Object.values(p);return Object(s.jsx)(We.a,{anchor:"left",open:i,onClose:t,children:Object(s.jsx)("div",{className:r.menu,children:Object(s.jsx)(ee.a,{component:"nav",children:c.map((function(e,i){var o=e.title,l=e.url,u=e.target;return Object(s.jsxs)(n.Fragment,{children:[u&&Object(s.jsx)(te.a,{button:!0,divider:c.length-1!==i,children:Object(s.jsx)("a",{className:r.link,href:l,target:u,children:Object(s.jsx)(se.a,{children:o})})}),!u&&Object(s.jsx)(te.a,{button:!0,divider:c.length-1!==i,onClick:function(){return function(e){a.push(e),window.scrollTo(0,0),t()}(l)},children:Object(s.jsx)(se.a,{children:o})})]},"".concat(o,"-").concat(i))}))})})})},Qe=function(){var e=Object(n.useState)(!1),t=Object(Ce.a)(e,2),i=t[0],a=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Je,{onClick:function(){return a(!0)},open:i}),Object(s.jsx)(Ue,{onClose:function(){return a(!1)},open:i})]})},Ge=function(){return Object(s.jsxs)(d.a,{children:[Object(s.jsx)(Qe,{}),Object(s.jsxs)(m.d,{children:[Object(s.jsx)(m.b,{exact:!0,path:p.home.url,component:B}),Object(s.jsx)(m.b,{exact:!0,path:p.rsvp.url,component:Me}),Object(s.jsx)(m.b,{exact:!0,path:p.weddingParty.url,component:z}),Object(s.jsx)(m.b,{exact:!0,path:p.schedule.url,component:_}),Object(s.jsx)(m.b,{exact:!0,path:p.lodgingTravel.url,component:be}),Object(s.jsx)(m.b,{exact:!0,path:p.registry.url,component:he}),Object(s.jsx)(m.b,{exact:!0,path:p.ceremonyProgram.url,component:we}),Object(s.jsx)(m.b,{exact:!0,path:p.photos.url,component:Se}),Object(s.jsx)(m.b,{exact:!0,path:p.faq.url,component:Le}),Object(s.jsx)(m.b,{children:Object(s.jsx)(m.a,{to:"/"})})]})]})},Ee=i(144),Ve=i(145),Ye=i(44),Ke=Object(w.a)((function(e){return{divider:{margin:"0 auto ".concat(e.spacing(2),"px auto"),width:"60%"},footerContainer:{marginBottom:e.spacing(4),padding:e.spacing(3)}}})),_e=function(){var e=Ke(),t=Object(x.a)(),i=Object(O.a)(t.breakpoints.down("xs"))?2:4;return Object(s.jsxs)(j.a,{className:e.footerContainer,children:[Object(s.jsx)(Ee.a,{className:e.divider}),Object(s.jsxs)(P.a,{container:!0,justify:"center",spacing:i,children:[Object(s.jsx)(P.a,{item:!0,children:Object(s.jsx)(Ve.a,{href:"mailto:".concat(Ye.a),children:Ye.a})}),Object(s.jsx)(P.a,{item:!0,children:Object(s.jsxs)(Ve.a,{href:"https://www.instagram.com/explore/tags/".concat(Ye.b),rel:"noopener",target:"_blank",children:["#",Ye.b]})})]})]})},Xe=function(){return Object(s.jsxs)(u,{children:[Object(s.jsx)(Ge,{}),Object(s.jsx)(_e,{})]})},$e=document.getElementById("root");$e.hasChildNodes()?Object(a.hydrate)(Object(s.jsx)(Xe,{}),$e):Object(a.render)(Object(s.jsx)(Xe,{}),$e)},21:function(e){e.exports=JSON.parse('{"home":{"title":"Home","url":"/"},"rsvp":{"title":"RSVP","url":"/rsvp"},"schedule":{"title":"Schedule","url":"/schedule"},"faq":{"title":"FAQ","url":"/faq"},"lodgingTravel":{"title":"Lodging & Travel","url":"/lodging-travel"},"ceremonyProgram":{"title":"Ceremony Program","url":"/ceremony-program"},"weddingParty":{"title":"Wedding Party","url":"/wedding-party"},"registry":{"title":"Registry","url":"/registry"},"photos":{"title":"Photos","url":"/photos"},"thingsToDo":{"title":"Things To Do","url":"https://www.example.com","target":"_blank"}}')},42:function(e){e.exports=JSON.parse('{"b":{"title":"Lorem Ipsum","description":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt.","image":"https://i.ibb.co/7zJVRwB/silhouette-against-clouds.jpg"},"a":{"sections":[{"title":"Nunc at massa et!","text":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed. Cras maximus felis sed nibh sodales, et dapibus orci vulputate. Praesent eu eleifend orci. Nam eget interdum nulla. Donec ultricies urna et sodales venenatis. \\n\\nCurabitur vitae felis vel nibh fermentum porttitor eu vel diam. Sed vitae tincidunt elit. Phasellus fringilla, odio tristique porttitor dignissim, velit augue semper mauris, ut commodo elit tortor eget lectus. Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt. Morbi sollicitudin gravida arcu quis condimentum. Aliquam feugiat pharetra euismod."}]}}')},43:function(e){e.exports=JSON.parse('{"b":{"title":"Wedding Party","image":"https://i.ibb.co/D88zm86/bridesmaids-flowers.jpg"},"a":{"sections":[{"title":"Bridal Party","cards":[{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."}]},{"title":"Groom\'s Party","cards":[{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."}]},{"title":"Parents","cards":[{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."},{"name":"Lorem Ipsum","image":"https://i.ibb.co/zHZG1bg/person.png","role":"Dolor sit Amet","bio":"Nulla facilisi. Nunc feugiat odio sed eros vulputate bibendum. Ut eget enim sapien. Integer cursus lectus lectus, ac varius quam dapibus sed."}]}]}}')},44:function(e){e.exports=JSON.parse('{"a":"lorem@ipsum123456789.com","b":"loremipsum"}')},59:function(e){e.exports=JSON.parse('{"b":{"title":"Schedule","image":"https://i.ibb.co/qRKSzZB/north-peak-ceremony.jpg"},"a":{"sections":[{"title":"Lorem Ipsum","headings":["When","Where","What"],"rows":[{"title":"Lorem ipsum","cells":["1/1 12 pm","Sin dolor amet","Nulla porta hendrerit dolor"]},{"title":"Lorem ipsum","cells":["1/1 12 pm","Sin dolor amet","Nulla porta hendrerit dolor"]},{"title":"Lorem ipsum","cells":["1/1 12 pm","Sin dolor amet","Nulla porta hendrerit dolor"]},{"title":"Lorem ipsum","cells":["1/1 12 pm","Sin dolor amet","Nulla porta hendrerit dolor"]},{"title":"Lorem ipsum","cells":["1/1 12 pm","Sin dolor amet","Nulla porta hendrerit dolor"]}]}]}}')},60:function(e){e.exports=JSON.parse('{"b":{"title":"Lodging & Travel","image":"https://i.ibb.co/dm1YKNx/jordan-hotel-fireplace.jpg"},"a":{"sections":[{"title":"Lodging","options":[{"description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis. ","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555","url":"https://www.example.com","mapTitle":"Nunc At Massa Et","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Book Now"},{"description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis.","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555","url":"https://www.example.com","mapTitle":"Nunc At Massa Et","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Book Now"}]},{"title":"Travel","options":[{"mapTitle":"Nunc At Massa Et","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555","url":"https://www.example.com","description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis.","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Learn More"},{"mapTitle":"Nunc At Massa Et","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555","url":"https://www.example.com","description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis.","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Learn More"},{"mapTitle":"Nunc At Massa Et","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555","url":"https://www.example.com","description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis.","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Learn More"},{"mapTitle":"Nunc At Massa Et","url":"https://www.example.com","description":"Nunc at massa et dui laoreet commodo. Phasellus laoreet urna ac leo varius, at gravida nunc facilisis.","mapSrc":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377643.1448643036!2d-71.25046756407667!3d42.31400891969002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1607399593160!5m2!1sen!2sus","buttonLabel":"Get Directions"}]}]}}')},61:function(e){e.exports=JSON.parse('{"b":{"title":"Registry","image":"https://i.ibb.co/WFfFwQZ/gifts.jpg"},"a":{"sections":[{"title":"Lorem Ipsum!","text":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt.","registrySrc":"https://www.example.com","registryTitle":"Lorem Ipsum"}]}}')},62:function(e){e.exports=JSON.parse('{"b":{"title":"Ceremony Program","image":"https://i.ibb.co/Kjmc8xC/ceremony-page-background.jpg"},"a":{"sections":[{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"},{"heading":"Lorem ipsum","text":"Dolor Sit Amet, Consectetur Adipiscing"}]}}')},63:function(e){e.exports=JSON.parse('{"a":{"title":"Photos","description":"Curabitur vitae felis vel nibh fermentum porttitor eu vel diam."},"b":[{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/yR1PkvZ/pexels-flora-westbrook-6103917.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/dQ0JRNQ/pexels-stijn-dijkstra-2583849.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/Fss4yJR/pexels-kira-louw-4755029.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/HrcSQs5/pexels-mathias-pr-reding-4389550.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/yR1PkvZ/pexels-flora-westbrook-6103917.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/dQ0JRNQ/pexels-stijn-dijkstra-2583849.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/Fss4yJR/pexels-kira-louw-4755029.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/HrcSQs5/pexels-mathias-pr-reding-4389550.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/yR1PkvZ/pexels-flora-westbrook-6103917.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/dQ0JRNQ/pexels-stijn-dijkstra-2583849.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/Fss4yJR/pexels-kira-louw-4755029.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/HrcSQs5/pexels-mathias-pr-reding-4389550.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/yR1PkvZ/pexels-flora-westbrook-6103917.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/dQ0JRNQ/pexels-stijn-dijkstra-2583849.jpg"},{"title":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt","url":"https://i.ibb.co/Fss4yJR/pexels-kira-louw-4755029.jpg"}]}')},64:function(e){e.exports=JSON.parse('{"b":{"title":"RSVP","image":"https://i.ibb.co/Mg4zTPc/love-envelope-photo.jpg"},"a":{"sections":[{"title":"Mauris id cursus erat, at ornare est","text":"Phasellus facilisis tristique leo, in venenatis purus blandit tincidunt.","rsvpSrc":"https://www.example.com","rsvpTitle":"Lorem Ipsum!"}]}}')},67:function(e){e.exports=JSON.parse('{"b":{"title":"FAQ"},"a":{"sections":[{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Pellentesque consectetur turpis vitae molestie mollis. Nulla porta "},{"type":"internalLink","href":"/rsvp","content":"RSVP"},{"type":"text","content":" hendrerit dolor."}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus, quis tristique ante. Mauris id cursus erat, at ornare est."}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus, quis tristique ante. Mauris id cursus erat, at ornare est."}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus, "},{"type":"externalLink","content":"quis tristique ante","href":"https://www.example.com","target":"_blank"},{"type":"text","content":". Mauris id cursus erat, at ornare est."}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus, quis tristique ante. Mauris id cursus erat, at ornare est.\\""}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus, quis tristique ante. "},{"type":"internalLink","href":"/lodging-travel","content":"Mauris id cursus erat"},{"type":"text","content":", at ornare est."}]},{"question":"Lorem ipsum dolor sit amet, consectetur adipiscing elit?","answer":[{"type":"text","content":"Fusce non ornare metus:"},{"type":"locationList","content":[{"title":"Nulla Facilisi","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555"},{"title":"Nulla Facilisi","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555"},{"title":"Nulla Facilisi","address":"1 Main St, Boston, MA 01234","phone":"(555) 555-5555"}]}]}]}}')}},[[101,1,2]]]);
//# sourceMappingURL=main.a02a9198.chunk.js.map