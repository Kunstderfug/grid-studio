(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{242:function(t,e,a){},251:function(t,e,a){},252:function(t,e,a){"use strict";var i=a(242);a.n(i).a},260:function(t,e,a){"use strict";a.r(e);a(251);var i=a(0).a.extend({name:"VueLazyYoutubeVideo",props:{src:{type:String,required:!0,validator:t=>t.startsWith("https://www.youtube.com/embed/")||t.startsWith("https://www.youtube-nocookie.com/embed/")},alt:{type:String,default:"Video thumbnail"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:t=>/^\d+:\d+$/.test(t)},previewImageSize:{type:String,default:"maxresdefault",validator:t=>-1!==["default","mqdefault","sddefault","hqdefault","maxresdefault"].indexOf(t)},thumbnail:{type:Object,validator:t=>"jpg"in t&&"webp"in t},iframeAttributes:{type:Object,default:()=>({allowfullscreen:!0,frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})},webp:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!1}},data(){return{activated:this.autoplay}},computed:{id(){const t=/^https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/(.+?)(?:\?.*)?$/.exec(this.src);return null!==t?t[1]:(this.warn(`Failed to extract video id from ${this.src}`),"")},srcAttribute(){const t="string"==typeof this.src&&this.src.includes("?");return`${this.src}${t?"&":"?"}autoplay=1`},styleObj(){return{paddingBottom:this.getPaddingBottom()}}},methods:{clickHandler(){this.activated=!0},getPaddingBottom(){let{aspectRatio:t}=this;const e=this.$options.props.aspectRatio.default,a=`Invalid value ${t} supplied to \`aspectRatio\` property, instead fallback value ${e} is used `;if("string"==typeof t){const[i,s]=t.split(":");Number.isFinite(Number(i))&&Number.isFinite(Number(s))||(t=e,this.warn(a))}else t=e,this.warn(a);const[i,s]=t.split(":");return this.getPaddingBottomValue(Number(i),Number(s))},getPaddingBottomValue:(t,e)=>`${e/t*100}%`,warn(t){console.warn(`[vue-lazy-youtube-video]: ${t}`)}},render(t){const{alt:e,buttonLabel:a,previewImageSize:i,thumbnail:s,iframeAttributes:o,webp:r,activated:u,id:l,srcAttribute:n,styleObj:d}=this;return t("div",{staticClass:"y-video",on:{click:()=>this.clickHandler()}},[t("div",{staticClass:"y-video__inner",style:d},[u?t("iframe",{staticClass:"y-video__media",attrs:{...o,src:n}}):[t("picture",{},[r?t("source",{attrs:{srcset:s&&s.webp||`https://i.ytimg.com/vi_webp/${l}/${i}.webp`,type:"image/webp"}}):null,t("img",{staticClass:"y-video__media y-video__media--type--img",attrs:{src:s&&s.jpg||`https://i.ytimg.com/vi/${l}/${i}.jpg`,alt:e}})]),this.$slots.button||t("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":a}},[this.$slots.icon||t("svg",{attrs:{viewBox:"0 0 68 48",width:"100%",height:"100%"}},[t("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]])])}});var s={name:"YoutubeVideo",components:{LazyYoutubeVideo:i}},o=(a(252),a(15)),r=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{"show-logo":!0}},[e("div",{staticClass:"post-title"},[e("h1",{staticClass:"post-title__text"},[this._v("Samples")])]),e("div",{staticClass:"post content-box"},[e("LazyYoutubeVideo",{attrs:{src:"https://www.youtube.com/embed/nssB7EZKCO0"}}),e("p"),e("LazyYoutubeVideo",{attrs:{src:"https://www.youtube.com/embed/ZMFC_xtqHVY"}}),e("p"),e("LazyYoutubeVideo",{attrs:{src:"https://www.youtube.com/embed/TJ9cuE86mmE"}})],1)])}),[],!1,null,null,null);e.default=r.exports}}]);