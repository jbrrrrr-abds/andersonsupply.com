(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{9664:function(e,t){var o,i,n,r,l,s,a,c,u,d,p,f,h,g,x,y,m,v;c=function(){return"undefined"!=typeof window},u=function(){return o||c()&&(o=window.gsap)&&o.registerPlugin&&o},d=function(e){return"string"==typeof e},p=function(e){return"function"==typeof e},f=function(e,t){var o="x"===t?"Width":"Height",i="scroll"+o,s="client"+o;return e===n||e===r||e===l?Math.max(r[i],l[i])-(n["inner"+o]||r[s]||l[s]):e[i]-e["offset"+o]},h=function(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===n&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=r[o]?r:l),function(){return e[o]}},g=function(e,t,o,i){if(p(e)&&(e=e(t,o,i)),"object"!=typeof e)return d(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var n,r={};for(n in e)r[n]="onAutoKill"!==n&&p(e[n])?e[n](t,o,i):e[n];return r},x=function(e,t){if(!(e=s(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),i=!t||t===n||t===l,a=i?{top:r.clientTop-(n.pageYOffset||r.scrollTop||l.scrollTop||0),left:r.clientLeft-(n.pageXOffset||r.scrollLeft||l.scrollLeft||0)}:t.getBoundingClientRect(),c={x:o.left-a.left,y:o.top-a.top};return!i&&t&&(c.x+=h(t,"x")(),c.y+=h(t,"y")()),c},y=function(e,t,o,i,n){return isNaN(e)||"object"==typeof e?d(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+i-n:"max"===e?f(t,o)-n:Math.min(f(t,o),x(e,t)[o]-n):parseFloat(e)-n},m=function(){o=u(),c()&&o&&document.body&&(n=window,l=document.body,r=document.documentElement,s=o.utils.toArray,o.config({autoKillThreshold:7}),a=o.config(),i=1)},(v={version:"3.6.1",name:"scrollTo",rawVars:1,register:function(e){o=e,m()},init:function(e,t,o,r,l){i||m(),this.isWin=e===n,this.target=e,this.tween=o,t=g(t,r,e,l),this.vars=t,this.autoKill=!!t.autoKill,this.getX=h(e,"x"),this.getY=h(e,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=t.x?(this.add(this,"x",this.x,y(t.x,e,"x",this.x,t.offsetX||0),r,l),this._props.push("scrollTo_x")):this.skipX=1,null!=t.y?(this.add(this,"y",this.y,y(t.y,e,"y",this.y,t.offsetY||0),r,l),this._props.push("scrollTo_y")):this.skipY=1},render:function(e,t){for(var o,i,r,l,s,c=t._pt,u=t.target,d=t.tween,p=t.autoKill,h=t.xPrev,g=t.yPrev,x=t.isWin;c;)c.r(e,c.d),c=c._next;o=x||!t.skipX?t.getX():h,r=(i=x||!t.skipY?t.getY():g)-g,l=o-h,s=a.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),p&&(!t.skipX&&(l>s||l<-s)&&o<f(u,"x")&&(t.skipX=1),!t.skipY&&(r>s||r<-s)&&i<f(u,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(d.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(d,t.vars.onAutoKillParams||[]))),x?n.scrollTo(t.skipX?o:t.x,t.skipY?i:t.y):(t.skipY||(u.scrollTop=t.y),t.skipX||(u.scrollLeft=t.x)),t.xPrev=t.x,t.yPrev=t.y},kill:function(e){var t="scrollTo"===e;(t||"scrollTo_x"===e)&&(this.skipX=1),(t||"scrollTo_y"===e)&&(this.skipY=1)}}).max=f,v.getOffset=x,v.buildGetter=h,u()&&o.registerPlugin(v),t.ScrollToPlugin=v,t.default=v,Object.defineProperty(t,"__esModule",{value:!0})},9041:function(e,t,o){"use strict";o.d(t,{Z:function(){return P}});var i=o(5893),n=o(7294),r=o(9521),l=o(5697),s=o.n(l),a=o(6038),c=o(9664),u=o.n(c),d=o(8770),p=o(6729),f=o(3776),h=o(131);let g=r.ZP.video.withConfig({componentId:"sc-7e96d357-0"})(["display:block;width:100%;height:100%;object-fit:cover;"]),x=e=>{let{src:t,style:o,className:r,...l}=e,s=(0,n.useRef)(!1),[a,c]=(0,h.YD)({rootMargin:"100%",triggerOnce:!0}),[u,d,p]=(0,h.YD)(),f=e=>{if(!e)return;let t=e.play();void 0!==t&&t.then(()=>{}).catch(()=>{})},x=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&(e.pause(),t&&(e.currentTime=0))};return(0,n.useEffect)(()=>{let e=null==p?void 0:p.target;e&&(c&&!s.current&&(e.load(),s.current=!0),d?f(e):x(e))},[d,c,p]),(0,i.jsx)("div",{style:o,className:r,ref:a,children:(0,i.jsx)(g,{playsInline:!0,preload:"none",ref:u,...l,children:(0,i.jsx)("source",{src:t})})})};x.propTypes={src:s().string.isRequired,className:s().string,style:s().object};let y=r.ZP.div.withConfig({componentId:"sc-e4ba1c60-0"})(["position:relative;text-align:center;font-size:0;"]),m=(0,r.ZP)(x).withConfig({componentId:"sc-e4ba1c60-1"})(["position:absolute;top:1px;left:1px;height:calc(100% - 2px);width:calc(100% - 2px);.ReactModal__Body--open &{opacity:0;}"]),v=r.ZP.svg.withConfig({componentId:"sc-e4ba1c60-2"})(["position:relative;font-family:var(--secondary-font);text-transform:uppercase;font-size:",";line-height:0.93;.filler{visibility:hidden;}"],(0,d.hO)(400)),b=r.ZP.rect.withConfig({componentId:"sc-e4ba1c60-3"})(["fill:var(--brand-white);"]),w=r.ZP.rect.withConfig({componentId:"sc-e4ba1c60-4"})(["fill:#000;"]),k=(0,r.ZP)(f.Z).withConfig({componentId:"sc-e4ba1c60-5"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]),j=e=>{let{topText:t,bottomText:o,video:r,videoId:l}=e,{toggleModal:s}=(0,p.dd)(),c=(0,n.useRef)(),d=(0,n.useRef)(),f=(0,n.useRef)(),h=(0,n.useCallback)(e=>{if(!e)return;let t=e.querySelector(".filler"),o=e.querySelector(".the-text"),i=e.querySelector(".black-box"),n=e.querySelector(".play-button");c.current=e,a.ZP.set([t,o,i],{autoAlpha:1,transformOrigin:"50% 50%"}),a.ZP.to(o,{x:1}),f.current=a.ZP.timeline({paused:!0,onComplete:()=>{d.current.progress(0).pause()}}).to(i,{opacity:1,duration:2}).fromTo(i,{opacity:1},{opacity:0,duration:1}),d.current=a.ZP.timeline({paused:!0,onComplete:()=>{s(l),f.current.play(0)}}).fromTo(o,{scaleY:1,scaleX:1},{scaleY:.333,scaleX:1.333,duration:.333},0).fromTo(n,{opacity:1,scale:1},{opacity:0,scale:.5},0).fromTo([t,i],{scaleY:0,scaleX:.5},{ease:"circ.inOut",scaleY:1,scaleX:1,duration:.5},0).fromTo(i,{opacity:0},{opacity:1,duration:1},"-=.333")},[s,l]);return(0,n.useEffect)(()=>()=>{d.current&&d.current.kill(),f.current&&f.current.kill()},[]),(0,i.jsxs)(y,{ref:h,children:[(0,i.jsx)(m,{muted:!0,loop:!0,playsInline:!0,src:null==r?void 0:r.url}),(0,i.jsxs)(v,{viewBox:"0 0 1280 720",children:[(0,i.jsx)("g",{fillRule:"evenodd",children:(0,i.jsxs)("mask",{id:"text-mask-".concat(l),children:[(0,i.jsx)("rect",{fill:"#fff",x:"0",y:"0",width:"1280",height:"720"}),(0,i.jsx)("rect",{className:"filler",fill:"#000",x:"0",y:"0",width:"1280",height:"720"}),(0,i.jsxs)("g",{className:"the-text",children:[(0,i.jsx)("text",{fill:"#000",x:"640",y:"345",textAnchor:"middle",children:t}),(0,i.jsx)("text",{fill:"#000",x:"640",y:"335",textAnchor:"middle",dominantBaseline:"hanging",children:o})]})]})}),(0,i.jsx)(b,{mask:"url(#text-mask-".concat(l,")"),x:"0",y:"0",width:"1280",height:"720"}),(0,i.jsx)(w,{className:"black-box",x:"0",y:"0",width:"1280",height:"720",opacity:"0"})]}),l?(0,i.jsx)(k,{className:"play-button",onClick:()=>{d.current.play(0),a.ZP.registerPlugin(u()),a.ZP.to(window,{duration:.4,scrollTo:{y:c.current,offsetY:(window.innerHeight-c.current.getBoundingClientRect().height)/2,autoKill:!1}})},label:"Play video"}):null]})};j.propTypes={topText:s().string,bottomText:s().string,video:s().object,videoId:s().string};var P=j},6729:function(e,t,o){"use strict";o.d(t,{dd:function(){return d}});var i=o(5893),n=o(2818);o(7294);var r=o(3253),l=o.n(r),s=o(9521),a=o(8770),c=o(479),u=o(8406);let d=(0,n.Ue)(e=>({modalOpen:!1,modalData:null,toggleModal:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?e(e=>({modalOpen:e.modalOpen!==t&&t,modalData:o})):e({modalOpen:!1,modalData:o})}})),p=(0,s.ZP)(u.Z).withConfig({componentId:"sc-49c8ce16-0"})([""," "," background-color:var(--gold);font-size:1.5rem;line-height:44px;border-radius:50%;transition:all 0.3s;"],(0,a.dp)(44),(0,a.FK)("fixed",20,20,null,null));t.ZP=e=>{let{className:t,appElement:o="#__next",children:n,...r}=e,{modalOpen:s,toggleModal:a}=d();return l().setAppElement(o),(0,i.jsxs)(l(),{isOpen:!!s,onRequestClose:()=>{a()},overlayClassName:"Overlay",className:"Modal",portalClassName:t,...r,children:[(0,i.jsx)(p,{"aria-label":"close modal",onClick:()=>{a()},children:"\xd7"}),(0,i.jsx)(c.Z,{children:n})]})}},4738:function(e,t,o){"use strict";var i=o(5893);o(7294);var n=o(9521),r=o(6273);let l=n.ZP.div.withConfig({componentId:"sc-be36f191-0"})(["overflow:hidden;padding-bottom:56.25%;position:relative;height:0;iframe{height:100%;width:100%;max-height:90vh;","}"],(0,r.D)());t.Z=e=>{let{youTubeID:t}=e;return(0,i.jsx)(l,{children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?rel=0&autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},4363:function(e,t,o){"use strict";var i=o(9521),n=o(6729);let r=(0,i.F4)(["0%{background-color:rgba(0,0,0,0);}100%{background-color:rgba(0,0,0,.75);}"]),l=(0,i.ZP)(n.ZP).withConfig({componentId:"sc-eff68eaf-0"})([".Overlay{z-index:200;display:flex;justify-content:center;align-items:center;position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.75);animation:1.2s "," ease-in;}.Modal{position:relative;width:100%;border:0;outline:none;text-align:center;pointer-events:none;> div{pointer-events:auto;}}"],r);t.Z=l},3776:function(e,t,o){"use strict";var i=o(5893);o(7294);var n=o(9521),r=o(5697),l=o.n(r),s=o(6273),a=o(8406);let c=(0,n.ZP)(a.Z).withConfig({componentId:"sc-ead2f76-0"})(["position:relative;min-width:68px;min-height:68px;color:var(--brand-white);background-color:var(--gold);border-radius:50%;transition:color 300ms ease-in-out,background-color 300ms ease-in-out;svg{position:absolute;top:50%;left:50%;width:12px;height:14px;fill:currentColor;transform:translate(-50%,-50%);}",""],(0,s.M)("\n    color: var(--brand-black);\n    background-color: var(--brand-white);\n  ")),u=e=>{let{label:t,className:o,playing:n,...r}=e;return(0,i.jsx)(c,{"aria-label":t,className:o,"aria-pressed":n,...r,children:n?(0,i.jsx)("svg",{width:"13",height:"18",viewBox:"0 0 13 18",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M0 0h4v18H0V0zm9 0h4v18H9V0z",fill:"currentColor"})}):(0,i.jsxs)("svg",{width:"12",height:"14",viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("polygon",{points:"10 0 60 30 60 30 10 60"}),(0,i.jsx)("polygon",{points:"10 20 50 30 50 30 10 40"})]})})};u.propTypes={label:l().string,className:l().string,playing:l().bool},t.Z=u}}]);