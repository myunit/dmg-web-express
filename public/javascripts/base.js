/* json */
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,h,g=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,h=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)h[c]=str(c,i)||"null";return e=0===h.length?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=0===h.length?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

(function () {
	//jQuery.cookie
	jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};
	/* hoverClass */
	$.fn.hoverClass=function(a,b,c){var d=this;return d.each(function(e){d.eq(e).mouseenter(function(){$(this).addClass(a),b&&b(this)}),d.eq(e).mouseleave(function(){$(this).removeClass(a),c&&c(this)})}),d};
	/* textFocus */
	$.fn.textFocus=function(a){var b,c;return a=$.extend({val:null,focusCls:"txt-focus",changeCls:"txt-change",keyback:function(){}},a||{}),b=a.focusCls,c=a.changeCls,this.each(function(){var d=$(this),e=null==a.val?$(d).val():a.val;d.val(e),d.focus(function(){d.val()==e&&d.val(""),b&&d.addClass(b)}),d.blur(function(){""==d.val()&&d.val(e),b&&d.removeClass(b)}),c&&d.keyup(function(){d.val()!=e&&""!=d.val()?d.addClass(c):d.removeClass(c),a.keyback(d)})}),this};

})(jQuery);

/* soLazy */
(function(a){a.fn.extend({soLazy:function(h){h=a.extend({type:"scroll",imgTag:"src2",defHeight:40,defDelay:4000},h||{});var b=a(this);var d=b.find("img"),f=h.imgTag;if(h.type=="scroll"){var c=function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-h.defHeight};var g=function(){d.each(function(){if(a(this).offset().top<=c()){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}}})};g();a(window).bind("scroll",function(){g()})}if(h.type=="delay"){var e=setTimeout(function(){d.each(function(){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}})},h.defDelay)}return b}})})(jQuery);

/* soScrollTo */
jQuery.extend(jQuery.easing,{easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c}}),function(a){a.fn.soScrollTo=function(b){var c;b=a.extend({direction:"y",speed:800,easeType:"easeInOutExpo",dis:0},b||{}),c=a(this),c.click(function(){var d,c=a(this).attr("href");return c=a("#"!=c?c:"body"),c.length&&(d={t:(c.offset().top+b.dis)||0,l:(c.offset().left+b.dis)||0},"x"==b.direction?a("html,body").stop().animate({scrollLeft:d.l},b.speed,b.easeType):a("html,body").stop().animate({scrollTop:d.t},b.speed,b.easeType)),!1})}}(jQuery);

/* soChange 1.6.2 */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

/* sobox 2.0 */
!function(a,b){a.sobox={maskIndex:0,showMask:function(c){var e,f,g,d=this;return c?(e=a(".so-openmask"),e.length?d.maskIndex++:(e=a('<div class="so-openmask"></div>'),a("body").append(e),d.maskIndex=1),f="undefined"==typeof b.body.style.maxHeight?b:window,g=a(f).height()-18,e.height(c?g+20:0),a(window).resize(function(){var b=a(f).height()-18;e.height(c?b+20:0)}),e.css("z-index",1e3+10*d.maskIndex)):e=null,e},show:function(b,c,d){var e=this,f=a(b.obj),g=e.showMask(c);return e.setPos(b),b.onlyOne&&a("body").data("soonlyone",!0),f.css("z-index",1002+10*e.maskIndex).fadeIn(),f.find(".s-close").bind("click",function(){e.hide(f)}),d&&d(),g},hide:function(b,c,d){var e=this,f=a(".so-openmask");a(b).fadeOut("fast",function(){d&&d()}),c&&(e.maskIndex--,f.css("z-index",1e3+10*e.maskIndex),0==e.maskIndex&&f.remove()),a(b).find(".s-close").unbind("click")},drag:function(c,d){function g(a){null==a&&(a=window.event),e.css({opacity:"0.4",left:a.clientX-posX+"px",top:a.clientY-posY+"px"})}var e=a(c),f=a(d);f.mousedown(function(c){c||(c=window.event),posX=c.clientX-parseInt(e.css("left")),posY=c.clientY-parseInt(e.css("top")),a(b).bind("mousemove.drag",function(a){g(a)})}),a(b).mouseup(function(c){c.target==f.get(0)&&(a(b).unbind("mousemove.drag"),e.css({opacity:"1"}))})},setPos:function(c){var e,f,g,h,i,j,k,l,m,n;switch(c=a.extend({mode:"center",obj:null,pos:[0,0],offset:[0,0]},c),e=a(c.obj),f=Math.floor(e.height()/2),g=Math.floor(e.width()/2),h=a(window).scrollTop(),i=a(window).height(),j=c.pos[0],k=c.pos[1],l=c.offset[0],m=c.offset[1],e.css({position:"fixed"}),"undefined"==typeof b.body.style.maxHeight&&(n=e.find("select"),a("select").not(n).hide()),c.mode){case"win":e.css({left:j+l,top:k+m}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+k+m});break;case"doc":e.css({position:"absolute",left:j+l,top:k+m});break;case"tc":e.css({left:"50%",top:m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+m});break;case"bc":e.css({left:"50%",bottom:m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+m+i});break;default:e.css({top:"50%",left:"50%",marginTop:-f-10+m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+i/2})}},pop:function(b){function j(i){var j,l,m;b=a.extend(b,i||{}),b.showTitle&&e.append(f),b.outCloseBtn&&g.addClass("s-sopop-out-close"),e.append(g).append(h),b.height&&"iframe"!=b.type&&e.css("height",b.height+"px"),e.css({visibility:b.visibility?"visible":"hidden"}),"content"==b.type&&h.html(b.content),"target"==b.type&&(j=a(b.target).show(),h.append(j)),"iframe"==b.type&&(l=a('<iframe id="'+b.iframeID+'" name="'+b.iframeID+'" src="'+b.iframe+'" width="100%" height="'+b.height+'" frameborder="0" scrolling="auto"></iframe>'),h.html(l)),"ajax"==b.type&&h.load(b.ajax.url,b.ajax.data,function(){c.setPos({mode:b.posType,obj:e,pos:b.pos,offset:b.offset}),b.ajax.callback&&b.ajax.callback()}),b.btn.length>0&&(m=a('<p class="p-so-popBtn"></p>'),a.each(b.btn,function(){var b=a.extend({cls:null,text:"确定",link:"#",removePop:!0,callback:function(){}},this),c=a('<a class="a-sopop-btn" href="'+b.link+'"><span class="s-sopop-btn">'+b.text+"</span></a>");null!==b.cls&&c.addClass(b.cls),c.bind("click",function(){return b.callback&&b.callback(k)&&k(),b.removePop&&k(),"#"===b.link?!1:!0}),m.append(c)}),e.append(m)),a("body").append(e),b.showTitle&&b.drag&&(f.addClass("h2-sopop-move"),c.drag(e,f)),b.beforePop(e,f,g,h),d=c.show({mode:b.posType,obj:e,pos:b.pos,offset:b.offset,onlyOne:b.onlyOne},b.showMask,b.onPop(e)),g.bind("click",function(){k()}),d&&b.maskClick&&d.bind("click",function(){k()})}function k(d){b=a.extend(b,d||{}),c.hide(e,b.showMask),a("body").removeData("soonlyone"),null!=b.target&&a(b.target).appendTo("body").hide(),e.remove(),b.closePop()}var d,e,f,g,h,i,c=this;return b=a.extend({type:"content",target:null,content:null,iframe:null,iframeID:"sopop-iframe",ajax:{url:null,data:null,callback:function(){}},posType:"center",pos:[0,0],offset:[0,0],cls:null,width:400,height:null,defaultShow:!0,visibility:!0,title:"提示",showTitle:!0,outCloseBtn:!1,showMask:!0,onlyOne:!1,drag:!0,maskClick:!0,btn:[],beforePop:function(){},onPop:function(){},closePop:function(){}},b||{}),e=a('<div class="so-popbox '+(b.cls?b.cls:"")+'" style="width:'+b.width+'px;display:none;"></div>'),f=a('<h2 class="h2-sopop"><span class="s-sopop-title">'+b.title+"</span></h2>"),g=a('<span class="s-sopop-close">[关闭]</span>'),h=a('<div class="so-popbox-cont"></div>'),i=a("body").data("soonlyone"),b.defaultShow&&!i&&j(),{wrap:e,mask:d,opt:b,removePop:k,showPop:j}},alert:function(a,b,c){var d=this;d.pop({cls:"so-popAlert",title:a,width:360,content:b,btn:[{text:"确定"}],closePop:c})},confirm:function(a,b,c,d){var e=this;e.pop({cls:"so-popConfirm",title:a,width:360,content:b,btn:[{text:"确定",callback:function(){c&&c()}},{text:"取消",cls:"a-sopop-cancel",callback:function(){d&&d()}}]})},tip:function(b){var e,c=this,d=null;return b=a.extend({cls:"so-popTip",showTitle:!1,posType:"tc",showMask:!1,width:250,stayTime:5e3,offset:[0,5],closePop:function(){d&&clearTimeout(d)}},b||{}),e=c.pop(b),b.stayTime>0&&(d=setTimeout(function(){e.removePop()},b.stayTime)),e},loading:function(b){var d,c=this;return b=a.extend({type:"content",cls:"so-loading",showTitle:!1,maskClick:!1,width:80,height:36,content:"",stayTime:0},b||{}),d=c.pop(b),b.stayTime>0&&setTimeout(function(){d.removePop()},b.stayTime),{open:d.showPop,close:d.removePop}}},a.fn.extend({soIframePop:function(b){var c=a.extend({type:"iframe",targetTag:"href",splitString:"#soIframe?",width:800,height:480,showTitle:!1},b||{}),d=[];return this.each(function(){var g,h,b=a(this),e=b.attr(c.targetTag).split(c.splitString),f=e[0];par=e[1]?e[1].split("&"):"",g={},a.each(par,function(){var a=this.split("=");g[a[0]]=a[1]}),c=a.extend(c,g||{}),c.showTitle="true"==c.showTitle?1:+c.showTitle,c.iframe=f,c.defaultShow=!1,h=a.sobox.pop(c),d.push(h),b.click(function(){return h.showPop(),a(this).data("iframePop",h),!1})}),d},soSidePop:function(b){var c=a(this),d=b.event||"click",e=null;return c.bind(d,function(c){var d=a(this).offset(),f="mouse"==b.por?[c.pageX,c.pageY]:[d.left,d.top],g=a.extend({showMask:!1,posType:"doc",por:"mouse",pos:f,offset:[10,10],onlyOne:!0,returnFalse:!0},b||{});return e=a.sobox.pop(g),g.returnFalse?!1:void 0}),1==b.leaveHide&&c.bind("mouseout",function(){e&&e.removePop()}),c},soOverTip:function(b){var c=a(this),d=a.extend({cls:"so-overTip",showMask:!1,posType:"doc",offset:[10,10],showTitle:!1,onlyOne:!0},b||{}),e=null;return c.mouseenter(function(b){d.pos=[b.pageX,b.pageY],e=a.sobox.pop(d)}).mouseleave(function(){e.removePop()}),c},clickPop:function(b){var c;b=a.extend({optAll:null},b||{}),c=a(this),c.click(function(){var f,g,h,j,c=a(this).attr("rel"),d=this,e=a(this).attr("popType")||"target";if(c){for(f=b.optAll,g=c.split("."),h=g.length,i=0;h>i;i++)f=f[g[i]];j=c.replace(".","_"),optT=a.extend({title:a(this).text(),type:e,target:a("#"+j),iframe:a(this).attr("href")},f),optT.beforePop=function(a,b,c,e){f.beforePop&&f.beforePop.call(d,a,b,c,e)},b.optAll.$pop=a.sobox.pop(optT)}})}})}(jQuery,document);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"class",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?$(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),r[c]&&b&&(f=r[c].rule(b,d)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clear:function(){_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,clear:vv.clear,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},integer:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},mobileOrEmal:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},remote:{rule:function(a,b){var c={};c[b.name]=a,$.ajax({url:b.url,data:c,success:function(a){return a},error:function(){alert("向服务器请求验证失败！")}})},msg:function(){return"您的填写不正确！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

/* soTend */
!function(a){a.fn.extend({soTend:function(b){function p(){g==h||l||(l=!0,b.thumb&&a(b.thumb).removeClass(b.thumbNowClass).eq(h-1).addClass(b.thumbNowClass),b.slideTime<=0?(h==o-1&&(h=1),0==h&&(h=o-2),d.css({left:-100*h+"%"} ),g=h,l=!1):(g=h,d.animate({left:-100*h+"%"} ,b.moveTime,function(){h>o-2&&(h=1,d.css({left:"-100%"} ),g=h),0==h&&(h=o-2,d.css({left:-100*h+"%"} ),g=h),b.thumb&&a(b.thumb).removeClass(b.thumbNowClass).eq(h-1).addClass(b.thumbNowClass),b.callback&&b.callback(g,h),l=!1;$(".child").css({ margin:"0 0 0 1000px"});var x=300;f=e.eq(h).find(".child");f.each(function(){$(this).animate({ margin:"0 0 0 -500px"},x);x+=300;});} )))}function q(){h=g+1,p()} var c,d,e,g,h,i,j,k,l,m,n,o,r;b=a.extend({moveWrap:"moveWrap",easing:"swing",obj:null,btnPrev:null,btnNext:null,thumb:null,thumbOverEvent:!0,thumbNowClass:"now",defInx:0,overStop:!0,clickFalse:!0,autoChange:!0,changeTime:5e3,moveTime:500,delayLazy:!0,delayTag:"src3",delayTime:3e3,callback:function(){}} ,b||{} ),c=a(this),d=c.find(b.moveWrap),e=d.find(b.obj),e.length,g=b.defInx+1,k=!1,l=!1,m=e.first().clone(),n=e.last().clone(),d.append(m).prepend(n),e=d.find(b.obj),o=e.length,e.each(function(b,c){a(c).css({ left:100*b+"%" } );} ),d.css({ left:-100*g+"%"}),b.delayLazy&&setTimeout(function(){d.find("img").each(function(){a(this).attr("src",a(this).attr(b.delayTag)).removeAttr(b.delayTag)})} ,b.delayTime),b.thumb&&(r=a(b.thumb),r.removeClass(b.thumbNowClass).eq(g-1).addClass(b.thumbNowClass),r.click(function(){return h=r.index(a(this))+1,p(),b.clickFalse?!1:void 0}),b.thumbOverEvent&&r.hover(function(){h=r.index(a(this))+1,j=setTimeout(p,b.delayTime)} ,function(){clearTimeout(j)} )),b.btnNext&&a(b.btnNext).click(function(){return q(),!1}),b.btnPrev&&a(b.btnPrev).click(function(){return h=(g+o-1)%o,p(),!1} ),b.autoChange&&(clearInterval(i),i=setInterval(function(){k||q()} ,b.changeTime),b.overStop&&(c.hover(function(){k=!0} ,function(){k=!1}),b.thumb&&a(b.thumb,b.obj).hover(function(){k=!0},function(){k=!1} )))}})}(jQuery);

$.pop=function(a){var d=$.extend({cls:null,width:null,widthPer:0.9,pos:"center",title:null,maxW:null,height:null,target:null,content:null,show:true,showMask:true,maskClick:true,beforePop:function(){},closePop:function(){}},a||{});var g=$('<div class="so-openmask"></div>');var j=$('<div class="so-popbox"></div>');var f=$('<div class="so-poptitle"></div>');var i=$('<span class="s-sopop-close">X</span>');var h=$('<div class="so-popbox-cont"></div>');var c=$(".fn-close");if(d.show){b()}if(d.maskClick){g.click(function(){e()})}c.click(function(){e()});i.click(function(){e()});return{wrap:j,removePop:e,showPop:b};function b(l){var l=$.extend(d,l||{});l.cls&&j.addClass(l.cls);j.append(i);if(l.title){j.append(f.html(l.title))}j.append(h);if($(".so-openmask").length==0){$("body").append(g)}$("body").append(j);l.content&&h.append(l.content);l.target&&h.append($(l.target).show());l.beforePop(j);function k(){var n=$(window).width();if(l.showMask){g.css({"bottom":"0px"})}var o=l.width?l.width:n*l.widthPer;o=(l.maxW&&o>l.maxW)?l.maxW:o;j.css({height:l.height});var m=j.height();if(l.pos=="center"){j.css({"left":"50%","top":"-150%","width":o,"marginLeft":-o/2,"marginTop":-m/2});setTimeout(function(){j.css({"top":"50%"})},100)}if(l.pos=="bottom"){j.css({"left":"0px","right":"0px","bottom":"-100%"});setTimeout(function(){j.css({"bottom":"0px"})},100)}if(l.pos=="top"){j.css({"left":"0px","right":"0px","top":"-100%"});setTimeout(function(){j.css({"top":"0px"})},100)}}k();$(window).resize(function(){k()})}function e(){$("body").append($(d.target).hide());d.closePop();g.remove();j.remove()}};$.alert=function(c){var g=$.extend({title:"提示",content:null,widthPer:0.8,removeDelay:0,callback:function(){}},c||{});var f='<div class="d-content">'+g.content+"</div>";var a='<p class="p-sopop-btn"><span class="s-sopop-btn">确定</span></p>';var e=$.pop($.extend(g,{content:(f+a)}));e.wrap.find(".s-sopop-btn").click(function(){g.callback();e.removePop()});if(g.removeDelay){setTimeout(function(){e.removePop()},g.removeDelay)}};$.confirm=function(c){var g=$.extend({title:"提示",content:null,widthPer:0.8,sure:function(){},cancel:function(){}},c||{});var f='<div class="d-content">'+g.content+"</div>";var a='<p class="p-sopop-btn"><span class="s-sopop-btn s-sopop-sure">确定</span><span class="s-sopop-btn s-sopop-cancel">取消</span></p>';var e=$.pop($.extend(g,{content:(f+a)}));e.wrap.find(".s-sopop-sure").click(function(){g.sure();e.removePop()});e.wrap.find(".s-sopop-cancel").click(function(){g.cancel();e.removePop()})};$.loadTip=function(a){var c=$.extend({cls:"so-loadtip",content:null,widthPer:0.8,width:null,removeDelay:1000},a||{});var b=$.pop(c);if(c.removeDelay){setTimeout(function(){b.removePop()},c.removeDelay)}};


var mTrong = mTrong||{};


mTrong.base = {
	init : function () {
		var t = this;
		t.lazy();
		t.textFocus();
        t.formValidate();
		t.navFix();
		t.myDrop();
		t.proHover();
		t.banner();
		t.thumbShow();
		t.filterSel();
		t.cartAnimation();
		$('.mini-cart').hoverClass('mini-cart-over');
	},
	cartAnimation:function(){//购物车动画
		if($(".cartBtn").length){
				var timer=null;
				function addToCart(e){
					 var bezier_params = {
					  start: {
						  x: e.pageX,
						  y: e.pageY,
						  angle: -60
					  },
					  end: {
						  x: 1030,
						  y: 10,
						  angle: 60,
						  length: 0.33
					  }
				  };
				 $(".cart-animation").css({"left":e.pageX, "top":e.pageY,opacity:"1"}).show();
				 $(".cart-animation").animate({path: new $.path.bezier(bezier_params)},"slow",
				   function(){
					 $(".cart-animation").animate({left:"1090px",top:"50px",opacity:"0"},function(){
						 $(this).hide();
						 $(".cart-add-success-box").fadeIn(function(){
							 timer=setTimeout(function(){
								 $(".cart-add-success-box").hide();
							 },3000)
						  });
					  });  
				   });
				}
				$(".cart-add-success-box").hover(function(){
					clearTimeout(timer);
				},function(){
					$(this).hide();
				});
				$(".close-btn").click(function(){
					$(".cart-add-success-box").hide();
				})
				$(".cartBtn").bind("click",addToCart);
		}
		
		
	},
	thumbShow : function () {//大图相册事件
		$('.a-thumb').click(function () {
			var src = $(this).attr('href');
			$('.img-bigShow').attr('src',src);
			return false;
		});
	},
	filterSel : function () {
      if ($('.filterOne').length) {
        var $info = $('.filterOne').find('.s-info');
          $info.click(function() {
            var $par = $(this).parents('.filterOne');
            var $li = $par.find('.li-a');
            $li.removeClass('li-checked');
            $(this).parent('.li-a').addClass('li-checked');
          });
      };
    },
	myDrop:function(){//首页我的大内购下拉菜单
	if ($('.my-dNei').length){ 
		var timer=null;
		$(".drop-js").hover(function(){
			$(this).addClass("on");
			$(".drop-my-dNei").show();
		},function(){
			timer=setTimeout(function(){
				$(".drop-my-dNei").hide();
				$(".drop-js").removeClass("on");
			},500);
		});
		
		$(".drop-my-dNei").hover(function(){
			clearTimeout(timer);
		},function(){
			$(this).hide();
			$(".drop-js").removeClass("on");
		});
		
		$(".changePsw").click(function(){
			$(".drop-my-dNei").hide();
			$(".changePsw-box").show();
		})
		
		$(".changePsw-box").hover(function(){
			$(".drop-js").addClass("on");
		},function(){
			$(this).hide();
			$(".drop-js").removeClass("on");
		});
		$(".a-underLink").click(function(){
			$(".changePsw-box").hide();
		});
	};
	},
	banner : function () {
		var $aBanner = $('.a-banner');
		if ($aBanner.length>1) {
			setTimeout(function () {
				var $thumbH = '<p class="p-slide-thumb"><span class="s-thumbWrap">';
				var len = $aBanner.length;
				for (var i = len; i--;) {
					$thumbH += '<span class="s-thumb"></span>';
				}
				$thumbH += '</span></p><p class="wrapper p-slide-btn"><span class="s-thumb-next"></span></p>';
				$('.main-banner').append($thumbH);

				$('.main-banner').soTend({
					moveWrap : '.banner-slidewrap',
					obj : '.a-banner',
					thumb : '.p-slide-thumb .s-thumb',
					thumbNowClass : 's-thumb-now',
					btnPrev : '.s-thumb-prev',
					btnNext : '.s-thumb-next'
				});
			},2000);
			$('.li-news').soChange({
				btnPrev : '.s-scrollPrev',
				btnNext : '.s-scrollNext',
				slideTime:500,
				changeTime :4000
			});
		}
	},
	lazy : function () {//懒加载
		$('.lazybox').soLazy();
		$('.mainBanner').soLazy({type : 'delay',imgTag : 'src3',defDelay:2000});
	},
      formV : null,
      formValidate : function () {//表单验证
          var me = this;
          if ($('.form-validate').length) {
             me.formV =  $('.form-validate').soValidate({//验证登录弹窗里的表单
                  submitBtn : '.btnValidate',
                  submit : function (form) {//默认验证成功提交submit事件
                      form.submit();
                      window.console && console.log(form.serializeObject());
                      window.console && console.log('验证通过，提交登录！');
                  },
                  fail : function (form,failInputs) {//验证失败
                      var $failF = $(failInputs[0]);
                      //$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
                      $failF.focus();
                  }
              });
          };
      },
	textFocus : function () {//顶部登录框focus事件
          $('.txt-h').textFocus({keyback: function (o) {
              if ($(o).val()!=='') {
                $(o).parent('.p-item').addClass('p-item-hasVal');
              }else{
                $(o).parent('.p-item').removeClass('p-item-hasVal');
              };
          }});
	},
	
	
	navFix : function () {//导航固定事件
		if ($('.fix-mainnav').length) {
			var $nav = $('.fix-mainnav');
			var t = $nav.offset().top;
			$(window).scroll(function () {
				var st = $(window).scrollTop();
				if (st>t) {
					$nav.css({'position':'fixed'});
					if (!-[1,]&&!window.XMLHttpRequest) {//ie6
						$nav.css({'position':'absolute','top':st+'px'});
					}
				}else {
					$nav.css({'position':'relative','top':'0px'});
				}
			});
		}
	},
	proHover : function () {//商品列表鼠标经过
		$('.li-pro').hoverClass('li-pro-over');
	},
	
	
	
	popLogin : function () {//弹窗登录
		t = this;
		t.popR&&t.popR.removePop();
		if (t.popL) {
			t.popL.showPop();
		}else {
			if (!$('.popLoginBox').length) {
				$('body').append(t.popLoginHtml());
			}
			t.popL = $.sobox.pop({
				type : 'target',
				target : '.popLoginBox',
				title : '您还没有登录',
				cls : 'mtrongBox-b',
				width :435,
				onPop : function () {
					$('.popLoginBox').find('.a-toReg').click(function () {
						if (!$('.popRegBox').length) {
							$('body').append(t.popRegHtml());
						}
						t.popReg();
						return false;
					});
				}
			});

			$('#pop-formLogin').soValidate({//验证登录弹窗里的表单
				submit : function (form) {//默认验证成功提交submit事件
					var v = form.serializeObject();
					window.console && console.log(v);
					$.ajax({
						url : '/site/api/user.aspx/Login',
						data : JSON.stringify(v),
						dataType : 'json',
						contentType : 'application/json',
						type : 'post',
						success : function (res) {//登录成功
							var result = res.d&&JSON.parse(res.d);
							if (result.error===0) {
								$('#s-loginErr').hide();
								t.popL.removePop();
								$('.p-welcome').html('<span class="s-toRegPass">欢迎'+result.data.user_name+' </span> <span class="s-toRegPass"><a href="/app/common/login/signoff.aspx" class="a-reg">注销退出</a></span>');
							}else {
								$('#s-loginErr').text(result.message).css('display','block');
							}
						}
					});
					//form.submit();
					//alert('验证通过，提交登录！');
				},
				fail : function (form,failInputs) {//验证失败
					var $failF = $(failInputs[0]);
					//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
					$failF.focus();
				}
			});
		}
	},
	popReg : function () {//弹窗注册
		t = this;
		t.popL&&t.popL.removePop();
		if (t.popR) {
			t.popR.showPop();
		}else {
			if (!$('.popRegBox').length) {
				$('body').append(t.popRegHtml());
			}
			t.popR = $.sobox.pop({
				type : 'target',
				target : '.popRegBox',
				title : '您还没有注册？',
				cls : 'mtrongBox-b',
				offset : [0,-30],
				width :465,
				onPop : function () {
					$('.popRegBox').find('.a-toLogin').click(function () {
						if (!$('.popLoginBox').length) {
							$('body').append(t.popLoginHtml());
						}
						t.popLogin();
						return false;
					});
				}
			});

			$('#pop-formReg').soValidate({//验证注册弹窗里的表单
				submit : function (form) {//默认验证成功提交submit事件
					var v = form.serializeObject();
					window.console && console.log(v);
					$.ajax({
						url : '/site/api/user.aspx/Register',
						data : JSON.stringify(v),
						dataType : 'json',
						contentType : 'application/json',
						type : 'post',
						success : function (res) {
							var result = res.d&&JSON.parse(res.d);
							if (result.error===0) {
								$('#s-regErr').hide();
								t.popR.removePop();
								$('.p-welcome').html('<span class="s-toRegPass">欢迎'+v.e_name+'</span> <span class="s-toRegPass"><a href="/app/common/login/signoff.aspx" class="a-reg">注销退出</a></span>');
							}else {
								window.console && console.log(result);
								$('#s-regErr').text(result.message).css('display','block');
							}
						}
					});
				},
				fail : function (form,failInputs) {
					var $failF = $(failInputs[0]);
					//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
					$failF.focus();
				}
			});
		}
	}
};

$(function () {
	mTrong.base.init();
});
