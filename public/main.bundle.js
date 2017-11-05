webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addquestion/addquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left:30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addquestion/addquestion.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">ADD Question</div>\n                <div class=\"panel-body\">\n                    <form (submit)=\"onAddQuestion()\">\n\n                        <div class=\"form-group\">\n                            <label for=\"question\" class=\"col-md-4 control-label\">Question</label>\n\n                            \n                                <input type=\"textbox\" class=\"form-control\" [(ngModel)]=\"question\" name=\"email\" value=\"\" required autofocus>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"ques_type\" class=\"col-md-4 control-label\">Questype</label>\n\n                            \n                                <select class=\"form-control\" [(ngModel)]=\"ques_type\" name=\"ques_type\" required>\n                                \t<option value=\"mcq\">MCQ</option>\n                                \t<option value=\"basic\">Basic</option>\n                                </select>\n                            \n                        </div>\n\n\n                        <div class=\"form-group\">\n                            <label for=\"option_a\" class=\"col-md-4 control-label\">Option A</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"option_a\" name=\"option_a\">\n                        </div>\n\n                         <div class=\"form-group\">\n                            <label for=\"option_b\" class=\"col-md-4 control-label\">Option B</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"option_b\" name=\"option_b\">\n                        </div>\n\n                         <div class=\"form-group\">\n                            <label for=\"option_c\" class=\"col-md-4 control-label\">Option C</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"option_c\" name=\"option_c\">\n                        </div>\n\n                         <div class=\"form-group\">\n                            <label for=\"option_d\" class=\"col-md-4 control-label\">Option D</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"option_d\" name=\"option_d\">\n                        </div>\n\n                         <div class=\"form-group\">\n                            <label for=\"Answer\" class=\"col-md-4 control-label\">Answer</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"answer\" name=\"answer\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"col-md-8 col-md-offset-4\">\n                                <button type=\"submit\" class=\"btn btn-primary\">\n                                    Submit\n                                </button>\n\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/addquestion/addquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddquestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddquestionComponent = (function () {
    function AddquestionComponent(questionService, router) {
        this.questionService = questionService;
        this.router = router;
    }
    AddquestionComponent.prototype.ngOnInit = function () {
    };
    AddquestionComponent.prototype.onAddQuestion = function () {
        var _this = this;
        var ques = {
            question: this.question,
            ques_type: this.ques_type,
            option_a: this.option_a,
            option_b: this.option_b,
            option_c: this.option_c,
            option_d: this.option_d,
            answer: this.answer
        };
        this.questionService.addquestion(ques).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['questions']);
            }
            else {
                _this.router.navigate(['addquestion']);
            }
        });
    };
    AddquestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addquestion',
            template: __webpack_require__("../../../../../src/app/addquestion/addquestion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addquestion/addquestion.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddquestionComponent);
    return AddquestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admdashboard/admdashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 100px;\r\n}\r\na{\r\n\t-webkit-text-decoration-line: none;\r\n\t        text-decoration-line: none;\r\n\tfont-size: 26px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admdashboard/admdashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-3\">\n\t\t<a href=\"/questions\">View All Questions</a>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<a href=\"/addquestion\">Add Question</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admdashboard/admdashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmdashboardComponent = (function () {
    function AdmdashboardComponent() {
    }
    AdmdashboardComponent.prototype.ngOnInit = function () {
    };
    AdmdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admdashboard',
            template: __webpack_require__("../../../../../src/app/admdashboard/admdashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admdashboard/admdashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmdashboardComponent);
    return AdmdashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adminauth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminauthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminauthService = (function () {
    function AdminauthService(http) {
        this.http = http;
    }
    AdminauthService.prototype.authenticateAdmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/adminlogin', admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminauthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AdminauthService);
    return AdminauthService;
}());



/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 100px;\r\n}\r\na{\r\n\t-webkit-text-decoration-line: none;\r\n\t        text-decoration-line: none;\r\n\tfont-size: 26px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">Admin Login</div>\n                <div class=\"panel-body\">\n                    <form (submit)=\"onAdminLoginSubmit()\">\n\n                        <div class=\"form-group\">\n                            <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                            \n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" value=\"\" required autofocus>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                            \n                                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"col-md-8 col-md-offset-4\">\n                                <button type=\"submit\" class=\"btn btn-success\">\n                                    Login\n                                </button>\n\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/adminlogin/adminlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminauth_service__ = __webpack_require__("../../../../../src/app/adminauth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminloginComponent = (function () {
    function AdminloginComponent(admauthService, router) {
        this.admauthService = admauthService;
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.onAdminLoginSubmit = function () {
        var _this = this;
        var admin = {
            email: this.email,
            password: this.password
        };
        console.log(admin);
        this.admauthService.authenticateAdmin(admin).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.router.navigate(['/admindashboard']);
            }
            else {
                _this.router.navigate(['/adminlogin']);
            }
        });
    };
    AdminloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adminlogin',
            template: __webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__adminauth_service__["a" /* AdminauthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__adminauth_service__["a" /* AdminauthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\t\r\n\t\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adminlogin_adminlogin_component__ = __webpack_require__("../../../../../src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admdashboard_admdashboard_component__ = __webpack_require__("../../../../../src/app/admdashboard/admdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addquestion_addquestion_component__ = __webpack_require__("../../../../../src/app/addquestion/addquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'adminlogin', component: __WEBPACK_IMPORTED_MODULE_7__adminlogin_adminlogin_component__["a" /* AdminloginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'admindashboard', component: __WEBPACK_IMPORTED_MODULE_13__admdashboard_admdashboard_component__["a" /* AdmdashboardComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */] },
    { path: 'addquestion', component: __WEBPACK_IMPORTED_MODULE_15__addquestion_addquestion_component__["a" /* AddquestionComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_16__test_test_component__["a" /* TestComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__adminlogin_adminlogin_component__["a" /* AdminloginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admdashboard_admdashboard_component__["a" /* AdmdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__addquestion_addquestion_component__["a" /* AddquestionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__test_test_component__["a" /* TestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left:30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-6\">\n\t\t<a class=\"btn btn-primary\" href=\"/test\">Take Test</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 100px;\r\n}\r\na{\r\n\t-webkit-text-decoration-line: none;\r\n\t        text-decoration-line: none;\r\n\tfont-size: 26px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<a [routerLink]=\"['/adminlogin']\">Admin</a>\t\t\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<a [routerLink]=\"['/login']\">User</a>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">User Login</div>\n                <div class=\"panel-body\">\n                    <form (submit)=\"onLoginSubmit()\">\n\n                        <div class=\"form-group\">\n                            <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                            \n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" value=\"\" required autofocus>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                            \n                                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"col-md-8 col-md-offset-4\">\n                                <button type=\"submit\" class=\"btn btn-success\">\n                                    Login\n                                </button>\n\n                                <button class=\"btn btn-success\">\n                                    <a [routerLink]=\"['/register']\">Register</a>\n                                </button>\n\n                            </div>\n                        </div>\n\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        console.log(user);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.router.navigate(['dashboard']);
            }
            else {
                console.log(data);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" href=\"#\">Quiz</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Link</a>\n          </li>\n          \n        </ul>\n        \n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
    }
    //retreiving quiz
    QuestionService.prototype.getquestion = function () {
        return this.http.get('http://localhost:3000/api/questions').map(function (res) { return res.json(); });
    };
    //add question
    QuestionService.prototype.addquestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/addquestion', question, { headers: headers }).map(function (res) { return res.json(); });
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.delete('http://localhost:3000/api/deletequestion/' + id).map(function (res) { return res.json(); });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\t<div class=\"col-sm-8\">\n\t\t<article><a href=\"/addquestion\">+add more questions</a></article>\n\t\t<br/>\n\t\t<div *ngFor = \"let ques of questions\"> \n\t\t\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel panel-heading\">\n\t\t\t\t\t<h4>Q.{{ques.question}}</h4>\n\t\t\t\t\t<span style=\"text-align: right\"><p><a href=\"\" class=\"btn btn-danger\">Delete</a></p>\n\t\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<br/>\n\n\t\t\t<div class=\"panel panel-body\">\n\t\t\t\t<div *ngIf = \"ques.ques_type == 'mcq'\">\n\t\t\t\t\t<p>A){{ques.option_a}}</p>\n\t\t\t\t\t<p>B){{ques.option_b}}</p>\n\t\t\t\t\t<p>C){{ques.option_c}}</p>\n\t\t\t\t\t<p>D){{ques.option_d}}</p>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<h5>Answer:{{ques.answer}}</h5>\n\t\t\t\t<hr/>\n\t\t</div>\n\t</div>\n\n\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = (function () {
    function QuestionComponent(QuestionService) {
        this.QuestionService = QuestionService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.QuestionService.getquestion()
            .subscribe(function (questions) {
            return _this.questions = questions;
        });
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 100px;\r\n}\r\na{\r\n\t-webkit-text-decoration-line: none;\r\n\t        text-decoration-line: none;\r\n\tfont-size: 26px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">User Register</div>\n                <div class=\"panel-body\">\n                    <form (submit)=\"onRegisterSubmit()\">\n\n                    \t<div class=\"form-group\">\n                            <label for=\"first name\" class=\"col-md-4 control-label\">First Name</label>\n\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" required autofocus> \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"last name\" class=\"col-md-4 control-label\">Last Name</label>\n\n                                <input type=\"last_name\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" value=\"\" required >\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"email\" class=\"col-md-4 control-label\">E-Mail Address</label>\n\n                            \n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" value=\"\" required>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\n\n                            \n                                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n\n                            \n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"col-md-8 col-md-offset-4\">\n                                <button type=\"submit\" class=\"btn btn-success\">\n                                    Register\n                                </button>\n\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.router.navigate(['register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n\tmargin-top: 120px;\r\n\tmargin-left: 20px;\r\n\r\n}\r\n\r\n/*.grid{\r\n\twidth:600px;\r\n\theight:500px;\r\n\tmargin: 0 auto;\r\n\tbackground-color: #fff;\r\n\tpadding: 10px 50px 50px 50px;\r\n\tborder-radius: 50px;\r\n\tborder: 2px solid #cbcbcb;\r\n\tbox-shadow: 10px 15px 5px #cbcbcb;\r\n}*/\r\n\r\n.grid h1{\r\n\tbackground-color: #57636e;\r\n\tfont-size: 60px;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\tpadding: 2px 0px;\r\n\tborder-radius: 50px;\r\n}\r\n\r\n #question{\r\n\tfont-family: sans-serif;\r\n\tfont-size: 30px;\r\n\tcolor: #5a6772;\r\n}\r\n\r\n.buttons{\r\n\tmargin-top: 30px;\r\n}\r\n\r\n#btn0, #btn1, #btn2, #btn3{\r\n\tbackground-color: #778897;\r\n\twidth: 250px;\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #1d3c6a;\r\n\tborder-radius: 50px;\r\n\tmargin: 10px 40px 10px 0px;\r\n\tpadding: 10px 10px;\r\n}\r\n\r\n#progress{\r\n\tcolor: #2b2b2b;\r\n\tfont-size: 18px;\r\n}\r\n#btn0:hover, #btn1:hover, #btn2:hover, #btn3:hover{\r\n\tcursor: pointer;\r\n\tbackground-color: #57636e;\r\n}\r\n\r\n#btn0:focus, #btn1:focus, #btn2:focus, #btn3:focus{\r\n\toutline: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"grid\">\n\t<h1>Quiz</h1>\n\t<div id=\"quiz\">\n\t\t\n\t\t<hr style=\"margin-bottom: 20px \">\n\t\t<div *ngFor = \"let ques of questions\">\n\t\t\t<hr style=\"margin-bottom: 20px \">\n\t\t\t<form>\n\t\t\t\t<h3 id=\"question\">Q. {{ques.question}}</h3>\n\n\t\t\t\t<div *ngIf = \"ques.ques_type =='mcq' \">\n\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"\" name=\"{{ques._id}}\" value=\"{{ques.option_a}}\">{{ques.option_a}}<br/>\n\t\t\t\t\t\t<input type=\"radio\" id=\"\" name=\"{{ques._id}}\" value=\"{{ques.option_b}}\">{{ques.option_b}}<br/>\n\t\t\t\t\t\t<input type=\"radio\" id=\"\" name=\"{{ques._id}}\" value=\"{{ques.option_c}}\">{{ques.option_c}}<br/>\n\t\t\t\t\t\t<input type=\"radio\" id=\"\" name=\"{{ques._id}}\" value=\"{{ques.option_d}}\">{{ques.option_d}}<br/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"ques.ques_type== 'basic' \">\n\t\t\t\t\t<div class=\"form-control\">\n\t\t\t\t\t\t<input type=\"text\" name=\"ans\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<hr style=\"margin-top: 10px \">\n\t\t\t\n\t\t\t\n\t\t\t<input type=\"button\" value=\"Submit\" name=\"submit\" onclick=\"check();\">\n\t\t\t\n\t\t</form>\n\t\t<div id= \"after_submit\"><p id=\"number_correct\"></div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<script>\n\tfunction check(){\n\t\tvar question = document.quiz.question.value;\n\t\tvar correct = 0;\n\n\t\tif(question == {{ques.answer}}){\n\t\t\tcorrect++;\n\t\t}\n\n\t\tdocument.getElementById(\"after_submit\").style.visibility = \"visible\";\n\t\tdocument.getElementById(\"number_correct\").innerHTML = correct;\n\t}\t\n</script>"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(QuestionService) {
        this.QuestionService = QuestionService;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.QuestionService.getquestion()
            .subscribe(function (questions) {
            return _this.questions = questions;
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateadminlogin = function () {
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map