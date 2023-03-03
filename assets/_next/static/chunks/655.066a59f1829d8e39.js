"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{9655:function(e,t,n){n.r(t),n.d(t,{default:function(){return ew}});var r,l,o,a,s,i,u,c,f,d=n(5893),p=n(7294);function x(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,x),l}var m=((r=m||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),h=((l=h||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function v({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:a}){let s=y(t,e);if(o)return g(s,n,r,a);let i=null!=l?l:0;if(2&i){let{static:u=!1,...c}=s;if(u)return g(c,n,r,a)}if(1&i){let{unmount:f=!0,...d}=s;return x(f?0:1,{0:()=>null,1:()=>g({...d,hidden:!0,style:{display:"none"}},n,r,a)})}return g(s,n,r,a)}function g(e,t={},n,r){let{as:l=n,children:o,refName:a="ref",...s}=F(e,["unmount","static"]),i=void 0!==e.ref?{[a]:e.ref}:{},u="function"==typeof o?o(t):o;s.className&&"function"==typeof s.className&&(s.className=s.className(t));let c={};if(t){let f=!1,d=[];for(let[x,m]of Object.entries(t))"boolean"==typeof m&&(f=!0),!0===m&&d.push(x);f&&(c["data-headlessui-state"]=d.join(" "))}if(l===p.Fragment&&Object.keys(w(s)).length>0){if(!(0,p.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,p.cloneElement)(u,Object.assign({},y(u.props,w(F(s,["ref"]))),c,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(u.ref,i.ref)))}return(0,p.createElement)(l,Object.assign({},F(s,["ref"]),l!==p.Fragment&&i,l!==p.Fragment&&c),u)}function y(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&"function"==typeof r[l]?(null!=n[l]||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let o in n)Object.assign(t,{[o](e,...t){for(let r of n[o]){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function b(e){var t;return Object.assign((0,p.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function w(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function F(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let E="undefined"==typeof window||"undefined"==typeof document,j=E?p.useEffect:p.useLayoutEffect;function T(e){let t=(0,p.useRef)(e);return j(()=>{t.current=e},[e]),t}let P=function(e){let t=T(e);return p.useCallback((...e)=>t.current(...e),[t])},O=Symbol();function C(...e){let t=(0,p.useRef)(e);(0,p.useEffect)(()=>{t.current=e},[e]);let n=P(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[O]))?void 0:n}let S={serverHandoffComplete:!1};function k(){let[e,t]=(0,p.useState)(S.serverHandoffComplete);return(0,p.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,p.useEffect)(()=>{!1===S.serverHandoffComplete&&(S.serverHandoffComplete=!0)},[]),e}let D=0;function N(){return++D}let R=null!=(f=p.useId)?f:function(){let e=k(),[t,n]=p.useState(e?N:null);return j(()=>{null===t&&n(N())},[t]),null!=t?""+t:void 0};var A=((o=A||{}).Space=" ",o.Enter="Enter",o.Escape="Escape",o.Backspace="Backspace",o.Delete="Delete",o.ArrowLeft="ArrowLeft",o.ArrowUp="ArrowUp",o.ArrowRight="ArrowRight",o.ArrowDown="ArrowDown",o.Home="Home",o.End="End",o.PageUp="PageUp",o.PageDown="PageDown",o.Tab="Tab",o);let L=(0,p.createContext)(null);L.displayName="OpenClosedContext";var I=((a=I||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function H(){return(0,p.useContext)(L)}function B({value:e,children:t}){return p.createElement(L.Provider,{value:e},t)}function M(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var q=((s=q||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),U=((i=U||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let $={0:e=>({...e,disclosureState:x(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},K=(0,p.createContext)(null);function W(e){let t=(0,p.useContext)(K);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}K.displayName="DisclosureContext";let _=(0,p.createContext)(null);_.displayName="DisclosureAPIContext";let V=(0,p.createContext)(null);function z(e,t){return x(t.type,$,e,t)}V.displayName="DisclosurePanelContext";let Q=p.Fragment,Y=b(function(e,t){let{defaultOpen:n=!1,...r}=e,l=`headlessui-disclosure-button-${R()}`,o=`headlessui-disclosure-panel-${R()}`,a=(0,p.useRef)(null),s=C(t,function(e,t=!0){return Object.assign(e,{[O]:t})}(e=>{a.current=e},void 0===e.as||e.as===p.Fragment)),i=(0,p.useRef)(null),u=(0,p.useRef)(null),c=(0,p.useReducer)(z,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:u,panelRef:i,buttonId:l,panelId:o}),[{disclosureState:f},d]=c;(0,p.useEffect)(()=>d({type:2,buttonId:l}),[l,d]),(0,p.useEffect)(()=>d({type:3,panelId:o}),[o,d]);let m=P(e=>{d({type:1});let t=E?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document;if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(l):t.getElementById(l);null==n||n.focus()}),h=(0,p.useMemo)(()=>({close:m}),[m]),g=(0,p.useMemo)(()=>({open:0===f,close:m}),[f,m]);return p.createElement(K.Provider,{value:c},p.createElement(_.Provider,{value:h},p.createElement(B,{value:x(f,{0:I.Open,1:I.Closed})},v({ourProps:{ref:s},theirProps:r,slot:g,defaultTag:Q,name:"Disclosure"}))))}),G=b(function(e,t){let[n,r]=W("Disclosure.Button"),l=(0,p.useContext)(V),o=null!==l&&l===n.panelId,a=(0,p.useRef)(null),s=C(a,t,o?null:n.buttonRef),i=P(e=>{var t;if(o){if(1===n.disclosureState)return;switch(e.key){case A.Space:case A.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case A.Space:case A.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),u=P(e=>{e.key===A.Space&&e.preventDefault()}),c=P(t=>{var l;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(o?(r({type:0}),null==(l=n.buttonRef.current)||l.focus()):r({type:0}))}),f=(0,p.useMemo)(()=>({open:0===n.disclosureState}),[n]),d=function(e,t){let[n,r]=(0,p.useState)(()=>M(e));return j(()=>{r(M(e))},[e.type,e.as]),j(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,a);return v({ourProps:o?{ref:s,type:d,onKeyDown:i,onClick:c}:{ref:s,id:n.buttonId,type:d,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:i,onKeyUp:u,onClick:c},theirProps:e,slot:f,defaultTag:"button",name:"Disclosure.Button"})}),J=m.RenderStrategy|m.Static,X=Object.assign(Y,{Button:G,Panel:b(function(e,t){let[n,r]=W("Disclosure.Panel"),{close:l}=function e(t){let n=(0,p.useContext)(_);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),o=C(t,n.panelRef,e=>{r({type:e?4:5})}),a=H(),s=null!==a?a===I.Open:0===n.disclosureState,i=(0,p.useMemo)(()=>({open:0===n.disclosureState,close:l}),[n,l]),u={ref:o,id:n.panelId};return p.createElement(V.Provider,{value:n.panelId},v({ourProps:u,theirProps:e,slot:i,defaultTag:"div",features:J,visible:s,name:"Disclosure.Panel"}))})});function Z(){let e=(0,p.useRef)(!1);return j(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ee(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,l)=>(e.addEventListener(t,r,l),n.add(()=>e.removeEventListener(t,r,l))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){var t;let r={current:!0};return t=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e})),n.add(()=>{r.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}function et(e,...t){e&&t.length>0&&e.classList.add(...t)}function en(e,...t){e&&t.length>0&&e.classList.remove(...t)}var er=((u=er||{}).Ended="ended",u.Cancelled="cancelled",u);function el(){let[e]=(0,p.useState)(ee);return(0,p.useEffect)(()=>()=>e.dispose(),[e]),e}function eo(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let ea=(0,p.createContext)(null);ea.displayName="TransitionContext";var es=((c=es||{}).Visible="visible",c.Hidden="hidden",c);let ei=(0,p.createContext)(null);function eu(e){return"children"in e?eu(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function ec(e,t){let n=T(e),r=(0,p.useRef)([]),l=Z(),o=el(),a=P((e,t=h.Hidden)=>{let a=r.current.findIndex(({el:t})=>t===e);-1!==a&&(x(t,{[h.Unmount](){r.current.splice(a,1)},[h.Hidden](){r.current[a].state="hidden"}}),o.microTask(()=>{var e;!eu(r)&&l.current&&(null==(e=n.current)||e.call(n))}))}),s=P(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>a(e,h.Unmount)}),i=(0,p.useRef)([]),u=(0,p.useRef)(Promise.resolve()),c=(0,p.useRef)({enter:[],leave:[],idle:[]}),f=P((e,n,r)=>{i.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{i.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(c.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?u.current=u.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),d=P((e,t,n)=>{Promise.all(c.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=i.current.shift())||e()}).then(()=>n(t))});return(0,p.useMemo)(()=>({children:r,register:s,unregister:a,onStart:f,onStop:d,wait:u,chains:c}),[s,a,r,f,d,c,u])}function ef(){}ei.displayName="NestingContext";let ed=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ep(e){var t;let n={};for(let r of ed)n[r]=null!=(t=e[r])?t:ef;return n}let ex=m.RenderStrategy,em=b(function(e,t){var n;let r,{beforeEnter:l,afterEnter:o,beforeLeave:a,afterLeave:s,enter:i,enterFrom:u,enterTo:c,entered:f,leave:d,leaveFrom:m,leaveTo:g,...y}=e,b=(0,p.useRef)(null),w=C(b,t),F=y.unmount?h.Unmount:h.Hidden,{show:E,appear:O,initial:S}=function(){let e=(0,p.useContext)(ea);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[D,N]=(0,p.useState)(E?"visible":"hidden"),R=function(){let e=(0,p.useContext)(ei);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:A,unregister:L}=R,H=(0,p.useRef)(null);(0,p.useEffect)(()=>A(b),[A,b]),(0,p.useEffect)(()=>{if(F===h.Hidden&&b.current){if(E&&"visible"!==D){N("visible");return}return x(D,{hidden:()=>L(b),visible:()=>A(b)})}},[D,b,A,L,E,F]);let M=T({enter:eo(i),enterFrom:eo(u),enterTo:eo(c),entered:eo(f),leave:eo(d),leaveFrom:eo(m),leaveTo:eo(g)}),q=(n={beforeEnter:l,afterEnter:o,beforeLeave:a,afterLeave:s},r=(0,p.useRef)(ep(n)),(0,p.useEffect)(()=>{r.current=ep(n)},[n]),r),U=k();(0,p.useEffect)(()=>{if(U&&"visible"===D&&null===b.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[b,D,U]);let $=S&&!O,K=!U||$||H.current===E?"idle":E?"enter":"leave",W=P(e=>x(e,{enter:()=>q.current.beforeEnter(),leave:()=>q.current.beforeLeave(),idle(){}})),_=P(e=>x(e,{enter:()=>q.current.afterEnter(),leave:()=>q.current.afterLeave(),idle(){}})),V=ec(()=>{N("hidden"),L(b)},R);return function({container:e,direction:t,classes:n,onStart:r,onStop:l}){let o=Z(),a=el(),s=T(t);j(()=>{let t=ee();a.add(t.dispose);let i=e.current;if(i&&"idle"!==s.current&&o.current){var u,c,f,d;let p,m,h,v,g,y,b;return t.dispose(),r.current(s.current),t.add((u=i,c=n.current,f="enter"===s.current,d=e=>{t.dispose(),x(e,{[er.Ended](){l.current(s.current)},[er.Cancelled](){}})},m=f?"enter":"leave",h=ee(),v=void 0!==d?(p={called:!1},(...e)=>{if(!p.called)return p.called=!0,d(...e)}):()=>{},"enter"===m&&(u.removeAttribute("hidden"),u.style.display=""),g=x(m,{enter:()=>c.enter,leave:()=>c.leave}),y=x(m,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),b=x(m,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),en(u,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),et(u,...g,...b),h.nextFrame(()=>{en(u,...b),et(u,...y),function(e,t){let n=ee();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[o,a]=[r,l].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(o+a!==0){let s=[];s.push(n.addEventListener(e,"transitionrun",r=>{r.target===r.currentTarget&&(s.splice(0).forEach(e=>e()),s.push(n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t("ended"),s.splice(0).forEach(e=>e()))}),n.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t("cancelled"),s.splice(0).forEach(e=>e()))})))}))}else t("ended");n.add(()=>t("cancelled")),n.dispose}(u,e=>("ended"===e&&(en(u,...g),et(u,...c.entered)),v(e)))}),h.dispose)),t.dispose}},[t])}({container:b,classes:M,direction:K,onStart:T(e=>{V.onStart(b,e,W)}),onStop:T(e=>{V.onStop(b,e,_),"leave"!==e||eu(V)||(N("hidden"),L(b))})}),(0,p.useEffect)(()=>{$&&(F===h.Hidden?H.current=null:H.current=E)},[E,$,D]),p.createElement(ei.Provider,{value:V},p.createElement(B,{value:x(D,{visible:I.Open,hidden:I.Closed})},v({ourProps:{ref:w},theirProps:y,defaultTag:"div",features:ex,visible:"visible"===D,name:"Transition.Child"})))}),eh=b(function(e,t){let{show:n,appear:r=!1,unmount:l,...o}=e,a=(0,p.useRef)(null),s=C(a,t);k();let i=H();if(void 0===n&&null!==i&&(n=x(i,{[I.Open]:!0,[I.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=(0,p.useState)(n?"visible":"hidden"),f=ec(()=>{c("hidden")}),[d,m]=(0,p.useState)(!0),h=(0,p.useRef)([n]);j(()=>{!1!==d&&h.current[h.current.length-1]!==n&&(h.current.push(n),m(!1))},[h,n]);let g=(0,p.useMemo)(()=>({show:n,appear:r,initial:d}),[n,r,d]);(0,p.useEffect)(()=>{if(n)c("visible");else if(eu(f)){let e=a.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&c("hidden")}else c("hidden")},[n,f]);let y={unmount:l};return p.createElement(ei.Provider,{value:f},p.createElement(ea.Provider,{value:g},v({ourProps:{...y,as:p.Fragment,children:p.createElement(em,{ref:s,...y,...o})},theirProps:{},defaultTag:p.Fragment,features:ex,visible:"visible"===u,name:"Transition"})))}),ev=b(function(e,t){let n=null!==(0,p.useContext)(ea),r=null!==H();return p.createElement(p.Fragment,null,!n&&r?p.createElement(eh,{ref:t,...e}):p.createElement(em,{ref:t,...e}))}),eg=Object.assign(eh,{Child:ev,Root:eh}),ey=p.forwardRef(function({title:e,titleId:t,...n},r){return p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,p.createElement("path",{fillRule:"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",clipRule:"evenodd"}))}),eb=()=>{let[e,t]=(0,p.useState)(!1);return(0,d.jsx)("div",{children:(0,d.jsx)("section",{children:(0,d.jsxs)("div",{className:"mx-auto h-auto w-[343px] lg:w-[1200px] rounded-[32px] overflow-hidden bg-white backdrop-blur-[13.5px] bg-opacity-[15%] ",children:[(0,d.jsx)(X,{className:"",children(n){let{open:r}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X.Button,{onClick:()=>t(!e),className:r?"flex w-full justify-between  bg-[#1A2426]  text-left text-sm  text-[#FFFFFF]  text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]":"flex w-full justify-between   text-left text-sm  text-[#FFFFFF] text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]",children:[(0,d.jsx)("span",{className:r?"text-[#4DDFD4] text-[16px] font-[700] font-Outfit  lg:text-[24px]":"text-white text-[16px] font-[700] font-Outfit lg:text-[24px]",children:"How much does your service cost?"}),(0,d.jsx)(ey,{className:"".concat(r?"rotate-180 transform":""," h-[20px] w-[20px] text-white ")})]}),(0,d.jsx)(eg,{enter:"transition duration-300 ease-in-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,d.jsx)(X.Panel,{className:"text-white/60 text-[14px] lg:text-[16px] px-4 pt-4 text-sm bg-[#1A2426] font-Outfit font-[400] pl-[24px] lg:pl-[40px] pb-[35px]",children:"Our service costs $50 per month. If you cancel during a billing period, your account will de-activate at the end of that period."})})]})}}),(0,d.jsx)(X,{as:"div",defaultOpen:!0,className:"transition-all duration-500 ease-in-out",children(n){let{open:r}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X.Button,{onClick:()=>t(!e),className:r?"flex w-full justify-between  bg-[#1A2426]  text-left text-sm  text-[#FFFFFF]  text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]":"flex w-full justify-between   text-left text-sm  text-[#FFFFFF] text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]",children:[(0,d.jsx)("span",{className:r?"text-[#4DDFD4] text-[16px] font-[700] font-Outfit  lg:text-[24px]":"text-white text-[16px] font-[700] font-Outfit lg:text-[24px]",children:"Where does Kona data come from?"}),(0,d.jsx)(ey,{className:"".concat(r?"rotate-180 transform":""," h-[20px] w-[20px] text-white")})]}),(0,d.jsx)(eg,{enter:"transition duration-300 ease-in-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,d.jsx)(X.Panel,{className:"text-white/60 text-[14px] lg:text-[16px] px-4 pt-4 text-sm bg-[#1A2426] font-Outfit font-[400] pl-[24px] lg:pl-[40px] pb-[35px]",children:"We crawl millions of sources as well as partner and license data from outside 3rd parties."})})]})}}),(0,d.jsx)(X,{as:"div",className:"",children(n){let{open:r}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X.Button,{onClick:()=>t(!e),className:r?"flex w-full justify-between  bg-[#1A2426]  text-left text-sm  text-[#FFFFFF]  text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]":"flex w-full justify-between   text-left text-sm  text-[#FFFFFF] text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]",children:[(0,d.jsx)("span",{className:r?"text-[#4DDFD4] text-[16px] font-[700] font-Outfit  lg:text-[24px]":"text-white text-[16px] font-[700] font-Outfit lg:text-[24px]",children:"Who should try Kona Equity Premium?"}),(0,d.jsx)(ey,{className:"".concat(r?"rotate-180 transform":""," h-[20px] w-[20px] text-white")})]}),(0,d.jsx)(eg,{enter:"transition duration-300 ease-in-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,d.jsx)(X.Panel,{className:"text-white/60 text-[14px] lg:text-[16px] px-4 pt-4 text-sm bg-[#1A2426] font-Outfit font-[400] pl-[24px] lg:pl-[40px] pb-[35px]",children:"Kona Equity is used most commonly by sales representatives, business owners, marketers, private equity firms, corporate development teams, and investment bankers."})})]})}}),(0,d.jsx)(X,{as:"div",className:"",children(n){let{open:r}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X.Button,{onClick:()=>t(!e),className:r?"flex w-full justify-between  bg-[#1A2426]  text-left text-sm  text-[#FFFFFF]  text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]":"flex w-full justify-between   text-left text-sm  text-[#FFFFFF] text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]",children:[(0,d.jsx)("span",{className:r?"text-[#4DDFD4] text-[16px] font-[700] font-Outfit  lg:text-[24px]":"text-white text-[16px] font-[700] font-Outfit lg:text-[24px]",children:"How do I cancel my subscription?"}),(0,d.jsx)(ey,{className:"".concat(r?"rotate-180 transform":""," h-[20px] w-[20px] text-white")})]}),(0,d.jsx)(eg,{enter:"transition duration-300 ease-in-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,d.jsx)(X.Panel,{className:"text-white/60 text-[14px] lg:text-[16px] px-4 pt-4 text-sm bg-[#1A2426] font-Outfit font-[400] pl-[24px] lg:pl-[40px] pb-[35px]",children:"If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked."})})]})}}),(0,d.jsx)(X,{as:"div",className:"",children(n){let{open:r}=n;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X.Button,{onClick:()=>t(!e),className:r?"flex w-full justify-between  bg-[#1A2426]  text-left text-sm  text-[#FFFFFF]  text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]":"flex w-full justify-between   text-left text-sm  text-[#FFFFFF] text-[24px] font-[700] font-Outfit  focus:outline-none focus-visible:ring px-[33px] py-[35px]",children:[(0,d.jsx)("span",{className:r?"text-[#4DDFD4] text-[16px] font-[700] font-Outfit  lg:text-[24px]":"text-white text-[16px] font-[700] font-Outfit lg:text-[24px]",children:"Can I expense my Premium membership?"}),(0,d.jsx)(ey,{className:"".concat(r?"rotate-180 transform":""," h-[20px] w-[20px] text-white")})]}),(0,d.jsx)(eg,{enter:"transition duration-300 ease-in-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,d.jsx)(X.Panel,{anima:!0,className:"text-white/60 text-[16px] px-4 pt-4 pb-[35px] text-sm bg-[#1A2426] pl-[40px] font-Outfit font-[400]",children:"Many employers find Kona Equity Premium so valuable that they’ll pay for their employees’ memberships. After your purchase, you can ask us to email you the receipt."})})]})}})]})})})};var ew=eb}}]);