"use strict";var t;t=function(l){function o(i,p,g){var m={invalid:[],getCaret:function(){try{var t=0,a=i.get(0),e=document.selection,a=a.selectionStart;return e&&-1===navigator.appVersion.indexOf("MSIE 10")?((e=e.createRange()).moveStart("character",-m.val().length),t=e.text.length):!a&&"0"!==a||(t=a),t}catch(t){}},setCaret:function(t){try{var a;i.is(":focus")&&((a=i.get(0)).setSelectionRange?(a.focus(),a.setSelectionRange(t,t)):((a=a.createTextRange()).collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select()))}catch(t){}},events:function(){i.on("keydown.mask",function(t){i.data("mask-keycode",t.keyCode||t.which)}).on(l.jMaskGlobals.useInput?"input.mask":"keyup.mask",m.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){i.keydown().keyup()},100)}).on("change.mask",function(){i.data("changed",!0)}).on("blur.mask",function(){s===m.val()||i.data("changed")||i.trigger("change"),i.data("changed",!1)}).on("blur.mask",function(){s=m.val()}).on("focus.mask",function(t){!0===g.selectOnFocus&&l(t.target).select()}).on("focusout.mask",function(){g.clearIfNotMatch&&!a.test(m.val())&&m.val("")})},getRegexMask:function(){for(var t,a,e,n,r,s=[],o=0;o<p.length;o++)(e=M.translation[p.charAt(o)])?(t=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),a=e.optional,(e=e.recursive)?(s.push(p.charAt(o)),n={digit:p.charAt(o),pattern:t}):s.push(a||e?t+"?":t)):s.push(p.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return r=s.join(""),n&&(r=r.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern)),new RegExp(r)},destroyEvents:function(){i.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var a=i.is("input")?"val":"text",a=0<arguments.length?(i[a]()!==t&&i[a](t),i):i[a]();return a},getMCharsBeforeCount:function(t,a){for(var e=0,n=0,r=p.length;n<r&&n<t;n++)M.translation[p.charAt(n)]||(t=a?t+1:t,e++);return e},caretPos:function(t,a,e,n){return M.translation[p.charAt(Math.min(t-1,p.length-1))]?Math.min(t+e-a-n,e):m.caretPos(t+1,a,e,n)},behaviour:function(t){t=t||window.event,m.invalid=[];var a=i.data("mask-keycode");if(-1===l.inArray(a,M.byPassKeys)){var e=m.getCaret(),n=m.val().length,r=m.getMasked(),s=r.length,o=m.getMCharsBeforeCount(s-1)-m.getMCharsBeforeCount(n-1),c=e<n;return m.val(r),c&&(8!==a&&46!==a&&(e=m.caretPos(e,n,s,o)),m.setCaret(e)),m.callbacks(t)}},getMasked:function(t,a){for(var e,n=[],r=void 0===a?m.val():a+"",s=0,o=p.length,c=0,i=r.length,l=1,u="push",h=-1,f=g.reverse?(u="unshift",l=-1,e=0,s=o-1,c=i-1,function(){return-1<s&&-1<c}):(e=o-1,function(){return s<o&&c<i});f();){var k=p.charAt(s),d=r.charAt(c),v=M.translation[k];v?(d.match(v.pattern)?(n[u](d),v.recursive&&(-1===h?h=s:s===e&&(s=h-l),e===h&&(s-=l)),s+=l):v.optional?(s+=l,c-=l):v.fallback?(n[u](v.fallback),s+=l,c-=l):m.invalid.push({p:c,v:d,e:v.pattern}),c+=l):(t||n[u](k),d===k&&(c+=l),s+=l)}a=p.charAt(e);return o!==i+1||M.translation[a]||n.push(a),n.join("")},callbacks:function(t){function a(t,a,e){"function"==typeof g[t]&&a&&g[t].apply(this,e)}var e=m.val(),n=e!==s,r=[e,t,i,g];a("onChange",!0==n,r),a("onKeyPress",!0==n,r),a("onComplete",e.length===p.length,r),a("onInvalid",0<m.invalid.length,[e,t,i,m.invalid,g])}};i=l(i);var a,M=this,s=m.val();p="function"==typeof p?p(m.val(),void 0,i,g):p,M.mask=p,M.options=g,M.remove=function(){var t=m.getCaret();return m.destroyEvents(),m.val(M.getCleanVal()),m.setCaret(t-m.getMCharsBeforeCount(t)),i},M.getCleanVal=function(){return m.getMasked(!0)},M.getMaskedVal=function(t){return m.getMasked(!1,t)},M.init=function(t){t=t||!1,g=g||{},M.clearIfNotMatch=l.jMaskGlobals.clearIfNotMatch,M.byPassKeys=l.jMaskGlobals.byPassKeys,M.translation=l.extend({},l.jMaskGlobals.translation,g.translation),M=l.extend(!0,{},M,g),a=m.getRegexMask(),!1===t?(g.placeholder&&i.attr("placeholder",g.placeholder),i.data("mask")&&i.attr("autocomplete","off"),m.destroyEvents(),m.events(),t=m.getCaret(),m.val(m.getMasked()),m.setCaret(t+m.getMCharsBeforeCount(t,!0))):(m.events(),m.val(m.getMasked()))},M.init(!i.is("input"))}l.maskWatchers={};function a(){var t=l(this),a={},e="data-mask-",n=t.attr("data-mask");if(t.attr(e+"reverse")&&(a.reverse=!0),t.attr(e+"clearifnotmatch")&&(a.clearIfNotMatch=!0),"true"===t.attr(e+"selectonfocus")&&(a.selectOnFocus=!0),c(t,n,a))return t.data("mask",new o(this,n,a))}var c=function(t,a,e){e=e||{};var n=l(t).data("mask"),r=JSON.stringify,s=l(t).val()||l(t).text();try{return"function"==typeof a&&(a=a(s)),"object"!=typeof n||r(n.options)!==r(e)||n.mask!==a}catch(t){}};l.fn.mask=function(t,a){a=a||{};function e(){if(c(this,t,a))return l(this).data("mask",new o(this,t,a))}var n=this.selector,r=l.jMaskGlobals,s=r.watchInterval,r=a.watchInputs||r.watchInputs;return l(this).each(e),n&&""!==n&&r&&(clearInterval(l.maskWatchers[n]),l.maskWatchers[n]=setInterval(function(){l(document).find(n).each(e)},s)),this},l.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},l.fn.unmask=function(){return clearInterval(l.maskWatchers[this.selector]),delete l.maskWatchers[this.selector],this.each(function(){var t=l(this).data("mask");t&&t.remove().removeData("mask")})},l.fn.cleanVal=function(){return this.data("mask").getCleanVal()},l.applyDataMask=function(t){((t=t||l.jMaskGlobals.maskElements)instanceof l?t:l(t)).filter(l.jMaskGlobals.dataMaskAttr).each(a)};var t,e,n,r={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:(t="input",n=document.createElement("div"),(e=(t="on"+t)in n)||(n.setAttribute(t,"return;"),e="function"==typeof n[t]),e),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!(n=null)},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};l.jMaskGlobals=l.jMaskGlobals||{},(r=l.jMaskGlobals=l.extend(!0,{},r,l.jMaskGlobals)).dataMask&&l.applyDataMask(),setInterval(function(){l.jMaskGlobals.watchDataMask&&l.applyDataMask()},r.watchInterval)},"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery||Zepto);