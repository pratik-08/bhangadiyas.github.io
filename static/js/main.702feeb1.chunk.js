(this["webpackJsonpbhangadiyas.github.io"]=this["webpackJsonpbhangadiyas.github.io"]||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(32),a(5)),i=a(6),u=a(8),m=a(7),s=(a(33),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,"Contact Me"),l.a.createElement("p",null,"You can reach me via email: ",l.a.createElement("strong",null,"pratikagrawal2008@gmail.com")),l.a.createElement("h2",null,"Remote Link"),l.a.createElement("a",{className:"App-link",href:"https://pratik-08.github.io/bhangadiyas.github.io/",target:"_blank",rel:"noopener noreferrer"},"Bhangadiya's Family Tree")))}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={x:"I am Pratik",y:"I am Shikha"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"About Me"),l.a.createElement("p",null,"Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?"),l.a.createElement("p",null,"Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?"))}}]),a}(l.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("h1",null,"Welcome to our family tree website"),l.a.createElement("p",null," Feel free to browse around and learn more about us."))}}]),a}(n.Component),p=a(11),b=a(44),g=a(43),E=(a(17),a(23),[{id:"1",name:"Paa",birthDate:"8 Dec 1991",birthPlace:"Basna, India",living:!0,gender:"Male",spouses:[{id:"2",name:"Shikha",current:!0,gender:"Female"}],children:[{id:"3",name:"Prashu",gender:"Male"},{id:"4",name:"Prashi",gender:"Female"}],parents:[{id:"5",name:"Prabhu",gender:"Male"},{id:"6",name:"Anita",gender:"Female"}]},{id:"2",name:"Shikha",birthDate:"28 Oct 1995",birthPlace:"Kunra, India",living:!0,gender:"Female",spouses:[{id:"1",name:"Paa",current:!0,gender:"Male"}],children:[{id:"3",name:"Prashu",gender:"Male"},{id:"4",name:"Shipra",gender:"Female"}],parents:[{id:"7",name:"Shyam",gender:"Male"},{id:"8",name:"Seema",gender:"Female"}]}]),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getPersonData=function(){n.state.name&&console.log("getPersonData value:"+n.state.name);var e=function(e){var t={};return E.forEach((function(a){a.name===e&&(t=a)})),t}(n.state.name);console.log("person data:"+JSON.stringify(e)),n.setState({person:e})},n.handleInputChange=function(e){n.setState({name:e.target.value})},n.state={friends:[],name:"",id:"",notes:"",person:null},n.create=n.create.bind(Object(p.a)(n)),n.update=n.update.bind(Object(p.a)(n)),n.delete=n.delete.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"create",value:function(e){console.log("create ...!!!"),e.preventDefault()}},{key:"update",value:function(e){console.log("update ...!!!"),e.preventDefault()}},{key:"delete",value:function(e){console.log("delete ...!!!"),e.preventDefault()}},{key:"handleChange",value:function(e){console.log("handleChange ...!!!"),this.setState(e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"searchForm"},l.a.createElement("form",null,l.a.createElement("input",{placeholder:"Search for...",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{variant:"primary",onClick:this.getPersonData},"Get Person Data")))),l.a.createElement("br",null),l.a.createElement("br",null),this.state.person&&this.state.person!=={}&&l.a.createElement("div",null,l.a.createElement(g.a,{id:"global-table"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"header-row"},l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Birth Date"),l.a.createElement("th",null,"Birth Place"),l.a.createElement("th",null,"Gender"),l.a.createElement("th",null,"Spouse Name"),l.a.createElement("th",null,"Children Names"),l.a.createElement("th",null,"Mother"),l.a.createElement("th",null,"Father"))),l.a.createElement("tbody",null,this.state.person&&l.a.createElement("tr",null,l.a.createElement("td",null,this.state.person.id),l.a.createElement("td",null,this.state.person.name),l.a.createElement("td",null,this.state.person.birthDate),l.a.createElement("td",null,this.state.person.birthPlace),l.a.createElement("td",null,this.state.person.gender),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))))}}]),a}(l.a.Component),f=a(12),y=a(10),k=(a(35),function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(f.b,{exact:!0,activeClassName:"current",to:"/bhangadiyas.github.io/"},"Home")),l.a.createElement("li",null,l.a.createElement(f.b,{exact:!0,activeClassName:"current",to:"/bhangadiyas.github.io/component/Family"},"Family")),l.a.createElement("li",null,l.a.createElement(f.b,{exact:!0,activeClassName:"current",to:"/bhangadiyas.github.io/component/About"},"About")),l.a.createElement("li",null,l.a.createElement(f.b,{exact:!0,activeClassName:"current",to:"/bhangadiyas.github.io/component/Contact"},"Contact"))))}),O=function(){return l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/bhangadiyas.github.io/",component:d}),l.a.createElement(y.a,{exact:!0,path:"/bhangadiyas.github.io/component/Family",component:v}),l.a.createElement(y.a,{exact:!0,path:"/bhangadiyas.github.io/component/About",component:h}),l.a.createElement(y.a,{exact:!0,path:"/bhangadiyas.github.io/component/Contact",component:s}))},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app"},l.a.createElement("h1",null,"Bhangadiya's Family Tree"),l.a.createElement(k,null),l.a.createElement(O,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f.a,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.702feeb1.chunk.js.map