(this.webpackJsonpmeltorres=this.webpackJsonpmeltorres||[]).push([[0],{13:function(e,t,a){},32:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),i=a.n(c),r=(a(37),a(29)),s=(a(13),a(56)),m=a(26),o=a(27),u=a(15),E=a(31),p=a(30),d=a(51),h=a(52),g=a(53),b=a(54),f=a(55),v=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).submitForm=n.submitForm.bind(Object(u.a)(n)),n.state={status:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement(d.a,{onSubmit:this.submitForm,action:"https://formspree.io/f/xvovqwjz",method:"POST"},l.a.createElement(h.a,null,l.a.createElement(g.a,null,"Email:"),l.a.createElement(b.a,{type:"email",name:"email"})),l.a.createElement(h.a,null,l.a.createElement(g.a,null,"Subject:"),l.a.createElement(b.a,{type:"text",name:"subject"})),l.a.createElement(h.a,null,l.a.createElement(g.a,null,"Message:"),l.a.createElement(b.a,{type:"textarea",name:"message"}),l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},"SUCCESS"===e?l.a.createElement("alert",null,"Thanks!"):l.a.createElement(f.a,{className:"button1"},"Submit"),"ERROR"===e&&l.a.createElement("alert",null,"Ooops! There was an error. Please fill out all fields."))))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),l=new XMLHttpRequest;l.open(a.method,a.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},l.send(n)}}]),a}(l.a.Component),q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(s.a,null,l.a.createElement("div",{className:"space"}),l.a.createElement("h1",null,"I am Mel Torres"),l.a.createElement("img",{src:"",alt:"mainphoto"}),l.a.createElement("div",{className:"space"}),l.a.createElement("div",{className:"bio"},l.a.createElement("h1",null,"Bio"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur iusto assumenda quod. Sit deserunt aliquid eveniet doloribus at non debitis, aut beatae, eligendi nostrum suscipit explicabo natus? Deleniti, tenetur illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatibus eum facilis architecto quidem. Enim, quis animi et delectus adipisci quae eius, tempora magni, molestiae hic eveniet maxime aliquid atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas tempora eligendi vitae, quia itaque quas in distinctio amet! Voluptatum fugiat accusamus deserunt eos ex sed. Odit suscipit quis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum commodi voluptas cumque deserunt, iure culpa placeat quidem perferendis itaque quasi, est nemo ab nulla hic iste quibusdam officiis eos?")),l.a.createElement("a",{name:"contact"}),l.a.createElement("div",{className:"contact"},l.a.createElement("h1",{className:"text-center"},"Contact"),l.a.createElement(v,null)),l.a.createElement("div",{className:"socials text-center"},l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/AsylusMusic/"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/svg/56/56582.svg",alt:"facebook"})),"  ",l.a.createElement("a",{target:"_blank",href:"http://instagram.com/asylusmusic"},l.a.createElement("img",{className:"icons",src:"https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/instagram-512.png",alt:"instagram"})),"  ",l.a.createElement("a",{target:"_blank",href:"https://twitter.com/asylusmusic/"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/png/512/23/23681.png",alt:"twitter"})),"  ",l.a.createElement("a",{target:"_blank",href:"https://www.youtube.com/channel/UCrG0lNbd0sBZgrIBRR9WJAg"},l.a.createElement("img",{className:"icons",src:"https://image.flaticon.com/icons/png/512/8/8782.png",alt:"youtube"}))))))},w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(s.a,null,l.a.createElement("h1",null,"films"))))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(s.a,null,l.a.createElement("h1",null,"Aduio"))))},S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement(s.a,null,l.a.createElement("h1",null,"Musician"))))},k=a(57),y=a(58),O=a(61),x=a(59),j=a(60),F=a(11),R=a(6),C=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,null,l.a.createElement("nav",{id:"myNav"},l.a.createElement(k.a,{light:!0,expand:"md"},l.a.createElement(y.a,{onClick:function(){return c(!a)}}),l.a.createElement(O.a,{className:"text-center",isOpen:a,navbar:!0},l.a.createElement(x.a,{className:"mr-auto ml-auto ",navbar:!0},l.a.createElement(j.a,null,l.a.createElement(F.b,{to:"/"},"Home"))," ",l.a.createElement(j.a,null,l.a.createElement(F.b,{to:"/film"},"Film"))," ",l.a.createElement(j.a,null,l.a.createElement(F.b,{to:"/audio"},"Audio"))," ",l.a.createElement(j.a,null,l.a.createElement(F.b,{to:"/musician"},"Musician"))))),l.a.createElement(R.c,null,l.a.createElement(R.a,{exact:!0,path:"/",component:q}),l.a.createElement(R.a,{path:"/film",component:w}),l.a.createElement(R.a,{path:"/audio",component:N}),l.a.createElement(R.a,{path:"/musician",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.8566c8b4.chunk.js.map