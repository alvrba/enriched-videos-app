(this.webpackJsonpreadvideo=this.webpackJsonpreadvideo||[]).push([[0],{51:function(e,t,a){},65:function(e,t,a){e.exports=a(76)},70:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(70),a(43)),c=a(5),s=a(6),p=a(7),d=a(8),m=a(41),u=a(27);function h(e){return{type:"RETURNED",payload:{index:e}}}var y=Object(u.b)({title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type,e},description:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type,e},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type,e},marks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHECK_TEST":var a=JSON.parse(JSON.stringify(e)),n=a[t.payload.index].content.answer===t.payload.selected;return a[t.payload.index].content.correct=n,a[t.payload.index].content.correct&&(a[t.payload.index].content.returned=!0),a[t.payload.index].content.completed=!0,a;case"CHECK_QUESTION":var r=JSON.parse(JSON.stringify(e)),o=!0;return r[t.payload.index].content.correctAnswers.map((function(e,a){e!==t.payload.selected[a]&&(o=!1)})),r[t.payload.index].content.correct=o,r[t.payload.index].content.correct2&&(r[t.payload.index].content.returned=!0),r[t.payload.index].content.completed=!0,r;case"RETURNED":var i=JSON.parse(JSON.stringify(e));return i[t.payload.index].content.returned=!0,i;default:return e}}}),v=a(103),E=a(58),g=a(56),k=a.n(g),f=Object(E.a)({palette:{primary:k.a}}),b=a(42),C=a(57),S=a(99),x=a(104),O=a(98),w=a(106),j=a(102),T=a(107),M=a(105),I=a(93),R=a(94),N=a(96),z=a(97),B=Object(I.a)((function(e){return{typography:{padding:e.spacing(2)}}}));function F(e){B();var t=r.a.useState(null),a=Object(b.a)(t,2),n=a[0],o=a[1],i=function(e){o(e.currentTarget)},l=Boolean(n),c=l?"simple-popover":void 0,s=r.a.createElement(R.a,null);return s=0===e.volume?r.a.createElement(N.a,null):e.volume>50?r.a.createElement(R.a,null):r.a.createElement(z.a,null),r.a.createElement("div",null,r.a.createElement(x.a,{alignItems:"stretch",display:"flex",style:{height:"40px"}},e.insideMark?r.a.createElement(w.a,{disabled:!0,Click:i,style:{height:"100%",borderRadius:"0"},variant:"contained",color:"primary",disableElevation:!0},s):r.a.createElement(w.a,{onClick:i,style:{height:"100%",borderRadius:"0"},variant:"contained",color:"primary",disableElevation:!0},s)),r.a.createElement(M.a,{id:c,open:l,anchorEl:n,onClose:function(){o(null)},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(S.a,{container:!0,direction:"column",justify:"center",alignItems:"center",pacing:2},r.a.createElement(S.a,{item:!0,style:{padding:"5px"}},r.a.createElement(R.a,null)),r.a.createElement(S.a,{item:!0,xs:!0,style:{height:"100px"}},r.a.createElement(T.a,{orientation:"vertical",value:e.volume,onChange:function(t,a){e.volumeSave(a)},"aria-labelledby":"continuous-slider"})),r.a.createElement(S.a,{item:!0,style:{padding:"5px"}},r.a.createElement(z.a,null)))))}var V,P,A=a(100),J=a(101),U=r.a.createElement("svg",{style:{position:"absolute",bottom:"0",left:"0"},className:"bi bi-flag-fill",width:"20px",height:"20px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M3.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z",clipRule:"evenodd"}),r.a.createElement("path",{fillRule:"evenodd",d:"M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 00.593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 013.5 9V3a.5.5 0 01.223-.416l.04-.026z",clipRule:"evenodd"})),D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handlePlay=function(e){!1===n.props.insideMark&&n.props.playSave()},n.handleStop=function(e){!1===n.props.insideMark&&n.props.stopSave()},n.handlePopover=function(e,t){var a=!n.state.soundOpen;n.setState({soundOpen:a})},n.handleRange=function(e,t){!1===n.props.insideMark&&n.props.rangeSave(t)},n.handleSeekMark=function(e){!1===n.props.insideMark&&n.props.rangeMarkSave(e.currentTarget.id)},n.state={soundOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.playerReady?!1===this.props.insideMark?r.a.createElement(x.a,{display:"flex",style:{backgroundColor:"#ECECEC",height:"40px"}},r.a.createElement(x.a,{alignItems:"stretch",display:"flex"},this.props.playing?r.a.createElement(w.a,{onClick:this.handleStop,style:{height:"100%",borderRadius:"0"},variant:"contained",color:"primary",disableElevation:!0},r.a.createElement(A.a,null)):r.a.createElement(w.a,{onClick:this.handlePlay,style:{height:"100%",borderRadius:"0"},variant:"contained",color:"primary",disableElevation:!0},r.a.createElement(J.a,null))),r.a.createElement(x.a,null,r.a.createElement(F,{volume:this.props.volume,volumeSave:this.props.volumeSave,insideMark:this.props.insideMark})),r.a.createElement(x.a,{alignItems:"center",display:"flex",p:1,style:{width:"50px"}},r.a.createElement(j.a,{style:{fontSize:"14px"}},this.props.currentTime)),r.a.createElement(x.a,{p:1,flexGrow:1},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(T.a,{style:{width:"100%"},min:0,max:this.props.duration,value:this.props.currentSecond,onChange:this.handleRange,valueLabelDisplay:"auto",valueLabelFormat:function(){return e.props.currentTime}}),this.props.marks.map((function(t,a){var n=100*t.time/e.props.duration;return r.a.createElement("div",{id:t.time,key:a,onClick:e.handleSeekMark,style:{cursor:"pointer",width:"20px",height:"20px",backgroundColor:"rgba(0, 0, 0, 0)",position:"absolute",left:n+"%",top:"-5px",marginLeft:"-5px"}},U)}))))):r.a.createElement(x.a,{display:"flex",style:{backgroundColor:"#ECECEC",height:"40px"}},r.a.createElement(x.a,{alignItems:"stretch",display:"flex"},r.a.createElement(w.a,{disabled:!0,onClick:this.handlePlay,style:{height:"100%",borderRadius:"0"},variant:"contained",color:"primary",disableElevation:!0},r.a.createElement(J.a,null))),r.a.createElement(x.a,null,r.a.createElement(F,{volume:this.props.volume,volumeSave:this.props.volumeSave,insideMark:this.props.insideMark})),r.a.createElement(x.a,{alignItems:"center",display:"flex",p:1,style:{width:"50px"}},r.a.createElement(j.a,{style:{fontSize:"14px"}},this.props.currentTime)),r.a.createElement(x.a,{p:1,flexGrow:1},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(T.a,{disabled:!0,style:{width:"100%"},min:0,max:this.props.duration,value:this.props.currentSecond,onChange:this.handleRange,valueLabelDisplay:"auto",valueLabelFormat:function(){return e.props.currentTime}}),this.props.marks.map((function(t,a){var n=100*t.time/e.props.duration;return r.a.createElement("div",{id:t.time,key:a,onClick:e.handleSeekMark,style:{cursor:"auto",width:"20px",height:"20px",backgroundColor:"rgba(0, 0, 0, 0)",position:"absolute",left:n+"%",top:"-5px",marginLeft:"-5px"}},U)}))))):null}}]),a}(r.a.Component),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleTrue=function(e){n.setState({selected:!0})},n.handleFalse=function(e){n.setState({selected:!1})},n.handleCheck=function(e){var t,a;n.props.dispatch((t=n.props.index,a=n.state.selected,{type:"CHECK_TEST",payload:{index:t,selected:a}})),n.setState({selected:-1})},n.state={selected:-1},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,n={backgroundColor:"grey"},o={backgroundColor:"grey"};return!0===this.state.selected?(n={backgroundColor:"orange"},o={backgroundColor:"grey"}):!1===this.state.selected&&(n={backgroundColor:"grey"},o={backgroundColor:"orange"}),this.props.mark.content.correct?(e={backgroundColor:"rgb(15,127,18,0.3)",paddingBottom:"20px"},t={backgroundColor:"rgb(15,127,18)",padding:"4px"},a="CORRECTO"):(e={backgroundColor:"rgb(252,13,27,0.3)",paddingBottom:"20px"},t={backgroundColor:"rgb(252,13,27)",padding:"4px"},a="INCORRECTO"),!1===this.props.mark.content.completed?r.a.createElement(S.a,{container:!0,spacing:2,style:{paddingBottom:"20px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.question)),r.a.createElement(S.a,{container:!0,justify:"center"},r.a.createElement(S.a,{item:!0,style:{margin:"5px"}},r.a.createElement(w.a,{onClick:this.handleTrue,style:n,variant:"contained",color:"primary"},"Verdadero")),r.a.createElement(S.a,{item:!0,style:{margin:"5px"}},r.a.createElement(w.a,{onClick:this.handleFalse,style:o,variant:"contained",color:"primary"},"Falso"))),r.a.createElement(S.a,{container:!0,justify:"center",style:{margin:"5px"}},r.a.createElement(S.a,{item:!0},-1!==this.state.selected?r.a.createElement(w.a,{onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar"):r.a.createElement(w.a,{disabled:!0,onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar")))):r.a.createElement(S.a,{container:!0,spacing:2,style:e},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(S.a,{container:!0,justify:"flex-start",spacing:1},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:t},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},a))))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.question)),r.a.createElement(S.a,{container:!0,justify:"center"},r.a.createElement(S.a,{item:!0,style:{margin:"5px"}},r.a.createElement(w.a,{disabled:!0,onClick:this.handleTrue,style:n,variant:"contained",color:"primary"},"Verdadero")),r.a.createElement(S.a,{item:!0,style:{margin:"5px"}},r.a.createElement(w.a,{disabled:!0,onClick:this.handleFalse,style:o,variant:"contained",color:"primary"},"Falso"))),r.a.createElement(S.a,{container:!0,justify:"center",style:{margin:"5px"}},r.a.createElement(S.a,{item:!0},-1!==this.state.selected?r.a.createElement(w.a,{onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar"):r.a.createElement(w.a,{disabled:!0,onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar"))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{backgroundColor:"#ECECEC",padding:"10px"}},r.a.createElement(j.a,null,"JUSTIFICACI\xd3N"),r.a.createElement(j.a,null,this.props.mark.content.reason))))}}]),a}(r.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCheck=function(t){e.props.selected?e.props.answerSelectedSave(e.props.answerIndex,!1):e.props.answerSelectedSave(e.props.answerIndex,!0)},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t={};return t=this.props.selected?{backgroundColor:"orange"}:{},e=this.props.selected?{backgroundColor:"rgb(253,164,41,0.3)",padding:"10px"}:{backgroundColor:"#ECECEC",padding:"10px"},r.a.createElement(S.a,{item:!0,style:{margin:"5px"}},r.a.createElement(O.a,{style:e},r.a.createElement(j.a,null,this.props.answer),this.props.completed?r.a.createElement(w.a,{disabled:!0,onClick:this.handleCheck,style:t,variant:"contained",color:"primary"},"Seleccionar"):r.a.createElement(w.a,{onClick:this.handleCheck,style:t,variant:"contained",color:"primary"},"Seleccionar")))}}]),a}(r.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleCheck=function(e){var t,a;n.props.dispatch((t=n.props.index,a=n.state.selected,{type:"CHECK_QUESTION",payload:{index:t,selected:a}})),n.setState({selected:[]})},n.answerSelectedSave=function(e,t){var a=n.state.selected.slice();a[e]=t,n.setState({selected:a})};var r=new Array(n.props.mark.content.answers.length);return r.fill(!1,0,r.length),n.state={selected:r},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,n=this;return this.props.mark.content.correct?(e={backgroundColor:"rgb(15,127,18,0.3)",paddingBottom:"20px"},t={backgroundColor:"rgb(15,127,18)",padding:"4px"},a="CORRECTO"):(e={backgroundColor:"rgb(252,13,27,0.3)",paddingBottom:"20px"},t={backgroundColor:"rgb(252,13,27)",padding:"4px"},a="INCORRECTO"),!1===this.props.mark.content.completed?r.a.createElement(S.a,{container:!0,spacing:2,style:{paddingBottom:"20px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.question)),r.a.createElement(S.a,{item:!0,xs:12},this.props.mark.content.answers.map((function(e,t){return r.a.createElement(_,{key:t,answerIndex:t,answer:e,answerSelectedSave:n.answerSelectedSave,selected:n.state.selected[t]})}))),r.a.createElement(S.a,{container:!0,justify:"center",style:{margin:"5px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(w.a,{onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar")))):r.a.createElement(S.a,{container:!0,spacing:2,style:e},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(S.a,{container:!0,justify:"flex-start",spacing:1},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:t},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},a))))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.question)),r.a.createElement(S.a,{item:!0,xs:12},this.props.mark.content.answers.map((function(e,t){return r.a.createElement(_,{key:t,answer:e,answerSelectedSave:n.answerSelectedSave,completed:n.props.mark.content.completed,selected:n.state.selected[t]})}))),r.a.createElement(S.a,{container:!0,justify:"center",style:{margin:"5px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(w.a,{disabled:!0,onClick:this.handleCheck,variant:"contained",color:"primary"},"Comprobar"))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{backgroundColor:"#ECECEC",padding:"10px"}},r.a.createElement(j.a,null,"JUSTIFICACI\xd3N"),r.a.createElement(j.a,null,this.props.mark.content.reason))))}}]),a}(r.a.Component),H=(a(51),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{container:!0,spacing:2,style:{paddingBottom:"20px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.description)),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(O.a,null,r.a.createElement("div",{class:"web-responsive"},r.a.createElement("iframe",{style:{border:"0px",width:"100%",height:"100%"},title:"Mark website",src:this.props.mark.content.url})))))}}]),a}(r.a.Component)),K=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{container:!0,spacing:2,style:{paddingBottom:"20px"}},r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{style:{padding:"4px",backgroundColor:"orange"}},r.a.createElement(j.a,{style:{fontSize:"12px",color:"white"}},this.props.mark.type))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(j.a,null,this.props.mark.content.description)))}}]),a}(r.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handlePlay=function(e){n.props.playSave()},n.moreMark=function(e){var t=n.props.marksId[n.state.currentCount],a=n.props.marks[n.props.marksId[n.state.currentCount]],r=0;n.props.marksId.length-1===n.state.currentCount?!1===a.content.completed?n.setState({currentCount:n.state.currentCount}):a.content.blocks&&!1===a.content.correct&&!1===a.content.returned?(n.props.seekSecond(a.content.returnTime),n.props.dispatch(h(t)),n.setState({currentCount:0})):(n.props.marksId.map((function(e,t){n.props.marks[e].content.completed&&(r+=1)})),r===n.props.marksId.length&&(n.props.playSave(),n.setState({currentCount:0}))):!1===a.content.completed?n.setState({currentCount:n.state.currentCount}):a.content.blocks&&!1===a.content.correct&&!1===a.content.returned?(n.props.seekSecond(a.content.returnTime),n.props.dispatch(h(t)),n.setState({currentCount:0})):n.setState({currentCount:n.state.currentCount+1})},n.lessMark=function(e){0===n.state.currentCount?n.setState({currentCount:n.state.currentCount}):n.setState({currentCount:n.state.currentCount-1})},n.state={currentCount:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.marksId[this.state.currentCount],a=this.props.marks[this.props.marksId[this.state.currentCount]];return r.a.createElement(r.a.Fragment,null,0!==this.props.marksId.length?r.a.createElement(S.a,{container:!0},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("div",{style:{height:"100%"}},"TEST"===a.type?r.a.createElement(L,{dispatch:e.props.dispatch,mark:a,index:t}):"QUESTION"===a.type?r.a.createElement(q,{dispatch:e.props.dispatch,mark:a,index:t}):"WEB"===a.type?r.a.createElement(H,{mark:a,index:t}):"INFO"===a.type?r.a.createElement(K,{mark:a,index:t}):r.a.createElement("p",null,"No se ha encontrado la marca"))),r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(S.a,{container:!0,justify:"flex-end",spacing:2,style:{backgroundColor:"#ECECEC"}},r.a.createElement(S.a,{item:!0},0===this.state.currentCount?r.a.createElement(w.a,{onClick:this.lessMark,disabled:!0,variant:"contained",color:"primary"},"Anterior"):r.a.createElement(w.a,{onClick:this.lessMark,variant:"contained",color:"primary"},"Anterior")),r.a.createElement(S.a,{item:!0},a.content.completed?!1===a.content.correct&&a.content.blocks&&!1===a.content.returned?r.a.createElement(w.a,{onClick:e.moreMark,variant:"contained",color:"primary"},"Volver a revisar el video"):r.a.createElement(w.a,{onClick:e.moreMark,variant:"contained",color:"primary"},"Siguiente"):r.a.createElement(w.a,{disabled:!0,onClick:e.moreMark,variant:"contained",color:"primary"},"Siguiente"))))):null)}}]),a}(r.a.Component),W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){if(window.YT)n.loadVideo();else{var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=function(e){n.loadVideo()}}},n.loadVideo=function(){n.player=new window.YT.Player("player",{videoId:n.props.url,height:"100%",width:"100%",playerVars:{controls:0,disablekb:1,modestbranding:1,rel:0,showinfo:0,playsinline:1},events:{onStateChange:n.onPlayerStateChange,onReady:n.onPlayerReady}})},n.stopSave=function(){n.player.pauseVideo()},n.playSave=function(){n.player.playVideo()},n.timerStart=function(){P=setInterval((function(){var e=n.player.getCurrentTime(),t=Math.floor(e);n.setState({currentSecond:t}),n.convertTime(t)}),200),V=setInterval((function(){var e=n.player.getCurrentTime();n.searchMarks(e)}),500)},n.timerStop=function(){clearInterval(V),clearInterval(P);var e=n.player.getCurrentTime(),t=Math.floor(e);n.convertTime(t),n.setState({currentSecond:t})},n.onPlayerStateChange=function(e){1===e.data?(n.timerStart(),n.setState({marksId:[],insideMark:!1,playing:!0})):(n.timerStop(),n.setState({playing:!1}))},n.onPlayerReady=function(e){n.setState({duration:n.player.getDuration()-1,playerReady:!0}),n.player.setVolume(80)},n.convertTime=function(e){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),r=Math.floor(e-(3600*t+60*a)),o=t.toString().padStart(2,"0"),i=a.toString().padStart(2,"0"),l=r.toString().padStart(2,"0");if(0===t){var c=i+":"+l;n.setState({currentTime:c})}else{var s=o+":"+i+":"+l;n.setState({currentTime:s})}},n.volumeSave=function(e){n.player.setVolume(e),n.setState({volume:e})},n.seekSecond=function(e){n.setState({currentSecond:e,returning:!0}),n.convertTime(Math.floor(e)),n.player.seekTo(e),n.playSave()},n.rangeSave=function(e){e<n.state.currentSecond&&n.setState({returning:!0}),n.setState({currentSecond:e}),n.convertTime(Math.floor(e)),n.player.seekTo(e)},n.rangeMarkSave=function(e){n.stopSave(),n.player.seekTo(e),n.setState({insideMark:!0,currentSecond:e}),n.convertTime(Math.floor(e)),n.searchMarks(e)},n.searchMarks=function(e){var t,a=e,r=Math.floor(a),o=[],i=Object(C.a)(n.props.marks.entries());try{for(i.s();!(t=i.n()).done;){var l=Object(b.a)(t.value,2),c=l[0];l[1].time===r&&o.push(c)}}catch(s){i.e(s)}finally{i.f()}0!==o.length&&(!1===n.state.returning&&r===Math.floor(n.state.previousStop)&&a>n.state.previousStop?n.setState({returning:!1}):(n.stopSave(),n.setState({previousStop:a,marksId:o,insideMark:!0,returning:!1})))},n.state={duration:0,playerReady:!1,currentSecond:0,currentTime:"00:00",previousStop:0,marksId:[],volume:80,insideMark:!1,returning:!1,playing:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=0!==this.state.marksId.length?{filter:"blur(2px)"}:{};return r.a.createElement(S.a,{container:!0,justify:"center"},r.a.createElement(S.a,{item:!0,xs:12,lg:9},r.a.createElement(x.a,{style:{position:"relative"}},r.a.createElement("div",{className:"video-responsive",style:e},r.a.createElement("div",{id:"player"})),0!==this.state.marksId.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{container:!0,alignItems:"center",justify:"center",style:{position:"absolute",top:"0",zIndex:"1",marginTop:"10px"}},r.a.createElement(S.a,{item:!0,xs:12,lg:11},r.a.createElement(x.a,null,r.a.createElement(O.a,{style:{backgroundColor:"rgb(255,255,255)",padding:"10px",borderRadius:"0"}},r.a.createElement(Q,{dispatch:this.props.dispatch,marks:this.props.marks,marksId:this.state.marksId,playSave:this.playSave,seekSecond:this.seekSecond}))))),r.a.createElement(x.a,{style:{position:"absolute",top:"0",width:"100%",height:"100%",zIndex:"0.5",backgroundColor:"rgb(245, 245, 245, 0.4)"}})):null,r.a.createElement(x.a,{style:{width:"100%"}},r.a.createElement(x.a,{style:e},r.a.createElement(D,{marks:this.props.marks,seekSecond:this.seekSecond,playing:this.state.playing,playerReady:this.state.playerReady,duration:this.state.duration,currentSecond:this.state.currentSecond,currentTime:this.state.currentTime,playSave:this.playSave,stopSave:this.stopSave,rangeSave:this.rangeSave,rangeMarkSave:this.rangeMarkSave,insideMark:this.state.insideMark,volume:this.state.volume,volumeSave:this.volumeSave}))))))}}]),a}(r.a.Component),Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(W,{dispatch:this.props.dispatch,url:this.props.url,marks:this.props.marks})}}]),a}(r.a.Component);var G=Object(m.b)((function(e){return Object(l.a)({},e)}))(Y),$=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;if(Object(c.a)(this,a),n=t.call(this,e),window.initialState){var r=window.initialState;n.initialState=Object(l.a)({},r)}return n.store=n.configureStore(),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{store:this.store},r.a.createElement(v.a,{theme:f},r.a.createElement(G,{store:this.store})))}},{key:"configureStore",value:function(){return Object(u.c)(y,this.initialState)}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.f1e849d2.chunk.js.map