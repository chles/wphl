(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(28)},21:function(t,e,n){},25:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(13),c=n.n(o),s=(n(21),n(5)),i=n(6),u=n(8),l=n(7),h=n(9),m=n(30),p=n(32),v=n(31),d=n(29),f=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props.movies;return r.a.createElement("ul",{className:"list-movies"},r.a.createElement(j,{movies:t}))}}]),e}(a.Component),j=function(t){return t.movies.map(function(t,e){return r.a.createElement("li",{key:e},r.a.createElement(d.a,{to:t.id},t.title))})},b=f,E=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={movies:[]},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("http://localhost/wp-json/wphl/v2/rawmovieslist").then(function(t){return t.json()}).then(function(e){return t.setState({movies:e})})}},{key:"render",value:function(){var t=this.state.movies;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movies"),r.a.createElement(b,{movies:t}))}}]),e}(a.Component),O=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={status:null,datas:null},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;fetch("http://localhost/wp-json/wp/v2/movie/"+e).then(this.handleErrors).then(function(e){return t.setState({status:200,datas:e})}).catch(function(e){return t.setState({status:e.status,datas:e.statusText})})}},{key:"handleErrors",value:function(t){if(!t.ok)throw t;return t.json()}},{key:"render",value:function(){var t=this.state.datas;return 200===this.state.status?r.a.createElement("h1",null,t.title.rendered):404===this.state.status?r.a.createElement("p",null,"Not found."):r.a.createElement("p",null,"Loading...")}}]),e}(a.Component),w=(n(25),function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(v.a,{path:"/",exact:!0,component:E}),r.a.createElement(v.a,{path:"/:id(\\d+)",component:O})))))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.c8d0f9d4.chunk.js.map