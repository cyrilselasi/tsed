(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{601:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"platformhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#platformhandler"}},[t._v("#")]),t._v(" PlatformHandler "),s("Badge",{attrs:{text:"Class",type:"class"}}),t._v(" "),s("Badge",{attrs:{text:"platform",title:"platform",type:"platform"}})],1),t._v(" "),s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { PlatformHandler } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.1.4/packages/common/src/platform/services/PlatformHandler.ts#L0-L0"}},[t._v("/packages/common/src/platform/services/PlatformHandler.ts")])])])])])]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("div",{staticClass:"language-typescript"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" PlatformHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Create a native middleware based on the given metadata and return an instance of "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/HandlerContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerContext")])]),t._v("\n     * @param input\n     * @param options\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PlatformRouteWithoutHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Create handler metadata\n     * @param obj\n     * @param routeOptions\n     */\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandlerMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" routeOptions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PlatformRouteWithoutHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/method/Get.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("Get")])]),t._v(" argument "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" parameter medata or handler context.\n     * @param type\n     * @param h\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/ParamTypes.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("ParamTypes")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/HandlerContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCtxRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Call handler when a request his handle\n     * @param requestOptions\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("er"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unknown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Manage success scenario\n     * @param data\n     * @param requestOptions\n     * @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Call the returned middleware by the handler.\n     * @param middleware\n     * @param ctx\n     * @param next\n     * @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callReturnedMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Send the response to the consumer.\n     * @param data\n     * @param ctx\n     * @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Render the view if the endpoint has a configured view.\n     * @param data\n     * @param ctx\n     * @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * create Raw handler\n     * @param metadata\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRawHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Set response headers\n     * @param ctx\n     * @"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v("\n     */\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Return arguments to call handler\n     * @param h\n     */\n"),s("div",{pre:!0,attrs:{class:"language- extra-class"}},[s("pre",[s("code",[t._v("/**\n * Sort pipes before calling it\n * @param metadata\n */\n\n/**\n * Map argument by calling pipe.\n * @param metadata\n * @param h\n */\n")])])]),s("p",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Platform Handler abstraction layer. Wrap original class method to a pure platform handler (Express, Koa, etc...).")]),t._v(" "),s("h2",{attrs:{id:"members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[t._v("#")]),t._v(" Members")]),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" injector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("InjectorService")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PlatformRouteWithoutHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create a native middleware based on the given metadata and return an instance of HandlerContext")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandlerMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" | "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/EndpointMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("EndpointMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" routeOptions?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PlatformRouteWithoutHandlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Create handler metadata")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/ParamTypes.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("ParamTypes")])]),t._v(" | "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/HandlerContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Get argument from parameter medata or handler context.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCtxRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Call handler when a request his handle")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("er"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unknown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Manage success scenario")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callReturnedMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Call the returned middleware by the handler.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Send the response to the consumer.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise<"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Render the view if the endpoint has a configured view.")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRawHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("HandlerMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("create Raw handler")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/domain/PlatformContext.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("PlatformContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),t._v(" "),s("p",[t._v("Set response headers")])]),s("hr"),t._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"method-overview"}},[s("div",{pre:!0,attrs:{class:"language-typescript"}},[s("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[s("code",{pre:!0,attrs:{class:"typescript-lang "}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("a",{pre:!0,attrs:{href:"/api/common/platform/services/OnRequestOptions.html"}},[s("span",{pre:!0,attrs:{class:"token"}},[t._v("OnRequestOptions")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);