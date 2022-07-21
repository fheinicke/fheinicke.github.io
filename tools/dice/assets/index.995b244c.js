const qe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))i(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerpolicy&&(o.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?o.credentials="include":_.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(_){if(_.ep)return;_.ep=!0;const o=n(_);fetch(_.href,o)}};qe();var _e,M,Te,R,ye,re={},He=[],Be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function J(t,e){for(var n in e)t[n]=e[n];return t}function Oe(t){var e=t.parentNode;e&&e.removeChild(t)}function Ae(t,e,n){var i,_,o,s={};for(o in e)o=="key"?i=e[o]:o=="ref"?_=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?_e.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return X(t,s,i,_,null)}function X(t,e,n,i,_){var o={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++Te:_};return _==null&&M.vnode!=null&&M.vnode(o),o}function se(t){return t.children}function ee(t,e){this.props=t,this.context=e}function j(t,e){if(e==null)return t.__?j(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?j(t):null}function Ce(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Ce(t)}}function ge(t){(!t.__d&&(t.__d=!0)&&R.push(t)&&!oe.__r++||ye!==M.debounceRendering)&&((ye=M.debounceRendering)||setTimeout)(oe)}function oe(){for(var t;oe.__r=R.length;)t=R.sort(function(e,n){return e.__v.__b-n.__v.__b}),R=[],t.some(function(e){var n,i,_,o,s,v;e.__d&&(s=(o=(n=e).__v).__e,(v=n.__P)&&(i=[],(_=J({},o)).__v=o.__v+1,he(v,o,_,n.__n,v.ownerSVGElement!==void 0,o.__h!=null?[s]:null,i,s==null?j(o):s,o.__h),Ne(i,o),o.__e!=s&&Ce(o)))})}function We(t,e,n,i,_,o,s,v,f,p){var r,d,h,l,m,H,b,x=i&&i.__k||He,A=x.length;for(n.__k=[],r=0;r<e.length;r++)if((l=n.__k[r]=(l=e[r])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?X(null,l,null,null,l):Array.isArray(l)?X(se,{children:l},null,null,null):l.__b>0?X(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(h=x[r])===null||h&&l.key==h.key&&l.type===h.type)x[r]=void 0;else for(d=0;d<A;d++){if((h=x[d])&&l.key==h.key&&l.type===h.type){x[d]=void 0;break}h=null}he(t,l,h=h||re,_,o,s,v,f,p),m=l.__e,(d=l.ref)&&h.ref!=d&&(b||(b=[]),h.ref&&b.push(h.ref,null,l),b.push(d,l.__c||m,l)),m!=null?(H==null&&(H=m),typeof l.type=="function"&&l.__k===h.__k?l.__d=f=Ee(l,f,t):f=Fe(t,l,h,x,m,f),typeof n.type=="function"&&(n.__d=f)):f&&h.__e==f&&f.parentNode!=t&&(f=j(h))}for(n.__e=H,r=A;r--;)x[r]!=null&&(typeof n.type=="function"&&x[r].__e!=null&&x[r].__e==n.__d&&(n.__d=j(i,r+1)),Ue(x[r],x[r]));if(b)for(r=0;r<b.length;r++)Pe(b[r],b[++r],b[++r])}function Ee(t,e,n){for(var i,_=t.__k,o=0;_&&o<_.length;o++)(i=_[o])&&(i.__=t,e=typeof i.type=="function"?Ee(i,e,n):Fe(n,i,i,_,i.__e,e));return e}function Fe(t,e,n,i,_,o){var s,v,f;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(n==null||_!=o||_.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(_),s=null;else{for(v=o,f=0;(v=v.nextSibling)&&f<i.length;f+=2)if(v==_)break e;t.insertBefore(_,o),s=o}return s!==void 0?s:_.nextSibling}function Re(t,e,n,i,_){var o;for(o in n)o==="children"||o==="key"||o in e||ie(t,o,null,n[o],i);for(o in e)_&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||ie(t,o,e[o],n[o],i)}function Me(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Be.test(e)?n:n+"px"}function ie(t,e,n,i,_){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||Me(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||Me(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?i||t.addEventListener(e,o?ke:$e,o):t.removeEventListener(e,o?ke:$e,o);else if(e!=="dangerouslySetInnerHTML"){if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function $e(t){this.l[t.type+!1](M.event?M.event(t):t)}function ke(t){this.l[t.type+!0](M.event?M.event(t):t)}function he(t,e,n,i,_,o,s,v,f){var p,r,d,h,l,m,H,b,x,A,E,Z,F,Y=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,v=e.__e=n.__e,e.__h=null,o=[v]),(p=M.__b)&&p(e);try{e:if(typeof Y=="function"){if(b=e.props,x=(p=Y.contextType)&&i[p.__c],A=p?x?x.props.value:p.__:i,n.__c?H=(r=e.__c=n.__c).__=r.__E:("prototype"in Y&&Y.prototype.render?e.__c=r=new Y(b,A):(e.__c=r=new ee(b,A),r.constructor=Y,r.render=Ge),x&&x.sub(r),r.props=b,r.state||(r.state={}),r.context=A,r.__n=i,d=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),Y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=J({},r.__s)),J(r.__s,Y.getDerivedStateFromProps(b,r.__s))),h=r.props,l=r.state,d)Y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(Y.getDerivedStateFromProps==null&&b!==h&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(b,A),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(b,r.__s,A)===!1||e.__v===n.__v){r.props=b,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(P){P&&(P.__=e)}),r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(b,r.__s,A),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(h,l,m)})}if(r.context=A,r.props=b,r.__v=e,r.__P=t,E=M.__r,Z=0,"prototype"in Y&&Y.prototype.render)r.state=r.__s,r.__d=!1,E&&E(e),p=r.render(r.props,r.state,r.context);else do r.__d=!1,E&&E(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Z<25);r.state=r.__s,r.getChildContext!=null&&(i=J(J({},i),r.getChildContext())),d||r.getSnapshotBeforeUpdate==null||(m=r.getSnapshotBeforeUpdate(h,l)),F=p!=null&&p.type===se&&p.key==null?p.props.children:p,We(t,Array.isArray(F)?F:[F],e,n,i,_,o,s,v,f),r.base=e.__e,e.__h=null,r.__h.length&&s.push(r),H&&(r.__E=r.__=null),r.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ze(n.__e,e,n,i,_,o,s,f);(p=M.diffed)&&p(e)}catch(P){e.__v=null,(f||o!=null)&&(e.__e=v,e.__h=!!f,o[o.indexOf(v)]=null),M.__e(P,e,n)}}function Ne(t,e){M.__c&&M.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){M.__e(i,n.__v)}})}function Ze(t,e,n,i,_,o,s,v){var f,p,r,d=n.props,h=e.props,l=e.type,m=0;if(l==="svg"&&(_=!0),o!=null){for(;m<o.length;m++)if((f=o[m])&&"setAttribute"in f==!!l&&(l?f.localName===l:f.nodeType===3)){t=f,o[m]=null;break}}if(t==null){if(l===null)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,h.is&&h),o=null,v=!1}if(l===null)d===h||v&&t.data===h||(t.data=h);else{if(o=o&&_e.call(t.childNodes),p=(d=n.props||re).dangerouslySetInnerHTML,r=h.dangerouslySetInnerHTML,!v){if(o!=null)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(Re(t,h,d,_,v),r)e.__k=[];else if(m=e.props.children,We(t,Array.isArray(m)?m:[m],e,n,i,_&&l!=="foreignObject",o,s,o?o[0]:n.__k&&j(n,0),v),o!=null)for(m=o.length;m--;)o[m]!=null&&Oe(o[m]);v||("value"in h&&(m=h.value)!==void 0&&(m!==t.value||l==="progress"&&!m||l==="option"&&m!==d.value)&&ie(t,"value",m,d.value,!1),"checked"in h&&(m=h.checked)!==void 0&&m!==t.checked&&ie(t,"checked",m,d.checked,!1))}return t}function Pe(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){M.__e(i,n)}}function Ue(t,e,n){var i,_;if(M.unmount&&M.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Pe(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){M.__e(o,e)}i.base=i.__P=null}if(i=t.__k)for(_=0;_<i.length;_++)i[_]&&Ue(i[_],e,typeof t.type!="function");n||t.__e==null||Oe(t.__e),t.__e=t.__d=void 0}function Ge(t,e,n){return this.constructor(t,n)}function Ke(t,e,n){var i,_,o;M.__&&M.__(t,e),_=(i=typeof n=="function")?null:n&&n.__k||e.__k,o=[],he(e,t=(!i&&n||e).__k=Ae(se,null,[t]),_||re,re,e.ownerSVGElement!==void 0,!i&&n?[n]:_?null:e.firstChild?_e.call(e.childNodes):null,o,!i&&n?n:_?_.__e:e.firstChild,i),Ne(o,t)}_e=He.slice,M={__e:function(t,e,n,i){for(var _,o,s;e=e.__;)if((_=e.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(t)),s=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,i||{}),s=_.__d),s)return _.__E=_}catch(v){t=v}throw t}},Te=0,ee.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=J({},this.state),typeof t=="function"&&(t=t(J({},n),this.props)),t&&J(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),ge(this))},ee.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ge(this))},ee.prototype.render=se,R=[],oe.__r=0;var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pe={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ue,function(){var n=1e3,i=6e4,_=36e5,o="millisecond",s="second",v="minute",f="hour",p="day",r="week",d="month",h="quarter",l="year",m="date",H="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},E=function(k,c,u){var y=String(k);return!y||y.length>=c?k:""+Array(c+1-y.length).join(u)+k},Z={s:E,z:function(k){var c=-k.utcOffset(),u=Math.abs(c),y=Math.floor(u/60),a=u%60;return(c<=0?"+":"-")+E(y,2,"0")+":"+E(a,2,"0")},m:function k(c,u){if(c.date()<u.date())return-k(u,c);var y=12*(u.year()-c.year())+(u.month()-c.month()),a=c.clone().add(y,d),$=u-a<0,g=c.clone().add(y+($?-1:1),d);return+(-(y+(u-a)/($?a-g:g-a))||0)},a:function(k){return k<0?Math.ceil(k)||0:Math.floor(k)},p:function(k){return{M:d,y:l,w:r,d:p,D:m,h:f,m:v,s,ms:o,Q:h}[k]||String(k||"").toLowerCase().replace(/s$/,"")},u:function(k){return k===void 0}},F="en",Y={};Y[F]=A;var P=function(k){return k instanceof K},G=function k(c,u,y){var a;if(!c)return F;if(typeof c=="string"){var $=c.toLowerCase();Y[$]&&(a=$),u&&(Y[$]=u,a=$);var g=c.split("-");if(!a&&g.length>1)return k(g[0])}else{var D=c.name;Y[D]=c,a=D}return!y&&a&&(F=a),a||!y&&F},T=function(k,c){if(P(k))return k.clone();var u=typeof c=="object"?c:{};return u.date=k,u.args=arguments,new K(u)},S=Z;S.l=G,S.i=P,S.w=function(k,c){return T(k,{locale:c.$L,utc:c.$u,x:c.$x,$offset:c.$offset})};var K=function(){function k(u){this.$L=G(u.locale,null,!0),this.parse(u)}var c=k.prototype;return c.parse=function(u){this.$d=function(y){var a=y.date,$=y.utc;if(a===null)return new Date(NaN);if(S.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var g=a.match(b);if(g){var D=g[2]-1||0,L=(g[7]||"0").substring(0,3);return $?new Date(Date.UTC(g[1],D,g[3]||1,g[4]||0,g[5]||0,g[6]||0,L)):new Date(g[1],D,g[3]||1,g[4]||0,g[5]||0,g[6]||0,L)}}return new Date(a)}(u),this.$x=u.x||{},this.init()},c.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},c.$utils=function(){return S},c.isValid=function(){return this.$d.toString()!==H},c.isSame=function(u,y){var a=T(u);return this.startOf(y)<=a&&a<=this.endOf(y)},c.isAfter=function(u,y){return T(u)<this.startOf(y)},c.isBefore=function(u,y){return this.endOf(y)<T(u)},c.$g=function(u,y,a){return S.u(u)?this[y]:this.set(a,u)},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(u,y){var a=this,$=!!S.u(y)||y,g=S.p(u),D=function(z,C){var I=S.w(a.$u?Date.UTC(a.$y,C,z):new Date(a.$y,C,z),a);return $?I:I.endOf(p)},L=function(z,C){return S.w(a.toDate()[z].apply(a.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(C)),a)},w=this.$W,O=this.$M,U=this.$D,N="set"+(this.$u?"UTC":"");switch(g){case l:return $?D(1,0):D(31,11);case d:return $?D(1,O):D(0,O+1);case r:var V=this.$locale().weekStart||0,q=(w<V?w+7:w)-V;return D($?U-q:U+(6-q),O);case p:case m:return L(N+"Hours",0);case f:return L(N+"Minutes",1);case v:return L(N+"Seconds",2);case s:return L(N+"Milliseconds",3);default:return this.clone()}},c.endOf=function(u){return this.startOf(u,!1)},c.$set=function(u,y){var a,$=S.p(u),g="set"+(this.$u?"UTC":""),D=(a={},a[p]=g+"Date",a[m]=g+"Date",a[d]=g+"Month",a[l]=g+"FullYear",a[f]=g+"Hours",a[v]=g+"Minutes",a[s]=g+"Seconds",a[o]=g+"Milliseconds",a)[$],L=$===p?this.$D+(y-this.$W):y;if($===d||$===l){var w=this.clone().set(m,1);w.$d[D](L),w.init(),this.$d=w.set(m,Math.min(this.$D,w.daysInMonth())).$d}else D&&this.$d[D](L);return this.init(),this},c.set=function(u,y){return this.clone().$set(u,y)},c.get=function(u){return this[S.p(u)]()},c.add=function(u,y){var a,$=this;u=Number(u);var g=S.p(y),D=function(O){var U=T($);return S.w(U.date(U.date()+Math.round(O*u)),$)};if(g===d)return this.set(d,this.$M+u);if(g===l)return this.set(l,this.$y+u);if(g===p)return D(1);if(g===r)return D(7);var L=(a={},a[v]=i,a[f]=_,a[s]=n,a)[g]||1,w=this.$d.getTime()+u*L;return S.w(w,this)},c.subtract=function(u,y){return this.add(-1*u,y)},c.format=function(u){var y=this,a=this.$locale();if(!this.isValid())return a.invalidDate||H;var $=u||"YYYY-MM-DDTHH:mm:ssZ",g=S.z(this),D=this.$H,L=this.$m,w=this.$M,O=a.weekdays,U=a.months,N=function(C,I,ae,Q){return C&&(C[I]||C(y,$))||ae[I].slice(0,Q)},V=function(C){return S.s(D%12||12,C,"0")},q=a.meridiem||function(C,I,ae){var Q=C<12?"AM":"PM";return ae?Q.toLowerCase():Q},z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:w+1,MM:S.s(w+1,2,"0"),MMM:N(a.monthsShort,w,U,3),MMMM:N(U,w),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:N(a.weekdaysMin,this.$W,O,2),ddd:N(a.weekdaysShort,this.$W,O,3),dddd:O[this.$W],H:String(D),HH:S.s(D,2,"0"),h:V(1),hh:V(2),a:q(D,L,!0),A:q(D,L,!1),m:String(L),mm:S.s(L,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:g};return $.replace(x,function(C,I){return I||z[C]||g.replace(":","")})},c.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},c.diff=function(u,y,a){var $,g=S.p(y),D=T(u),L=(D.utcOffset()-this.utcOffset())*i,w=this-D,O=S.m(this,D);return O=($={},$[l]=O/12,$[d]=O,$[h]=O/3,$[r]=(w-L)/6048e5,$[p]=(w-L)/864e5,$[f]=w/_,$[v]=w/i,$[s]=w/n,$)[g]||w,a?O:S.a(O)},c.daysInMonth=function(){return this.endOf(d).$D},c.$locale=function(){return Y[this.$L]},c.locale=function(u,y){if(!u)return this.$L;var a=this.clone(),$=G(u,y,!0);return $&&(a.$L=$),a},c.clone=function(){return S.w(this.$d,this)},c.toDate=function(){return new Date(this.valueOf())},c.toJSON=function(){return this.isValid()?this.toISOString():null},c.toISOString=function(){return this.$d.toISOString()},c.toString=function(){return this.$d.toUTCString()},k}(),me=K.prototype;return T.prototype=me,[["$ms",o],["$s",s],["$m",v],["$H",f],["$W",p],["$M",d],["$y",l],["$D",m]].forEach(function(k){me[k[1]]=function(c){return this.$g(c,k[0],k[1])}}),T.extend=function(k,c){return k.$i||(k(c,K,T),k.$i=!0),T},T.locale=G,T.isDayjs=P,T.unix=function(k){return T(1e3*k)},T.en=Y[F],T.Ls=Y,T.p={},T})})(pe);const ve=pe.exports;var Qe={exports:{}};(function(t,e){(function(n,i){t.exports=i(pe.exports)})(ue,function(n){function i(f){return f&&typeof f=="object"&&"default"in f?f:{default:f}}var _=i(n),o={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function s(f,p,r){var d=o[r];return Array.isArray(d)&&(d=d[p?0:1]),d.replace("%d",f)}var v={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),ordinal:function(f){return f+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return _.default.locale(v,null,!0),v})})(Qe);var Ie={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ue,function(){var n="day";return function(i,_,o){var s=function(p){return p.add(4-p.isoWeekday(),n)},v=_.prototype;v.isoWeekYear=function(){return s(this).year()},v.isoWeek=function(p){if(!this.$utils().u(p))return this.add(7*(p-this.isoWeek()),n);var r,d,h,l,m=s(this),H=(r=this.isoWeekYear(),d=this.$u,h=(d?o.utc:o)().year(r).startOf("year"),l=4-h.isoWeekday(),h.isoWeekday()>4&&(l+=7),h.add(l,n));return m.diff(H,"week")+1},v.isoWeekday=function(p){return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)};var f=v.startOf;v.startOf=function(p,r){var d=this.$utils(),h=!!d.u(r)||r;return d.p(p)==="isoweek"?h?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):f.bind(this)(p,r)}}})})(Ie);const Xe=Ie.exports;var Je={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ue,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(i,_,o){var s=_.prototype,v=s.format;o.en.formats=n,s.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var p=this.$locale().formats,r=function(d,h){return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(l,m,H){var b=H&&H.toUpperCase();return m||h[H]||n[H]||h[b].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(x,A,E){return A||E.slice(1)})})}(f,p===void 0?{}:p);return v.call(this,r)}}})})(Je);const et=Je.exports;var ze,W,le,De,fe=0,je=[],te=[],Se=M.__b,be=M.__r,we=M.diffed,xe=M.__c,Ye=M.unmount;function tt(t,e){M.__h&&M.__h(W,t,fe||e),fe=0;var n=W.__H||(W.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:te}),n.__[t]}function ce(t){return fe=1,nt(Ve,t)}function nt(t,e,n){var i=tt(ze++,2);return i.t=t,i.__c||(i.__=[n?n(e):Ve(void 0,e),function(_){var o=i.t(i.__[0],_);i.__[0]!==o&&(i.__=[o,i.__[1]],i.__c.setState({}))}],i.__c=W),i.__}function rt(){for(var t;t=je.shift();)if(t.__P)try{t.__H.__h.forEach(ne),t.__H.__h.forEach(de),t.__H.__h=[]}catch(e){t.__H.__h=[],M.__e(e,t.__v)}}M.__b=function(t){W=null,Se&&Se(t)},M.__r=function(t){be&&be(t),ze=0;var e=(W=t.__c).__H;e&&(le===W?(e.__h=[],W.__h=[],e.__.forEach(function(n){n.__V=te,n.u=void 0})):(e.__h.forEach(ne),e.__h.forEach(de),e.__h=[])),le=W},M.diffed=function(t){we&&we(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(je.push(e)!==1&&De===M.requestAnimationFrame||((De=M.requestAnimationFrame)||function(n){var i,_=function(){clearTimeout(o),Le&&cancelAnimationFrame(i),setTimeout(n)},o=setTimeout(_,100);Le&&(i=requestAnimationFrame(_))})(rt)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==te&&(n.__=n.__V),n.u=void 0,n.__V=te})),le=W=null},M.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ne),n.__h=n.__h.filter(function(i){return!i.__||de(i)})}catch(i){e.some(function(_){_.__h&&(_.__h=[])}),e=[],M.__e(i,n.__v)}}),xe&&xe(t,e)},M.unmount=function(t){Ye&&Ye(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{ne(i)}catch(_){e=_}}),e&&M.__e(e,n.__v))};var Le=typeof requestAnimationFrame=="function";function ne(t){var e=W,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),W=e}function de(t){var e=W;t.__c=t.__(),W=e}function Ve(t,e){return typeof e=="function"?e(t):e}var ot=0;function B(t,e,n,i,_){var o,s,v={};for(s in e)s=="ref"?o=e[s]:v[s]=e[s];var f={type:t,props:v,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ot,__source:_,__self:i};if(typeof t=="function"&&(o=t.defaultProps))for(s in o)v[s]===void 0&&(v[s]=o[s]);return M.vnode&&M.vnode(f),f}function it(){const[t,e]=ce(null),[n,i]=ce(!1),[_,o]=ce(""),s=r=>{const d=r.currentTarget.value?parseInt(r.currentTarget.value,10):null;e(d),p()},v=r=>{const d=r.currentTarget.checked;i(d),p()},f=()=>Math.floor(Math.random()*6+1),p=()=>{const r=[];if(t)for(let d=0;d<t;d++){let h=f();if(r.push(h),n)for(;h===6;)h=f(),r.push(h)}o(r.join(", "))};return B("div",{className:"app",children:["TODO Mobile",B("br",{}),B("input",{type:"number",min:0,inputMode:"numeric",pattern:"[0-9]*",onInput:s,placeholder:"Anzahl W\xFCrfel"}),B("input",{type:"checkbox",onInput:v}),B("div",{children:_})]})}ve.locale("de");ve.extend(Xe);ve.extend(et);Ke(Ae(it,{}),document.getElementById("app"));
