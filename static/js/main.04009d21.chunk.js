(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),c=a(7),i=a(8),u=a(10),l=a(9),m=a(11),h=a(14);var f=function(){return r.a.createElement("div",{className:"menu"},r.a.createElement(h.b,{to:"/minesweeper"},"Minesweeper"))},d=a(12);function g(){return r.a.createElement(d.b,{render:function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/minesweeper",component:S}),r.a.createElement(d.a,{from:"/",to:"/minesweeper",component:function(){return null}}),r.a.createElement(d.a,{from:"*",to:"/",component:function(){return null}}))}})}var p=a(1),b=a.n(p),k=a(3),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={start:0,seconds:0,minutes:0,timer:"00:00.0",status:"clear"},a.startTimer=Object(k.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.timerInterval||"cleared"===a.timerInterval){e.next=2;break}return e.abrupt("return");case 2:return t=a.state.seconds+60*a.state.minutes,e.next=5,setInterval(Object(k.a)(b.a.mark(function e(){var n,r,s,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.start||Date.now(),r=(Date.now()-n)/1e3+t,s=Math.floor(r/60),r-=60*s,o="".concat(String(s).padStart(2,"0"),":").concat(r.toFixed(1).padStart(4,"0")),e.next=7,a.setState({start:n,seconds:r,minutes:s,timer:o});case 7:case"end":return e.stop()}},e)})),100);case 5:a.timerInterval=e.sent;case 6:case"end":return e.stop()}},e)})),a.clearInterval=function(){clearInterval(a.timerInterval),a.timerInterval="cleared"},a.pauseTimer=Object(k.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.clearInterval(),a.setState({start:0});case 2:case"end":return e.stop()}},e)})),a.clearTimer=function(){a.clearInterval(),a.setState({start:0,seconds:0,minutes:0,timer:"00:00.0"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"render",value:function(){var e=this.state.timer;return r.a.createElement("div",{className:"counter"},r.a.createElement("h3",null,"Time:")," ",r.a.createElement("h3",null,e))}}]),t}(n.Component),w=a(29),E=a.n(w),y=(a(40),E.a.initializeApp({apiKey:"AIzaSyCdF0zX81MHnA9nUv44AZMY7z7Za0c5MCI",authDomain:"games-ff915.firebaseapp.com",databaseURL:"https://games-ff915.firebaseio.com",projectId:"games-ff915",storageBucket:"",messagingSenderId:"308063716684",appId:"1:308063716684:web:f02f93626362a544"}).firestore()),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={topTimes:[]},a.getData=Object(k.a)(b.a.mark(function e(){var t,n,r,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.collection("minesweeper").get();case 3:return t=e.sent,n=[],e.next=7,t.forEach(function(e){n.push(e.data())});case 7:return e.next=9,Promise.all(n);case 9:r=e.sent,s=a.props.size?r.filter(function(e){return e.size[0]===a.props.size[0]}).sort(function(e,t){return Number(e.time)>Number(t.time)?1:-1}).slice(0,5):r.sort(function(e,t){return Number(e.time)>Number(t.time)?1:-1}).slice(0,10),a.setState({topTimes:s}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,14]])})),a.componentDidMount=Object(k.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.collection("minesweeper").onSnapshot(function(){var e=Object(k.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getData();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:a.unsubscribeListener=e.sent;case 3:case"end":return e.stop()}},e)})),a.componentWillUnmount=function(){a.unsubscribeListener()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.topTimes;return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("h4",{style:{textAlign:"center",marginBottom:"4px"}},"Top ",this.props.size?"5":"10"," times:"),e.length?e.map(function(e){return r.a.createElement("div",{className:"score",key:999*Math.random()},r.a.createElement("div",null,e.name,": \xa0"),r.a.createElement("div",{style:{textAlign:"right"}},e.time.toFixed(1)," seconds on ",8===e.size[0]?"Easy":16===e.size[0]?"Medium":"Hard","."))}):r.a.createElement("div",{className:"score",key:999*Math.random()},"There are no scores yet!"))}}]),t}(n.Component),x=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"],N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={error:""},a.addTime=Object(k.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a.nameInput.value).length){e.next=3;break}return e.abrupt("return");case 3:if(!x.includes(t)){e.next=8;break}return e.next=6,a.setState({error:"Please try a friendlier name!"});case 6:e.next=19;break;case 8:return e.prev=8,e.next=11,y.collection("minesweeper").add({name:t,time:a.props.time,size:a.props.size});case 11:console.log("submitted"),a.props.showLeaderBoard(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),console.error(e.t0),a.setState({error:"Server error."});case 19:case"end":return e.stop()}},e,null,[[8,15]])})),a.componentDidMount=Object(k.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement("div",{className:"add-to-db"},r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",ref:function(t){return e.nameInput=t},placeholder:"Your name"}),r.a.createElement("button",{onClick:this.addTime},"Submit")),t&&r.a.createElement("div",{className:"error"},t))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={size:[],mineCount:0,flagCount:0,board:[],started:!1,ended:!1,victory:!1,showLeaderBoard:!1,holdLeft:!1,holdRight:!1,holdMiddle:!1,releaseTime:0},a.createBoard=function(){var e=Object(k.a)(b.a.mark(function e(t){var n,r,s,o,c,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.canvas.addEventListener("mouseup",a.onMouseUp),a.canvas.addEventListener("mousedown",a.onMouseDown),n=[a.state.size||0,a.state.mineCount||0,[]],r=n[0],s=n[1],o=n[2],t||a.state.size.length){e.next=5;break}return e.abrupt("return");case 5:for("small"===t?(r=[8,8],s=10):"medium"===t?(r=[16,16],s=40):"large"===t&&(r=[24,24],s=99),c=0;c<r[0];c++)for(o[c]=[],i=0;i<r[1];i++)o[c].push({mine:0,flag:0,open:0,neighborMines:0,pos:[c,i],highlighted:0});return a.setMines(r,s,o),console.log("Board initialized =>",o),e.next=11,a.setState({size:r,mineCount:s,board:o});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.setMines=function(e,t,n,r){for(var s=function(e){return Math.floor(Math.random()*e)},o=0;o<t;){var c=s(e[0]),i=s(e[1]),u=String(c).padStart(2,"0")+String(i).padStart(2,"0");r&&r.includes(u)||1!==n[c][i].mine&&(n[c][i].mine=1,o++)}a.setNeighborCounts(n)},a.setNeighborCounts=function(e){for(var t=0,n=e.length;t<n;t++)for(var r=0,s=e[t].length;r<s;r++){var o=a.getNeighborCells(t,r,0,e).neighborMines;e[t][r].neighborMines=o}},a.getNeighborCells=function(e,t,a,n){for(var r=[],s=[],o=0,c=0,i=-1;i<=1;i++)for(var u=-1;u<=1;u++)if(e+i>=0&&e+i<n.length&&t+u>=0&&t+u<n[e].length){if(!a&&0===i&&0===u)continue;r.push(n[e+i][t+u]),s.push("".concat(String(e+i).padStart(2,"0")).concat(String(t+u).padStart(2,"0"))),o+=n[e+i][t+u].mine,n[e+i][t+u].flag%3===1&&c++}return{neighborPos:s,neighborCells:r,neighborMines:o,neighborFlags:c}},a.ensureSafeFirstClick=function(e,t,n){var r=a.getNeighborCells(e,t,1,n),s=r.neighborCells,o=r.neighborPos,c=0;s.forEach(function(e){n[e.pos[0]][e.pos[1]].mine&&(n[e.pos[0]][e.pos[1]].mine=0,c++)}),a.setMines(a.state.size,c,n,o)},a.cascade=function(e,t,n){a.getNeighborCells(e,t,0,n).neighborCells.forEach(function(e){var t=e.pos[0],r=e.pos[1];n[t][r].neighborMines?n[t][r].open||(n[t][r].open=1):n[t][r].neighborMines||n[t][r].open||(n[t][r].open=1,a.cascade(t,r,n))})},a.openNeighborCells=function(e,t,n){var r=n[e][t],s=a.getNeighborCells(e,t,0,n),o=s.neighborFlags,c=s.neighborCells;o===r.neighborMines&&c.forEach(function(e){e.flag%3!==0||e.open||a.openCell(e.pos[0],e.pos[1],n)})},a.openAllMines=function(e){e.forEach(function(t){t.forEach(function(t){t.mine&&(e[t.pos[0]][t.pos[1]].open=1)})})},a.countOpenCells=function(e){var t=0;return e.forEach(function(e){e.forEach(function(e){e.open&&t++})}),t},a.openCell=function(){var e=Object(k.a)(b.a.mark(function e(t,n,r){var s,o,c,i,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.ended&&!r[t][n].open){e.next=2;break}return e.abrupt("return");case 2:return a.state.started||a.ensureSafeFirstClick(t,n,r),a.timer.state.start||a.timer.startTimer(),s=r[t][n],r[t][n].open=1,0!==s.neighborMines||s.mine||a.cascade(t,n,r),o=a.state.size[0]*a.state.size[1]-a.state.mineCount,c=a.countOpenCells(r),i=a.state.ended,u=a.state.victory,s.mine?(i=!0,a.openAllMines(r)):c===o&&(i=!0,u=!0,a.flagRemainingMines(r)),i&&a.timer.pauseTimer(),e.next=15,a.setState({board:r,ended:i,victory:u,started:!0});case 15:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.flagRemainingMines=function(e){e.forEach(function(e){e.forEach(function(e){e.mine&&(e.flag=1)})})},a.countFlags=function(e){var t=0;return e.forEach(function(e){e.forEach(function(e){e.flag%3===1&&t++})}),t},a.setFlag=function(e,t,n){if(!n[e][t].open&&a.state.started){n[e][t].flag++;var r=a.countFlags(n);a.setState({board:n,flagCount:r})}},a.highlightNeighborCells=function(e,t){a.highlightTimeout&&window.clearTimeout(a.highlightTimeout);for(var n=[],r=-2;r<=2;r++)for(var s=-2;s<=2;s++)if(e+r>=0&&e+r<a.state.board.length&&t+s>=0&&t+s<a.state.board[e].length){if(0===r&&0===s)continue;var o="".concat(String(e+r).padStart(2,"0")).concat(String(t+s).padStart(2,"0"));if(2===Math.abs(s)||2===Math.abs(r))document.getElementById(o).classList.remove("highlighted");else{var c=a.state.board[e+r][t+s];c.flag%3!==0||c.open||(document.getElementById(o).classList.add("highlighted"),n.push(o))}}a.highlightTimeout=window.setTimeout(function(){a.clearAllHighlights(n)},5)},a.clearAllHighlights=function(e){a.state.board.forEach(function(t){t.forEach(function(t){var a="".concat(String(t.pos[0]).padStart(2,"0")).concat(String(t.pos[1]).padStart(2,"0"));e&&!e.includes(a)?document.getElementById(a).classList.remove("highlighted"):e||document.getElementById(a).classList.remove("highlighted")})})},a.mouseOver=function(){var e=Object(k.a)(b.a.mark(function e(t){var n,r,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.className.includes("cell")){e.next=3;break}return a.clearAllHighlights(),e.abrupt("return");case 3:n=JSON.parse(t.target.getAttribute("cellpos")),r=Number(n[0]),s=Number(n[1]),a.highlightNeighborCells(r,s);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onMouseUp=function(e){if(a.clearAllHighlights(),a.canvas.removeEventListener("mouseover",a.mouseOver),e.target.className.includes("cell")){var t=a.state.board,n=JSON.parse(e.target.getAttribute("cellpos")),r=Number(n[0]),s=Number(n[1]),o=t[r][s];if(Date.now()-a.state.releaseTime<100||1===e.button)o.open&&a.openNeighborCells(r,s,t),a.setState({holdLeft:!1,holdRight:!1,holdMiddle:!1});else if(0===e.button){if(e.target.className.includes("cell")){var c=o.flag%3;o.open||a.state.holdRight||0!==c||a.openCell(r,s,t)}a.setState({holdLeft:!1,releaseTime:Date.now()})}else 2===e.button&&(a.state.holdLeft||(a.timer.state.start||!a.state.started||a.state.ended||a.timer.startTimer(),a.state.ended||a.setFlag(r,s,t)),a.setState({holdRight:!1,releaseTime:Date.now()}))}else 0===e.button?a.setState(function(e){if(e.holdLeft)return{holdLeft:!1,releaseTime:Date.now()}}):2===e.button&&a.setState({holdRight:!1,releaseTime:Date.now()})},a.onMouseDown=function(){var e=Object(k.a)(b.a.mark(function e(t){var n,r,s,o,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.button,e.t0=n,e.next=0===e.t0?4:1===e.t0?7:2===e.t0?10:13;break;case 4:return e.next=6,a.setState({holdLeft:!0});case 6:return e.abrupt("break",13);case 7:return e.next=9,a.setState({holdMiddle:!0});case 9:return e.abrupt("break",13);case 10:return e.next=12,a.setState({holdRight:!0});case 12:return e.abrupt("break",13);case 13:r=a.state,s=r.holdLeft,o=r.holdRight,c=r.holdMiddle,(s&&o||c)&&(a.mouseOver(t),a.canvas.addEventListener("mouseover",a.mouseOver));case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.clearBoard=function(){console.log("Clearing board."),a.canvas.removeEventListener("mouseup",a.onMouseUp),a.canvas.removeEventListener("mousedown",a.onMouseDown),a.setState({size:[],mineCount:0,board:[],started:!1,ended:!1,victory:!1,showLeaderBoard:!1})},a.startOver=function(){a.createBoard(),a.timer.clearTimer(),a.setState({started:!1,ended:!1,victory:!1,showLeaderBoard:!1})},a.showLeaderBoard=function(){a.setState({showLeaderBoard:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("mousedown",this.onMouseDown)}},{key:"render",value:function(){var e=this,t=this.state,a=t.size,n=t.board,s=t.started,o=t.holdLeft,c=t.ended,i=t.victory,u=t.showLeaderBoard,l=t.mineCount,m=t.flagCount;return r.a.createElement("div",{className:"minesweeper-container",ref:function(t){return e.canvas=t}},!a.length&&r.a.createElement("div",{className:"select-board"},r.a.createElement(j,null),r.a.createElement("button",{onClick:function(){return e.createBoard("small")}},"Easy (8x8)"),r.a.createElement("button",{onClick:function(){return e.createBoard("medium")}},"Medium (16x16)"),r.a.createElement("button",{onClick:function(){return e.createBoard("large")}},"Hard (30x30)")),!!a.length&&r.a.createElement("div",{className:"canvas",onContextMenu:function(e){return e.preventDefault(),!1}},r.a.createElement("div",{className:"minesweeper-menu"},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.clearBoard},r.a.createElement("img",{alt:"back",src:"icons/back.svg",className:"icon"})),r.a.createElement("button",{className:"".concat(s&&!c?"":"hidden"),onClick:this.timer?this.timer.pauseTimer:null},r.a.createElement("img",{alt:"pause",src:"icons/pause.svg",className:"icon"})),r.a.createElement("button",{className:"".concat(s?"":"hidden"),onClick:this.startOver},r.a.createElement("img",{alt:"reset",src:"icons/reset.svg",className:"icon"}))),r.a.createElement("div",{className:"counter"},r.a.createElement("h3",null," Mines:")," ",r.a.createElement("h3",null,l)),r.a.createElement("div",{className:"counter"},r.a.createElement("h3",null,"Flags:"),r.a.createElement("h3",null,m)),r.a.createElement(v,{ref:function(t){return e.timer=t}})),r.a.createElement("div",{className:"board"},u&&r.a.createElement("div",{className:"game-end-overlay"},r.a.createElement(j,{size:a})),i&&!u&&r.a.createElement("div",{className:"game-end-overlay"},r.a.createElement("h3",null,"You won in"),r.a.createElement("h3",null,(this.timer.state.seconds+60*this.timer.state.minutes).toFixed(1)," seconds!"),r.a.createElement(N,{time:Number((this.timer.state.seconds+60*this.timer.state.minutes).toFixed(1)),showLeaderBoard:this.showLeaderBoard,size:a})),c&&!i&&r.a.createElement("div",{className:"game-end-overlay"},r.a.createElement("h3",null,"You lost in "),r.a.createElement("h3",null,(this.timer.state.seconds+60*this.timer.state.minutes).toFixed(1)," seconds!")),n.map(function(e,t){return r.a.createElement("div",{className:"board-row",key:t},e.map(function(e,a){return r.a.createElement("div",{className:"cell".concat(e.open?e.mine?" exploded":" open":o?" hover":"").concat(e.highlighted?" highlighted":""),id:"".concat(String(t).padStart(2,"0")).concat(String(a).padStart(2,"0")),cellpos:"[".concat(t,",").concat(a,"]"),key:"".concat(t,",").concat(a)},e.open?e.mine?"X":"".concat(e.neighborMines):e.flag%3===1?r.a.createElement("img",{alt:"flag",src:"icons/flag.svg",className:"cell icon",cellpos:"[".concat(t,",").concat(a,"]")}):e.flag%3===2?"?":null)}))}))))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(g,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.04009d21.chunk.js.map