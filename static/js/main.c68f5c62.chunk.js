(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"1","image":"https://upload.wikimedia.org/wikipedia/commons/0/09/Tulipa_hungarica_borb-Dykes-1930-vintage_botanical_print.jpg"},{"id":2,"name":"2","image":"https://storage.needpix.com/rsynced_images/vintage-1835114_1280.jpg"},{"id":3,"name":"3","image":"https://upload.wikimedia.org/wikipedia/commons/3/3d/Aristolochia-barbata-dutchmans-pipe-linden-antique-botanical-print-c-1874-12308-p.jpg"},{"id":4,"name":"4","image":"https://live.staticflickr.com/4642/27198966999_41b4167fe3_b.jpg"},{"id":5,"name":"5","image":"https://upload.wikimedia.org/wikipedia/commons/0/05/Renanthera_coccinea_%281830%29.jpg"},{"id":6,"name":"6","image":"https://farm6.staticflickr.com/5555/14549071308_d5bc520813_b.jpg"},{"id":7,"name":"7","image":"https://cdn6.picryl.com/photo/1815/12/31/dianella-ensifolia-2411ff-640.jpg"},{"id":8,"name":"8","image":"https://live.staticflickr.com/4804/32493275398_b40eb5bccd_b.jpg"},{"id":9,"name":"9","image":"https://upload.wikimedia.org/wikipedia/commons/9/95/NIE_1905_Hemp_-_Fibre_Plants.jpg"},{"id":10,"name":"10","image":"https://cdn6.picryl.com/photo/1792/12/31/fraxinella-dictamnus-albus-frassinella-fraxinelle-dittany-burning-bush-gas-0b6275-640.jpg"},{"id":11,"name":"11","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKY3xZmBlQt4219xdZNnavn2kVANu0LcKzXAO_7YvM8s5XwYHJw&s"},{"id":12,"name":"12","image":"https://upload.wikimedia.org/wikipedia/commons/b/b6/Gc6_Punica_granatum_flower.jpg"}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(3),r=t.n(c),s=(t(14),t(4)),o=t(5),m=t(7),l=t(6),p=t(8),d=(t(15),t(16),function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),g=(t(17),function(e){return n.a.createElement("div",{className:"true"===e.shakeWrapper?"wrapperShake":"wrapper"},e.pictures)}),u=t(1),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={cards:u,clickedArray:[],topScore:0,score:0,message:"",shakeit:"false"},t.clickPicture=function(e){var a=t.shuffleArray(u);t.setState({cards:a}),t.state.clickedArray.includes(e)?t.setState({score:0,clickedArray:[],message:"Incorrect! Click an image to start again.",shakeit:"true"}):t.setState({clickedArray:t.state.clickedArray.concat([e]),score:t.state.score+1,message:"Correct!",shakeit:"false"}),t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("h3",{className:"App-intro"},n.a.createElement("strong",null,"Click on an image to earn points, but don't click on any, more than once!"),n.a.createElement("p",{className:"score"},n.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)),n.a.createElement("p",{className:"message"},n.a.createElement("strong",null,this.state.message))),n.a.createElement(g,{shakeWrapper:this.state.shakeit,pictures:this.state.cards.map((function(a){return n.a.createElement(d,{clickPicture:e.clickPicture,id:a.id,key:a.id,name:a.name,image:a.image})}))}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c68f5c62.chunk.js.map