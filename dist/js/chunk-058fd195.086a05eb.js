(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-058fd195"],{"5ce9":function(t,a,s){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-light border p-3 pt-2 pb-2",staticStyle:{left:"0px"},style:t.isVisible?"left: 0px":"left: -189px",attrs:{id:"style-switcher"}},[a("h6",{staticClass:"title text-center"},[t._v("Select Your Color")]),a("ul",{staticClass:"pattern text-center mb-2"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"default",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("default")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"green",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("green")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"purple",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("purple")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"red",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("red")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"skyblue",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("skyblue")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"skobleoff",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("skobleoff")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"cyan",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("cyan")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"slateblue",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("slateblue")}}})]),a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"yellow",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setTheme("yellow")}}})])]),a("h6",{staticClass:"title text-center pt-3 mb-0 border-top"},[t._v("Theme Option")]),a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn btn-sm w-100 btn-primary rtl-version t-rtl-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setRtl()}}},[t._v("RTL")]),a("a",{staticClass:"btn btn-sm w-100 btn-primary ltr-version t-ltr-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setLtr()}}},[t._v("LTR")]),a("a",{staticClass:"btn btn-sm w-100 btn-primary dark-rtl-version t-rtl-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.darkRtl()}}},[t._v("RTL")]),a("a",{staticClass:"btn btn-sm w-100 btn-primary dark-ltr-version t-ltr-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.darkLtr()}}},[t._v("LTR")]),a("a",{staticClass:"btn btn-sm w-100 btn-dark dark-version t-dark mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setDark()}}},[t._v("Dark")]),a("a",{staticClass:"btn btn-sm w-100 btn-dark light-version t-light mt-2",attrs:{href:"javascript: void(0);"},on:{click:function(a){return t.setLight()}}},[t._v("Light")])]),a("div",{staticClass:"bottom"},[a("a",{staticClass:"settings bg-white shadow d-block",attrs:{href:"javascript: void(0);"},on:{click:t.ToogleMenu}},[a("i",{staticClass:"mdi mdi-cog ml-1 mdi-24px position-absolute mdi-spin text-primary"})])])])},e=[],r={data(){return{isVisible:!1}},methods:{ToogleMenu(){this.isVisible=!this.isVisible},setTheme(t){document.getElementById("color-opt").setAttribute("href","./css/colors/"+t+".css")},setDark(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark.css")},setLight(){document.getElementById("theme-opt").setAttribute("href","./css/style.css")},darkRtl(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark-rtl.css")},darkLtr(){document.getElementById("theme-opt").setAttribute("href","./css/style-dark.css")},setRtl(){document.getElementById("theme-opt").setAttribute("href","./css/style-rtl.css")},setLtr(){document.getElementById("theme-opt").setAttribute("href","./css/style.css")}}},l=r,n=s("2877"),c=Object(n["a"])(l,i,e,!1,null,null,null);a["a"]=c.exports},da27:function(t,a,s){"use strict";var i=function(){var t=this,a=t._self._c;return a("carousel",{attrs:{id:"customer-testi","per-page":3,dir:"ltr",autoplay:!0,loop:!0}},t._l(t.testimonialData,(function(s){return a("Slide",{key:s.id},[a("div",{staticClass:"media customer-testi m-2"},[a("img",{staticClass:"avatar avatar-small mr-3 rounded shadow",attrs:{src:""+s.profile,alt:""}}),a("div",{staticClass:"media-body content p-3 shadow rounded bg-white position-relative"},[a("ul",{staticClass:"list-unstyled mb-0"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"mdi mdi-star text-warning"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"mdi mdi-star text-warning"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"mdi mdi-star text-warning"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"mdi mdi-star text-warning"})]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"mdi mdi-star text-warning"})])]),a("p",{staticClass:"text-muted mt-2"},[t._v('" '+t._s(s.message)+' "')]),a("h6",{staticClass:"text-primary"},[t._v(" - "+t._s(s.name)+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(s.designation))])])])])])})),1)},e=[],r=s("0a63"),l={props:{testimonialData:{type:Array,default:[]}},data(){return{}},components:{Carousel:r["Carousel"],Slide:r["Slide"]}},n=l,c=s("2877"),o=Object(c["a"])(n,i,e,!1,null,null,null);a["a"]=o.exports},df45:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("div",[a("Navbar"),a("section",{staticClass:"bg-marketing d-table w-100",staticStyle:{background:"url('images/marketing/marketing-shape.png')"},attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-lg-7 col-md-7 text-center"},[a("img",{staticClass:"img-fluid",staticStyle:{"max-height":"400px"},attrs:{src:"images/marketing/marketing.png",alt:""}}),a("div",{staticClass:"title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("h1",{staticClass:"heading mb-3"},[t._v(" Social Media Marketing is the Best Ever ")]),a("p",{staticClass:"para-desc text-muted"},[t._v(" Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page. ")]),a("div",{staticClass:"mt-4 pt-2"},[a("a",{staticClass:"btn btn-primary mt-2 mr-2",attrs:{href:"javascript:void(0)"}},[t._v("Get Started")]),a("router-link",{staticClass:"btn btn-outline-primary mt-2",attrs:{to:"/page-contact-one"}},[a("i",{staticClass:"mdi mdi-phone"}),t._v(" Contact us")])],1)])])])])]),t._m(0),a("section",{staticClass:"section bg-light"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("monitor-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(2)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("heart-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(3)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("eye-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(4)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("bold-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(5)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("feather-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(6)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("code-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(7)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("user-check-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(8)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("git-merge-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(9)])]),a("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"media key-feature align-items-center p-3 rounded shadow"},[a("div",{staticClass:"icon text-center rounded-circle mr-3"},[a("settings-icon",{staticClass:"fea icon-ex-md text-primary"})],1),t._m(10)])]),t._m(11)])]),t._m(12),a("div",{staticClass:"container mt-100 mt-60"},[t._m(13),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("Testimonial",{attrs:{testimonialData:t.testimonialData}})],1)])])]),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[t._m(14),a("div",{staticClass:"row",attrs:{id:"counter"}},[a("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[a("div",{staticClass:"counter-box text-center"},[a("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset190.svg",alt:""}}),a("h2",{staticClass:"mb-0 mt-4"},[a("countTo",{attrs:{startVal:3,endVal:97,duration:4e3}}),t._v("% ")],1),a("h6",{staticClass:"counter-head text-muted"},[t._v("Happy Client")])])]),a("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[a("div",{staticClass:"counter-box text-center"},[a("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset189.svg",alt:""}}),a("h2",{staticClass:"mb-0 mt-4"},[a("countTo",{attrs:{startVal:1,endVal:15,duration:4e3}}),t._v("+ ")],1),a("h6",{staticClass:"counter-head text-muted"},[t._v("Awards")])])]),a("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[a("div",{staticClass:"counter-box text-center"},[a("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset192.svg",alt:""}}),a("h2",{staticClass:"mb-0 mt-4"},[a("countTo",{attrs:{startVal:0,endVal:2,duration:4e3}}),t._v("K ")],1),a("h6",{staticClass:"counter-head text-muted"},[t._v("Job Placement")])])]),a("div",{staticClass:"col-md-3 col-6 mt-4 pt-2"},[a("div",{staticClass:"counter-box text-center"},[a("img",{staticClass:"avatar avatar-small",attrs:{src:"images/illustrator/Asset187.svg",alt:""}}),a("h2",{staticClass:"mb-0 mt-4"},[a("countTo",{attrs:{startVal:3,endVal:98,duration:4e3}}),t._v("% ")],1),a("h6",{staticClass:"counter-head text-muted"},[t._v("Project Complete")])])])])]),a("div",{staticClass:"container mt-100 mt-60"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-7 col-md-6"},[a("div",{staticClass:"faq-content mr-lg-5"},[a("div",{staticClass:"accordion",attrs:{id:"accordionExampleone"}},[a("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[a("h6",{staticClass:"title mb-0"},[t._v(" How our "),a("span",{staticClass:"text-primary"},[t._v("Landrick")]),t._v(" work ? ")])])]),a("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"px-2 py-4"},[a("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),a("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[a("h6",{staticClass:"title mb-0"},[t._v(" What is the main process open account ? ")])])]),a("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"px-2 py-4"},[a("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),a("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[a("h6",{staticClass:"title mb-0"},[t._v(" How to make unlimited data entry ? ")])])]),a("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"px-2 py-4"},[a("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),a("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[a("h6",{staticClass:"title mb-0"},[t._v(" Is "),a("span",{staticClass:"text-primary"},[t._v("Landrick")]),t._v(" safer to use with my account ? ")])])]),a("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"px-2 py-4"},[a("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1),a("b-card",{staticClass:"mb-2 border-0 rounded",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"border-0 bg-light p-3 pr-5"},[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"faq position-relative text-dark",attrs:{href:"javascript: void(0);"}},[a("h6",{staticClass:"title mb-0"},[t._v(" How can i contact your technical team ? ")])])]),a("b-collapse",{attrs:{id:"accordion-5",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"px-2 py-4"},[a("p",{staticClass:"text-muted mb-0 faq-ans"},[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. ")])])],1)],1)],1)])]),t._m(15)])]),a("div",{staticClass:"container mt-100 mt-60"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title"},[a("h4",{staticClass:"title mb-4"},[t._v("Get Started !")]),t._m(16),a("div",{staticClass:"watch-video mt-4 pt-2"},[t._m(17),a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal",modifiers:{modal:!0}}],staticClass:"btn btn-icon btn-pills video-play-icon btn-primary m-1",attrs:{href:"javascript: void(0);"}},[a("video-icon",{staticClass:"icons"})],1),a("span",{staticClass:"font-weight-bold text-uppercase small align-middle ml-1"},[t._v("Watch Now")])]),a("b-modal",{attrs:{id:"modal","hide-footer":"",size:"lg","header-close-variant":"white","header-class":"border-0","content-class":"border-0",centered:""}},[a("vimeo-player",{ref:"player",attrs:{"player-width":750,"player-height":450,"video-id":99025203}})],1)],1)])])])]),a("footer",{staticClass:"footer bg-light"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2"},[t._m(18),a("p",{staticClass:"mt-4 text-muted"},[t._v(" Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. ")]),a("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[a("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[a("facebook-icon",{staticClass:"fea icon-sm fea-social"})],1)]),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[a("instagram-icon",{staticClass:"fea icon-sm fea-social"})],1)]),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"javascript:void(0)"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)])])])]),a("div",{staticClass:"col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("h5",{staticClass:"text-dark footer-head"},[t._v("Company")]),a("ul",{staticClass:"list-unstyled footer-list mt-4"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-aboutus"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" About us")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-services"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Services")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-team"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Team")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-pricing"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Pricing")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-work-modern"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Project")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-jobs"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Careers")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-blog-grid"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Blog")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/auth-cover-login"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Login")])],1)])]),a("div",{staticClass:"col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("h5",{staticClass:"text-dark footer-head"},[t._v("Usefull Links")]),a("ul",{staticClass:"list-unstyled footer-list mt-4"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-terms"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Terms of Services")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/page-privacy"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Privacy Policy")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/documentation"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Documentation")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/changelog"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Changelog")])],1),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/components"}},[a("i",{staticClass:"mdi mdi-chevron-right mr-1"}),t._v(" Components")])],1)])]),a("div",{staticClass:"col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("h5",{staticClass:"text-dark footer-head"},[t._v("Newsletter")]),a("p",{staticClass:"mt-4 text-muted"},[t._v(" Sign up and receive the latest tips via email. ")]),a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"foot-subscribe foot-white form-group"},[t._m(19),a("div",{staticClass:"position-relative"},[a("mail-icon",{staticClass:"fea icon-sm icons"}),a("input",{staticClass:"form-control bg-light border pl-5 rounded",attrs:{type:"email",name:"email",id:"emailsubscribe",placeholder:"Your email : ",required:""}})],1)])]),t._m(20)])])])])])]),a("footer",{staticClass:"footer footer-bar"},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-left"},[a("p",{staticClass:"mb-0"},[t._v(" © "+t._s((new Date).getFullYear())+" Landrick. Design with "),a("i",{staticClass:"mdi mdi-heart text-danger"}),t._v(" by "),a("a",{staticClass:"text-reset",attrs:{href:"https://themesbrand.com/",target:"_blank"}},[t._v("Themesbrand")]),t._v(". ")])])]),t._m(21)])])]),a("Switcher"),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#topnav",expression:"'#topnav'"}],staticClass:"btn btn-icon btn-primary back-to-top",attrs:{href:"javascript: void(0);",id:"back-to-top"}},[a("arrow-up-icon",{staticClass:"icons"})],1)],1)},e=[function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-4 border-bottom border-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/amazon.svg",alt:""}})]),a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/google.svg",alt:""}})]),a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/lenovo.svg",alt:""}})]),a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/paypal.svg",alt:""}})]),a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/shopify.svg",alt:""}})]),a("div",{staticClass:"col-lg-2 col-md-2 col-6 text-center py-4"},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/client/spotify.svg",alt:""}})])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title mb-4 pb-2"},[a("h4",{staticClass:"title mb-4"},[t._v("Sample Features")]),a("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Fully Responsive")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Browser Compatibility")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Retina Ready")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Based On Bootstrap 4")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Feather Icons")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Built With SASS")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("W3c Valid Code")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Flaticon Icons")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"media-body"},[a("h4",{staticClass:"title mb-0"},[t._v("Easy to customize")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-12 mt-4 pt-2 text-center"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"}},[t._v("See More "),a("i",{staticClass:"mdi mdi-arrow-right"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"container mt-100 mt-60"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-5 col-md-6"},[a("img",{attrs:{src:"images/illustrator/youtube-media.svg",alt:""}})]),a("div",{staticClass:"col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("div",{staticClass:"section-title ml-lg-5"},[a("h4",{staticClass:"title mb-4"},[t._v(" A better compose with landrick marketing ")]),a("p",{staticClass:"text-muted"},[t._v(" You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website. ")]),a("ul",{staticClass:"list-unstyled text-muted"},[a("li",{staticClass:"mb-0"},[a("span",{staticClass:"text-primary h5 mr-2"},[a("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Digital Marketing Solutions for Tomorrow ")]),a("li",{staticClass:"mb-0"},[a("span",{staticClass:"text-primary h5 mr-2"},[a("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Our Talented & Experienced Marketing Agency ")]),a("li",{staticClass:"mb-0"},[a("span",{staticClass:"text-primary h5 mr-2"},[a("i",{staticClass:"uil uil-check-circle align-middle"})]),t._v("Create your own skin to match your brand ")])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title mb-4 pb-2"},[a("h4",{staticClass:"title mb-4"},[t._v("Our Valuable Clients")]),a("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title mb-4 pb-2"},[a("h4",{staticClass:"title mb-4"},[t._v(" See everything about your "),a("span",{staticClass:"text-primary"},[t._v("Landrick")])]),a("p",{staticClass:"text-muted para-desc mx-auto mb-0"},[t._v(" Start working with "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("img",{attrs:{src:"images/illustrator/faq.svg",alt:""}})])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"text-muted para-desc mx-auto"},[t._v(" Start working with "),a("span",{staticClass:"text-primary font-weight-bold"},[t._v("Landrick")]),t._v(" that can provide everything you need to generate awareness, drive traffic, connect. ")])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"btn btn-primary mb-2",attrs:{href:"https://1.envato.market/4n73n",target:"_blank"}},[t._v("Buy Now "),a("span",{staticClass:"badge badge-pill badge-danger ml-2"},[t._v("v2.5")])])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"logo-footer",attrs:{href:"#"}},[a("img",{attrs:{src:"images/logo-dark.png",height:"24",alt:""}})])},function(){var t=this,a=t._self._c;return a("label",{staticClass:"text-muted"},[t._v("Write your email "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-lg-12"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",id:"submitsubscribe",name:"send",value:"Subscribe"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0"},[a("ul",{staticClass:"list-unstyled text-sm-right mb-0"},[a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar avatar-ex-sm",attrs:{src:"images/payments/american-ex.png",title:"American Express",alt:""}})])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/discover.png",title:"Discover",alt:""}})])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/master-card.png",title:"Master Card",alt:""}})])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/paypal.png",title:"Paypal",alt:""}})])]),a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar avatar-ex-sm ml-1",attrs:{src:"images/payments/visa.png",title:"Visa",alt:""}})])])])])}],r=s("0a35"),l=s("ec1b"),n=s.n(l),c=s("0a63"),o=s("9d8d"),d=s("5ce9"),m=s("da27"),u={data(){return{testimonialData:[{id:1,profile:"images/client/01.jpg",message:"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",name:"Thomas Israel",designation:"C.E.O"},{id:2,profile:"images/client/02.jpg",message:"One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",name:"Barbara McIntosh",designation:"M.D"},{id:3,profile:"images/client/03.jpg",message:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",name:"Carl Oliver",designation:"P.A"},{id:4,profile:"images/client/04.jpg",message:"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",name:"Christa Smith",designation:"Manager"},{id:5,profile:"images/client/05.jpg",message:"There is now an abundance of readable dummy texts. These are usually used when a text is required.",name:"Dean Tolle",designation:"Developer"},{id:6,profile:"images/client/05.jpg",message:"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",name:"Jill Webb",designation:"Designer"}]}},components:{Navbar:o["a"],Switcher:d["a"],Testimonial:m["a"],Carousel:c["Carousel"],Slide:c["Slide"],ArrowUpIcon:r["g"],MonitorIcon:r["X"],HeartIcon:r["L"],EyeIcon:r["B"],BoldIcon:r["k"],FeatherIcon:r["E"],CodeIcon:r["t"],UserCheckIcon:r["ob"],VideoIcon:r["sb"],GitMergeIcon:r["H"],SettingsIcon:r["gb"],FacebookIcon:r["D"],InstagramIcon:r["P"],TwitterIcon:r["nb"],LinkedinIcon:r["T"],MailIcon:r["U"],countTo:n.a}},v=u,p=s("2877"),h=Object(p["a"])(v,i,e,!1,null,null,null);a["default"]=h.exports},ec1b:function(t,a,s){!function(a,s){t.exports=s()}(0,(function(){return function(t){function a(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var s={};return a.m=t,a.c=s,a.i=function(t){return t},a.d=function(t,s,i){a.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,s){var i=s(4)(s(1),s(5),null,null);t.exports=i.exports},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,s,i){return s*(1-Math.pow(2,-10*t/i))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var a=t.split("."),s=a[0],i=a.length>1?this.decimal+a[1]:"",e=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;e.test(s);)s=s.replace(e,"$1"+this.separator+"$2");return this.prefix+s+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s(0),e=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default=e.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",e.default)},function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=0,e="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)a.requestAnimationFrame=r=function(){},a.cancelAnimationFrame=l=function(){};else{a.requestAnimationFrame=r=window.requestAnimationFrame,a.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var n=void 0,c=0;c<e.length&&(!r||!l);c++)n=e[c],a.requestAnimationFrame=r=r||window[n+"RequestAnimationFrame"],a.cancelAnimationFrame=l=l||window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"];r&&l||(a.requestAnimationFrame=r=function(t){var a=(new Date).getTime(),s=Math.max(0,16-(a-i)),e=window.setTimeout((function(){t(a+s)}),s);return i=a+s,e},a.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=r,a.cancelAnimationFrame=l},function(t,a){t.exports=function(t,a,s,i){var e,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(e=t,r=t.default);var n="function"==typeof r?r.options:r;if(a&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),s&&(n._scopeId=s),i){var c=Object.create(n.computed||null);Object.keys(i).forEach((function(t){var a=i[t];c[t]=function(){return a}})),n.computed=c}return{esModule:e,exports:r,options:n}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);
//# sourceMappingURL=chunk-058fd195.086a05eb.js.map