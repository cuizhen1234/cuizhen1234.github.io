(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa75af80"],{"0693":function(t,e,n){"use strict";var s=n("cdf1"),i=n.n(s);i.a},1768:function(t,e,n){},"21f9":function(t,e,n){"use strict";var s=n("3a93"),i=n.n(s);i.a},2327:function(t,e,n){"use strict";var s=n("2c68"),i=n.n(s);i.a},"26ea":function(t,e,n){"use strict";var s=n("a3d6"),i=n.n(s);i.a},"2c68":function(t,e,n){},"314a":function(t,e,n){"use strict";var s=n("4010"),i=n.n(s);i.a},"3a93":function(t,e,n){},4010:function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"9bd0":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,s){return n("div",{key:s,staticClass:"tab-control-item",class:{active:s==t.currentIndex},on:{click:function(e){return t.itemClick(s)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],r={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},o=r,a=(n("ad10"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,"ed27d31c",null);e["a"]=c.exports},a3d6:function(t,e,n){},ad10:function(t,e,n){"use strict";var s=n("1768"),i=n.n(s);i.a},b3d7:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("团购网")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[n("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoods}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},i=[],r=n("2909"),o=n("a7ac"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",t._l(t.banners,(function(e,s){return n("swiper-item",{key:s},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},c=[],l=n("dc2c"),u={name:"HomeSwiper",data:function(){return{isLoad:!1}},props:{banners:{type:Array,default:function(){return[]}}},components:{Swiper:l["a"],SwiperItem:l["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},d=u,h=n("2877"),m=Object(h["a"])(d,a,c,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,(function(e,s){return n("div",{key:s,staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("div",[t._v(t._s(e.title))])])])})),0)},b=[],v={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},w=v,g=(n("21f9"),Object(h["a"])(w,p,b,!1,null,"41aeeb5d",null)),x=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feature"},[s("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[s("img",{attrs:{src:n("5cbe"),alt:""}})])])}],y={name:"FeatureView"},I=y,k=(n("2327"),Object(h["a"])(I,C,T,!1,null,"3b81e354",null)),_=k.exports,S=n("9bd0"),$=n("6d71"),O=n("5d17"),j=n("735b"),E=(n("90b9"),n("eecb")),L={name:"Home",components:{NavBar:o["a"],HomeSwiper:f,RecommendView:x,FeatureView:_,TabControl:S["a"],GoodsList:$["a"],Scroll:O["a"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,tabOffsetTop:0,isTabFixed:!1,saveY:0}},computed:{showGoods:function(){return this.goods[this.currentType].list}},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.saveY,0)},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mixins:[E["b"],E["a"]],methods:{tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.listenShowBackTop(t),this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;Object(j["b"])().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list,console.log(e)}))},getHomeGoods:function(t){var e=this,n=this.goods[t].page+1;Object(j["a"])(t,n).then((function(n){var s;(s=e.goods[t].list).push.apply(s,Object(r["a"])(n.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp(),console.log(n)}))}}},W=L,H=(n("26ea"),Object(h["a"])(W,s,i,!1,null,"68304060",null));e["default"]=H.exports},cdf1:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,s){return n("div",{key:s,staticClass:"indi-item",class:{active:s===t.currentIndex-1}})}))):t._e()],2)],2)},i=[],r=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),3e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),s=e[this.slideCount-1].cloneNode(!0);t.insertBefore(s,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),o=r,a=(n("314a"),n("2877")),c=Object(a["a"])(o,s,i,!1,null,"40de67f5",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],h={name:"Slide"},m=h,f=(n("0693"),Object(a["a"])(m,u,d,!1,null,"376fae32",null)),p=f.exports}}]);
//# sourceMappingURL=chunk-fa75af80.d46fe2a0.js.map