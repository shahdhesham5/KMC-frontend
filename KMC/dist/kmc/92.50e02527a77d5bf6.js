"use strict";(self.webpackChunkKMC=self.webpackChunkKMC||[]).push([[92],{1092:(U,l,n)=>{n.r(l),n.d(l,{AboutUsModule:()=>Y});var s=n(9808),g=n(4997),A=n(9924),d=n(6933),o=n(8879),i=n(7587),c=n(7319),m=n(2838),p=n(9485);function u(e,a){1&e&&(i.TgZ(0,"div"),i._UZ(1,"app-loading-screen"),i.qZA())}function b(e,a){if(1&e&&(i.TgZ(0,"div",24),i.TgZ(1,"div",25),i.TgZ(2,"div"),i._UZ(3,"img",26),i.qZA(),i.TgZ(4,"h2",27),i._uU(5),i.qZA(),i.TgZ(6,"p",28),i._uU(7),i.qZA(),i.qZA(),i.qZA()),2&e){const t=a.$implicit,r=i.oxw(2);i.xp6(3),i.Q6J("src",r.imgUrl+t.sav,i.LSH),i.xp6(2),i.Oqu(t.number),i.xp6(2),i.Oqu(t.text)}}function h(e,a){if(1&e&&(i.TgZ(0,"div",30),i.TgZ(1,"div",31),i._UZ(2,"img",32),i.qZA(),i.TgZ(3,"div",33),i.TgZ(4,"h3",34),i._uU(5),i.qZA(),i.TgZ(6,"p",35),i._uU(7),i.qZA(),i.qZA(),i.qZA()),2&e){const t=i.oxw().$implicit,r=i.oxw(2);i.xp6(2),i.Q6J("src",r.imgUrl+t.image,i.LSH),i.xp6(3),i.Oqu(t.name),i.xp6(2),i.Oqu(t.text)}}function f(e,a){1&e&&i.YNc(0,h,8,3,"ng-template",29)}const w=function(e){return{"background-image":e}},v=function(){return{delay:3e3,disableOnInteraction:!1}};function x(e,a){if(1&e&&(i.TgZ(0,"section",2),i.TgZ(1,"div",3),i.TgZ(2,"div",4),i.TgZ(3,"div",5),i.TgZ(4,"div",6),i.TgZ(5,"div",7),i.TgZ(6,"h2",8),i._uU(7),i.qZA(),i.qZA(),i.TgZ(8,"p",9),i._uU(9),i.qZA(),i.TgZ(10,"div",10),i.TgZ(11,"div",11),i.YNc(12,b,8,3,"div",12),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(13,"div",5),i._UZ(14,"div",13),i.qZA(),i.qZA(),i.qZA(),i.TgZ(15,"div",14),i.TgZ(16,"div",3),i.TgZ(17,"h2",15),i._uU(18),i.qZA(),i.TgZ(19,"p",16),i._uU(20),i.qZA(),i.TgZ(21,"div",17),i._UZ(22,"div",18),i.TgZ(23,"div",19),i.TgZ(24,"div",20),i.TgZ(25,"div",21),i.TgZ(26,"swiper",22),i.YNc(27,f,1,0,void 0,23),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e){const t=i.oxw();i.xp6(7),i.Oqu(t.aboutUsContent.about_title),i.xp6(2),i.hij(" ",t.aboutUsContent.about_text," "),i.xp6(3),i.Q6J("ngForOf",t.aboutUsContent.about_us_statistics),i.xp6(2),i.Q6J("ngStyle",i.VKq(11,w,"url("+t.imgUrl+t.aboutUsContent.about_image+")")),i.xp6(4),i.Oqu(t.aboutUsContent.testimonial_title),i.xp6(2),i.hij(" ",t.aboutUsContent.testimonial_subtitle," "),i.xp6(1),i.Q6J("ngStyle",i.VKq(13,w,"url("+t.imgUrl+t.aboutUsContent.testimonial_image+")")),i.xp6(5),i.Q6J("autoplay",i.DdM(15,v))("config",t.config)("pagination",!0),i.xp6(1),i.Q6J("ngForOf",t.aboutUsContent.about_us_testimonial)}}o.ZP.use([o.tl,o.pt]);const y=[{path:"",component:(()=>{class e{constructor(t,r){this.store=t,this.sttpService=r,this.imgUrl=A.X,this.config={slidesPerView:.8,spaceBetween:10,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2.2,spaceBetween:10},1024:{slidesPerView:2.4},1400:{slidesPerView:2.7},1600:{slidesPerView:3}}},this.isLoading=!1}ngOnInit(){this.store.select("aboutUs").subscribe(t=>{this.aboutUsContent=t,this.aboutUsContent||(this.isLoading=!0,this.unSubcribe=this.sttpService.getReq("api/about-us").subscribe(r=>{this.store.dispatch(new d.d(r)),this.isLoading=!1}))})}ngOnDestroy(){this.unSubcribe&&this.unSubcribe.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(c.yh),i.Y36(A.O))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-about-us"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","about-us nav-margin nav-padding",4,"ngIf"],[1,"about-us","nav-margin","nav-padding"],[1,"container-fluid"],[1,"row"],[1,"col-md-6"],[1,"description-container"],[1,"section-title"],[1,"semi-bold","my-3"],[1,"gray","medium","decsription"],[1,"s-mt-4"],[1,"row","align-items-end"],["class","col-md-4 my-4",4,"ngFor","ngForOf"],[1,"img-container",3,"ngStyle"],[1,"testimonials","s-mt-4","s-mb-2"],[1,"semi-bold","my-2"],[1,"gray","medium","text-spacing"],[1,"img-container","my-3",3,"ngStyle"],[1,"layout"],[1,"row","d-flex","align-items-center","justify-content-center"],[1,"col-md-11"],[1,"slider-container"],[1,"swiper-wrapper","d-flex",3,"autoplay","config","pagination"],[4,"ngFor","ngForOf"],[1,"col-md-4","my-4"],[1,"content-center"],["alt","Achievement icon",3,"src"],[1,"bold","s-mt-1"],[1,"medium","s-mt-1"],["class","","swiperSlide",""],[1,"testimonial-card"],[1,"testimonial-image"],["alt","Doctor's Name",3,"src"],[1,"testimonial-content"],[1,"doctor-name"],[1,"doctor-review"]],template:function(t,r){1&t&&(i.YNc(0,u,2,0,"div",0),i.YNc(1,x,28,16,"section",1)),2&t&&(i.Q6J("ngIf",r.isLoading),i.xp6(1),i.Q6J("ngIf",!r.isLoading))},directives:[s.O5,m.g,s.sg,s.PC,p.nF,p.YC],styles:['@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA) format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:10px;top:50%;transform:translateY(-50%)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.content-center{display:flex;align-items:center;flex-direction:column}.description-container{padding:2vw 0}.description-container .decsription{white-space:break-spaces}.testimonials{overflow-x:hidden}.testimonials .img-container{position:relative;max-width:100%;min-height:60vh;display:flex;justify-content:center;flex-direction:column}.testimonials .img-container .layout{position:absolute;width:100%;height:100%;background:linear-gradient(to right,transparent,black)}.testimonials .img-container .slider-container{margin:0 2vw}.testimonials .img-container .testimonial-text{background-color:#fff;z-index:2;padding:1vw 3vw}.testimonials .img-container .swiper-slide{display:flex;justify-content:center;flex-direction:column;transition:opacity .2s ease-in-out,visibility .2s ease-in-out}.testimonials .img-container .swiper-slide-active{opacity:1;visibility:visible}.testimonials .img-container .swiper-pagination-bullet{background-color:#999}.testimonials .img-container .swiper-pagination-bullet-active{background-color:#fff}.testimonials .img-container .swiper-wrapper{padding:2vw 0}.testimonials .img-container .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.testimonials .img-container .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{width:15px;border-radius:0;height:2px}@media screen and (min-width: 768px) and (max-width: 1200px){.img-container{min-height:30vw;display:flex;justify-content:center;flex-direction:column}.testimonials .img-container{min-height:30vh}.testimonials .img-container .swiper{margin:3vw 0}}@media screen and (max-width: 767px){.img-container{min-height:88vw;width:100%}.testimonials .img-container{min-height:60vh;display:flex;justify-content:center;flex-direction:column}.testimonials .img-container .swiper-wrapper{padding:4vw 0}}.testimonial-card{position:relative;width:100%;max-width:400px;border:1px solid #ddd;border-radius:10px;box-shadow:0 4px 8px #0000001a;overflow:hidden;padding:30px 20px;background-color:#fff;text-align:center;margin:0 auto}@media (min-width: 1200px){.testimonial-card{max-width:500px;padding:40px 30px}}.testimonial-image{position:relative;width:100px;height:100px;margin:0 auto 20px;border-radius:50%;overflow:hidden;border:4px solid #fff;box-shadow:0 4px 8px #0003}.testimonial-image img{width:100%;height:100%;object-fit:cover}.testimonial-content{margin-top:20px}.doctor-name{font-size:20px;font-weight:700;margin:0;color:#333}.doctor-review{font-size:16px;color:#666;margin-top:10px}@media (min-width: 1200px){.testimonial-card{max-width:500px}.testimonial-image{width:120px;height:120px}.doctor-name{font-size:22px}.doctor-review{font-size:18px}}\n'],encapsulation:2}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[g.Bz.forChild(y)],g.Bz]}),e})();var B=n(2234);let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.ez,Z,p.kz,B.m]]}),e})()}}]);