function e(e,n,t,i){return new(t||(t=Promise))((function(s,o){function r(e){try{p(i.next(e))}catch(e){o(e)}}function d(e){try{p(i.throw(e))}catch(e){o(e)}}function p(e){var n;e.done?s(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,d)}p((i=i.apply(e,n||[])).next())}))}class n{constructor(e,n,t){e._swiper&&(e._swiper.instance.destroy(!0),delete e._swiper),this.dotnetHelper=t,null!=n||(n={}),n.pagination&&(n.pagination.type=n.pagination.type.toLowerCase()),this.swiper=new Swiper(e,n),this.swiper.on("realIndexChange",(e=>this.onRealIndexChange(e,this))),e._swiper={instance:this.swiper,handle:t}}slideTo(e,n,t){this.swiper.slideToLoop(e,n,t)}slideNext(e){this.swiper.slideNext(e)}slidePrev(e){this.swiper.slidePrev(e)}dispose(){this.dotnetHelper.dispose&&(this.swiper.destroy(!0),this.dotnetHelper.dispose())}onRealIndexChange(n,t){return e(this,void 0,void 0,(function*(){t.dotnetHelper&&(yield t.dotnetHelper.invokeMethodAsync("OnIndexChanged",n.realIndex))}))}}function t(e,t,i){return new n(e,t,i)}export{t as init};
//# sourceMappingURL=swiper-proxy.js.map