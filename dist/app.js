/*!
 * less-hat-website
 * http://lesshat.com/
 * team@madebysource.com
 * 
 * Copyright 2015 Piffle LLC - All Rights Reserved
 * 
 * Author:
 * Marek Hrabe <marekhrabe@abdoc.net> (http://github.com/marekhrabe)
 * 
 * Build v2.0.3 - 2015-04-23
 */

var zip=null,relseseId=null,autoDownload=!1,releases=function(response){var latest=response.data[0];zip=latest.zipball_url,relseseId=latest.tag_name.match(/[0-9]+\.[0-9]+\.[0-9]+/),document.getElementById("download").getElementsByTagName("strong")[0].innerHTML=relseseId,autoDownload&&(clearTimeout(autoDownload),window.location=zip)};$(function(){var download=$("#download, #bottom-download"),logo=$("#logo"),second=$("#second"),downloaded=!1;download.on("mouseover",function(){logo.addClass("arrow")}),download.on("mouseout",function(){downloaded||logo.removeClass("arrow")}),download.on("click",function(){download.addClass("downloaded"),logo.addClass("downloaded"),downloaded=!0,setTimeout(function(){second.addClass("active"),$("html, body").animate({scrollTop:second.offset().top-(window.innerHeight-360)/2},300),setTimeout(function(){AdobeEdge.getComposition("hat").getStage().play()},300),setTimeout(function(){second.find("input").focus()},3800)},300),ga("send","event","Website","Download",this.id),zip?window.location=zip:autoDownload=setTimeout(function(){window.location="https://github.com/csshat/lesshat/releases/latest"},3e3)}),$("#hat [source-subscribe]").each(function(id,form){var subscribe=new SourceSubscribe(form);subscribe.onSuccess=function(data){subscribe.form.getElementsByTagName("div")[0].innerHTML=data.message,subscribe.form.classList.add("success")}}),AdobeEdge.launchComposition("hat");var $loveEl=$(".love");$loveEl[Math.floor(Math.random()*$loveEl.length)].classList.add("active")}),function(){var s="style",o="opacity",t="transform",eoq="easeOutQuad";AdobeEdge.registerCompositionDefn("hat",{stage:{version:"2.0.1",minimumCompatibleVersion:"2.0.0",build:"2.0.1.268",baseState:"base",initialState:"base",gpuAccelerate:!0,resizeInstances:!1,content:{dom:[{id:"light",type:"image",rect:["0px","0px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/light.png","0px","0px"]},{id:"shadow",type:"image",rect:["0px","0px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/shadow.png","0px","0px"],transform:[[],[],[],[],["53%","75%"]]},{id:"hat",type:"image",rect:["0px","0px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/hat.png","0px","0px"],transform:[]},{id:"light-inside",type:"image",rect:["0px","0px","926px","320px","auto","auto"],opacity:0,fill:["rgba(0,0,0,0)","/assets/hat/light-inside.png","0px","0px"]},{id:"particles",type:"group",rect:[0,0,"926","320","auto","auto"],c:[{id:"particles1",type:"image",rect:["0px","0px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/particles1.png","0px","0px"]},{id:"particles2",type:"image",rect:["0px","24px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/particles2.png","0px","0px"]},{id:"particles3",type:"image",rect:["25px","6px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/particles3.png","0px","0px"]},{id:"particles4",type:"image",rect:["0px","0px","926px","320px","auto","auto"],fill:["rgba(0,0,0,0)","/assets/hat/particles4.png","0px","0px"]}]}],symbolInstances:[]},states:{base:{"${_shadow}":[[s,"-webkit-transform-origin",[53,75],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-moz-transform-origin",[53,75],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-ms-transform-origin",[53,75],{valueTemplate:"@@0@@%@@1@@%"}],[s,"msTransformOrigin",[53,75],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-o-transform-origin",[53,75],{valueTemplate:"@@0@@%@@1@@%"}],[t,"scaleY",1],[t,"scaleX",1],[s,o,0],[s,"left","0px"],[s,"top","0px"]],"${_light-inside}":[[s,"top","0px"],[s,o,0],[s,"left","0px"]],"${_light}":[[s,"top","0px"],[s,o,0],[s,"left","0px"]],"${_particles2}":[[s,"-webkit-transform-origin",[53,44],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-moz-transform-origin",[53,44],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-ms-transform-origin",[53,44],{valueTemplate:"@@0@@%@@1@@%"}],[s,"msTransformOrigin",[53,44],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-o-transform-origin",[53,44],{valueTemplate:"@@0@@%@@1@@%"}],[t,"scaleY","0.51"],[t,"scaleX","0.51"],[s,o,0],["motion","location","490.81993740234px140.79999694824px"]],"${_particles1}":[[s,"-webkit-transform-origin",[53,48],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-moz-transform-origin",[53,48],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-ms-transform-origin",[53,48],{valueTemplate:"@@0@@%@@1@@%"}],[s,"msTransformOrigin",[53,48],{valueTemplate:"@@0@@%@@1@@%"}],[s,"-o-transform-origin",[53,48],{valueTemplate:"@@0@@%@@1@@%"}],[t,"scaleY","0.31"],[t,"scaleX","0.31"],[s,o,0],["motion","location","490.77996757507px153.60000810623px"]],"${_Stage}":[["color","background-color","#1f1f1f"],[s,"width","926px"],[s,"height","320px"],[s,"overflow","hidden"]],"${_particles4}":[["motion","location","463px160px"],[s,o,0],[t,"scaleY","0.86"],[t,"scaleX","0.86"]],"${_particles3}":[[t,"scaleY","0.62"],[t,"scaleX","0.62"],[s,o,0],["motion","location","463px156px"]],"${_hat}":[[s,"top","0px"],[s,"left","0px"]]}},timelines:{"Default Timeline":{fromState:"base",toState:"",duration:10544,autoPlay:!1,timeline:[{position:0,duration:2544,tween:[s,"${_light-inside}",o,1,{fromValue:0}],easing:eoq},{position:294,duration:2250,tween:[s,"${_light}",o,1,{fromValue:0}],easing:eoq},{position:294,duration:2250,tween:[s,"${_shadow}",o,1,{fromValue:0}],easing:eoq},{position:344,duration:2200,tween:[s,"${_particles1}",o,1,{fromValue:0}],easing:"easeOutBounce"},{position:344,duration:2200,tween:[s,"${_particles2}",o,1,{fromValue:0}],easing:"easeOutBounce"},{position:344,duration:2200,tween:[s,"${_particles3}",o,1,{fromValue:0}],easing:"swing"},{position:344,duration:2200,tween:[s,"${_particles4}",o,1,{fromValue:0}],easing:"easeOutBack"},{position:344,duration:2200,tween:[t,"${_particles1}","scaleX",1,{fromValue:.31}],easing:"easeOutCirc"},{position:344,duration:2200,tween:[t,"${_particles1}","scaleY",1,{fromValue:.31}],easing:"easeOutCirc"},{position:344,duration:2200,tween:[t,"${_particles2}","scaleX",1,{fromValue:.51}],easing:"easeOutBounce"},{position:344,duration:2200,tween:[t,"${_particles2}","scaleY",1,{fromValue:.51}],easing:"easeOutBounce"},{position:344,duration:2200,tween:[t,"${_particles4}","scaleX",1,{fromValue:.86}],easing:"easeOutBack"},{position:344,duration:2200,tween:[t,"${_particles4}","scaleY",1,{fromValue:.86}],easing:"easeOutBack"},{position:344,duration:2200,tween:[t,"${_particles3}","scaleX",1,{fromValue:.62}],easing:"swing"},{position:344,duration:2200,tween:[t,"${_particles3}","scaleY",1,{fromValue:.62}],easing:"swing"},{position:2544,duration:1077,tween:[s,"${_particles4}",o,.82,{fromValue:1}],easing:"easeOutBack"},{position:2544,duration:1333,tween:[s,"${_light-inside}",o,.73,{fromValue:1}],easing:eoq},{position:2544,duration:1333,tween:[s,"${_light}",o,.73,{fromValue:1}],easing:eoq},{position:2544,duration:1333,tween:[s,"${_shadow}",o,.73,{fromValue:1}],easing:eoq},{position:2544,duration:1333,tween:[s,"${_particles1}",o,.23,{fromValue:1}],easing:"easeInCirc"},{position:2544,duration:2e3,tween:[s,"${_particles3}",o,.82,{fromValue:1}],easing:"easeOutBack"},{position:2544,duration:2320,tween:[s,"${_particles2}",o,.22,{fromValue:1}],easing:"easeInCirc"},{position:2544,duration:2321,tween:["motion","${_particles1}",[[490.78,153.6,0,0],[494.78,147.6,0,0,0,0],[491.77,162.6,0,0]]]},{position:2544,duration:3174,tween:["motion","${_particles3}",[[463,160,0,0],[467,154,0,0,0,0],[466,163,0,0]]]},{position:2544,duration:4892,tween:["motion","${_particles2}",[[490.82,140.8,0,0],[494.82,134.8,0,0,0,0],[487.74,147.83,0,0]]]},{position:2544,duration:5586,tween:["motion","${_particles4}",[[463,160,0,0],[467,154,0,0,0,0],[461,158,0,0]]]},{position:3621,duration:1683,tween:[s,"${_particles4}",o,.05,{fromValue:.82}],easing:eoq},{position:3877,duration:1153,tween:[s,"${_particles1}",o,.54,{fromValue:.23}],easing:"swing"},{position:3877,duration:667,tween:[s,"${_light-inside}",o,.88,{fromValue:.73}],easing:eoq},{position:3877,duration:667,tween:[s,"${_light}",o,.88,{fromValue:.73}],easing:eoq},{position:3877,duration:667,tween:[s,"${_shadow}",o,.88,{fromValue:.73}],easing:eoq},{position:4544,duration:2233,tween:[s,"${_light-inside}",o,.71,{fromValue:.88}],easing:eoq},{position:4544,duration:2233,tween:[s,"${_light}",o,.71,{fromValue:.88}],easing:eoq},{position:4544,duration:2233,tween:[s,"${_shadow}",o,.71,{fromValue:.88}],easing:eoq},{position:4544,duration:3177,tween:[s,"${_particles3}",o,.76,{fromValue:.82}],easing:eoq},{position:4864,duration:2107,tween:[s,"${_particles2}",o,.42,{fromValue:.22}],easing:"easeInCirc"},{position:4865,duration:5679,tween:["motion","${_particles1}",[[491.77,162.6,0,0],[495.78,149.6,0,0,0,0],[490.78,153.6,0,0]]]},{position:5031,duration:1155,tween:[s,"${_particles1}",o,.53,{fromValue:.54}],easing:eoq},{position:5304,duration:1667,tween:[s,"${_particles4}",o,.34,{fromValue:.05}],easing:"easeOutBack"},{position:5718,duration:4826,tween:["motion","${_particles3}",[[466,163,0,0],[468,156,0,0,0,0],[463,160,0,0]]]},{position:6186,duration:2045,tween:[s,"${_particles1}",o,.71,{fromValue:.53}],easing:"easeInCirc"},{position:6777,duration:1100,tween:[s,"${_light-inside}",o,.93,{fromValue:.71}],easing:eoq},{position:6777,duration:1100,tween:[s,"${_light}",o,.93,{fromValue:.71}],easing:eoq},{position:6777,duration:1100,tween:[s,"${_shadow}",o,.93,{fromValue:.71}],easing:eoq},{position:6971,duration:2056,tween:[s,"${_particles2}",o,.62,{fromValue:.42}],easing:"swing"},{position:6971,duration:2056,tween:[s,"${_particles4}",o,.57,{fromValue:.34}],easing:"swing"},{position:7436,duration:3108,tween:["motion","${_particles2}",[[487.74,147.83,0,0],[495.82,136.8,0,0,0,0],[490.82,140.8,0,0]]]},{position:7721,duration:2823,tween:[s,"${_particles3}",o,1,{fromValue:.76}],easing:"easeInCirc"},{position:7877,duration:1e3,tween:[s,"${_light-inside}",o,.89,{fromValue:.93}],easing:eoq},{position:7877,duration:1e3,tween:[s,"${_light}",o,.89,{fromValue:.93}],easing:eoq},{position:7877,duration:1e3,tween:[s,"${_shadow}",o,.89,{fromValue:.93}],easing:eoq},{position:8130,duration:2414,tween:["motion","${_particles4}",[[461,158,0,0],[468,156,0,0,0,0],[463,160,0,0]]]},{position:8230,duration:2314,tween:[s,"${_particles1}",o,1,{fromValue:.71}],easing:eoq},{position:8877,duration:1667,tween:[s,"${_light-inside}",o,1,{fromValue:.89}],easing:eoq},{position:8877,duration:1667,tween:[s,"${_light}",o,1,{fromValue:.89}],easing:eoq},{position:8877,duration:1667,tween:[s,"${_shadow}",o,1,{fromValue:.89}],easing:eoq},{position:9027,duration:1517,tween:[s,"${_particles2}",o,1,{fromValue:.62}],easing:"easeInCirc"},{position:9027,duration:1517,tween:[s,"${_particles4}",o,1,{fromValue:.57}],easing:"easeOutBack"}]}}}},{},[]),AdobeEdge.Symbol.bindTriggerAction("hat","stage","Default Timeline",10544,function(sym,e){sym.play(2544)}),AdobeEdge.okToLaunchComposition("hat")}(),function(m,a,r,e,k){function c(a,b){b||(b={}),this.form=a,this.input=b.input||a.querySelector('input[type="email"]'),this.a=b.a||this.form.getAttribute("action"),this.timeout=null;var d=this;this.form.addEventListener("submit",function(a){return f(d),a.preventDefault(),!1},!1)}function f(a){var b="_"+(c.counter++).toString(36),d=a.input.value;if(d&&g.test(d)){a.form.classList.add("loading"),c.callbacks[b]=function(b){a.form.classList.remove("loading"),-1<b.status.indexOf("subscribed")||"success"===b.status?a.onSuccess(b):a.onError()};var e=document.createElement("script");e.onError=function(){a.form.classList.remove("loading"),a.onError()},e.src=a.a+"?email="+encodeURIComponent(d)+"&callback=SourceSubscribe.callbacks."+b,document.getElementsByTagName("head")[0].appendChild(e)}else a.onError()}var g=RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");c.errorTimeout=1e3,c.callbacks={},c.counter=0,c.prototype.onError=function(){var a=this;a.form.classList.remove("error"),setTimeout(function(){a.form.classList.add("error"),setTimeout(function(){a.form.classList.remove("error")},c.errorTimeout)},0)},c.prototype.onSuccess=function(){this.form.classList.add("success")},m.SourceSubscribe=c,!!m.jQuery&&(m.jQuery.fn.sourceSubscribe=function(){return this.each(function(a,b){new SourceSubscribe(b)}),this})}(window);