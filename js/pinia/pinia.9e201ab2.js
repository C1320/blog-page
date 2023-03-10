import{an as t,r as e,am as n,B as s,w as o,a0 as a,H as c,av as r,ac as i,j as u,g as f,e as p,n as l,a9 as h,b as d}from"../@vue/@vue.fe24ed5a.js";var y=!1;
/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let v;const b=t=>v=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var $,O;function g(){const s=t(!0),o=s.run((()=>e({})));let a=[],c=[];const r=n({install(t){b(r),r._a=t,t.provide(_,r),t.config.globalProperties.$pinia=r,c.forEach((t=>a.push(t))),c=[]},use(t){return this._a||y?a.push(t):c.push(t),this},_p:a,_a:null,_e:s,_s:new Map,state:o});return r}(O=$||($={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const m=()=>{};function P(t,e,n,s=m){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(o),o}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}function w(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];j(o)&&j(s)&&t.hasOwnProperty(n)&&!c(s)&&!r(s)?t[n]=w(o,s):t[n]=s}return t}const E=Symbol();const{assign:I}=Object;function M(s,u,f={},p,h,d){let y;const v=I({actions:{}},f),_={deep:!0};let O,g,M,x=n([]),A=n([]);const F=p.state.value[s];let k;function B(t){let e;O=g=!1,"function"==typeof t?(t(p.state.value[s]),e={type:$.patchFunction,storeId:s,events:M}):(w(p.state.value[s],t),e={type:$.patchObject,payload:t,storeId:s,events:M});const n=k=Symbol();l().then((()=>{k===n&&(O=!0)})),g=!0,S(x,e,p.state.value[s])}d||F||(p.state.value[s]={}),e({});const H=m;function J(t,e){return function(){b(p);const n=Array.from(arguments),o=[],a=[];let c;S(A,{args:n,name:t,store:q,after:function(t){o.push(t)},onError:function(t){a.push(t)}});try{c=e.apply(this&&this.$id===s?this:q,n)}catch(r){throw S(a,r),r}return c instanceof Promise?c.then((t=>(S(o,t),t))).catch((t=>(S(a,t),Promise.reject(t)))):(S(o,c),c)}}const N={_p:p,$id:s,$onAction:P.bind(null,A),$patch:B,$reset:H,$subscribe(t,e={}){const n=P(x,t,e.detached,(()=>a())),a=y.run((()=>o((()=>p.state.value[s]),(n=>{("sync"===e.flush?g:O)&&t({storeId:s,type:$.direct,events:M},n)}),I({},_,e))));return n},$dispose:function(){y.stop(),x=[],A=[],p._s.delete(s)}},q=a(N);p._s.set(s,q);const z=p._e.run((()=>(y=t(),y.run((()=>u())))));for(const t in z){const e=z[t];if(c(e)&&(!c(D=e)||!D.effect)||r(e))d||(!F||j(C=e)&&C.hasOwnProperty(E)||(c(e)?e.value=F[t]:w(e,F[t])),p.state.value[s][t]=e);else if("function"==typeof e){const n=J(t,e);z[t]=n,v.actions[t]=e}}var C,D;return I(q,z),I(i(q),z),Object.defineProperty(q,"$state",{get:()=>p.state.value[s],set:t=>{B((e=>{I(e,t)}))}}),p._p.forEach((t=>{I(q,y.run((()=>t({store:q,app:p._a,pinia:p,options:v}))))})),F&&d&&f.hydrate&&f.hydrate(q.$state,F),O=!0,g=!0,q}function x(t,e,o){let a,c;const r="function"==typeof e;function i(t,o){const i=u();(t=t||i&&s(_,null))&&b(t),(t=v)._s.has(a)||(r?M(a,e,c,t):function(t,e,s,o){const{state:a,actions:c,getters:r}=e,i=s.state.value[t];let u;u=M(t,(function(){i||(s.state.value[t]=a?a():{});const e=h(s.state.value[t]);return I(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(d((()=>{b(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0),u.$reset=function(){const t=a?a():{};this.$patch((e=>{I(e,t)}))}}(a,c,t));return t._s.get(a)}return"string"==typeof t?(a=t,c=r?o:e):(c=t,a=t.id),i.$id=a,i}export{g as c,x as d};
