(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{430:function(t,e,s){},432:function(t,e,s){},433:function(t,e,s){"use strict";var a=s(430);s.n(a).a},434:function(t,e,s){},437:function(t,e,s){"use strict";s(39),s(15),s(22);var a=s(54),i=s(14),o={name:"Page",components:{PageNav:a.PageNav,PageHeader:a.PageHeader,PageSidebar:a.PageSidebar},props:["sidebarItems"],data:function(){return{headerFixed:!1}},computed:{repoUrl:function(){return this.editUrl.replace("/edit","/blob")},hashTags:function(){return this.$frontmatter.hashTags||this.$site.themeConfig.defaultHashTags||[]},createIssueUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.docsRepo,a=void 0===s?e:s,o=Object(i.k)(this.$page.path),r=i.l.test(a)?a:"https://github.com/".concat(a);return"".concat(r,"/issues/new?title=").concat(encodeURIComponent("[BUG] Page ".concat(this.$page.title," - ").concat(o)))},editUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.editLinks,o=t.docsDir,r=void 0===o?"":o,n=t.docsBranch,h=void 0===n?"master":n,l=t.docsRepo,d=void 0===l?e:l,c=Object(i.k)(this.$page.path);if(i.a.test(c)?c+="README.md":c+=".md",d&&s)return Object(a.createEditLink)(e,d,r,h,c)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},shouldShowOtherTopics:function(){var t=this.$page.frontmatter;return!t.layout&&!this.isLandingPage&&!1!==t.otherTopics&&this.otherTopicsItems.length},otherTopicsItems:function(){return Object(a.resolveOtherTopicsItems)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.headerFixed=window.pageYOffset>140}))},methods:{}},r=(s(433),s(0)),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"page"},[s("article",[s("div",{staticClass:"relative"},[s("PageHeader",{attrs:{fixed:t.headerFixed,title:t.$page.title||"Not found","repo-url":t.repoUrl,hashTags:t.hashTags,"create-issue-url":t.createIssueUrl,"edit-url":t.editUrl}})],1),t._v(" "),s("div",{staticClass:"px-5 md:px-10 max-w-site m-auto"},[s("div",{staticClass:"page-content"},[t._t("page-top"),t._v(" "),s("Content"),t._v(" "),t._t("page-bottom"),t._v(" "),s("div",{staticClass:"pt-5"},[t.lastUpdated?s("div",{staticClass:"py-5 flex justify-end text-sm"},[s("p",[s("span",{staticClass:"font-bold pr-1"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])])]):t._e(),t._v(" "),s("PageNav",{attrs:{sidebarItems:t.sidebarItems}})],1),t._v(" "),t.shouldShowOtherTopics?s("OtherTopics",{staticClass:"px-3",attrs:{slot:"page-bottom",items:t.otherTopicsItems},slot:"page-bottom"},[s("h4",{staticClass:"text-xl mb-4 mt-2 font-semibold",attrs:{slot:"top"},slot:"top"},[t._v("\n            Other topics\n          ")])]):t._e()],2)]),t._v(" "),s("PageSidebar",{staticClass:"fixed",class:{"-mini-header":t.headerFixed},attrs:{page:t.$page}})],1)])}),[],!1,null,null,null);e.a=n.exports},439:function(t,e,s){"use strict";var a=s(432);s.n(a).a},440:function(t,e,s){"use strict";var a=s(434);s.n(a).a},449:function(t,e,s){"use strict";s.r(e);var a=s(54),i=s(2),o=s(159),r=(s(39),s(15),s(22),s(14)),n={name:"NotFound",components:{PageNav:a.PageNav,PageHeader:a.PageHeader,PageSidebar:a.PageSidebar},props:["sidebarItems"],data:function(){return{headerFixed:!1}},computed:{repoUrl:function(){return this.editUrl.replace("/edit","/blob")},hashTags:function(){return this.$frontmatter.hashTags||this.$site.themeConfig.defaultHashTags||[]},createIssueUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.docsRepo,a=void 0===s?e:s,i=Object(r.k)(this.$page.path),o=r.l.test(a)?a:"https://github.com/".concat(a);return"".concat(o,"/issues/new?title=").concat(encodeURIComponent("[BUG] Page ".concat(this.$page.title," - ").concat(i)))},editUrl:function(){var t=this.$site.themeConfig,e=t.repo,s=t.editLinks,i=t.docsDir,o=void 0===i?"":i,n=t.docsBranch,h=void 0===n?"master":n,l=t.docsRepo,d=void 0===l?e:l,c=Object(r.k)(this.$page.path);if(r.a.test(c)?c+="README.md":c+=".md",d&&s)return Object(a.createEditLink)(e,d,o,h,c)},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},shouldShowOtherTopics:function(){var t=this.$page.frontmatter;return!t.layout&&!this.isLandingPage&&!1!==t.otherTopics&&this.otherTopicsItems.length},otherTopicsItems:function(){return Object(a.resolveOtherTopicsItems)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.headerFixed=window.pageYOffset>140}))},methods:{}},h=(s(439),s(0)),l=Object(h.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"page"},[s("article",[s("div",{staticClass:"relative"},[s("PageHeader",{attrs:{fixed:t.headerFixed,title:"Page not found","repo-url":t.repoUrl,hashTags:t.hashTags,"create-issue-url":t.createIssueUrl,"edit-url":t.editUrl}})],1),t._v(" "),s("div",{staticClass:"px-5 md:px-10 max-w-site m-auto"},[s("div",{staticClass:"page-content"},[s("div",{staticClass:"content__default pb-10"},[s("h2",[t._v("\n            That's a Four-Oh-Four.\n          ")]),t._v(" "),s("p",[s("Button",{attrs:{href:"/"}},[t._v("\n              Go home\n            ")])],1)]),t._v(" "),s("div",{staticClass:"pt-5"},[t.lastUpdated?s("div",{staticClass:"py-5 flex justify-end text-sm"},[s("p",[s("span",{staticClass:"font-bold pr-1"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])])]):t._e(),t._v(" "),s("PageNav",{attrs:{sidebarItems:t.sidebarItems}})],1),t._v(" "),t.shouldShowOtherTopics?s("OtherTopics",{staticClass:"px-3",attrs:{slot:"page-bottom",items:t.otherTopicsItems},slot:"page-bottom"},[s("h4",{staticClass:"text-xl mb-4 mt-2 font-semibold",attrs:{slot:"top"},slot:"top"},[t._v("\n            Other topics\n          ")])]):t._e()],1)]),t._v(" "),s("PageSidebar",{staticClass:"fixed",class:{"-mini-header":t.headerFixed},attrs:{page:t.$page}})],1)])}),[],!1,null,null,null).exports;s(437);i.a.use(o.a);var d={components:{NotFound:l,Navbar:a.Navbar,Sidebar:a.Sidebar,Footer:a.Footer,SupportUs:a.SupportUs},data:function(){return{isSidebarOpen:!1}},computed:{navLinks:function(){return Object(a.getUserNavLinks)(this)},repoUrl:function(){var t=this.$site.themeConfig.repo;return/^https?:/.test(t)?t:"https://github.com/".concat(t)},siteTitle:function(){return this.$site.themeConfig.shortTitle||this.$siteTitle},htmlTitle:function(){return this.$site.themeConfig.htmlTitle||this.$siteTitle},logoSrc:function(){return this.$site.themeConfig.logo&&this.$withBase(this.$site.themeConfig.logo)},isLandingPage:function(){return"Home"===this.$page.frontmatter.layout},isCustomLayout:function(){return this.$page.frontmatter.layout&&!this.isLandingPage},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){return!1!==this.$page.frontmatter.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.resolveSidebarItems)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"with-sidebar":this.shouldShowSidebar},t]},algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(s(440),Object(h.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container init",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{attrs:{"site-title":t.siteTitle,"html-title":t.htmlTitle,"logo-src":t.logoSrc,href:t.$localePath,"repo-url":t.repoUrl,"social-urls":t.$site.themeConfig,items:t.navLinks,algolia:t.algolia},scopedSlots:t._u([{key:"sidebar-before",fn:function(){return[t.shouldShowSidebar?s("div",{staticClass:"flex cursor-pointer text-xl mr-4",on:{click:t.toggleSidebar}},[s("i",{staticClass:"bx bx-menu"})]):t._e()]},proxy:!0}],null,!1,1423491846)}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("main",{staticClass:"main-content relative z-2 pt-16"},[t.isCustomLayout?s("div",{staticClass:"custom-layout"},[s(t.$page.frontmatter.layout,{tag:"component"})],1):s("NotFound",{attrs:{"sidebar-items":t.sidebarItems}})],1),t._v(" "),t.shouldShowSidebar?s("Sidebar",{class:{"-translate-x-100 md:shadow-sidebar md:translate-x-0":!t.isSidebarOpen,"translate-0 shadow-sidebar":t.isSidebarOpen},attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}):t._e(),t._v(" "),s("Footer",{attrs:{"repo-url":t.repoUrl,author:t.$site.themeConfig.author,"license-type":t.$site.themeConfig.licenseType,"copyright-dates":t.$site.themeConfig.copyrightDates,"social-urls":t.$site.themeConfig},scopedSlots:t._u([{key:"top",fn:function(){return[t.isLandingPage?t._e():s("SupportUs",{attrs:{brand:t.$site.themeConfig.shortTitle,"sponsor-url":t.$site.themeConfig.sponsorUrl,"license-type":t.$site.themeConfig.licenseType}}),t._v(" "),t._t("footer-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("footer-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null));e.default=c.exports}}]);