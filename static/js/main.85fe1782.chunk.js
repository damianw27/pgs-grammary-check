(this["webpackJsonp@pgs/interface"]=this["webpackJsonp@pgs/interface"]||[]).push([[0],{152:function(e,r,t){},239:function(e,r,t){},240:function(e,r,t){},241:function(e,r,t){},242:function(e,r,t){"use strict";t.r(r);var n,c=t(12),s=t(141),a=t(63),o=t(85),i=t(142),l=t.n(i),u=(t(152),t(153),t(7)),j=function(e){var r=function(e,r){return'<span class="editor-line-number">'.concat(r+1,"</span>").concat(e)};return Object(u.jsx)(l.a,{value:e.value,onValueChange:function(r){return e.onValueChange(r)},highlight:function(e){return t=e,Object(o.highlight)(t,o.languages.txt,"txt").split("\n").map(r).join("\n");var t},padding:0,textareaId:"code-area",className:"editor"})},d=t(144),h=t(47);function O(e,r){switch(r.type){case n.ADD_ERROR:return Object(h.a)(Object(h.a)({},e),{},{errors:[].concat(Object(d.a)(e.errors),[r.payload])});case n.CLEAR_ERRORS:return Object(h.a)(Object(h.a)({},e),{},{errors:[]});default:return e}}!function(e){e.ADD_ERROR="[parser] add parser error",e.CLEAR_ERRORS="[parser] clear parser errors"}(n||(n={}));var p={errors:[]},b=t(86),f=t(143),x=t(9),g=t(87),m=t(88),R=Object(g.a)((function e(r){Object(m.a)(this,e),this.payload=r,this.type=n.ADD_ERROR})),w=Object(g.a)((function e(){Object(m.a)(this,e),this.type=n.CLEAR_ERRORS})),v=(t(239),function(e){var r;return Object(u.jsx)("li",{className:"errors-list-element",children:(r=e.error,"[line ".concat(r.linePosition,":").concat(r.charPosition,"] ").concat(r.message))},"code-error-".concat(e.errorIndex))}),E=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-check-circle-fill",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})},y=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})},A=(t(240),function(e){return 0===e.errors.length?Object(u.jsxs)("span",{className:"no-errors",children:[Object(u.jsx)(E,{}),Object(u.jsx)("span",{className:"no-errors-str",children:"No errors!"})]}):Object(u.jsxs)("div",{className:"errors-wrapper",children:[Object(u.jsxs)("span",{className:"found-errors",children:[Object(u.jsx)(y,{}),Object(u.jsx)("span",{className:"found-errors-str",children:"Found '".concat(e.errors.length,"' parser errors")})]}),Object(u.jsx)("ul",{className:"errors-list",children:e.errors.map((function(e,r){return Object(u.jsx)(v,{errorIndex:r,error:e},"code-error-".concat(r))}))})]})});function C(){var e=Object(c.useState)("CREATE GRAPH TYPE Test {\n  (:EmployeeType)[BuddyType: FriendType {since DATE, casual BOOL}]->(:EmployeeType)\n}\n"),r=Object(a.a)(e,2),t=r[0],n=r[1],s=function(){var e=Object(c.useReducer)(O,p),r=Object(a.a)(e,2),t=r[0],n=r[1];return{parse:Object(c.useCallback)((function(e){if(n(new w),""!==e){var r=b.CharStreams.fromString(e),t=new f.PgsLexer(r),c=new b.CommonTokenStream(t),s=new x.PgsParser(c);s.addErrorListener({syntaxError:function(e,r,t,c,s){"[line ".concat(t,":").concat(c,"] ").concat(s),n(new R({linePosition:t,charPosition:c,message:s}))}}),s.pgs()}}),[]),errors:t.errors}}();return Object(c.useEffect)((function(){s.parse(t)}),[t]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{value:t,onValueChange:function(e){return n(e)}}),Object(u.jsx)(A,{errors:s.errors})]})}t(241);var N=document.getElementById("root");null!==N&&Object(s.createRoot)(N).render(Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(C,{})}))}},[[242,1,2]]]);
//# sourceMappingURL=main.85fe1782.chunk.js.map