(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d3f78da"],{"1dd0":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const i=Object(a["withScopeId"])("data-v-0c158c3e");Object(a["pushScopeId"])("data-v-0c158c3e");const c=Object(a["createVNode"])("div",{class:"Placeholder"},null,-1),n={key:0,class:"video_box"},r={class:"video_comment_height"},s=Object(a["createVNode"])("div",{class:"title_box"},[Object(a["createVNode"])("span",null,"评论"),Object(a["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"3",viewBox:"0 0 10 3"},[Object(a["createVNode"])("line",{id:"直线_22","data-name":"直线 22",x2:"7",transform:"translate(1.5 1.5)",fill:"none",stroke:"#5ab4f0","stroke-linecap":"round","stroke-width":"3"})])],-1),l={style:{position:"fixed",bottom:"0",width:"100%"}},d={style:{position:"fixed",top:"3.5rem",left:"1rem","z-index":"9"}};Object(a["popScopeId"])();const m=i((e,t,o,i,m,u)=>{const h=Object(a["resolveComponent"])("VideoPlay"),v=Object(a["resolveComponent"])("UserCommentCurrency"),p=Object(a["resolveComponent"])("Reply"),b=Object(a["resolveComponent"])("Back");return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:["MV_detailed",["night"==e.$store.state.theme?"MV_detailed_night":""]]},[c,""!=m.videos_data?(Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[null!=m.videos_data.video_id?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:0,"Video-data-video-id":m.VideoDataVideoId,"Video-data":m.videos_data},null,8,["Video-data-video-id","Video-data"])):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",r,[s,null!=m.user_comments?(Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:0,"Comment-data":m.user_comments},null,8,["Comment-data"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])(p,{comment_key:m.comment_key,onPush_user_comment:u.push_user_comment},null,8,["comment_key","onPush_user_comment"])]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])(b,{color:1})])],2)});var u=o("daad");const h=Object(a["withScopeId"])("data-v-1ea99a50");Object(a["pushScopeId"])("data-v-1ea99a50");const v={key:0,class:"UserComment"},p={class:"comment_user"},b={class:"user_material"},_={class:"user_name"},j={class:"response_time"},O=Object(a["createVNode"])("div",{class:"praised"},[Object(a["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8rem",height:"0.8rem",viewBox:"0 0 15.765 16"},[Object(a["createVNode"])("path",{id:"Icon_feather-thumbs-up","data-name":"Icon feather-thumbs-up",d:"M12,8.25v-3A2.25,2.25,0,0,0,9.75,3l-3,6.75V18h8.46a1.5,1.5,0,0,0,1.5-1.275l1.035-6.75a1.5,1.5,0,0,0-1.5-1.725ZM6.75,18H4.5A1.5,1.5,0,0,1,3,16.5V11.25a1.5,1.5,0,0,1,1.5-1.5H6.75",transform:"translate(-2.5 -2.5)",fill:"none",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1"})])],-1),g={class:"comment_content"},k=Object(a["createVNode"])("div",{class:"li_bottom"},null,-1);Object(a["popScopeId"])();const f=h((e,t,o,i,c,n)=>o.CommentData.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",v,[Object(a["createVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.CommentData,t=>(Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["user_comment_data",["night"==e.$store.state.theme?"user_comment_data_night":""]],key:t},[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("img",{src:t.comment_user_image,class:"user_img"},null,8,["src"]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("span",_,Object(a["toDisplayString"])(t.comment_user_name),1),Object(a["createVNode"])("span",j,Object(a["toDisplayString"])(n.dateFormat(t.comment_user_time)),1)]),O]),Object(a["createVNode"])("div",g,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(t.comment_user_content),1)]),k],2))),128))])])):Object(a["createCommentVNode"])("",!0));var V=o("db04"),w={name:"UserComment",props:{CommentData:{type:Array,default(){return[]}}},data(){return{user_img:"imgg.jpg",Single_review:[],comment_time:""}},methods:{dateFormat(e){let t=new Date(e),o=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;let i=t.getDate();i=i<10?"0"+i:i;let c=t.getHours();c=c<10?"0"+c:c;let n=t.getMinutes();n=n<10?"0"+n:n;let r=t.getSeconds();return r=r<10?"0"+r:r,o+"-"+a+"-"+i+" "+c+":"+n+":"+r}},mounted(){let e=this.$route.params.id;console.log(e),Object(V["a"])(this.$store.state.api_url+"comment/music?id="+e).then(e=>{this.Single_review.splice(0,this.Single_review.length);for(let t=0;t<e.comments.length;t++)this.Single_review.push(e.comments[t]);console.log(this.Single_review)}).catch(e=>{console.log(e)})}};o("6f84");w.render=f,w.__scopeId="data-v-1ea99a50";var F=w,N=o("2f3e"),y=o("2466"),B={name:"MVDetailed",components:{VideoPlay:y["a"],UserCommentCurrency:F,Reply:N["a"],Back:u["a"]},data(){return{videos_data:[],user_comments:[],VideoDataVideoId:"",comment_key:[],account_name:"",account_img:""}},methods:{kkp(){console.log(this.user_comments)},push_user_comment(e){let t=new Date;this.user_comments.unshift({comment_user_image:this.account_img,comment_user_name:this.account_name,comment_user_time:t,comment_user_content:e})}},mounted(){let e=this.$route.params.id;Promise.all([Object(V["a"])(this.$store.state.api_url+"mv/detail?mvid="+e),Object(V["a"])(this.$store.state.api_url+"comment/mv?id="+e),Object(V["a"])(this.$store.state.api_url+"user/account",{cookie:this.$store.state.user_cookie})]).then(e=>{console.log(e[1].comments),this.videos_data={video_name:e[0].data.name,video_id:e[0].data.id,video_image:e[0].data.cover,artists_id:e[0].data.artistId,artists_name:e[0].data.artistName};for(let t=0;t<e[1].comments.length;t++)this.user_comments.push({comment_user_content:e[1].comments[t].content,comment_user_name:e[1].comments[t].user.nickname,comment_user_image:e[1].comments[t].user.avatarUrl,comment_user_time:e[1].comments[t].time,comment_user_id:e[1].comments[t].user.userId,comment_content_id:e[1].comments[t].commentId});this.account_name=e[2].profile.nickname,this.account_img=e[2].profile.avatarUrl}).catch(e=>{console.log(e)}),this.comment_key={type:1,id:e}}};o("96b3");B.render=m,B.__scopeId="data-v-0c158c3e";t["default"]=B},2466:function(e,t,o){"use strict";var a=o("7a23");const i=Object(a["withScopeId"])("data-v-41bc435e");Object(a["pushScopeId"])("data-v-41bc435e");const c={key:0,class:"mv"},n={key:0,class:"video_img"},r={xmlns:"http://www.w3.org/2000/svg",width:"18.002",height:"22.501",viewBox:"0 0 18.002 22.501"},s=Object(a["createVNode"])("path",{id:"Icon_ionic-ios-play","data-name":"Icon ionic-ios-play",d:"M9,7.334V28.666a.549.549,0,0,0,.823.506l16.91-10.666a.6.6,0,0,0,0-1.005L9.823,6.834A.544.544,0,0,0,9,7.334Z",transform:"translate(-9 -6.751)",fill:"#fff"},null,-1),l={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"22.5",viewBox:"0 0 18 22.5"},d=Object(a["createVNode"])("g",{id:"Icon_ionic-ios-pause","data-name":"Icon ionic-ios-pause",transform:"translate(-9 -6.75)"},[Object(a["createVNode"])("path",{id:"路径_142","data-name":"路径 142",d:"M14.055,29.25H9.57A.566.566,0,0,1,9,28.688V7.313a.566.566,0,0,1,.57-.562h4.486a.566.566,0,0,1,.57.563V28.688A.566.566,0,0,1,14.055,29.25Z",fill:"#fff"}),Object(a["createVNode"])("path",{id:"路径_143","data-name":"路径 143",d:"M26.43,29.25H21.945a.566.566,0,0,1-.57-.562V7.313a.566.566,0,0,1,.57-.562H26.43a.566.566,0,0,1,.57.563V28.688A.566.566,0,0,1,26.43,29.25Z",fill:"#fff"})],-1),m={key:1,class:"buffer_ico"},u=Object(a["createVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",class:"buffer_ico_svg"},[Object(a["createVNode"])("path",{d:"M24,4V8",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M34,6.679l-2,3.464",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M41.321,14l-3.464,2",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M44,24H40",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M41.321,34l-3.464-2",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M34,41.321l-2-3.464",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M24,44V40",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M14,41.321l2-3.464",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M6.679,34l3.464-2",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M4,24H8",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M6.679,14l3.464,2",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"}),Object(a["createVNode"])("path",{d:"M14,6.679l2,3.464",fill:"none",stroke:"#FFFFFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4"})],-1),h={key:1,class:"video_picture_box"},v={class:"kzq"},p={xmlns:"http://www.w3.org/2000/svg",width:"18.002",height:"22.501",viewBox:"0 0 18.002 22.501"},b=Object(a["createVNode"])("path",{id:"Icon_ionic-ios-play","data-name":"Icon ionic-ios-play",d:"M9,7.334V28.666a.549.549,0,0,0,.823.506l16.91-10.666a.6.6,0,0,0,0-1.005L9.823,6.834A.544.544,0,0,0,9,7.334Z",transform:"translate(-9 -6.751)",fill:"#fff"},null,-1),_={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"22.5",viewBox:"0 0 18 22.5"},j=Object(a["createVNode"])("g",{id:"Icon_ionic-ios-pause","data-name":"Icon ionic-ios-pause",transform:"translate(-9 -6.75)"},[Object(a["createVNode"])("path",{id:"路径_142","data-name":"路径 142",d:"M14.055,29.25H9.57A.566.566,0,0,1,9,28.688V7.313a.566.566,0,0,1,.57-.562h4.486a.566.566,0,0,1,.57.563V28.688A.566.566,0,0,1,14.055,29.25Z",fill:"#fff"}),Object(a["createVNode"])("path",{id:"路径_143","data-name":"路径 143",d:"M26.43,29.25H21.945a.566.566,0,0,1-.57-.562V7.313a.566.566,0,0,1,.57-.562H26.43a.566.566,0,0,1,.57.563V28.688A.566.566,0,0,1,26.43,29.25Z",fill:"#fff"})],-1),O={class:"mv_progress"},g={style:{"margin-left":"0.5rem"}},k=Object(a["createVNode"])("span",null,"/",-1),f=Object(a["createVNode"])("path",{id:"Icon_ionic-ios-resize","data-name":"Icon ionic-ios-resize",d:"M29.412,5.625h-7.77a.965.965,0,0,0-.963.963V6.6a.965.965,0,0,0,.963.963h5.379L7.566,27.021V21.642a.965.965,0,0,0-.963-.963H6.588a.965.965,0,0,0-.963.963v7.77a.965.965,0,0,0,.963.963h7.77a.965.965,0,0,0,.963-.963V29.4a.965.965,0,0,0-.963-.963H8.979L28.434,8.979v5.379a.965.965,0,0,0,.963.963h.014a.965.965,0,0,0,.963-.963V6.588A.96.96,0,0,0,29.412,5.625Z",transform:"translate(30.375 -5.625) rotate(90)",fill:"#fff"},null,-1),V={class:"video_kzq"},w=Object(a["createVNode"])("div",{class:"custom-button"},null,-1);Object(a["popScopeId"])();const F=i((e,t,o,F,N,y)=>{const B=Object(a["resolveComponent"])("van-slider");return null!=o.VideoData?(Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[N.buffer_cover?(Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])("img",{src:o.VideoData.video_image},null,8,["src"]),N.buffer?(Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:0,class:"play_btn_box2",onClick:t[1]||(t[1]=e=>y.get_video_url(o.VideoData.video_id))},[Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])("svg",r,[s],512)),[[a["vShow"],!N.video.playing]]),Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])("svg",l,[d],512)),[[a["vShow"],N.video.playing]])])):Object(a["createCommentVNode"])("",!0),N.buffer?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",m,[u]))])):Object(a["createCommentVNode"])("",!0),""!=N.video_url?(Object(a["openBlock"])(),Object(a["createBlock"])("div",h,[null!=N.video_url?(Object(a["openBlock"])(),Object(a["createBlock"])("video",{key:0,ref:"video",onClick:t[2]||(t[2]=(...e)=>y.iSselect&&y.iSselect(...e)),class:"videos",poster:o.VideoData.video_image,onPlay:t[3]||(t[3]=(...e)=>y.onPlay&&y.onPlay(...e)),onError:t[4]||(t[4]=(...e)=>y.onError&&y.onError(...e)),onWaiting:t[5]||(t[5]=(...e)=>y.onWaiting&&y.onWaiting(...e)),onPause:t[6]||(t[6]=(...e)=>y.onPause&&y.onPause(...e)),onTimeupdate:t[7]||(t[7]=(...e)=>y.onTimeupdate&&y.onTimeupdate(...e)),onLoadedmetadata:t[8]||(t[8]=(...e)=>y.onLoadedmetadata&&y.onLoadedmetadata(...e))},[Object(a["createVNode"])("source",{src:N.video_url},null,8,["src"])],40,["poster"])):Object(a["createCommentVNode"])("",!0),Object(a["withDirectives"])(Object(a["createVNode"])("div",v,[Object(a["createVNode"])("div",{class:"play_btn_box",onClick:t[9]||(t[9]=(...e)=>y.startPlayOrPause&&y.startPlayOrPause(...e))},[Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])("svg",p,[b],512)),[[a["vShow"],!N.video.playing]]),Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])("svg",_,[j],512)),[[a["vShow"],N.video.playing]])]),Object(a["createVNode"])("div",O,[Object(a["createVNode"])("span",g,Object(a["toDisplayString"])(N.real_time),1),k,Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(N.TotalDuration),1),(Object(a["openBlock"])(),Object(a["createBlock"])("svg",{onClick:t[10]||(t[10]=(...e)=>y.Full_Screen&&y.Full_Screen(...e)),xmlns:"http://www.w3.org/2000/svg",width:"1.25rem",height:"1.25rem",viewBox:"0 0 24.75 24.75"},[f]))]),Object(a["createVNode"])("div",V,[Object(a["createVNode"])(B,{modelValue:N.video.sliderTime,"onUpdate:modelValue":t[11]||(t[11]=e=>N.video.sliderTime=e),"active-color":"#409eff",onChange:y.changeCurrentTime},{button:i(()=>[w]),_:1},8,["modelValue","onChange"])]),Object(a["createVNode"])("div",{class:"mv_progress_kzq",onClick:t[12]||(t[12]=(...e)=>y.iSselect&&y.iSselect(...e))})],512),[[a["vShow"],!N.video_show]])])):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)});var N=o("db04");function y(e){var t,o;return e/60<10?(t=Math.floor(e/60%60),e%60<10?(o=Math.floor(e%60),e="0"+t+":0"+o):(o=Math.floor(e%60),e="0"+t+":"+o)):(t=Math.floor(e/60%60),e%60<10?(o=Math.floor(e%60),e=t+":0"+o):(o=Math.floor(e%60),e=t+":"+o)),e}function B(e){var t=typeof e;if("number"===t||"string"===t){e=parseInt(e);var o=Math.floor(e/3600);e-=3600*o;var a=Math.floor(e/60);return e-=60*a,o+":"+("0"+a).slice(-2)+":"+("0"+e).slice(-2)}return"0:00:00"}var C={name:"VideoPlay",props:{VideoData:{type:Object,default:function(){return{}}}},data(){return{video_show:!1,TotalDuration:"00:00",video:{currentTime:0,maxTime:0,playing:!1,muted:!1,speed:1,waiting:!0,preload:"auto"},video_url:"",buffer:!0,buffer_cover:!0,real_time:"00:00"}},methods:{kkl(){console.log(this.video_url)},get_video_url(e){Object(N["a"])(this.$store.state.api_url+"mv/url?id="+e).then(e=>{console.log(e),this.video_url=e.data.url}).catch(t=>{console.log(t),Object(N["a"])(this.$store.state.api_url+"video/url?id="+e).then(e=>{console.log(e),this.video_url=e.urls[0].url}).catch(e=>{console.log(e)})}),this.buffer=!1,setTimeout(()=>{""!=this.video_url&&(this.buffer_cover=!1),this.video.playing=!0,this.$refs.video.play()},800)},iSselect(){return this.video_show=!this.video_show,this.video_show},formatProcessToolTip(e=0){return e=parseInt(this.video.maxTime/100*e),B(e)},changeCurrentTime(e){this.$refs.video.currentTime=parseInt(this.video.maxTime/100*e)},startPlayOrPause(){return this.video.playing?this.pausePlay():this.startPlay()},startPlay(){this.VideoData.video_id.length<20?Object(N["a"])(this.$store.state.api_url+"mv/url?id="+this.VideoData.video_id).then(e=>{console.log(e),this.video_url=e.data.url}).catch(e=>{console.log(e)}):Object(N["a"])(this.$store.state.api_url+"video/url?id="+this.VideoData.video_id).then(e=>{console.log(e),this.video_url=e.urls[0].url}).catch(e=>{console.log(e)}),this.video.playing=!0,this.$refs.video.play()},pausePlay(){this.video.playing=!1,this.$refs.video.pause()},onPlay(e){console.log(e),this.video.playing=!0,this.video.loading=!1;let t=e.target,o=document.getElementsByTagName("video");[...o].forEach(e=>{e!==t&&e.pause()})},onPause(){this.video.playing=!1},onError(){this.video.waiting=!0},onWaiting(e){console.log(e)},onTimeupdate(e){this.video.currentTime=e.target.currentTime,this.video.sliderTime=parseInt(this.video.currentTime/this.video.maxTime*100),this.real_time=y(this.video.sliderTime),console.log(y(this.video.sliderTime))},onLoadedmetadata(e){console.log(e),this.video.waiting=!1,this.video.maxTime=e.target.duration,this.TotalDuration=y(parseInt(e.target.duration))},Full_Screen(){console.log(this.VideoData)}},mounted(){this.VideoData.video_id.length<20?Object(N["a"])(this.$store.state.api_url+"mv/url?id="+this.VideoData.video_id).then(e=>{console.log(e),this.$refs.video.src=e.data.url}).catch(e=>{console.log(e)}):Object(N["a"])(this.$store.state.api_url+"video/url?id="+this.VideoData.video_id).then(e=>{console.log(e),this.$refs.video.src=e.urls[0].url}).catch(e=>{console.log(e)})}};o("a734");C.render=F,C.__scopeId="data-v-41bc435e";t["a"]=C},"560c":function(e,t,o){},"6f84":function(e,t,o){"use strict";o("c3af")},"96b3":function(e,t,o){"use strict";o("e55a")},a734:function(e,t,o){"use strict";o("560c")},c3af:function(e,t,o){},e55a:function(e,t,o){}}]);
//# sourceMappingURL=chunk-5d3f78da.6f51916a.js.map