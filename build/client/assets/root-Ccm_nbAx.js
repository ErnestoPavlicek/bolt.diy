import { t as useRemixContext, v as useLocation, w as useMatches, x as useScrollRestoration, r as reactExports, _ as _extends, q as reactDomExports, j as jsxRuntimeExports, O as Outlet, S as Scripts, M as Meta, L as Links } from './components-CB5LuFFl.js';
import { p as process$1, g as global, u as useStore, l as logStore, C as ClientOnly, t as themeStore, s as stripIndents } from './client-only-DcgPTZGk.js';

/**
 * @remix-run/react v2.16.8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

let STORAGE_KEY = "positions";

/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 *
 * @see https://remix.run/components/scroll-restoration
 */
function ScrollRestoration({
  getKey,
  ...props
}) {
  let {
    isSpaMode
  } = useRemixContext();
  let location = useLocation();
  let matches = useMatches();
  useScrollRestoration({
    getKey,
    storageKey: STORAGE_KEY
  });

  // In order to support `getKey`, we need to compute a "key" here so we can
  // hydrate that up so that SSR scroll restoration isn't waiting on React to
  // hydrate. *However*, our key on the server is not the same as our key on
  // the client!  So if the user's getKey implementation returns the SSR
  // location key, then let's ignore it and let our inline <script> below pick
  // up the client side history state key
  let key = reactExports.useMemo(() => {
    if (!getKey) return null;
    let userKey = getKey(location, matches);
    return userKey !== location.key ? userKey : null;
  },
  // Nah, we only need this the first time for the SSR render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // In SPA Mode, there's nothing to restore on initial render since we didn't
  // render anything on the server
  if (isSpaMode) {
    return null;
  }
  let restoreScroll = ((STORAGE_KEY, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }).toString();
  return /*#__PURE__*/reactExports.createElement("script", _extends({}, props, {
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)}, ${JSON.stringify(key)})`
    }
  }));
}

const tailwindReset = "/assets/tailwind-compat-Bwh-BmjE.css";

var reactDomServerLegacy_browser_production_min = {};

/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa$1=reactExports;function l$2(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var p$1=Object.prototype.hasOwnProperty,fa$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha$1={},ia$1={};
function ja$1(a){if(p$1.call(ia$1,a))return  true;if(p$1.call(ha$1,a))return  false;if(fa$1.test(a))return ia$1[a]=true;ha$1[a]=true;return  false}function r(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g;}var t$1={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){t$1[a]=new r(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];t$1[b]=new r(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){t$1[a]=new r(a,2,false,a.toLowerCase(),null,false,false);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){t$1[a]=new r(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){t$1[a]=new r(a,3,false,a.toLowerCase(),null,false,false);});
["checked","multiple","muted","selected"].forEach(function(a){t$1[a]=new r(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){t$1[a]=new r(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){t$1[a]=new r(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){t$1[a]=new r(a,5,false,a.toLowerCase(),null,false,false);});var ka$1=/[\-:]([a-z])/g;function la$1(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ka$1,
la$1);t$1[b]=new r(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ka$1,la$1);t$1[b]=new r(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ka$1,la$1);t$1[b]=new r(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){t$1[a]=new r(a,1,false,a.toLowerCase(),null,false,false);});
t$1.xlinkHref=new r("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){t$1[a]=new r(a,1,false,a.toLowerCase(),null,true,true);});
var u$1={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},ma=["Webkit","ms","Moz","O"];Object.keys(u$1).forEach(function(a){ma.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);u$1[b]=u$1[a];});});var na=/["'&<>]/;
function v$1(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=na.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}var oa$1=/([A-Z])/g,pa$1=/^ms-/,qa$1=Array.isArray;function w$1(a,b){return {insertionMode:a,selectedValue:b}}
function ra$1(a,b,c){switch(b){case "select":return w$1(1,null!=c.value?c.value:c.defaultValue);case "svg":return w$1(2,null);case "math":return w$1(3,null);case "foreignObject":return w$1(1,null);case "table":return w$1(4,null);case "thead":case "tbody":case "tfoot":return w$1(5,null);case "colgroup":return w$1(7,null);case "tr":return w$1(6,null)}return 4<=a.insertionMode||0===a.insertionMode?w$1(1,null):a}var sa$1=new Map;
function ta$1(a,b,c){if("object"!==typeof c)throw Error(l$2(62));b=true;for(var d in c)if(p$1.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=v$1(d);f=v$1((""+f).trim());}else {e=d;var g=sa$1.get(e);void 0!==g?e=g:(g=v$1(e.replace(oa$1,"-$1").toLowerCase().replace(pa$1,"-ms-")),sa$1.set(e,g),e=g);f="number"===typeof f?0===f||p$1.call(u$1,d)?""+f:f+"px":v$1((""+f).trim());}b?(b=false,a.push(' style="',e,":",f)):a.push(";",e,":",f);}}b||a.push('"');}
function x$1(a,b,c,d){switch(c){case "style":ta$1(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=t$1.hasOwnProperty(c)?t$1[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:true===d?a.push(" ",c,'=""'):
false!==d&&a.push(" ",c,'="',v$1(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',v$1(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',v$1(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',v$1(d),'"');}}else if(ja$1(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',v$1(d),'"');}}
function y$1(a,b,c){if(null!=b){if(null!=c)throw Error(l$2(60));if("object"!==typeof b||!("__html"in b))throw Error(l$2(61));b=b.__html;null!==b&&void 0!==b&&a.push(""+b);}}function ua$1(a){var b="";aa$1.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
function va$1(a,b,c,d){a.push(A(c));var f=c=null,e;for(e in b)if(p$1.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:x$1(a,d,e,g);}}a.push(">");y$1(a,f,c);return "string"===typeof c?(a.push(v$1(c)),null):c}var wa$1=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xa$1=new Map;function A(a){var b=xa$1.get(a);if(void 0===b){if(!wa$1.test(a))throw Error(l$2(65,a));b="<"+a;xa$1.set(a,b);}return b}
function ya$1(a,b,c,d,f){switch(b){case "select":a.push(A("select"));var e=null,g=null;for(n in c)if(p$1.call(c,n)){var h=c[n];if(null!=h)switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:x$1(a,d,n,h);}}a.push(">");y$1(a,g,e);return e;case "option":g=f.selectedValue;a.push(A("option"));var k=h=null,m=null;var n=null;for(e in c)if(p$1.call(c,e)){var q=c[e];if(null!=q)switch(e){case "children":h=q;break;case "selected":m=q;break;case "dangerouslySetInnerHTML":n=
q;break;case "value":k=q;default:x$1(a,d,e,q);}}if(null!=g)if(c=null!==k?""+k:ua$1(h),qa$1(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else ""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");y$1(a,n,h);return h;case "textarea":a.push(A("textarea"));n=g=e=null;for(h in c)if(p$1.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":n=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error(l$2(91));default:x$1(a,d,
h,k);}null===e&&null!==g&&(e=g);a.push(">");if(null!=n){if(null!=e)throw Error(l$2(92));if(qa$1(n)&&1<n.length)throw Error(l$2(93));e=""+n;}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(v$1(""+e));return null;case "input":a.push(A("input"));k=n=h=e=null;for(g in c)if(p$1.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(l$2(399,"input"));case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":n=m;break;case "value":e=m;break;
default:x$1(a,d,g,m);}null!==n?x$1(a,d,"checked",n):null!==k&&x$1(a,d,"checked",k);null!==e?x$1(a,d,"value",e):null!==h&&x$1(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(A("menuitem"));for(var C in c)if(p$1.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(l$2(400));default:x$1(a,d,C,e);}a.push(">");return null;case "title":a.push(A("title"));e=null;for(q in c)if(p$1.call(c,q)&&(g=c[q],null!=g))switch(q){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(l$2(434));
default:x$1(a,d,q,g);}a.push(">");return e;case "listing":case "pre":a.push(A(b));g=e=null;for(k in c)if(p$1.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:x$1(a,d,k,h);}a.push(">");if(null!=g){if(null!=e)throw Error(l$2(60));if("object"!==typeof g||!("__html"in g))throw Error(l$2(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c));}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;
case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(A(b));for(var D in c)if(p$1.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(l$2(399,b));default:x$1(a,d,D,e);}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return va$1(a,
c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),va$1(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return va$1(a,c,b,d);a.push(A(b));g=e=null;for(m in c)if(p$1.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ta$1(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ja$1(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',v$1(h),'"');}a.push(">");
y$1(a,g,e);return e}}function za$1(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error(l$2(395));a.push(c);return a.push('"></template>')}
function Aa$1(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),
b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');default:throw Error(l$2(397));}}
function Ba$1(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error(l$2(397));}}var Ca$1=/[<\u2028\u2029]/g;
function Da$1(a){return JSON.stringify(a).replace(Ca$1,function(a){switch(a){case "<":return "\\u003c";case "\u2028":return "\\u2028";case "\u2029":return "\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
function Ea$1(a,b){b=void 0===b?"":b;return {bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:false,sentCompleteBoundaryFunction:false,sentClientRenderFunction:false,generateStaticMarkup:a}}function Fa$1(a,b,c,d){if(c.generateStaticMarkup)return a.push(v$1(b)),false;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(v$1(b)),a=true);return a}
var B$1=Object.assign,Ga$1=Symbol.for("react.element"),Ha$1=Symbol.for("react.portal"),Ia$1=Symbol.for("react.fragment"),Ja$1=Symbol.for("react.strict_mode"),Ka$1=Symbol.for("react.profiler"),La$1=Symbol.for("react.provider"),Ma$1=Symbol.for("react.context"),Na$1=Symbol.for("react.forward_ref"),Oa$1=Symbol.for("react.suspense"),Pa$1=Symbol.for("react.suspense_list"),Qa$1=Symbol.for("react.memo"),Ra$1=Symbol.for("react.lazy"),Sa$1=Symbol.for("react.scope"),Ta$1=Symbol.for("react.debug_trace_mode"),Ua$1=Symbol.for("react.legacy_hidden"),
Va$1=Symbol.for("react.default_value"),Wa$1=Symbol.iterator;
function Xa$1(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia$1:return "Fragment";case Ha$1:return "Portal";case Ka$1:return "Profiler";case Ja$1:return "StrictMode";case Oa$1:return "Suspense";case Pa$1:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma$1:return (a.displayName||"Context")+".Consumer";case La$1:return (a._context.displayName||"Context")+".Provider";case Na$1:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Qa$1:return b=a.displayName||null,null!==b?b:Xa$1(a.type)||"Memo";case Ra$1:b=a._payload;a=a._init;try{return Xa$1(a(b))}catch(c){}}return null}var Ya$1={};function Za$1(a,b){a=a.contextTypes;if(!a)return Ya$1;var c={},d;for(d in a)c[d]=b[d];return c}var E$1=null;
function F(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(l$2(401));}else {if(null===c)throw Error(l$2(401));F(a,c);}b.context._currentValue2=b.value;}}function $a$1(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&$a$1(a);}function ab$1(a){var b=a.parent;null!==b&&ab$1(b);a.context._currentValue2=a.value;}
function bb$1(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error(l$2(402));a.depth===b.depth?F(a,b):bb$1(a,b);}function cb$1(a,b){var c=b.parent;if(null===c)throw Error(l$2(402));a.depth===c.depth?F(a,c):cb$1(a,c);b.context._currentValue2=b.value;}function G(a){var b=E$1;b!==a&&(null===b?ab$1(a):null===a?$a$1(b):b.depth===a.depth?F(b,a):b.depth>a.depth?bb$1(b,a):cb$1(b,a),E$1=a);}
var db$1={isMounted:function(){return  false},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b);},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=true;a.queue=[b];},enqueueForceUpdate:function(){}};
function eb$1(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=db$1;a.props=c;a.state=f;var e={queue:[],replace:false};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:B$1({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&db$1.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=false,g&&1===b.length)a.state=b[0];else {e=g?b[0]:a.state;f=true;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=false,e=B$1({},e,h)):B$1(e,h));}a.state=e;}else e.queue=null;}
var fb$1={id:1,overflow:""};function gb$1(a,b,c){var d=a.id;a=a.overflow;var f=32-H$1(d)-1;d&=~(1<<f);c+=1;var e=32-H$1(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return {id:1<<32-H$1(b)+f|c<<f|d,overflow:e+a}}return {id:1<<e|c<<f|d,overflow:a}}var H$1=Math.clz32?Math.clz32:hb$1,ib$1=Math.log,jb$1=Math.LN2;function hb$1(a){a>>>=0;return 0===a?32:31-(ib$1(a)/jb$1|0)|0}function kb$1(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var lb$1="function"===typeof Object.is?Object.is:kb$1,I$1=null,ob$1=null,J$1=null,K$1=null,L$1=false,M$1=false,N$1=0,O$1=null,P$1=0;function Q$1(){if(null===I$1)throw Error(l$2(321));return I$1}function pb$1(){if(0<P$1)throw Error(l$2(312));return {memoizedState:null,queue:null,next:null}}function qb$1(){null===K$1?null===J$1?(L$1=false,J$1=K$1=pb$1()):(L$1=true,K$1=J$1):null===K$1.next?(L$1=false,K$1=K$1.next=pb$1()):(L$1=true,K$1=K$1.next);return K$1}function rb$1(){ob$1=I$1=null;M$1=false;J$1=null;P$1=0;K$1=O$1=null;}function sb$1(a,b){return "function"===typeof b?b(a):b}
function tb$1(a,b,c){I$1=Q$1();K$1=qb$1();if(L$1){var d=K$1.queue;b=d.dispatch;if(null!==O$1&&(c=O$1.get(d),void 0!==c)){O$1.delete(d);d=K$1.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);K$1.memoizedState=d;return [d,b]}return [K$1.memoizedState,b]}a=a===sb$1?"function"===typeof b?b():b:void 0!==c?c(b):b;K$1.memoizedState=a;a=K$1.queue={last:null,dispatch:null};a=a.dispatch=ub$1.bind(null,I$1,a);return [K$1.memoizedState,a]}
function vb$1(a,b){I$1=Q$1();K$1=qb$1();b=void 0===b?null:b;if(null!==K$1){var c=K$1.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=false;else {for(var f=0;f<d.length&&f<b.length;f++)if(!lb$1(b[f],d[f])){d=false;break a}d=true;}if(d)return c[0]}}a=a();K$1.memoizedState=[a,b];return a}function ub$1(a,b,c){if(25<=P$1)throw Error(l$2(301));if(a===I$1)if(M$1=true,a={action:c,next:null},null===O$1&&(O$1=new Map),c=O$1.get(b),void 0===c)O$1.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function wb$1(){throw Error(l$2(394));}
function R$1(){}
var xb$1={readContext:function(a){return a._currentValue2},useContext:function(a){Q$1();return a._currentValue2},useMemo:vb$1,useReducer:tb$1,useRef:function(a){I$1=Q$1();K$1=qb$1();var b=K$1.memoizedState;return null===b?(a={current:a},K$1.memoizedState=a):b},useState:function(a){return tb$1(sb$1,a)},useInsertionEffect:R$1,useLayoutEffect:function(){},useCallback:function(a,b){return vb$1(function(){return a},b)},useImperativeHandle:R$1,useEffect:R$1,useDebugValue:R$1,useDeferredValue:function(a){Q$1();return a},useTransition:function(){Q$1();return [false,
wb$1]},useId:function(){var a=ob$1.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-H$1(a)-1)).toString(32)+b;var c=S$1;if(null===c)throw Error(l$2(404));b=N$1++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){Q$1();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(l$2(407));return c()}},S$1=null,yb$1=aa$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function zb$1(a){console.error(a);return null}
function T$1(){}
function Ab$1(a,b,c,d,f,e,g,h,k){var m=[],n=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:n,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?zb$1:f,onAllReady:T$1,onShellReady:void 0===g?T$1:g,onShellError:T$1,onFatalError:T$1};c=U$1(b,0,null,c,false,false);c.parentFlushed=
true;a=Bb$1(b,a,null,c,n,Ya$1,null,fb$1);m.push(a);return b}function Bb$1(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Cb$1(a);},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function U$1(a,b,c,d,f,e){return {status:0,id:-1,index:b,parentFlushed:false,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function V$1(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function W$1(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b);}
function Db$1(a,b,c,d,f){I$1={};ob$1=b;N$1=0;for(a=c(d,f);M$1;)M$1=false,N$1=0,P$1+=1,K$1=null,a=c(d,f);rb$1();return a}function Eb$1(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else {c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(l$2(108,Xa$1(d)||"Unknown",h));d=B$1({},g,c);}b.legacyContext=d;X$1(a,b,f);b.legacyContext=g;}else X$1(a,b,f);}
function Fb(a,b){if(a&&a.defaultProps){b=B$1({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Gb$1(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=Za$1(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);eb$1(e,c,d,f);Eb$1(a,b,e,c);}else {e=Za$1(c,b.legacyContext);f=Db$1(a,b,c,d,e);var g=0!==N$1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)eb$1(f,c,d,e),Eb$1(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=gb$1(d,1,0);try{X$1(a,b,f);}finally{b.treeContext=d;}}else X$1(a,b,f);}else if("string"===
typeof c){f=b.blockedSegment;e=ya$1(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=false;g=f.formatContext;f.formatContext=ra$1(g,c,d);Hb$1(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">");}f.lastPushedText=false;}else {switch(c){case Ua$1:case Ta$1:case Ja$1:case Ka$1:case Ia$1:X$1(a,b,d.children);return;
case Pa$1:X$1(a,b,d.children);return;case Sa$1:throw Error(l$2(343));case Oa$1:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:false,pendingTasks:0,forceClientRender:false,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=U$1(a,f.chunks.length,h,f.formatContext,false,false);f.children.push(k);f.lastPushedText=false;var m=U$1(a,0,null,f.formatContext,false,false);m.parentFlushed=true;b.blockedBoundary=h;b.blockedSegment=m;try{if(Hb$1(a,
b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,Y$1(h,m),0===h.pendingTasks)break a}catch(n){m.status=4,h.forceClientRender=true,h.errorDigest=V$1(a,n);}finally{b.blockedBoundary=c,b.blockedSegment=f;}b=Bb$1(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b);}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Na$1:d=Db$1(a,b,c.render,d,f);if(0!==N$1){c=b.treeContext;b.treeContext=gb$1(c,1,0);try{X$1(a,b,d);}finally{b.treeContext=
c;}}else X$1(a,b,d);return;case Qa$1:c=c.type;d=Fb(c,d);Gb$1(a,b,c,d,f);return;case La$1:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=E$1;E$1=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;X$1(a,b,f);a=E$1;if(null===a)throw Error(l$2(403));d=a.parentValue;a.context._currentValue2=d===Va$1?a.context._defaultValue:d;a=E$1=a.parent;b.context=a;return;case Ma$1:d=d.children;d=d(c._currentValue2);X$1(a,b,d);return;case Ra$1:f=c._init;c=f(c._payload);d=Fb(c,d);Gb$1(a,
b,c,d,void 0);return}throw Error(l$2(130,null==c?c:typeof c,""));}}
function X$1(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga$1:Gb$1(a,b,c.type,c.props,c.ref);return;case Ha$1:throw Error(l$2(257));case Ra$1:var d=c._init;c=d(c._payload);X$1(a,b,c);return}if(qa$1(c)){Ib$1(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Wa$1&&c[Wa$1]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);Ib$1(a,b,f);}return}a=Object.prototype.toString.call(c);throw Error(l$2(31,"[object Object]"===
a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Fa$1(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Fa$1(b.blockedSegment.chunks,""+c,a.responseState,d.lastPushedText));}function Ib$1(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=gb$1(e,d,f);try{Hb$1(a,b,c[f]);}finally{b.treeContext=e;}}}
function Hb$1(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return X$1(a,b,c)}catch(k){if(rb$1(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=U$1(a,g.chunks.length,null,g.formatContext,g.lastPushedText,true);g.children.push(h);g.lastPushedText=false;a=Bb$1(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;G(e);}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,G(e),k;}}function Jb$1(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Kb$1(this,b,a);}
function Lb$1(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=true,a=void 0===c?Error(l$2(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Lb$1(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,
d()));}function Y$1(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=true;1===c.status&&Y$1(a,c);}else a.completedSegments.push(b);}
function Kb$1(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(l$2(389));a.completedRootSegment=c;}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=T$1,b=a.onShellReady,b());}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Y$1(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Jb$1,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(Y$1(b,c),1===b.completedSegments.length&&
b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a());}
function Cb$1(a){if(2!==a.status){var b=E$1,c=yb$1.current;yb$1.current=xb$1;var d=S$1;S$1=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){G(g.context);try{X$1(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Kb$1(h,g.blockedBoundary,k);}catch(z){if(rb$1(),"object"===typeof z&&null!==z&&"function"===typeof z.then){var m=g.ping;z.then(m,m);}else {g.abortSet.delete(g);
k.status=4;var n=g.blockedBoundary,q=z,C=V$1(h,q);null===n?W$1(h,q):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,n.errorDigest=C,n.parentFlushed&&h.clientRenderedBoundaries.push(n)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D();}}}finally{}}}f.splice(0,e);null!==a.destination&&Mb$1(a,a.destination);}catch(z){V$1(a,z),W$1(a,z);}finally{S$1=d,yb$1.current=c,c===xb$1&&G(b);}}}
function Z$1(a,b,c){c.parentFlushed=true;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=false;c.textEmbedded=false;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=true;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Nb$1(a,b,f);}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error(l$2(390));}}
function Nb$1(a,b,c){var d=c.boundary;if(null===d)return Z$1(a,b,c);d.parentFlushed=true;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=v$1(d),b.push(d),b.push('"')),b.push("></template>")),Z$1(a,b,c),a=a.responseState.generateStaticMarkup?true:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;
var e=f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;za$1(b,a.responseState,d);Z$1(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),za$1(b,a.responseState,d.id),Z$1(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error(l$2(391));Nb$1(a,b,c[0]);a=a.responseState.generateStaticMarkup?true:b.push("\x3c!--/$--\x3e");
return a}function Ob$1(a,b,c){Aa$1(b,a.responseState,c.formatContext,c.id);Nb$1(a,b,c);return Ba$1(b,c.formatContext)}
function Pb$1(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Qb$1(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=true,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
d)throw Error(l$2(395));c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
function Qb$1(a,b,c,d){if(2===d.status)return  true;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(l$2(392));return Ob$1(a,b,d)}Ob$1(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=true,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));b.push(a.segmentPrefix);
f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
function Mb$1(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Nb$1(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c]);}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,n=g.errorMessage,q=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
if(null===k)throw Error(l$2(395));d.push(k);d.push('"');if(m||n||q){d.push(",");var C=Da$1(m||"");d.push(C);}if(n||q){d.push(",");var D=Da$1(n||"");d.push(D);}if(q){d.push(",");var z=Da$1(q);d.push(z);}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var ba=a.completedBoundaries;for(e=0;e<ba.length;e++)if(!Pb$1(a,b,ba[e])){a.destination=null;e++;ba.splice(0,e);return}ba.splice(0,e);var ca=a.partialBoundaries;for(e=0;e<ca.length;e++){var mb=ca[e];a:{f=a;g=b;var da=mb.completedSegments;
for(h=0;h<da.length;h++)if(!Qb$1(f,g,mb,da[h])){h++;da.splice(0,h);var nb=!1;break a}da.splice(0,h);nb=!0;}if(!nb){a.destination=null;e++;ca.splice(0,e);return}}ca.splice(0,e);var ea=a.completedBoundaries;for(e=0;e<ea.length;e++)if(!Pb$1(a,b,ea[e])){a.destination=null;e++;ea.splice(0,e);return}ea.splice(0,e);}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.push(null);}}
function Rb$1(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Lb$1(c,a,b)});c.clear();null!==a.destination&&Mb$1(a,a.destination);}catch(d){V$1(a,d),W$1(a,d);}}function Sb$1(){}
function Tb$1(a,b,c,d){var f=false,e=null,g="",h={push:function(a){null!==a&&(g+=a);return  true},destroy:function(a){f=true;e=a;}},k=false;a=Ab$1(a,Ea$1(c,b?b.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},Infinity,Sb$1,void 0,function(){k=true;});Cb$1(a);Rb$1(a,d);if(1===a.status)a.status=2,h.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=h;try{Mb$1(a,h);}catch(m){V$1(a,m),W$1(a,m);}}if(f)throw e;if(!k)throw Error(l$2(426));return g}
reactDomServerLegacy_browser_production_min.renderToNodeStream=function(){throw Error(l$2(207));};reactDomServerLegacy_browser_production_min.renderToStaticMarkup=function(a,b){return Tb$1(a,b,true,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};reactDomServerLegacy_browser_production_min.renderToStaticNodeStream=function(){throw Error(l$2(208));};reactDomServerLegacy_browser_production_min.renderToString=function(a,b){return Tb$1(a,b,false,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};
reactDomServerLegacy_browser_production_min.version="18.2.0";

var reactDomServer_browser_production_min = {};

/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports;function k(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l$1=null,n=0;
function p(a,b){if(0!==b.length)if(512<b.length)0<n&&(a.enqueue(new Uint8Array(l$1.buffer,0,n)),l$1=new Uint8Array(512),n=0),a.enqueue(b);else {var c=l$1.length-n;c<b.length&&(0===c?a.enqueue(l$1):(l$1.set(b.subarray(0,c),n),a.enqueue(l$1),b=b.subarray(c)),l$1=new Uint8Array(512),n=0);l$1.set(b,n);n+=b.length;}}function t(a,b){p(a,b);return  true}function ba(a){l$1&&0<n&&(a.enqueue(new Uint8Array(l$1.buffer,0,n)),l$1=null,n=0);}var ca=new TextEncoder;function u(a){return ca.encode(a)}function w(a){return ca.encode(a)}
function da(a,b){"function"===typeof a.error?a.error(b):a.close();}var x=Object.prototype.hasOwnProperty,ea=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};
function ia(a){if(x.call(ha,a))return  true;if(x.call(fa,a))return  false;if(ea.test(a))return ha[a]=true;fa[a]=true;return  false}function y(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new y(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new y(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new y(a,2,false,a.toLowerCase(),null,false,false);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new y(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new y(a,3,false,a.toLowerCase(),null,false,false);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new y(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new y(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new y(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new y(a,5,false,a.toLowerCase(),null,false,false);});var ja=/[\-:]([a-z])/g;function ka(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ja,
ka);z[b]=new y(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ja,ka);z[b]=new y(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ja,ka);z[b]=new y(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new y(a,1,false,a.toLowerCase(),null,false,false);});
z.xlinkHref=new y("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new y(a,1,false,a.toLowerCase(),null,true,true);});
var B={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},la=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){la.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a];});});var oa=/["'&<>]/;
function C(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=oa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray,sa=w("<script>"),ta=w("\x3c/script>"),ua=w('<script src="'),va=w('<script type="module" src="'),wa=w('" async="">\x3c/script>'),xa=/(<\/|<)(s)(cript)/gi;function ya(a,b,c,d){return ""+b+("s"===c?"\\u0073":"\\u0053")+d}
function za(a,b,c,d,f){a=void 0===a?"":a;b=void 0===b?sa:w('<script nonce="'+C(b)+'">');var e=[];void 0!==c&&e.push(b,u((""+c).replace(xa,ya)),ta);if(void 0!==d)for(c=0;c<d.length;c++)e.push(ua,u(C(d[c])),wa);if(void 0!==f)for(d=0;d<f.length;d++)e.push(va,u(C(f[d])),wa);return {bootstrapChunks:e,startInlineScript:b,placeholderPrefix:w(a+"P:"),segmentPrefix:w(a+"S:"),boundaryPrefix:a+"B:",idPrefix:a,nextSuspenseID:0,sentCompleteSegmentFunction:false,sentCompleteBoundaryFunction:false,sentClientRenderFunction:false}}
function D(a,b){return {insertionMode:a,selectedValue:b}}function Aa(a){return D("http://www.w3.org/2000/svg"===a?2:"http://www.w3.org/1998/Math/MathML"===a?3:0,null)}
function Ba(a,b,c){switch(b){case "select":return D(1,null!=c.value?c.value:c.defaultValue);case "svg":return D(2,null);case "math":return D(3,null);case "foreignObject":return D(1,null);case "table":return D(4,null);case "thead":case "tbody":case "tfoot":return D(5,null);case "colgroup":return D(7,null);case "tr":return D(6,null)}return 4<=a.insertionMode||0===a.insertionMode?D(1,null):a}var Ca=w("\x3c!-- --\x3e");function Da(a,b,c,d){if(""===b)return d;d&&a.push(Ca);a.push(u(C(b)));return  true}
var Ea=new Map,Fa=w(' style="'),Ga=w(":"),Ha=w(";");
function Ia(a,b,c){if("object"!==typeof c)throw Error(k(62));b=true;for(var d in c)if(x.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(C(d));f=u(C((""+f).trim()));}else {e=d;var g=Ea.get(e);void 0!==g?e=g:(g=w(C(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-"))),Ea.set(e,g),e=g);f="number"===typeof f?0===f||x.call(B,d)?u(""+f):u(f+"px"):u(C((""+f).trim()));}b?(b=false,a.push(Fa,e,Ga,f)):a.push(Ha,e,Ga,f);}}b||a.push(E);}
var H=w(" "),I=w('="'),E=w('"'),Ja=w('=""');
function J(a,b,c,d){switch(c){case "style":Ia(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=z.hasOwnProperty(c)?z[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=u(b.attributeName);switch(b.type){case 3:d&&a.push(H,c,Ja);break;case 4:true===d?a.push(H,c,Ja):false!==
d&&a.push(H,c,I,u(C(d)),E);break;case 5:isNaN(d)||a.push(H,c,I,u(C(d)),E);break;case 6:!isNaN(d)&&1<=d&&a.push(H,c,I,u(C(d)),E);break;default:b.sanitizeURL&&(d=""+d),a.push(H,c,I,u(C(d)),E);}}else if(ia(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(H,u(c),I,u(C(d)),E);}}var K=w(">"),Ka=w("/>");
function L(a,b,c){if(null!=b){if(null!=c)throw Error(k(60));if("object"!==typeof b||!("__html"in b))throw Error(k(61));b=b.__html;null!==b&&void 0!==b&&a.push(u(""+b));}}function La(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Ma=w(' selected=""');
function Na(a,b,c,d){a.push(M(c));var f=c=null,e;for(e in b)if(x.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:J(a,d,e,g);}}a.push(K);L(a,f,c);return "string"===typeof c?(a.push(u(C(c))),null):c}var Oa=w("\n"),Pa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Qa=new Map;function M(a){var b=Qa.get(a);if(void 0===b){if(!Pa.test(a))throw Error(k(65,a));b=w("<"+a);Qa.set(a,b);}return b}var Ra=w("<!DOCTYPE html>");
function Sa(a,b,c,d,f){switch(b){case "select":a.push(M("select"));var e=null,g=null;for(r in c)if(x.call(c,r)){var h=c[r];if(null!=h)switch(r){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:J(a,d,r,h);}}a.push(K);L(a,g,e);return e;case "option":g=f.selectedValue;a.push(M("option"));var m=h=null,q=null;var r=null;for(e in c)if(x.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":q=v;break;case "dangerouslySetInnerHTML":r=
v;break;case "value":m=v;default:J(a,d,e,v);}}if(null!=g)if(c=null!==m?""+m:La(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ma);break}}else ""+g===c&&a.push(Ma);else q&&a.push(Ma);a.push(K);L(a,r,h);return h;case "textarea":a.push(M("textarea"));r=g=e=null;for(h in c)if(x.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":r=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error(k(91));default:J(a,d,h,m);}null===e&&null!==g&&(e=g);a.push(K);
if(null!=r){if(null!=e)throw Error(k(92));if(ra(r)&&1<r.length)throw Error(k(93));e=""+r;}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);null!==e&&a.push(u(C(""+e)));return null;case "input":a.push(M("input"));m=r=h=e=null;for(g in c)if(x.call(c,g)&&(q=c[g],null!=q))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,"input"));case "defaultChecked":m=q;break;case "defaultValue":h=q;break;case "checked":r=q;break;case "value":e=q;break;default:J(a,d,g,q);}null!==r?J(a,d,"checked",
r):null!==m&&J(a,d,"checked",m);null!==e?J(a,d,"value",e):null!==h&&J(a,d,"value",h);a.push(Ka);return null;case "menuitem":a.push(M("menuitem"));for(var A in c)if(x.call(c,A)&&(e=c[A],null!=e))switch(A){case "children":case "dangerouslySetInnerHTML":throw Error(k(400));default:J(a,d,A,e);}a.push(K);return null;case "title":a.push(M("title"));e=null;for(v in c)if(x.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error(k(434));default:J(a,d,v,g);}a.push(K);
return e;case "listing":case "pre":a.push(M(b));g=e=null;for(m in c)if(x.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:J(a,d,m,h);}a.push(K);if(null!=g){if(null!=e)throw Error(k(60));if("object"!==typeof g||!("__html"in g))throw Error(k(61));c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(Oa,u(c)):a.push(u(""+c)));}"string"===typeof e&&"\n"===e[0]&&a.push(Oa);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(M(b));
for(var F in c)if(x.call(c,F)&&(e=c[F],null!=e))switch(F){case "children":case "dangerouslySetInnerHTML":throw Error(k(399,b));default:J(a,d,F,e);}a.push(Ka);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Na(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Ra),Na(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Na(a,c,b,d);a.push(M(b));
g=e=null;for(q in c)if(x.call(c,q)&&(h=c[q],null!=h))switch(q){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Ia(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ia(q)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(H,u(q),I,u(C(h)),E);}a.push(K);L(a,g,e);return e}}
var Ta=w("</"),Ua=w(">"),Va=w('<template id="'),Wa=w('"></template>'),Xa=w("\x3c!--$--\x3e"),Ya=w('\x3c!--$?--\x3e<template id="'),Za=w('"></template>'),$a=w("\x3c!--$!--\x3e"),ab=w("\x3c!--/$--\x3e"),bb=w("<template"),cb=w('"'),db=w(' data-dgst="');w(' data-msg="');w(' data-stck="');var eb=w("></template>");function fb(a,b,c){p(a,Ya);if(null===c)throw Error(k(395));p(a,c);return t(a,Za)}
var gb=w('<div hidden id="'),hb=w('">'),ib=w("</div>"),jb=w('<svg aria-hidden="true" style="display:none" id="'),kb=w('">'),lb=w("</svg>"),mb=w('<math aria-hidden="true" style="display:none" id="'),nb=w('">'),ob=w("</math>"),pb=w('<table hidden id="'),qb=w('">'),rb=w("</table>"),sb=w('<table hidden><tbody id="'),tb=w('">'),ub=w("</tbody></table>"),vb=w('<table hidden><tr id="'),wb=w('">'),xb=w("</tr></table>"),yb=w('<table hidden><colgroup id="'),zb=w('">'),Ab=w("</colgroup></table>");
function Bb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return p(a,gb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,hb);case 2:return p(a,jb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,kb);case 3:return p(a,mb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,nb);case 4:return p(a,pb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,qb);case 5:return p(a,sb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,tb);case 6:return p(a,vb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,wb);case 7:return p(a,
yb),p(a,b.segmentPrefix),p(a,u(d.toString(16))),t(a,zb);default:throw Error(k(397));}}function Cb(a,b){switch(b.insertionMode){case 0:case 1:return t(a,ib);case 2:return t(a,lb);case 3:return t(a,ob);case 4:return t(a,rb);case 5:return t(a,ub);case 6:return t(a,xb);case 7:return t(a,Ab);default:throw Error(k(397));}}
var Db=w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Eb=w('$RS("'),Gb=w('","'),Hb=w('")\x3c/script>'),Ib=w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
Jb=w('$RC("'),Kb=w('","'),Lb=w('")\x3c/script>'),Mb=w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Nb=w('$RX("'),Ob=w('"'),Pb=w(")\x3c/script>"),Qb=w(","),Rb=/[<\u2028\u2029]/g;
function Sb(a){return JSON.stringify(a).replace(Rb,function(a){switch(a){case "<":return "\\u003c";case "\u2028":return "\\u2028";case "\u2029":return "\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
var N=Object.assign,Tb=Symbol.for("react.element"),Ub=Symbol.for("react.portal"),Vb=Symbol.for("react.fragment"),Wb=Symbol.for("react.strict_mode"),Xb=Symbol.for("react.profiler"),Yb=Symbol.for("react.provider"),Zb=Symbol.for("react.context"),$b=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),ec=Symbol.for("react.scope"),fc=Symbol.for("react.debug_trace_mode"),gc=Symbol.for("react.legacy_hidden"),
hc=Symbol.for("react.default_value"),ic=Symbol.iterator;
function jc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Vb:return "Fragment";case Ub:return "Portal";case Xb:return "Profiler";case Wb:return "StrictMode";case ac:return "Suspense";case bc:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Zb:return (a.displayName||"Context")+".Consumer";case Yb:return (a._context.displayName||"Context")+".Provider";case $b:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case cc:return b=a.displayName||null,null!==b?b:jc(a.type)||"Memo";case dc:b=a._payload;a=a._init;try{return jc(a(b))}catch(c){}}return null}var kc={};function lc(a,b){a=a.contextTypes;if(!a)return kc;var c={},d;for(d in a)c[d]=b[d];return c}var O=null;
function P(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error(k(401));}else {if(null===c)throw Error(k(401));P(a,c);}b.context._currentValue=b.value;}}function mc(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&mc(a);}function nc(a){var b=a.parent;null!==b&&nc(b);a.context._currentValue=a.value;}
function oc(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error(k(402));a.depth===b.depth?P(a,b):oc(a,b);}function pc(a,b){var c=b.parent;if(null===c)throw Error(k(402));a.depth===c.depth?P(a,c):pc(a,c);b.context._currentValue=b.value;}function Q(a){var b=O;b!==a&&(null===b?nc(a):null===a?mc(b):b.depth===a.depth?P(b,a):b.depth>a.depth?oc(b,a):pc(b,a),O=a);}
var qc={isMounted:function(){return  false},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b);},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=true;a.queue=[b];},enqueueForceUpdate:function(){}};
function rc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=qc;a.props=c;a.state=f;var e={queue:[],replace:false};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:N({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&qc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=false,g&&1===b.length)a.state=b[0];else {e=g?b[0]:a.state;f=true;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=false,e=N({},e,h)):N(e,h));}a.state=e;}else e.queue=null;}
var sc={id:1,overflow:""};function tc(a,b,c){var d=a.id;a=a.overflow;var f=32-uc(d)-1;d&=~(1<<f);c+=1;var e=32-uc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return {id:1<<32-uc(b)+f|c<<f|d,overflow:e+a}}return {id:1<<e|c<<f|d,overflow:a}}var uc=Math.clz32?Math.clz32:vc,wc=Math.log,xc=Math.LN2;function vc(a){a>>>=0;return 0===a?32:31-(wc(a)/xc|0)|0}function yc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var zc="function"===typeof Object.is?Object.is:yc,R=null,Ac=null,Bc=null,S=null,T=false,Cc=false,U=0,V=null,Dc=0;function W(){if(null===R)throw Error(k(321));return R}function Ec(){if(0<Dc)throw Error(k(312));return {memoizedState:null,queue:null,next:null}}function Fc(){null===S?null===Bc?(T=false,Bc=S=Ec()):(T=true,S=Bc):null===S.next?(T=false,S=S.next=Ec()):(T=true,S=S.next);return S}function Gc(){Ac=R=null;Cc=false;Bc=null;Dc=0;S=V=null;}function Hc(a,b){return "function"===typeof b?b(a):b}
function Ic(a,b,c){R=W();S=Fc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return [d,b]}return [S.memoizedState,b]}a=a===Hc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=Jc.bind(null,R,a);return [S.memoizedState,a]}
function Kc(a,b){R=W();S=Fc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=false;else {for(var f=0;f<d.length&&f<b.length;f++)if(!zc(b[f],d[f])){d=false;break a}d=true;}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}function Jc(a,b,c){if(25<=Dc)throw Error(k(301));if(a===R)if(Cc=true,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}
function Lc(){throw Error(k(394));}function Mc(){}
var Oc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:Kc,useReducer:Ic,useRef:function(a){R=W();S=Fc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return Ic(Hc,a)},useInsertionEffect:Mc,useLayoutEffect:function(){},useCallback:function(a,b){return Kc(function(){return a},b)},useImperativeHandle:Mc,useEffect:Mc,useDebugValue:Mc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return [false,Lc]},useId:function(){var a=Ac.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-uc(a)-1)).toString(32)+b;var c=Nc;if(null===c)throw Error(k(404));b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error(k(407));return c()}},Nc=null,Pc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Qc(a){console.error(a);return null}
function X(){}
function Rc(a,b,c,d,f,e,g,h,m){var q=[],r=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:r,pingedTasks:q,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Qc:f,onAllReady:void 0===e?X:e,onShellReady:void 0===g?X:g,onShellError:void 0===h?X:h,onFatalError:void 0===m?X:m};c=Sc(b,0,null,c,false,false);c.parentFlushed=
true;a=Tc(b,a,null,c,r,kc,null,sc);q.push(a);return b}function Tc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){var b=a.pingedTasks;b.push(m);1===b.length&&Uc(a);},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function Sc(a,b,c,d,f,e){return {status:0,id:-1,index:b,parentFlushed:false,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Vc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,da(a.destination,b)):(a.status=1,a.fatalError=b);}
function Wc(a,b,c,d,f){R={};Ac=b;U=0;for(a=c(d,f);Cc;)Cc=false,U=0,Dc+=1,S=null,a=c(d,f);Gc();return a}function Xc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else {c=c.getChildContext();for(var h in c)if(!(h in e))throw Error(k(108,jc(d)||"Unknown",h));d=N({},g,c);}b.legacyContext=d;Z(a,b,f);b.legacyContext=g;}else Z(a,b,f);}
function Yc(a,b){if(a&&a.defaultProps){b=N({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Zc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=lc(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);rc(e,c,d,f);Xc(a,b,e,c);}else {e=lc(c,b.legacyContext);f=Wc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)rc(f,c,d,e),Xc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=tc(d,1,0);try{Z(a,b,f);}finally{b.treeContext=d;}}else Z(a,b,f);}else if("string"===
typeof c){f=b.blockedSegment;e=Sa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=false;g=f.formatContext;f.formatContext=Ba(g,c,d);$c(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Ta,u(c),Ua);}f.lastPushedText=false;}else {switch(c){case gc:case fc:case Wb:case Xb:case Vb:Z(a,b,d.children);return;
case bc:Z(a,b,d.children);return;case ec:throw Error(k(343));case ac:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:false,pendingTasks:0,forceClientRender:false,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,false,false);f.children.push(m);f.lastPushedText=false;var q=Sc(a,0,null,f.formatContext,false,false);q.parentFlushed=true;b.blockedBoundary=h;b.blockedSegment=q;try{if($c(a,
b,d),q.lastPushedText&&q.textEmbedded&&q.chunks.push(Ca),q.status=1,ad(h,q),0===h.pendingTasks)break a}catch(r){q.status=4,h.forceClientRender=true,h.errorDigest=Y(a,r);}finally{b.blockedBoundary=c,b.blockedSegment=f;}b=Tc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b);}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case $b:d=Wc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=tc(c,1,0);try{Z(a,b,d);}finally{b.treeContext=c;}}else Z(a,b,d);return;case cc:c=
c.type;d=Yc(c,d);Zc(a,b,c,d,f);return;case Yb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=O;O=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=O;if(null===a)throw Error(k(403));d=a.parentValue;a.context._currentValue=d===hc?a.context._defaultValue:d;a=O=a.parent;b.context=a;return;case Zb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;case dc:f=c._init;c=f(c._payload);d=Yc(c,d);Zc(a,b,c,d,void 0);return}throw Error(k(130,
null==c?c:typeof c,""));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Tb:Zc(a,b,c.type,c.props,c.ref);return;case Ub:throw Error(k(257));case dc:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(ra(c)){bd(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=ic&&c[ic]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=[];do f.push(c.value),c=d.next();while(!c.done);bd(a,b,f);}return}a=Object.prototype.toString.call(c);throw Error(k(31,"[object Object]"===
a?"object with keys {"+Object.keys(c).join(", ")+"}":a));}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Da(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Da(b.blockedSegment.chunks,""+c,a.responseState,d.lastPushedText));}function bd(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=tc(e,d,f);try{$c(a,b,c[f]);}finally{b.treeContext=e;}}}
function $c(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Gc(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,true);g.children.push(h);g.lastPushedText=false;a=Tc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;Q(e);}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,Q(e),m;}}function cd(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;dd(this,b,a);}
function ed(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.close())):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=true,a=void 0===c?Error(k(432)):c,d.errorDigest=b.onError(a),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return ed(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,0===b.allPendingTasks&&(d=b.onAllReady,d()));}
function ad(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=true;1===c.status&&ad(a,c);}else a.completedSegments.push(b);}
function dd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error(k(389));a.completedRootSegment=c;}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b());}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&ad(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(cd,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&1===c.status&&(ad(b,c),1===b.completedSegments.length&&
b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a());}
function Uc(a){if(2!==a.status){var b=O,c=Pc.current;Pc.current=Oc;var d=Nc;Nc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){Q(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(Ca),g.abortSet.delete(g),m.status=1,dd(h,g.blockedBoundary,m);}catch(G){if(Gc(),"object"===typeof G&&null!==G&&"function"===typeof G.then){var q=g.ping;G.then(q,q);}else {g.abortSet.delete(g);m.status=4;var r=g.blockedBoundary,
v=G,A=Y(h,v);null===r?Vc(h,v):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,r.errorDigest=A,r.parentFlushed&&h.clientRenderedBoundaries.push(r)));h.allPendingTasks--;if(0===h.allPendingTasks){var F=h.onAllReady;F();}}}finally{}}}f.splice(0,e);null!==a.destination&&fd(a,a.destination);}catch(G){Y(a,G),Vc(a,G);}finally{Nc=d,Pc.current=c,c===Oc&&Q(b);}}}
function gd(a,b,c){c.parentFlushed=true;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=false;c.textEmbedded=false;a=a.responseState;p(b,Va);p(b,a.placeholderPrefix);a=u(d.toString(16));p(b,a);return t(b,Wa);case 1:c.status=2;var f=true;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)p(b,d[e]);f=hd(a,b,f);}for(;e<d.length-1;e++)p(b,d[e]);e<d.length&&(f=t(b,d[e]));return f;default:throw Error(k(390));}}
function hd(a,b,c){var d=c.boundary;if(null===d)return gd(a,b,c);d.parentFlushed=true;if(d.forceClientRender)d=d.errorDigest,t(b,$a),p(b,bb),d&&(p(b,db),p(b,u(C(d))),p(b,cb)),t(b,eb),gd(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=w(f.boundaryPrefix+e.toString(16));d=d.id=f;fb(b,a.responseState,d);gd(a,b,c);}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,
a.completedBoundaries.push(d),fb(b,a.responseState,d.id),gd(a,b,c);else {t(b,Xa);c=d.completedSegments;if(1!==c.length)throw Error(k(391));hd(a,b,c[0]);}return t(b,ab)}function id(a,b,c){Bb(b,a.responseState,c.formatContext,c.id);hd(a,b,c);return Cb(b,c.formatContext)}
function jd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)kd(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;p(b,a.startInlineScript);a.sentCompleteBoundaryFunction?p(b,Jb):(a.sentCompleteBoundaryFunction=true,p(b,Ib));if(null===d)throw Error(k(395));c=u(c.toString(16));p(b,d);p(b,Kb);p(b,a.segmentPrefix);p(b,c);return t(b,Lb)}
function kd(a,b,c,d){if(2===d.status)return  true;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error(k(392));return id(a,b,d)}id(a,b,d);a=a.responseState;p(b,a.startInlineScript);a.sentCompleteSegmentFunction?p(b,Eb):(a.sentCompleteSegmentFunction=true,p(b,Db));p(b,a.segmentPrefix);f=u(f.toString(16));p(b,f);p(b,Gb);p(b,a.placeholderPrefix);p(b,f);return t(b,Hb)}
function fd(a,b){l$1=new Uint8Array(512);n=0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){hd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)p(b,d[c]);c<d.length&&t(b,d[c]);}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,q=g.errorDigest,r=g.errorMessage,v=g.errorComponentStack;p(d,h.startInlineScript);h.sentClientRenderFunction?p(d,Nb):(h.sentClientRenderFunction=!0,p(d,
Mb));if(null===m)throw Error(k(395));p(d,m);p(d,Ob);if(q||r||v)p(d,Qb),p(d,u(Sb(q||"")));if(r||v)p(d,Qb),p(d,u(Sb(r||"")));v&&(p(d,Qb),p(d,u(Sb(v))));if(!t(d,Pb));}f.splice(0,e);var A=a.completedBoundaries;for(e=0;e<A.length;e++)if(!jd(a,b,A[e]));A.splice(0,e);ba(b);l$1=new Uint8Array(512);n=0;var F=a.partialBoundaries;for(e=0;e<F.length;e++){var G=F[e];a:{f=a;g=b;var ma=G.completedSegments;for(h=0;h<ma.length;h++)if(!kd(f,
g,G,ma[h])){h++;ma.splice(0,h);var Fb=!1;break a}ma.splice(0,h);Fb=!0;}if(!Fb){a.destination=null;e++;F.splice(0,e);return}}F.splice(0,e);var na=a.completedBoundaries;for(e=0;e<na.length;e++)if(!jd(a,b,na[e]));na.splice(0,e);}finally{ba(b),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&b.close();}}
function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return ed(c,a,b)});c.clear();null!==a.destination&&fd(a,a.destination);}catch(d){Y(a,d),Vc(a,d);}}
reactDomServer_browser_production_min.renderToReadableStream=function(a,b){return new Promise(function(c,d){var f,e,g=new Promise(function(a,b){e=a;f=b;}),h=Rc(a,za(b?b.identifierPrefix:void 0,b?b.nonce:void 0,b?b.bootstrapScriptContent:void 0,b?b.bootstrapScripts:void 0,b?b.bootstrapModules:void 0),Aa(b?b.namespaceURI:void 0),b?b.progressiveChunkSize:void 0,b?b.onError:void 0,e,function(){var a=new ReadableStream({type:"bytes",pull:function(a){if(1===h.status)h.status=2,da(a,h.fatalError);else if(2!==h.status&&null===h.destination){h.destination=
a;try{fd(h,a);}catch(A){Y(h,A),Vc(h,A);}}},cancel:function(){ld(h);}},{highWaterMark:0});a.allReady=g;c(a);},function(a){g.catch(function(){});d(a);},f);if(b&&b.signal){var m=b.signal,q=function(){ld(h,m.reason);m.removeEventListener("abort",q);};m.addEventListener("abort",q);}Uc(h);})};reactDomServer_browser_production_min.version="18.2.0";

var l, s;
{
  l = reactDomServerLegacy_browser_production_min;
  s = reactDomServer_browser_production_min;
}
l.version;
l.renderToString;
l.renderToStaticMarkup;
l.renderToNodeStream;
l.renderToStaticNodeStream;
s.renderToReadableStream;

let i=false;function v(r,{id:d="remix-island",cleanup:t=true}={}){const o=n=>{const[e,s]=reactExports.useState(i);return reactExports.useEffect(()=>{t&&_(o),i=true,s(true);},[]),!e&&n.__remix_island_render_server?reactExports.createElement(r):e?reactDomExports.createPortal(reactExports.createElement(r),document.head):null};return o.displayName="RemixIslandHead",o.__remix_island_id=d,o}function _(r,d=document.head){let t=false;const o=[],n=r.__remix_island_id;for(const e of d.childNodes)if(!(!t&&e.nodeName!=="#comment")){if(t&&e.nodeName==="#comment"&&e.nodeValue===`${n}-end`){o.push(e);break}(t||e.nodeName==="#comment"&&e.nodeValue===`${n}-start`)&&(t=true,o.push(e));}for(const e of o)e.remove();}

/**
 * Create the React Context
 */ const DndContext = reactExports.createContext({
    dragDropManager: undefined
});

function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString()};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0) );
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1) );
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2) );
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3) );
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4) );
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5) );
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6) );
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7) );
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8) );
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9) );
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10) );
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11) );
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process$1 !== "undefined" && true;
}

// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null
    , obj);
}
/**
 * drop-in replacement for _.without
 */ function without$1(items, item) {
    return items.filter((i)=>i !== item
    );
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isObject(input) {
    return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1
    );
}

const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: INIT_COORDS,
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

const ResetCoordinatesAction = {
    type: INIT_COORDS,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource =true , clientOffset , getSourceClientOffset ,  } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch(setClientOffset(clientOffset));
        verifyInvariants$1(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: BEGIN_DRAG,
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
    invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        invariant(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    invariant(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
}

function _defineProperty$4(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$4(target, key, source[key]);
        });
    }
    return target;
}
function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: DROP,
                payload: {
                    dropResult: _objectSpread$4({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: END_DRAG
        };
    };
}
function verifyIsDragging(monitor) {
    invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType
    ) : targetType === draggedItemType;
}

function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset  } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: HOVER,
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        invariant(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!matchesType(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: PUBLISH_DRAG_SOURCE
            };
        }
        return;
    };
}

function createDragDropActions(manager) {
    return {
        beginDrag: createBeginDrag(manager),
        publishDragSource: createPublishDragSource(manager),
        hover: createHover(manager),
        drop: createDrop(manager),
        endDrag: createEndDrag(manager)
    };
}

class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch  } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = createDragDropActions(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ function getSourceClientOffset(state) {
    const { clientOffset , initialClientOffset , initialSourceClientOffset  } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ function getDifferenceFromInitialOffset(state) {
    const { clientOffset , initialClientOffset  } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = intersection(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds  } = options;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        invariant(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        invariant(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow  } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return getSourceClientOffset(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = makeRequestCall(this.flush);
        this.requestErrorThrow = makeRequestCallFromTimer(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false)
        );
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

function getNextHandlerId(role) {
    const id = getNextUniqueId().toString();
    switch(role){
        case HandlerRole.SOURCE:
            return `S${id}`;
        case HandlerRole.TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return HandlerRole.SOURCE;
        case 'T':
            return HandlerRole.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done , value: [, value] ,  } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        validateType(type);
        validateSourceContract(source);
        const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
        this.store.dispatch(addSource(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        validateType(type, true);
        validateTargetContract(target);
        const targetId = this.addHandler(HandlerRole.TARGET, type, target);
        this.store.dispatch(addTarget(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.TARGET;
    }
    removeSource(sourceId) {
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(removeSource(sourceId));
        asap(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

const strictEquality = (a, b)=>a === b
;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

function reduce$5(// eslint-disable-next-line @typescript-eslint/no-unused-vars
_state = NONE, action) {
    switch(action.type){
        case HOVER:
            break;
        case ADD_SOURCE:
        case ADD_TARGET:
        case REMOVE_TARGET:
        case REMOVE_SOURCE:
            return NONE;
        case BEGIN_DRAG:
        case PUBLISH_DRAG_SOURCE:
        case END_DRAG:
        case DROP:
        default:
            return ALL;
    }
    const { targetIds =[] , prevTargetIds =[]  } = action.payload;
    const result = xor(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}

function _defineProperty$3(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$3(target, key, source[key]);
        });
    }
    return target;
}
const initialState$1 = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce$4(state = initialState$1, action) {
    const { payload  } = action;
    switch(action.type){
        case INIT_COORDS:
        case BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case HOVER:
            if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread$3({}, state, {
                clientOffset: payload.clientOffset
            });
        case END_DRAG:
        case DROP:
            return initialState$1;
        default:
            return state;
    }
}

function _defineProperty$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$2(target, key, source[key]);
        });
    }
    return target;
}
const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce$3(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case BEGIN_DRAG:
            return _objectSpread$2({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case PUBLISH_DRAG_SOURCE:
            return _objectSpread$2({}, state, {
                isSourcePublic: true
            });
        case HOVER:
            return _objectSpread$2({}, state, {
                targetIds: payload.targetIds
            });
        case REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread$2({}, state, {
                targetIds: without$1(state.targetIds, payload.targetId)
            });
        case DROP:
            return _objectSpread$2({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case END_DRAG:
            return _objectSpread$2({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

function reduce$2(state = 0, action) {
    switch(action.type){
        case ADD_SOURCE:
        case ADD_TARGET:
            return state + 1;
        case REMOVE_SOURCE:
        case REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

function reduce$1(state = 0) {
    return state + 1;
}

function _defineProperty$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$1(target, key, source[key]);
        });
    }
    return target;
}
function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread$1({}, action.payload, {
                prevTargetIds: get(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: reduce$4(state.dragOffset, action),
        refCount: reduce$2(state.refCount, action),
        dragOperation: reduce$3(state.dragOperation, action),
        stateId: reduce$1(state.stateId)
    };
}

function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    const manager = new DragDropManagerImpl(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ reactExports.memo(function DndProvider(_param) {
    var { children  } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ reactExports.useEffect(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ jsxRuntimeExports.jsx(DndContext.Provider, {
        value: manager,
        children: children
    });
});
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: createDragDropManager(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

// cheap lodash replacements
function memoize(fn) {
    let result = null;
    const memoized = ()=>{
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
function union(itemsA, itemsB) {
    const set = new Set();
    const insertItem = (item)=>set.add(item)
    ;
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    set.forEach((key)=>result.push(key)
    );
    return result;
}

class EnterLeaveCounter {
    enter(enteringNode) {
        const previousLength = this.entered.length;
        const isNodeEntered = (node)=>this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode))
        ;
        this.entered = union(this.entered.filter(isNodeEntered), [
            enteringNode
        ]);
        return previousLength === 0 && this.entered.length > 0;
    }
    leave(leavingNode) {
        const previousLength = this.entered.length;
        this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    }
    reset() {
        this.entered = [];
    }
    constructor(isNodeInDocument){
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
}

class NativeDragSource {
    initializeExposedProperties() {
        Object.keys(this.config.exposeProperties).forEach((property)=>{
            Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get () {
                    // eslint-disable-next-line no-console
                    console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                    return null;
                }
            });
        });
    }
    loadDataTransfer(dataTransfer) {
        if (dataTransfer) {
            const newProperties = {};
            Object.keys(this.config.exposeProperties).forEach((property)=>{
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                    newProperties[property] = {
                        value: propertyFn(dataTransfer, this.config.matchesTypes),
                        configurable: true,
                        enumerable: true
                    };
                }
            });
            Object.defineProperties(this.item, newProperties);
        }
    }
    canDrag() {
        return true;
    }
    beginDrag() {
        return this.item;
    }
    isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
    }
    endDrag() {
    // empty
    }
    constructor(config){
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
}

const FILE = '__NATIVE_FILE__';
const URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__';

const NativeTypes = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  FILE,
  HTML,
  TEXT,
  URL
}, Symbol.toStringTag, { value: 'Module' }));

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    const result = typesToTry.reduce((resultSoFar, typeToTry)=>resultSoFar || dataTransfer.getData(typeToTry)
    , '');
    return result != null ? result : defaultValue;
}

const nativeTypesConfig = {
    [FILE]: {
        exposeProperties: {
            files: (dataTransfer)=>Array.prototype.slice.call(dataTransfer.files)
            ,
            items: (dataTransfer)=>dataTransfer.items
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Files'
        ]
    },
    [HTML]: {
        exposeProperties: {
            html: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Html',
            'text/html'
        ]
    },
    [URL]: {
        exposeProperties: {
            urls: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Url',
            'text/uri-list'
        ]
    },
    [TEXT]: {
        exposeProperties: {
            text: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Text',
            'text/plain'
        ]
    }
};

function createNativeDragSource(type, dataTransfer) {
    const config = nativeTypesConfig[type];
    if (!config) {
        throw new Error(`native type ${type} has no configuration`);
    }
    const result = new NativeDragSource(config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(nativeTypesConfig).filter((nativeItemType)=>{
        const typeConfig = nativeTypesConfig[nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some((t)=>dataTransferTypes.indexOf(t) > -1
        );
    })[0] || null;
}

const isFirefox = memoize(()=>/firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(()=>Boolean(window.safari)
);

class MonotonicInterpolant {
    interpolate(x) {
        const { xs , ys , c1s , c2s , c3s  } = this;
        // The rightmost point in the dataset should give an exact result
        let i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        let low = 0;
        let high = c3s.length - 1;
        let mid;
        while(low <= high){
            mid = Math.floor(0.5 * (low + high));
            const xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            } else if (xHere > x) {
                high = mid - 1;
            } else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        const diff = x - xs[i];
        const diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
    constructor(xs, ys){
        const { length  } = xs;
        // Rearrange xs and ys so that xs is sorted
        const indexes = [];
        for(let i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort((a, b)=>xs[a] < xs[b] ? -1 : 1
        );
        const dxs = [];
        const ms = [];
        let dx;
        let dy;
        for(let i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        const c1s = [
            ms[0]
        ];
        for(let i2 = 0; i2 < dxs.length - 1; i2++){
            const m2 = ms[i2];
            const mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        const c2s = [];
        const c3s = [];
        let m;
        for(let i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            const c1 = c1s[i3];
            const invDx = 1 / dxs[i3];
            const common = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
}

const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    const { top , left  } = el.getBoundingClientRect();
    return {
        x: left,
        y: top
    };
}
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function isImageNode(node) {
    var ref;
    return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth,
        dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    const isImage = isImageNode(dragPreview);
    const dragPreviewNode = isImage ? sourceNode : dragPreview;
    const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    const offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    const { offsetWidth: sourceWidth , offsetHeight: sourceHeight  } = sourceNode;
    const { anchorX , anchorY  } = anchorPoint;
    const { dragPreviewWidth , dragPreviewHeight  } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
    const calculateYOffset = ()=>{
        const interpolantY = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            (offsetFromDragPreview.y / sourceHeight) * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight, 
        ]);
        let y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    const calculateXOffset = ()=>{
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        const interpolantX = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            (offsetFromDragPreview.x / sourceWidth) * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth, 
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    const { offsetX , offsetY  } = offsetPoint;
    const isManualOffsetX = offsetX === 0 || offsetX;
    const isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
}

class OptionsReader {
    get window() {
        if (this.globalContext) {
            return this.globalContext;
        } else if (typeof window !== 'undefined') {
            return window;
        }
        return undefined;
    }
    get document() {
        var ref;
        if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
            return this.globalContext.document;
        } else if (this.window) {
            return this.window.document;
        } else {
            return undefined;
        }
    }
    get rootElement() {
        var ref;
        return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
    }
    constructor(globalContext, options){
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
class HTML5BackendImpl {
    /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ profile() {
        var ref, ref1;
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
        };
    }
    // public for test
    get window() {
        return this.options.window;
    }
    get document() {
        return this.options.document;
    }
    /**
	 * Get the root element to use for event subscriptions
	 */ get rootElement() {
        return this.options.rootElement;
    }
    setup() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        if (root.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        root.__isReactDndBackendSetUp = true;
        this.addEventListeners(root);
    }
    teardown() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        root.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.rootElement);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            var ref;
            (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    }
    connectDragPreview(sourceId, node, options) {
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return ()=>{
            this.sourcePreviewNodes.delete(sourceId);
            this.sourcePreviewNodeOptions.delete(sourceId);
        };
    }
    connectDragSource(sourceId, node, options) {
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        const handleDragStart = (e)=>this.handleDragStart(e, sourceId)
        ;
        const handleSelectStart = (e)=>this.handleSelectStart(e)
        ;
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return ()=>{
            this.sourceNodes.delete(sourceId);
            this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', 'false');
        };
    }
    connectDropTarget(targetId, node) {
        const handleDragEnter = (e)=>this.handleDragEnter(e, targetId)
        ;
        const handleDragOver = (e)=>this.handleDragOver(e, targetId)
        ;
        const handleDrop = (e)=>this.handleDrop(e, targetId)
        ;
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return ()=>{
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    }
    addEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    }
    removeEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
    getCurrentSourceNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return _objectSpread({
            dropEffect: this.altKeyPressed ? 'copy' : 'move'
        }, sourceNodeOptions || {});
    }
    getCurrentDropEffect() {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    }
    getCurrentSourcePreviewNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return _objectSpread({
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false
        }, sourcePreviewNodeOptions || {});
    }
    isDraggingNativeItem() {
        const itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes).some((key)=>NativeTypes[key] === itemType
        );
    }
    beginDragNativeItem(type, dataTransfer) {
        this.clearCurrentDragSourceNode();
        this.currentNativeSource = createNativeDragSource(type, dataTransfer);
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([
            this.currentNativeHandle
        ]);
    }
    setCurrentDragSourceNode(node) {
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        const MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(()=>{
            var ref;
            return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }, MOUSE_MOVE_TIMEOUT);
    }
    clearCurrentDragSourceNode() {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            if (this.rootElement) {
                var ref;
                (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    }
    handleDragStart(e, sourceId) {
        if (e.defaultPrevented) {
            return;
        }
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    }
    handleDragEnter(_e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    }
    handleDragOver(_e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    }
    handleDrop(_e, targetId) {
        this.dropTargetIds.unshift(targetId);
    }
    constructor(manager, globalContext, options){
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.lastClientOffset = null;
        this.hoverRafId = null;
        this.getSourceClientOffset = (sourceId)=>{
            const source = this.sourceNodes.get(sourceId);
            return source && getNodeClientOffset(source) || null;
        };
        this.endDragNativeItem = ()=>{
            if (!this.isDraggingNativeItem()) {
                return;
            }
            this.actions.endDrag();
            if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
            }
            this.currentNativeHandle = null;
            this.currentNativeSource = null;
        };
        this.isNodeInDocument = (node)=>{
            // Check the node either in the main document or in the current context
            return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = ()=>{
            const node = this.currentDragSourceNode;
            if (node == null || this.isNodeInDocument(node)) {
                return;
            }
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.scheduleHover = (dragOverTargetIds)=>{
            if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(()=>{
                    if (this.monitor.isDragging()) {
                        this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: this.lastClientOffset
                        });
                    }
                    this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = ()=>{
            if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = ()=>{
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const { dragStartSourceIds  } = this;
            this.dragStartSourceIds = null;
            const clientOffset = getEventClientOffset(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
            });
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    const sourceId = this.monitor.getSourceId();
                    const sourceNode = this.sourceNodes.get(sourceId);
                    const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        const { anchorX , anchorY , offsetX , offsetY  } = this.getCurrentSourcePreviewNodeOptions();
                        const anchorPoint = {
                            anchorX,
                            anchorY
                        };
                        const offsetPoint = {
                            offsetX,
                            offsetY
                        };
                        const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const { captureDraggingState  } = this.getCurrentSourcePreviewNodeOptions();
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(()=>this.actions.publishDragSource()
                    , 0);
                } else {
                    // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
            } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
            } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
            }
        };
        this.handleTopDragEndCapture = ()=>{
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleTopDragEnterCapture = (e)=>{
            this.dragEnterTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            const isFirstEnter = this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || this.monitor.isDragging()) {
                return;
            }
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = (e)=>{
            const { dragEnterTargetIds  } = this;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                    clientOffset: getEventClientOffset(e)
                });
            }
            const canDrop = dragEnterTargetIds.some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = (e)=>{
            this.dragOverTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = (e)=>{
            const { dragOverTargetIds  } = this;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            this.altKeyPressed = e.altKey;
            this.lastClientOffset = getEventClientOffset(e);
            this.scheduleHover(dragOverTargetIds);
            const canDrop = (dragOverTargetIds || []).some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            } else if (this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
            } else {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
            }
        };
        this.handleTopDragLeaveCapture = (e)=>{
            if (this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            const isLastLeave = this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (this.isDraggingNativeItem()) {
                setTimeout(()=>this.endDragNativeItem()
                , 0);
            }
            this.cancelHover();
        };
        this.handleTopDropCapture = (e)=>{
            this.dropTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if (matchNativeItemType(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = (e)=>{
            const { dropTargetIds  } = this;
            this.dropTargetIds = [];
            this.actions.hover(dropTargetIds, {
                clientOffset: getEventClientOffset(e)
            });
            this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
            } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleSelectStart = (e)=>{
            const target = e.target;
            // Only IE requires us to explicitly say
            // we want drag drop operation to start
            if (typeof target.dragDrop !== 'function') {
                return;
            }
            // Inputs and textareas should be selectable
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            // For other targets, ask IE
            // to enable drag and drop
            e.preventDefault();
            target.dragDrop();
        };
        this.options = new OptionsReader(globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
    }
}

const HTML5Backend = function createBackend(manager, context, options) {
    return new HTML5BackendImpl(manager, context, options);
};

const reactToastifyStyles = "/assets/ReactToastify-Bh76j7cs.css";

const globalStyles = "/assets/index-BPmG4YGu.css";

const xtermStyles = "/assets/xterm-LZoznX6r.css";

const links = () => [{
  rel: "icon",
  href: "/favicon.svg",
  type: "image/svg+xml"
}, {
  rel: "stylesheet",
  href: reactToastifyStyles
}, {
  rel: "stylesheet",
  href: tailwindReset
}, {
  rel: "stylesheet",
  href: globalStyles
}, {
  rel: "stylesheet",
  href: xtermStyles
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
}];
const inlineThemeCode = stripIndents`
  setTutorialKitTheme();

  function setTutorialKitTheme() {
    let theme = localStorage.getItem('bolt_theme');

    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.querySelector('html')?.setAttribute('data-theme', theme);
  }
`;
v(() => /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
  children: [/* @__PURE__ */jsxRuntimeExports.jsx("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */jsxRuntimeExports.jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */jsxRuntimeExports.jsx(Meta, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Links, {}), /* @__PURE__ */jsxRuntimeExports.jsx("script", {
    dangerouslySetInnerHTML: {
      __html: inlineThemeCode
    }
  })]
}));
function Layout({
  children
}) {
  const theme = useStore(themeStore);
  reactExports.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);
  return /* @__PURE__ */jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */jsxRuntimeExports.jsx(ClientOnly, {
      children: () => /* @__PURE__ */jsxRuntimeExports.jsx(DndProvider, {
        backend: HTML5Backend,
        children
      })
    }), /* @__PURE__ */jsxRuntimeExports.jsx(ScrollRestoration, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Scripts, {})]
  });
}
function App() {
  const theme = useStore(themeStore);
  reactExports.useEffect(() => {
    logStore.logSystem("Application initialized", {
      theme,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      timestamp: (/* @__PURE__ */new Date()).toISOString()
    });
  }, []);
  return /* @__PURE__ */jsxRuntimeExports.jsx(Layout, {
    children: /* @__PURE__ */jsxRuntimeExports.jsx(Outlet, {})
  });
}

export { Layout, App as default, links };
