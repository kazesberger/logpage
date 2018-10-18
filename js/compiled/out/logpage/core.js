// Compiled by ClojureScript 1.10.238 {}
goog.provide('logpage.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/logpage/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof logpage.core.app_state !== 'undefined'){
} else {
logpage.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
logpage.core.on_js_reload = (function logpage$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1539846785077
