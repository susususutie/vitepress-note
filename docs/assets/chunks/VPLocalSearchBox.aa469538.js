import{M as ge,d as Ge,s as q,l as Ye,k as qe,h as ae,w as De,q as ce,v as he,aj as Ze,ak as Xe,o as K,D as et,C as g,b as I,al as tt,am as rt,m as nt,c as J,n as Me,G as ie,R as Le,F as Ve,a as Z,t as X,an as at,S as it,U as ot,ao as Be,ap as ut,ai as lt,_ as st}from"./framework.a5fc2cbc.js";import{u as ct,c as Ie,a as ht,b as ft,w as dt,o as oe,d as vt,e as yt,f as pt}from"./theme.de2e7908.js";const mt={root:()=>ge(()=>import("./@localSearchIndexroot.91db289d.js"),[])};var B=function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B.apply(this,arguments)};function gt(a,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function u(c){try{s(n.next(c))}catch(v){o(v)}}function l(c){try{s(n.throw(c))}catch(v){o(v)}}function s(c){c.done?r(c.value):i(c.value).then(u,l)}s((n=n.apply(a,e||[])).next())})}function wt(a,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(s){return function(c){return l([s,c])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(t=0)),t;)try{if(n=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){t.label=s[1];break}if(s[0]===6&&t.label<r[1]){t.label=r[1],r=s;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(s);break}r[2]&&t.ops.pop(),t.trys.pop();continue}s=e.call(a,t)}catch(c){s=[6,c],i=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function C(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function O(a,e){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var n=t.call(a),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}var Ft="ENTRIES",Ne="KEYS",We="VALUES",T="",fe=function(){function a(e,t){var n=e._tree,i=Array.from(n.keys());this.set=e,this._type=t,this._path=i.length>0?[{node:n,keys:i}]:[]}return a.prototype.next=function(){var e=this.dive();return this.backtrack(),e},a.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=Y(this._path),t=e.node,n=e.keys;if(Y(n)===T)return{done:!1,value:this.result()};var i=t.get(Y(n));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()},a.prototype.backtrack=function(){if(this._path.length!==0){var e=Y(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},a.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return Y(t)}).filter(function(e){return e!==T}).join("")},a.prototype.value=function(){return Y(this._path).node.get(T)},a.prototype.result=function(){switch(this._type){case We:return this.value();case Ne:return this.key();default:return[this.key(),this.value()]}},a.prototype[Symbol.iterator]=function(){return this},a}(),Y=function(a){return a[a.length-1]},xt=function(a,e,t){var n=new Map;if(e===void 0)return n;for(var i=e.length+1,r=i+t,o=new Uint8Array(r*i).fill(t+1),u=0;u<i;++u)o[u]=u;for(var l=1;l<r;++l)o[l*i]=l;return $e(a,e,t,n,o,1,i,""),n},$e=function(a,e,t,n,i,r,o,u){var l,s,c=r*o;try{e:for(var v=C(a.keys()),h=v.next();!h.done;h=v.next()){var y=h.value;if(y===T){var p=i[c-1];p<=t&&n.set(u,[a.get(y),p])}else{for(var w=r,m=0;m<y.length;++m,++w){for(var x=y[m],b=o*w,F=b-o,A=i[b],D=Math.max(0,w-t-1),V=Math.min(o-1,w+t),k=D;k<V;++k){var z=x!==e[k],_=i[F+k]+ +z,M=i[F+k+1]+1,L=i[b+k]+1,E=i[b+k+1]=Math.min(_,M,L);E<A&&(A=E)}if(A>t)continue e}$e(a.get(y),e,t,n,i,w,o,u+y)}}}catch(f){l={error:f}}finally{try{h&&!h.done&&(s=v.return)&&s.call(v)}finally{if(l)throw l.error}}},de=function(){function a(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return a.prototype.atPrefix=function(e){var t,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=O(le(this._tree,e.slice(this._prefix.length)),2),r=i[0],o=i[1];if(r===void 0){var u=O(be(o),2),l=u[0],s=u[1];try{for(var c=C(l.keys()),v=c.next();!v.done;v=c.next()){var h=v.value;if(h!==T&&h.startsWith(s)){var y=new Map;return y.set(h.slice(s.length),l.get(h)),new a(y,e)}}}catch(p){t={error:p}}finally{try{v&&!v.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}return new a(r,e)},a.prototype.clear=function(){this._size=void 0,this._tree.clear()},a.prototype.delete=function(e){return this._size=void 0,bt(this._tree,e)},a.prototype.entries=function(){return new fe(this,Ft)},a.prototype.forEach=function(e){var t,n;try{for(var i=C(this),r=i.next();!r.done;r=i.next()){var o=O(r.value,2),u=o[0],l=o[1];e(u,l,this)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.fuzzyGet=function(e,t){return xt(this._tree,e,t)},a.prototype.get=function(e){var t=we(this._tree,e);return t!==void 0?t.get(T):void 0},a.prototype.has=function(e){var t=we(this._tree,e);return t!==void 0&&t.has(T)},a.prototype.keys=function(){return new fe(this,Ne)},a.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e);return n.set(T,t),this},Object.defineProperty(a.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),a.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e);return n.set(T,t(n.get(T))),this},a.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e),i=n.get(T);return i===void 0&&n.set(T,i=t()),i},a.prototype.values=function(){return new fe(this,We)},a.prototype[Symbol.iterator]=function(){return this.entries()},a.from=function(e){var t,n,i=new a;try{for(var r=C(e),o=r.next();!o.done;o=r.next()){var u=O(o.value,2),l=u[0],s=u[1];i.set(l,s)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},a.fromObject=function(e){return a.from(Object.entries(e))},a}(),le=function(a,e,t){var n,i;if(t===void 0&&(t=[]),e.length===0||a==null)return[a,t];try{for(var r=C(a.keys()),o=r.next();!o.done;o=r.next()){var u=o.value;if(u!==T&&e.startsWith(u))return t.push([a,u]),le(a.get(u),e.slice(u.length),t)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return t.push([a,e]),le(void 0,"",t)},we=function(a,e){var t,n;if(e.length===0||a==null)return a;try{for(var i=C(a.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;if(o!==T&&e.startsWith(o))return we(a.get(o),e.slice(o.length))}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},ve=function(a,e){var t,n,i=e.length;e:for(var r=0;a&&r<i;){try{for(var o=(t=void 0,C(a.keys())),u=o.next();!u.done;u=o.next()){var l=u.value;if(l!==T&&e[r]===l[0]){for(var s=Math.min(i-r,l.length),c=1;c<s&&e[r+c]===l[c];)++c;var v=a.get(l);if(c===l.length)a=v;else{var h=new Map;h.set(l.slice(c),v),a.set(e.slice(r,r+c),h),a.delete(l),a=h}r+=c;continue e}}}catch(p){t={error:p}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}var y=new Map;return a.set(e.slice(r),y),y}return a},bt=function(a,e){var t=O(le(a,e),2),n=t[0],i=t[1];if(n!==void 0){if(n.delete(T),n.size===0)He(i);else if(n.size===1){var r=O(n.entries().next().value,2),o=r[0],u=r[1];Ue(i,o,u)}}},He=function(a){if(a.length!==0){var e=O(be(a),2),t=e[0],n=e[1];if(t.delete(n),t.size===0)He(a.slice(0,-1));else if(t.size===1){var i=O(t.entries().next().value,2),r=i[0],o=i[1];r!==T&&Ue(a.slice(0,-1),r,o)}}},Ue=function(a,e,t){if(a.length!==0){var n=O(be(a),2),i=n[0],r=n[1];i.set(r+e,t),i.delete(r)}},be=function(a){return a[a.length-1]},ee,_e="or",Ke="and",_t="and_not",At=function(){function a(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?me:e.autoVacuum;this._options=B(B(B({},pe),e),{autoVacuum:t,searchOptions:B(B({},Oe),e.searchOptions||{}),autoSuggestOptions:B(B({},zt),e.autoSuggestOptions||{})}),this._index=new de,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=xe,this.addFields(this._options.fields)}return a.prototype.add=function(e){var t,n,i,r,o,u,l=this._options,s=l.extractField,c=l.tokenize,v=l.processTerm,h=l.fields,y=l.idField,p=s(e,y);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(y,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var w=this.addDocumentId(p);this.saveStoredFields(w,e);try{for(var m=C(h),x=m.next();!x.done;x=m.next()){var b=x.value,F=s(e,b);if(F!=null){var A=c(F.toString(),b),D=this._fieldIds[b],V=new Set(A).size;this.addFieldLength(w,D,this._documentCount-1,V);try{for(var k=(i=void 0,C(A)),z=k.next();!z.done;z=k.next()){var _=z.value,M=v(_,b);if(Array.isArray(M))try{for(var L=(o=void 0,C(M)),E=L.next();!E.done;E=L.next()){var f=E.value;this.addTerm(D,w,f)}}catch(d){o={error:d}}finally{try{E&&!E.done&&(u=L.return)&&u.call(L)}finally{if(o)throw o.error}}else M&&this.addTerm(D,w,M)}}catch(d){i={error:d}}finally{try{z&&!z.done&&(r=k.return)&&r.call(k)}finally{if(i)throw i.error}}}}}catch(d){t={error:d}}finally{try{x&&!x.done&&(n=m.return)&&n.call(m)}finally{if(t)throw t.error}}},a.prototype.addAll=function(e){var t,n;try{for(var i=C(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.add(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.addAllAsync=function(e,t){var n=this;t===void 0&&(t={});var i=t.chunkSize,r=i===void 0?10:i,o={chunk:[],promise:Promise.resolve()},u=e.reduce(function(c,v,h){var y=c.chunk,p=c.promise;return y.push(v),(h+1)%r===0?{chunk:[],promise:p.then(function(){return new Promise(function(w){return setTimeout(w,0)})}).then(function(){return n.addAll(y)})}:{chunk:y,promise:p}},o),l=u.chunk,s=u.promise;return s.then(function(){return n.addAll(l)})},a.prototype.remove=function(e){var t,n,i,r,o,u,l=this._options,s=l.tokenize,c=l.processTerm,v=l.extractField,h=l.fields,y=l.idField,p=v(e,y);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(y,'"'));var w=this._idToShortId.get(p);if(w==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var m=C(h),x=m.next();!x.done;x=m.next()){var b=x.value,F=v(e,b);if(F!=null){var A=s(F.toString(),b),D=this._fieldIds[b],V=new Set(A).size;this.removeFieldLength(w,D,this._documentCount,V);try{for(var k=(i=void 0,C(A)),z=k.next();!z.done;z=k.next()){var _=z.value,M=c(_,b);if(Array.isArray(M))try{for(var L=(o=void 0,C(M)),E=L.next();!E.done;E=L.next()){var f=E.value;this.removeTerm(D,w,f)}}catch(d){o={error:d}}finally{try{E&&!E.done&&(u=L.return)&&u.call(L)}finally{if(o)throw o.error}}else M&&this.removeTerm(D,w,M)}}catch(d){i={error:d}}finally{try{z&&!z.done&&(r=k.return)&&r.call(k)}finally{if(i)throw i.error}}}}}catch(d){t={error:d}}finally{try{x&&!x.done&&(n=m.return)&&n.call(m)}finally{if(t)throw t.error}}this._storedFields.delete(w),this._documentIds.delete(w),this._idToShortId.delete(p),this._fieldLength.delete(w),this._documentCount-=1},a.prototype.removeAll=function(e){var t,n;if(e)try{for(var i=C(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.remove(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new de,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},a.prototype.discard=function(e){var t=this,n=this._idToShortId.get(e);if(n==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(n),this._storedFields.delete(n),(this._fieldLength.get(n)||[]).forEach(function(i,r){t.removeFieldLength(n,r,t._documentCount,i)}),this._fieldLength.delete(n),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},a.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,n=e.minDirtCount,i=e.batchSize,r=e.batchWait;this.conditionalVacuum({batchSize:i,batchWait:r},{minDirtCount:n,minDirtFactor:t})}},a.prototype.discardAll=function(e){var t,n,i=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var r=C(e),o=r.next();!o.done;o=r.next()){var u=o.value;this.discard(u)}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=i}this.maybeAutoVacuum()},a.prototype.replace=function(e){var t=this._options,n=t.idField,i=t.extractField,r=i(e,n);this.discard(r),this.add(e)},a.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},a.prototype.conditionalVacuum=function(e,t){var n=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var i=n._enqueuedVacuumConditions;return n._enqueuedVacuumConditions=xe,n.performVacuuming(e,i)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},a.prototype.performVacuuming=function(e,t){return gt(this,void 0,void 0,function(){var n,i,r,o,u,l,s,c,v,h,y,p,w,m,x,b,F,A,D,V,k,z,_,M,L;return wt(this,function(E){switch(E.label){case 0:if(n=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];i=e.batchSize||Fe.batchSize,r=e.batchWait||Fe.batchWait,o=1,E.label=1;case 1:E.trys.push([1,7,8,9]),u=C(this._index),l=u.next(),E.label=2;case 2:if(l.done)return[3,6];s=O(l.value,2),c=s[0],v=s[1];try{for(h=(z=void 0,C(v)),y=h.next();!y.done;y=h.next()){p=O(y.value,2),w=p[0],m=p[1];try{for(x=(M=void 0,C(m)),b=x.next();!b.done;b=x.next())F=O(b.value,1),A=F[0],!this._documentIds.has(A)&&(m.size<=1?v.delete(w):m.delete(A))}catch(f){M={error:f}}finally{try{b&&!b.done&&(L=x.return)&&L.call(x)}finally{if(M)throw M.error}}}}catch(f){z={error:f}}finally{try{y&&!y.done&&(_=h.return)&&_.call(h)}finally{if(z)throw z.error}}return this._index.get(c).size===0&&this._index.delete(c),o%i!==0?[3,4]:[4,new Promise(function(f){return setTimeout(f,r)})];case 3:E.sent(),E.label=4;case 4:o+=1,E.label=5;case 5:return l=u.next(),[3,2];case 6:return[3,9];case 7:return D=E.sent(),V={error:D},[3,9];case 8:try{l&&!l.done&&(k=u.return)&&k.call(u)}finally{if(V)throw V.error}return[7];case 9:this._dirtCount-=n,E.label=10;case 10:return[4,null];case 11:return E.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},a.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,n=e.minDirtFactor;return t=t||me.minDirtCount,n=n||me.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=n},Object.defineProperty(a.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),a.prototype.has=function(e){return this._idToShortId.has(e)},a.prototype.search=function(e,t){var n,i;t===void 0&&(t={});var r=this.executeQuery(e,t),o=[];try{for(var u=C(r),l=u.next();!l.done;l=u.next()){var s=O(l.value,2),c=s[0],v=s[1],h=v.score,y=v.terms,p=v.match,w=y.length,m={id:this._documentIds.get(c),score:h*w,terms:Object.keys(p),match:p};Object.assign(m,this._storedFields.get(c)),(t.filter==null||t.filter(m))&&o.push(m)}}catch(x){n={error:x}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}return o.sort(Pe),o},a.prototype.autoSuggest=function(e,t){var n,i,r,o;t===void 0&&(t={}),t=B(B({},this._options.autoSuggestOptions),t);var u=new Map;try{for(var l=C(this.search(e,t)),s=l.next();!s.done;s=l.next()){var c=s.value,v=c.score,h=c.terms,y=h.join(" "),p=u.get(y);p!=null?(p.score+=v,p.count+=1):u.set(y,{score:v,terms:h,count:1})}}catch(D){n={error:D}}finally{try{s&&!s.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}var w=[];try{for(var m=C(u),x=m.next();!x.done;x=m.next()){var b=O(x.value,2),p=b[0],F=b[1],v=F.score,h=F.terms,A=F.count;w.push({suggestion:p,terms:h,score:v/A})}}catch(D){r={error:D}}finally{try{x&&!x.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}return w.sort(Pe),w},Object.defineProperty(a.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),a.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},a.getDefault=function(e){if(pe.hasOwnProperty(e))return ye(pe,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},a.loadJS=function(e,t){var n,i,r,o,u,l,s=e.index,c=e.documentCount,v=e.nextId,h=e.documentIds,y=e.fieldIds,p=e.fieldLength,w=e.averageFieldLength,m=e.storedFields,x=e.dirtCount,b=e.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var F=new a(t);F._documentCount=c,F._nextId=v,F._documentIds=ue(h),F._idToShortId=new Map,F._fieldIds=y,F._fieldLength=ue(p),F._avgFieldLength=w,F._storedFields=ue(m),F._dirtCount=x||0,F._index=new de;try{for(var A=C(F._documentIds),D=A.next();!D.done;D=A.next()){var V=O(D.value,2),k=V[0],z=V[1];F._idToShortId.set(z,k)}}catch($){n={error:$}}finally{try{D&&!D.done&&(i=A.return)&&i.call(A)}finally{if(n)throw n.error}}try{for(var _=C(s),M=_.next();!M.done;M=_.next()){var L=O(M.value,2),E=L[0],f=L[1],d=new Map;try{for(var S=(u=void 0,C(Object.keys(f))),P=S.next();!P.done;P=S.next()){var R=P.value,N=f[R];b===1&&(N=N.ds),d.set(parseInt(R,10),ue(N))}}catch($){u={error:$}}finally{try{P&&!P.done&&(l=S.return)&&l.call(S)}finally{if(u)throw u.error}}F._index.set(E,d)}}catch($){r={error:$}}finally{try{M&&!M.done&&(o=_.return)&&o.call(_)}finally{if(r)throw r.error}}return F},a.prototype.executeQuery=function(e,t){var n=this;if(t===void 0&&(t={}),typeof e!="string"){var i=B(B(B({},t),e),{queries:void 0}),r=e.queries.map(function(m){return n.executeQuery(m,i)});return this.combineResults(r,i.combineWith)}var o=this._options,u=o.tokenize,l=o.processTerm,s=o.searchOptions,c=B(B({tokenize:u,processTerm:l},s),t),v=c.tokenize,h=c.processTerm,y=v(e).flatMap(function(m){return h(m)}).filter(function(m){return!!m}),p=y.map(Et(c)),w=p.map(function(m){return n.executeQuerySpec(m,c)});return this.combineResults(w,c.combineWith)},a.prototype.executeQuerySpec=function(e,t){var n,i,r,o,u=B(B({},this._options.searchOptions),t),l=(u.fields||this._options.fields).reduce(function(R,N){var $;return B(B({},R),($={},$[N]=ye(u.boost,N)||1,$))},{}),s=u.boostDocument,c=u.weights,v=u.maxFuzzy,h=u.bm25,y=B(B({},Oe.weights),c),p=y.fuzzy,w=y.prefix,m=this._index.get(e.term),x=this.termResults(e.term,e.term,1,m,l,s,h),b,F;if(e.prefix&&(b=this._index.atPrefix(e.term)),e.fuzzy){var A=e.fuzzy===!0?.2:e.fuzzy,D=A<1?Math.min(v,Math.round(e.term.length*A)):A;D&&(F=this._index.fuzzyGet(e.term,D))}if(b)try{for(var V=C(b),k=V.next();!k.done;k=V.next()){var z=O(k.value,2),_=z[0],M=z[1],L=_.length-e.term.length;if(L){F==null||F.delete(_);var E=w*_.length/(_.length+.3*L);this.termResults(e.term,_,E,M,l,s,h,x)}}}catch(R){n={error:R}}finally{try{k&&!k.done&&(i=V.return)&&i.call(V)}finally{if(n)throw n.error}}if(F)try{for(var f=C(F.keys()),d=f.next();!d.done;d=f.next()){var _=d.value,S=O(F.get(_),2),P=S[0],L=S[1];if(L){var E=p*_.length/(_.length+L);this.termResults(e.term,_,E,P,l,s,h,x)}}}catch(R){r={error:R}}finally{try{d&&!d.done&&(o=f.return)&&o.call(f)}finally{if(r)throw r.error}}return x},a.prototype.combineResults=function(e,t){if(t===void 0&&(t=_e),e.length===0)return new Map;var n=t.toLowerCase();return e.reduce(Ct[n])||new Map},a.prototype.toJSON=function(){var e,t,n,i,r=[];try{for(var o=C(this._index),u=o.next();!u.done;u=o.next()){var l=O(u.value,2),s=l[0],c=l[1],v={};try{for(var h=(n=void 0,C(c)),y=h.next();!y.done;y=h.next()){var p=O(y.value,2),w=p[0],m=p[1];v[w]=Object.fromEntries(m)}}catch(x){n={error:x}}finally{try{y&&!y.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}r.push([s,v])}}catch(x){e={error:x}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:r,serializationVersion:2}},a.prototype.termResults=function(e,t,n,i,r,o,u,l){var s,c,v,h,y;if(l===void 0&&(l=new Map),i==null)return l;try{for(var p=C(Object.keys(r)),w=p.next();!w.done;w=p.next()){var m=w.value,x=r[m],b=this._fieldIds[m],F=i.get(b);if(F!=null){var A=F.size,D=this._avgFieldLength[b];try{for(var V=(v=void 0,C(F.keys())),k=V.next();!k.done;k=V.next()){var z=k.value;if(!this._documentIds.has(z)){this.removeTerm(b,z,t),A-=1;continue}var _=o?o(this._documentIds.get(z),t):1;if(_){var M=F.get(z),L=this._fieldLength.get(z)[b],E=kt(M,A,this._documentCount,L,D,u),f=n*x*_*E,d=l.get(z);if(d){d.score+=f,Dt(d.terms,e);var S=ye(d.match,t);S?S.push(m):d.match[t]=[m]}else l.set(z,{score:f,terms:[e],match:(y={},y[t]=[m],y)})}}}catch(P){v={error:P}}finally{try{k&&!k.done&&(h=V.return)&&h.call(V)}finally{if(v)throw v.error}}}}}catch(P){s={error:P}}finally{try{w&&!w.done&&(c=p.return)&&c.call(p)}finally{if(s)throw s.error}}return l},a.prototype.addTerm=function(e,t,n){var i=this._index.fetch(n,Re),r=i.get(e);if(r==null)r=new Map,r.set(t,1),i.set(e,r);else{var o=r.get(t);r.set(t,(o||0)+1)}},a.prototype.removeTerm=function(e,t,n){if(!this._index.has(n)){this.warnDocumentChanged(t,e,n);return}var i=this._index.fetch(n,Re),r=i.get(e);r==null||r.get(t)==null?this.warnDocumentChanged(t,e,n):r.get(t)<=1?r.size<=1?i.delete(e):r.delete(t):r.set(t,r.get(t)-1),this._index.get(n).size===0&&this._index.delete(n)},a.prototype.warnDocumentChanged=function(e,t,n){var i,r;try{for(var o=C(Object.keys(this._fieldIds)),u=o.next();!u.done;u=o.next()){var l=u.value;if(this._fieldIds[l]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(n,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(s){i={error:s}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},a.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},a.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},a.prototype.addFieldLength=function(e,t,n,i){var r=this._fieldLength.get(e);r==null&&this._fieldLength.set(e,r=[]),r[t]=i;var o=this._avgFieldLength[t]||0,u=o*n+i;this._avgFieldLength[t]=u/(n+1)},a.prototype.removeFieldLength=function(e,t,n,i){if(n===1){this._avgFieldLength[t]=0;return}var r=this._avgFieldLength[t]*n-i;this._avgFieldLength[t]=r/(n-1)},a.prototype.saveStoredFields=function(e,t){var n,i,r=this._options,o=r.storeFields,u=r.extractField;if(!(o==null||o.length===0)){var l=this._storedFields.get(e);l==null&&this._storedFields.set(e,l={});try{for(var s=C(o),c=s.next();!c.done;c=s.next()){var v=c.value,h=u(t,v);h!==void 0&&(l[v]=h)}}catch(y){n={error:y}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},a}(),ye=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0},Ct=(ee={},ee[_e]=function(a,e){var t,n;try{for(var i=C(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value,u=a.get(o);if(u==null)a.set(o,e.get(o));else{var l=e.get(o),s=l.score,c=l.terms,v=l.match;u.score=u.score+s,u.match=Object.assign(u.match,v),Te(u.terms,c)}}}catch(h){t={error:h}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},ee[Ke]=function(a,e){var t,n,i=new Map;try{for(var r=C(e.keys()),o=r.next();!o.done;o=r.next()){var u=o.value,l=a.get(u);if(l!=null){var s=e.get(u),c=s.score,v=s.terms,h=s.match;Te(l.terms,v),i.set(u,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(y){t={error:y}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},ee[_t]=function(a,e){var t,n;try{for(var i=C(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;a.delete(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},ee),St={k:1.2,b:.7,d:.5},kt=function(a,e,t,n,i,r){var o=r.k,u=r.b,l=r.d,s=Math.log(1+(t-e+.5)/(e+.5));return s*(l+a*(o+1)/(a+o*(1-u+u*n/i)))},Et=function(a){return function(e,t,n){var i=typeof a.fuzzy=="function"?a.fuzzy(e,t,n):a.fuzzy||!1,r=typeof a.prefix=="function"?a.prefix(e,t,n):a.prefix===!0;return{term:e,fuzzy:i,prefix:r}}},pe={idField:"id",extractField:function(a,e){return a[e]},tokenize:function(a,e){return a.split(Mt)},processTerm:function(a,e){return a.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(a,e,t){return console!=null&&console.warn!=null&&console[a](e)},autoVacuum:!0},Oe={combineWith:_e,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:St},zt={combineWith:Ke,prefix:function(a,e,t){return e===t.length-1}},Fe={batchSize:1e3,batchWait:10},xe={minDirtFactor:.1,minDirtCount:20},me=B(B({},Fe),xe),Dt=function(a,e){a.includes(e)||a.push(e)},Te=function(a,e){var t,n;try{for(var i=C(e),r=i.next();!r.done;r=i.next()){var o=r.value;a.includes(o)||a.push(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},Pe=function(a,e){var t=a.score,n=e.score;return n-t},Re=function(){return new Map},ue=function(a){var e,t,n=new Map;try{for(var i=C(Object.keys(a)),r=i.next();!r.done;r=i.next()){var o=r.value;n.set(parseInt(o,10),a[o])}}catch(u){e={error:u}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return n},Mt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;const H=a=>(it("data-v-176ca490"),a=a(),ot(),a),Lt={class:"shell"},Vt=H(()=>g("svg",{class:"search-icon",width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[g("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[g("circle",{cx:"11",cy:"11",r:"8"}),g("path",{d:"m21 21l-4.35-4.35"})])],-1)),Bt={class:"search-actions before"},It=["title"],Ot=H(()=>g("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 12H5m7 7l-7-7l7-7"})],-1)),Tt=[Ot],Pt=["placeholder"],Rt={class:"search-actions"},Nt=["title"],Wt=H(()=>g("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 14h7v7H3zM3 3h7v7H3zm11 1h7m-7 5h7m-7 6h7m-7 5h7"})],-1)),$t=[Wt],Ht=["title"],Ut=H(()=>g("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 5H9l-7 7l7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2 4l-6 6m0-6l6 6"})],-1)),Kt=[Ut],Jt=["href","aria-label","onMouseenter"],jt={class:"titles"},Qt=H(()=>g("span",{class:"title-icon"},"#",-1)),Gt=["innerHTML"],Yt=H(()=>g("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 18l6-6l-6-6"})],-1)),qt={class:"title main"},Zt=["innerHTML"],Xt={key:0,class:"excerpt-wrapper"},er={key:0,class:"excerpt"},tr=["innerHTML"],rr=H(()=>g("div",{class:"excerpt-gradient-bottom"},null,-1)),nr=H(()=>g("div",{class:"excerpt-gradient-top"},null,-1)),ar={key:0,class:"no-results"},ir={class:"search-keyboard-shortcuts"},or=["aria-label"],ur=H(()=>g("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19V5m-7 7l7-7l7 7"})],-1)),lr=[ur],sr=["aria-label"],cr=H(()=>g("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[g("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v14m7-7l-7 7l-7-7"})],-1)),hr=[cr],fr=["aria-label"],dr=H(()=>g("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[g("g",{fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[g("path",{d:"m9 10l-5 5l5 5"}),g("path",{d:"M20 4v7a4 4 0 0 1-4 4H4"})])],-1)),vr=[dr],yr=["aria-label"],pr=Ge({__name:"VPLocalSearchBox",props:{placeholder:null},emits:["close"],setup(a,{emit:e}){var E;const t=q(),n=q(),i=q(),r=q(mt),{localeIndex:o,theme:u}=ct(),l=Ie(async()=>{var f,d,S;return Be(At.loadJSON((S=await((d=(f=r.value)[o.value])==null?void 0:d.call(f)))==null?void 0:S.default,{fields:["title","titles","text"],storeFields:["title","titles"],searchOptions:{fuzzy:.2,prefix:!0,boost:{title:4,text:2,titles:1}}}))}),s=ht("vitepress:local-search-filter",""),c=ft("vitepress:local-search-detailed-list",!1),v=Ye(()=>{var f,d;return((f=u.value.search)==null?void 0:f.provider)==="local"&&((d=u.value.search.options)==null?void 0:d.disableDetailedView)===!0});qe(()=>{v.value&&(c.value=!1)});const h=q([]),y=/<h(\d*).*?>.*?<a.*? href="#(.*?)".*?>.*?<\/a><\/h\1>/gi,p=ae(!1);De(s,()=>{p.value=!1});const w=Ie(async()=>{if(!n.value)return;const f=await ge(()=>import("./mark.f25438cf.js").then(d=>d.m),[]);return Be(new(f.default??f)(n.value))},null);dt(()=>[l.value,s.value,c.value],async([f,d,S],P,R)=>{var Ce,Se,ke,Ee;let N=!1;if(R(()=>{N=!0}),!f)return;h.value=f.search(d).slice(0,16),p.value=!0;const $=S?await Promise.all(h.value.map(W=>m(W.id))):[];if(N)return;const se=new Map;for(const{id:W,mod:j}of $){const U=j.default??j;if(U!=null&&U.render){const Q=ut(U);Q.config.warnHandler=()=>{};const te=document.createElement("div");Q.mount(te);const G=te.innerHTML.split(y);Q.unmount(),G.shift();const ze=W.slice(0,W.indexOf("#"));let re=se.get(ze);re||(re=new Map,se.set(ze,re));for(let ne=0;ne<G.length;ne+=3){const je=G[ne+1],Qe=G[ne+2];re.set(je,Qe)}}if(N)return}const Ae=new Set;if(h.value=h.value.map(W=>{const[j,U]=W.id.split("#"),Q=se.get(j),te=(Q==null?void 0:Q.get(U))??"";for(const G in W.match)Ae.add(G);return{...W,text:te}}),await he(),N)return;await new Promise(W=>{var j;(j=w.value)==null||j.unmark({done:()=>{var U;(U=w.value)==null||U.markRegExp(L(Ae),{done:W})}})});const Je=((Ce=t.value)==null?void 0:Ce.querySelectorAll(".result .excerpt"))??[];for(const W of Je)(Se=W.querySelector('mark[data-markjs="true"]'))==null||Se.scrollIntoView({block:"center"});(Ee=(ke=t.value)==null?void 0:ke.querySelector(".result"))==null||Ee.scrollIntoView({block:"start"})},{debounce:200,immediate:!0});async function m(f){const d=lt(f.slice(0,f.indexOf("#")));try{return{id:f,mod:await ge(()=>import(d),[])}}catch(S){return console.error(S),{id:f,mod:{}}}}const x=ae();function b(){var f,d;(f=x.value)==null||f.focus(),(d=x.value)==null||d.select()}ce(()=>{b()});function F(f){f.pointerType==="mouse"&&b()}const A=ae(0),D=ae(!1);De(h,()=>{A.value=0,V()});function V(){he(()=>{const f=document.querySelector(".result.selected");f&&f.scrollIntoView({block:"nearest"})})}oe("ArrowUp",f=>{f.preventDefault(),A.value--,A.value<0&&(A.value=h.value.length-1),D.value=!0,V()}),oe("ArrowDown",f=>{f.preventDefault(),A.value++,A.value>=h.value.length&&(A.value=0),D.value=!0,V()});const k=Ze();oe("Enter",()=>{const f=h.value[A.value];f&&(k.go(f.id),e("close"))}),oe("Escape",()=>{e("close")});const z={modal:{displayDetails:"Display detailed list",resetButtonTitle:"Reset search",backButtonTitle:"Close search",noResultsText:"No results for",footer:{selectText:"to select",selectKeyAriaLabel:"enter",navigateText:"to navigate",navigateUpKeyAriaLabel:"up arrow",navigateDownKeyAriaLabel:"down arrow",closeText:"to close",closeKeyAriaLabel:"escape"}}},_=vt((E=u.value.search)==null?void 0:E.options,z);ce(()=>{window.history.pushState(null,"",null)}),yt("popstate",f=>{f.preventDefault(),e("close")});const M=pt(i);ce(()=>{i.value=document.body,he(()=>{M.value=!0})}),Xe(()=>{M.value=!1});function L(f){return new RegExp([...f].sort((d,S)=>S.length-d.length).map(d=>`(${d.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})`).join("|"),"gi")}return(f,d)=>(K(),et(at,{to:"body"},[g("div",{ref_key:"el",ref:t,class:"VPLocalSearchBox","aria-modal":"true"},[g("div",{class:"backdrop",onClick:d[0]||(d[0]=S=>f.$emit("close"))}),g("div",Lt,[g("div",{class:"search-bar",onPointerup:d[5]||(d[5]=S=>F(S))},[Vt,g("div",Bt,[g("button",{class:"back-button",title:I(_)("modal.backButtonTitle"),onClick:d[1]||(d[1]=S=>f.$emit("close"))},Tt,8,It)]),tt(g("input",{ref_key:"searchInput",ref:x,"onUpdate:modelValue":d[2]||(d[2]=S=>nt(s)?s.value=S:null),placeholder:a.placeholder,class:"search-input"},null,8,Pt),[[rt,I(s)]]),g("div",Rt,[I(v)?ie("",!0):(K(),J("button",{key:0,class:Me(["toggle-layout-button",{"detailed-list":I(c)}]),title:I(_)("modal.displayDetails"),onClick:d[3]||(d[3]=S=>c.value=!I(c))},$t,10,Nt)),g("button",{class:"clear-button",title:I(_)("modal.resetButtonTitle"),onClick:d[4]||(d[4]=S=>s.value="")},Kt,8,Ht)])],32),g("div",{ref_key:"resultsEl",ref:n,class:"results",onMousemove:d[7]||(d[7]=S=>D.value=!1)},[(K(!0),J(Ve,null,Le(I(h),(S,P)=>(K(),J("a",{key:S.id,href:S.id,class:Me(["result",{selected:A.value===P}]),"aria-label":[...S.titles,S.title].join(" > "),onMouseenter:R=>!D.value&&(A.value=P),onClick:d[6]||(d[6]=R=>f.$emit("close"))},[g("div",null,[g("div",jt,[Qt,(K(!0),J(Ve,null,Le(S.titles,(R,N)=>(K(),J("span",{key:N,class:"title"},[g("span",{class:"text",innerHTML:R},null,8,Gt),Yt]))),128)),g("span",qt,[g("span",{class:"text",innerHTML:S.title},null,8,Zt)])]),I(c)?(K(),J("div",Xt,[S.text?(K(),J("div",er,[g("div",{class:"vp-doc",innerHTML:S.text},null,8,tr)])):ie("",!0),rr,nr])):ie("",!0)])],42,Jt))),128)),I(s)&&!I(h).length&&p.value?(K(),J("div",ar,[Z(X(I(_)("modal.noResultsText"))+' "',1),g("strong",null,X(I(s)),1),Z('" ')])):ie("",!0)],544),g("div",ir,[g("span",null,[g("kbd",{"aria-label":I(_)("modal.footer.navigateUpKeyAriaLabel")},lr,8,or),g("kbd",{"aria-label":I(_)("modal.footer.navigateDownKeyAriaLabel")},hr,8,sr),Z(" "+X(I(_)("modal.footer.navigateText")),1)]),g("span",null,[g("kbd",{"aria-label":I(_)("modal.footer.selectKeyAriaLabel")},vr,8,fr),Z(" "+X(I(_)("modal.footer.selectText")),1)]),g("span",null,[g("kbd",{"aria-label":I(_)("modal.footer.closeKeyAriaLabel")},"esc",8,yr),Z(" "+X(I(_)("modal.footer.closeText")),1)])])])],512)]))}});const wr=st(pr,[["__scopeId","data-v-176ca490"]]);export{wr as default};
