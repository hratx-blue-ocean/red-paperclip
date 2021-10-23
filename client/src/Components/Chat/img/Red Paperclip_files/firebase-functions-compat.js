!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(C,D){"use strict";try{!function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(C);class i extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var r,n=t[0]||{},t=`${this.service}/${e}`,e=this.errors[e],e=e?(r=n,e.replace(s,(e,t)=>{var n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",e=`${this.serviceName}: ${e} (${t}).`;return new i(t,e,n)}}const s=/\{\$([^}]+)}/g;function a(e){return e&&e._delegate?e._delegate:e}var o,n,c=(u.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},u.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},u.prototype.setServiceProps=function(e){return this.serviceProps=e,this},u.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},u);function u(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}function l(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function h(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>h(e)):"function"==typeof e||"object"==typeof e?l(e,e=>h(e)):e}const p="functions",d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends i{constructor(e,t,n){super(`${p}/${e}`,t||""),this.details=n}}function g(e,t){let n=function(e){if(200<=e&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),r=n,i=void 0;try{var s=t&&t.error;if(s){const e=s.status;if("string"==typeof e){if(!d[e])return new f("internal","internal");n=d[e],r=e}var a=s.message;"string"==typeof a&&(r=a),i=s.details,void 0!==i&&(i=h(i))}}catch(e){}return"ok"===n?null:new f(n,r,i)}class m{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(e=>this.auth=e,()=>{}),this.messaging||t.get().then(e=>this.messaging=e,()=>{}),this.appCheck||n.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{var e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return this.messaging.getToken()}catch(e){return}}async getAppCheckToken(){if(this.appCheck){var e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}const y="us-central1";class v{constructor(e,t,n,r,i=y,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new m(t,n,r),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{var a=new URL(i);this.customDomain=a.origin,this.region=y}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){var t=this.app.options.projectId;return null===this.emulatorOrigin?null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`:`${this.emulatorOrigin}/${t}/${this.region}/${e}`}}function w(t,n,r){return e=>async function(e,t,n,r){const i=e._url(t),s={data:n=function t(e){if(null==e)return null;if("number"==typeof(e=e instanceof Number?e.valueOf():e)&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>t(e));if("function"==typeof e||"object"==typeof e)return l(e,e=>t(e));throw new Error("Data cannot be encoded in JSON: "+e)}(n)},a={},o=await e.contextProvider.getContext();o.authToken&&(a.Authorization="Bearer "+o.authToken);o.messagingToken&&(a["Firebase-Instance-ID-Token"]=o.messagingToken);null!==o.appCheckToken&&(a["X-Firebase-AppCheck"]=o.appCheckToken);r=r.timeout||7e4,r=await Promise.race([async function(e,t,n,r){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(e){}return{status:i.status,json:s}}(i,s,a,e.fetchImpl),function(n){return new Promise((e,t)=>{setTimeout(()=>{t(new f("deadline-exceeded","deadline-exceeded"))},n)})}(r),e.cancelAllRequests]);if(!r)throw new f("cancelled","Firebase Functions instance was deleted.");e=g(r.status,r.json);if(e)throw e;if(!r.json)throw new f("internal","Response is not valid JSON object.");let c=r.json.data;void 0===c&&(c=r.json.result);if(void 0===c)throw new f("internal","Response is missing data field.");r=h(c);return{data:r}}(t,n,e,r||{})}const E="@firebase/functions",I="0.7.3";function b(e,t,n){a(e).emulatorOrigin=`http://${t}:${n}`}o=fetch.bind(self),D._registerComponent(new c(p,(e,{instanceIdentifier:t})=>{var n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging-internal"),e=e.getProvider("app-check-internal");return new v(n,r,i,e,t,o)},"PUBLIC").setMultipleInstances(!0)),D.registerVersion(E,I,n),D.registerVersion(E,I,"esm2017");var T;class k{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return w(a(this._delegate),e,t)}useFunctionsEmulator(e){e=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(null==e)throw new i("functions","No origin provided to useFunctionsEmulator()");if(null==e[2])throw new i("functions","Port missing in origin provided to useFunctionsEmulator()");return b(this._delegate,e[1],Number(e[2]))}useEmulator(e,t){return b(this._delegate,e,t)}}const N="us-central1",A=(e,{instanceIdentifier:t})=>{var n=e.getProvider("app-compat").getImmediate(),t=e.getProvider("functions").getImmediate({identifier:null!=t?t:N});return new k(n,t)};T={Functions:k},t.default.INTERNAL.registerComponent(new c("functions-compat",A,"PUBLIC").setServiceProps(T).setMultipleInstances(!0)),t.default.registerVersion("@firebase/functions-compat","0.1.4")}.apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-functions-compat.js.map
