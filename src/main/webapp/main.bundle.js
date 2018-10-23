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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_master_visitormaster_visitormaster_component__ = __webpack_require__("../../../../../src/app/component/master/visitormaster/visitormaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_master_employeemaster_employeemaster_component__ = __webpack_require__("../../../../../src/app/component/master/employeemaster/employeemaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_master_departmentmaster_departmentmaster_component__ = __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentmaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_admin_admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/component/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__component_login_login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__component_admin_admin_panel_admin_panel_component__["a" /* AdminPanelComponent */], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__component_admin_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'visitor', component: __WEBPACK_IMPORTED_MODULE_4__component_master_visitormaster_visitormaster_component__["a" /* VisitormasterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_5__component_master_employeemaster_employeemaster_component__["a" /* EmployeemasterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'department', component: __WEBPACK_IMPORTED_MODULE_6__component_master_departmentmaster_departmentmaster_component__["a" /* DepartmentmasterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var logout = "true";
var AppComponent = /** @class */ (function () {
    function AppComponent(router, service, http, auth) {
        this.router = router;
        this.service = service;
        this.http = http;
        this.auth = auth;
        this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RoutesRecognized */]; })
            .pairwise()
            .subscribe(function (event) {
            if (sessionStorage.getItem("logout") == "true") {
                sessionStorage.removeItem("referrer");
            }
            else
                sessionStorage.setItem("referrer", event[0].urlAfterRedirects);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.genBase64 = function () {
        var _this = this;
        this.webcam.getBase64()
            .then(function (base) {
            _this.file1 = base;
        })
            .catch(function (e) { return console.error(e); });
    };
    AppComponent.prototype.onCamError = function (err) { };
    AppComponent.prototype.onCamSuccess = function (e) {
    };
    AppComponent.main_url = "http://localhost:8080/visitormanegement/";
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__app_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_master_visitormaster_visitormaster_component__ = __webpack_require__("../../../../../src/app/component/master/visitormaster/visitormaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_master_employeemaster_employeemaster_component__ = __webpack_require__("../../../../../src/app/component/master/employeemaster/employeemaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_master_departmentmaster_departmentmaster_component__ = __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentmaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_master_departmentmaster_departmentdatatable_departmentdatatable_component__ = __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_common_menu_menu_component__ = __webpack_require__("../../../../../src/app/component/common/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxmenu__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxmaskedinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_admin_admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/component/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ack_angular_webcam__ = __webpack_require__("../../../../ack-angular-webcam/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ack_angular_webcam___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ack_angular_webcam__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_master_employeemaster_employeedatatable_employeedatatable_component__ = __webpack_require__("../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxfileupload__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxtextarea__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_tosterservice_service__ = __webpack_require__("../../../../../src/app/tosterservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxprogressbar__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__auth_modules__ = __webpack_require__("../../../../../src/app/auth.modules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_master_visitormaster_visitordatatable_visitordatatable_visitordatatable_component__ = __webpack_require__("../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// visitor


var AppModule = /** @class */ (function (_super) {
    __extends(AppModule, _super);
    function AppModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        return _this;
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_master_visitormaster_visitormaster_component__["a" /* VisitormasterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_master_employeemaster_employeemaster_component__["a" /* EmployeemasterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_master_departmentmaster_departmentmaster_component__["a" /* DepartmentmasterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_component_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_common_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxmenu__["a" /* jqxMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_admin_admin_panel_admin_panel_component__["a" /* AdminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_2__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_14__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_33__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_master_employeemaster_employeedatatable_employeedatatable_component__["a" /* EmployeedatatableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_master_departmentmaster_departmentdatatable_departmentdatatable_component__["a" /* DepartmentdatatableComponent */],
                // empoyee
                __WEBPACK_IMPORTED_MODULE_22__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */],
                __WEBPACK_IMPORTED_MODULE_23__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxfileupload__["a" /* jqxFileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxtextarea__["a" /* jqxTextAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_26__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_27__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */],
                __WEBPACK_IMPORTED_MODULE_34__component_master_visitormaster_visitordatatable_visitordatatable_visitordatatable_component__["a" /* VisitordatatableComponent */],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxmaskedinput__["a" /* jqxMaskedInputComponent */],
                __WEBPACK_IMPORTED_MODULE_31__node_modules_jqwidgets_scripts_jqwidgets_ts_angular_jqxprogressbar__["a" /* jqxProgressBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19_ack_angular_webcam__["WebCamModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_32__auth_modules__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__app_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_28__app_tosterservice_service__["a" /* Toasterservice */], __WEBPACK_IMPORTED_MODULE_30_ng2_toastr__["ToastOptions"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}(__WEBPACK_IMPORTED_MODULE_30_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "../../../../../src/app/auth.modules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_tabview_tabview__ = __webpack_require__("../../../../primeng/components/tabview/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_tabview_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_tabview_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__ = __webpack_require__("../../../../primeng/components/button/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_growl_growl__ = __webpack_require__("../../../../primeng/components/growl/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_growl_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_growl_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_login_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_primeng_components_tabview_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_components_button_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_components_growl_growl__["GrowlModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__component_login_login_login_component__["a" /* LoginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__component_login_login_login_component__["a" /* LoginComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/admin-panel/admin-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/component/admin/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_menu_menu_component__ = __webpack_require__("../../../../../src/app/component/common/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__common_menu_menu_component__["a" /* MenuComponent */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__("../../../../../src/app/component/admin/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<html>\r\n    <head>\r\n           <!--  <link rel=\"stylesheet\" href=  \"../../../../../node_modules/jqwidgets-scripts/jqwidgets/styles/jqx.base.css\" type=\"text/css\" /> -->\r\n<!--             <link rel=\"stylesheet\" href=  \"../../../../../node_modules/jqwidgets-scripts/jqwidgets/styles/jqx.darkblue.css\" type=\"text/css\" /> -->\r\n\r\n        </head>\r\n<body>\r\n    <h3>DASHBOARD</h3>\r\n<jqxDataTable #myDataTable\r\n    \r\n    (onRowSelect)=\"onRowSelect($event)\"  \r\n    [width]=\"'100%'\" [source]=\"dataAdapter\" [columns]=\"columns\" [theme]=\"darkblue\"\r\n    [altRows]=\"true\" [pageable]=\"true\" [filterable]=\"true\"\r\n    [pageable]=\"true\" [altRows]=\"true\" [sortable]=\"true\" \r\n    [pagerMode]=\"'advanced'\"  \r\n    [filterMode]=\"'advanced'\"\r\n    [selectionMode]=\"'singleRow'\"\r\n    [pagerButtonsCount]=\"8\"\r\n    >\r\n</jqxDataTable>\r\n<br>\r\n<jqxButton class=\"btn-primary btn\" (onClick)=\"excelExport()\" [width]=\"110\">Export to Excel</jqxButton>\r\n<jqxButton #printvisitor class=\"btn-primary btn\" [disabled]=\"true\" (onClick)=\"printpdf()\" [width]=\"110\">PrintVisitorCard</jqxButton>\r\n<jqxButton #deletevisitor class=\"btn-primary btn\" [disabled]=\"true\" (onClick)=\"deleteVisitor()\" [width]=\"110\">Delete</jqxButton>\r\n<jqxButton #checkin class=\"btn-primary btn\" [disabled]=\"true\" (onClick)=\"checkIn()\" [width]=\"110\">CheckIn</jqxButton>\r\n<jqxButton #checkout class=\"btn-primary btn\" [disabled]=\"true\" (onClick)=\"checkOut()\" [width]=\"110\">CheckOut</jqxButton>\r\n</body>\r\n</html>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appservice, router, toaster) {
        this.appservice = appservice;
        this.router = router;
        this.toaster = toaster;
        this.data = {};
        this.source = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.appservice.getData_Service("getVisitorDetail").then(function (data) {
            _this.data = JSON.stringify(data['data']);
            _this.columns =
                [
                    { text: 'Visitor ID', dataField: 'v_id', width: 120, cellsAlign: 'right', align: 'right' },
                    /*        { text: 'Host ID', dataField: 'emp_id', width: 120 }, */
                    { text: 'Visitor Name', dataField: 'v_name', width: 300 },
                    { text: 'Host Name', dataField: 'emp_name', width: 300 },
                    { text: 'Purpose', dataField: 'v_pupose' },
                    { text: 'DepartMent', dataField: 'dept_name' },
                    { text: 'Visitor Date', dataField: 'v_date' },
                    { text: 'CheckIn Time', dataField: 'v_timeIn' },
                    { text: 'CheckOut Time', dataField: 'v_timeOut' },
                ];
            _this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'v_id', type: 'number' },
                        { name: 'emp_id', type: 'number' },
                        { name: 'v_name', type: 'string' },
                        { name: 'emp_name', type: 'string' },
                        { name: 'v_pupose', type: 'string' },
                        { name: 'dept_name', type: 'string' },
                        { name: 'v_date', type: 'string' },
                        { name: 'v_timeIn', type: 'string' },
                        { name: 'v_timeOut', type: 'string' },
                    ],
                    id: 'id',
                    localdata: _this.data
                };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
        });
    };
    DashboardComponent.prototype.excelExport = function () {
        this.myDataTable.exportData('xls');
    };
    ;
    DashboardComponent.prototype.ooonclick = function (id) {
        this.appservice.deleteData_UsingID_ServiceGET(id, "deleteVisitorDetail");
        this.ngOnInit();
    };
    DashboardComponent.prototype.onRowSelect = function (event) {
        this.rowIndex = event.args.index;
        this.printvisitor.disabled(false);
        this.deletevisitor.disabled(false);
        this.checkin.disabled(false);
        this.checkout.disabled(false);
        this.deleteV = this.myDataTable.getCellValue(this.rowIndex, "v_id");
        this.name = this.myDataTable.getCellValue(this.rowIndex, "v_name");
    };
    DashboardComponent.prototype.checkIn = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append('v_id', this.deleteV);
        formdata.append('flag', 'checkin');
        this.appservice.checkinAndout(formdata, "checkinAndout").subscribe(function (isCheckOut) {
            if (isCheckOut.toString() == 'false' && isCheckOut == false) {
                _this.toaster.info("if you chekout than checkIn is not possible.Re-Schedule Visit Again!");
                _this.checkin.disabled(true);
                _this.checkout.disabled(true);
                return false;
            }
            else {
                setTimeout(function () { location.reload(); }, 1000);
            }
        });
    };
    DashboardComponent.prototype.checkOut = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append('v_id', this.deleteV);
        formdata.append('flag', 'checkout');
        this.appservice.checkinAndout(formdata, "checkinAndout").subscribe(function (isCheckOut) {
            if (isCheckOut.toString() == 'false' && isCheckOut == false) {
                _this.toaster.info("if you chekout than again checkOut is not possible..!");
                _this.checkin.disabled(true);
                _this.checkout.disabled(true);
                return false;
            }
            else {
                setTimeout(function () { location.reload(); }, 1000);
            }
        });
    };
    DashboardComponent.prototype.deleteVisitor = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete " + this.name + "'s  record",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6060',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                if (null != _this.deleteV && _this.deleteV != undefined) {
                    console.log("delate : " + _this.deleteV);
                    var formdata = new FormData();
                    formdata.append('v_id', _this.deleteV);
                    _this.appservice.deleteData_UsingID_Service(formdata, "deleteVisitorDetail").subscribe();
                    _this.myDataTable.deleteRow(_this.rowIndex);
                }
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.DismissReason.cancel) {
            }
        });
    };
    DashboardComponent.prototype.printpdf = function () {
        var _this = this;
        /*   setTimeout(()=>{    //<<<---    using ()=> syntax
        
        },15000);
         */
        if (null != this.deleteV && this.deleteV != undefined && this.deleteV != '') {
            this.appservice.getData_UsingID_Servicedashboard(this.deleteV, "getVisitordatabyid").then(function (data) {
                var getdata = JSON.stringify(data["data"]);
                _this.printVisitorDetail(JSON.parse(getdata)[0]["v_id"], JSON.parse(getdata)[0]["v_name"], JSON.parse(getdata)[0]["emp_name"], JSON.parse(getdata)[0]["v_pupose"], JSON.parse(getdata)[0]["dept_name"], JSON.parse(getdata)[0]["v_photo"].substring(49), JSON.parse(getdata)[0]["v_date"]);
            });
            ;
        }
    };
    DashboardComponent.prototype.printVisitorDetail = function (vid, vname, empname, purpose, dept, vphoto, vdate) {
        this.photostring = vphoto.replace(new RegExp(/\\/g), "\\");
        this.photostring = "/" + this.photostring;
        console.log(this.photostring);
        var newWindow = window.open('', '', 'width=800, height=500'), document = newWindow.document.open(), pageContent = ' <html> ' +
            ' <head> ' +
            '      <meta charset="utf-8"> ' +
            '     <title></title>' +
            '<style type="text/css">body {-webkit-print-color-adjust: exact; font-family: Arial; }</style>' +
            '</head> ' +
            ' <body style ="-webkit-print-color-adjust:exact;">' +
            '<div style="background-color: #ffffff; border:black; border-style: double; width:400px;padding-right:10px; margin-right: 10px;border-radius: 10px" >' +
            '<table style="table-layout: fixed; width: 100%"> ' +
            '<tr>' +
            '    <td rowspan="2"><img  src="/assets/Efive/login_logo.png" width="100px" height="50px" ></td>' +
            '    <td width="5%"></td>' +
            '    <td colspan="2" style="text-align: center;background: #e2ccd1">visitor pass</td>' +
            '</tr>' +
            '<tr>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#dcdee2">Pass no</td>' +
            '    <td style="background:#e0decc">' + vid + '</td>' +
            '</tr>' +
            '<tr>' +
            //'    <td rowspan="5"> <img  src="'+vphoto+'" height="50px" onload=\"javascript:window.print();\"></td>'+
            '    <td rowspan="5"><img   src="' + this.photostring + '" width="100px" height="100px" onload=\"javascript:window.print();\"></td>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#efefef">V_Name</td>' +
            '    <td style="background:#e0dede">' + vname + '</td>' +
            '</tr>' +
            '<tr>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#dcdee2">Host_Name</td>' +
            '    <td style="background:#e0decc">' + empname + '</td>' +
            '</tr>' +
            '<tr>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#efefef">V_DATE</td>' +
            '    <td style="background:#e0dede">' + vdate + '</td>' +
            '</tr>' +
            '<tr>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#dcdee2">Dept.</td>' +
            '    <td style="background:#e0decc">' + dept + '</td>' +
            '</tr>' +
            '<tr>' +
            '    <td width="5%"></td>' +
            '    <td style="background:#efefef">Purpose</td>' +
            '    <td style="background:#e0dede">' + purpose + '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            ' </body> ' +
            ' </html> ';
        document.write(pageContent);
        document.close();
        // newWindow.print(); 
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */])
    ], DashboardComponent.prototype, "myDataTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('printvisitor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */])
    ], DashboardComponent.prototype, "printvisitor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deletevisitor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */])
    ], DashboardComponent.prototype, "deletevisitor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkin'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */])
    ], DashboardComponent.prototype, "checkin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkout'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxbuttons__["a" /* jqxButtonComponent */])
    ], DashboardComponent.prototype, "checkout", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/component/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/common/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/common/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<jqxMenu #jqxMenu \r\n         [width]=\"'100%'\"\r\n         [height]=\"'100%'\"   contextmenu=\"true\">\r\n  <ul class=\"jqx-menu\">\r\n    <li><a routerLink=\"/admin/dashboard\">DashBoard</a></li>\r\n    <li>\r\n      Master\r\n      <ul>\r\n        <li><a routerLink='/admin/visitor'>Visitor Master</a></li>\r\n        <li><a routerLink='/admin/employee'>Employee Master</a></li>\r\n        <li><a routerLink='/admin/department'>Department Master</a></li>\r\n      </ul>\r\n    </li>\r\n<li  (click)=\"logout()\">Logout</li>\r\n\r\n    <!-- <li>\r\n      Products\r\n      <ul>\r\n        <li><a href=\"admin/visitor\">PC products</a></li>\r\n        <li><a href=\"#MobileProducts\">Mobile products</a></li>\r\n        <li><a href=\"#AllProducts\">All products</a></li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      Support\r\n      <ul style='width: 200px;'>\r\n        <li><a href=\"#SupportHome\">Support home</a></li>\r\n        <li><a href=\"#CustomerService\">Customer Service</a></li>\r\n        <li><a href=\"#KB\">Knowledge base</a></li>\r\n        <li><a href=\"#Books\">Books</a></li>\r\n        <li><a href=\"#Training\">Training and certification</a></li>\r\n        <li><a href=\"#SupportPrograms\">Support programs</a></li>\r\n        <li><a href=\"#Forums\">Forums</a></li>\r\n        <li><a href=\"#Documentation\">Documentation</a></li>\r\n        <li><a href=\"#Updates\">Updates</a></li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      Communities\r\n      <ul style='width: 200px;'>\r\n        <li><a href=\"#Designers\">Designers</a></li>\r\n        <li><a href=\"#Developers\">Developers</a></li>\r\n        <li><a href=\"#Educators\">Educators and students</a></li>\r\n        <li><a href=\"#Partners\">Partners</a></li>\r\n        <li type='separator'></li>\r\n        <li>By resource</li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      Company\r\n      <ul style='width: 180px;'>\r\n        <li><a href=\"#About\">About Us</a></li>\r\n        <li><a href=\"#Press\">Press</a></li>\r\n        <li><a href=\"#Investor\">Investor Relations</a></li>\r\n        <li><a href=\"#CorporateAffairs\">Corporate Affairs</a></li>\r\n        <li><a href=\"#Careers\">Careers</a></li>\r\n        <li><a href=\"#Showcase\">Showcase</a></li>\r\n        <li><a href=\"#Events\">Events</a></li>\r\n        <li><a href=\"#ContactUs\">Contact Us</a></li>\r\n        <li><a href=\"#Become an affiliate\">Become an affiliate</a></li>\r\n      </ul>\r\n    </li> -->\r\n  </ul>\r\n</jqxMenu>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/common/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router, authservice) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
    }
    MenuComponent.prototype.logout = function () {
        this.router.navigate(['']);
        sessionStorage.setItem("logout", "true");
        this.authservice.logOut();
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/component/common/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/common/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n\n    <title>Login</title>\n\n    <!-- Bootstrap core CSS -->\n\n\n    <!-- Custom styles for this template -->\n    <style>\n    body {\n      padding-top: 40px;\n      padding-bottom: 40px;\n      background-color:lightsteelblue;\n    }\n    .form-signin {\n      max-width: 330px;\n      padding: 15px;\n      margin: 0 auto;\n    }\n    .form-signin .form-signin-heading,\n    .form-signin .checkbox {\n      margin-bottom: 10px;\n    }\n    .form-signin .checkbox {\n      font-weight: normal;\n    }\n    .form-signin .form-control {\n      position: relative;\n      font-size: 16px;\n      height: auto;\n      padding: 10px;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n    }\n    .form-signin .form-control:focus {\n      z-index: 2;\n    }\n    .form-signin input[type=\"text\"] {\n      margin-bottom: -1px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n    .form-signin input[type=\"password\"] {\n      margin-bottom: 10px;\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    }\n    </style>\n\n    <!-- Just for debugging purposes. Don't actually copy this line! -->\n    <!--[if lt IE 9]><script src=\"http://getbootstrap.com/docs-assets/js/ie8-responsive-file-warning.js\"></script><![endif]-->\n\n    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!--[if lt IE 9]>\n      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js\"></script>\n    <![endif]-->\n  </head>\n\n  <body>\n\n    <div class=\"container\">\n\n      <form class=\"form-signin\"  (ngSubmit) = \"onClickSubmit()\" #f=\"ngForm\">\n        <br><br>\n        <input type=\"text\" class=\"form-control\" placeholder=\"UserName\" name=\"username\" [(ngModel)]=\"user.username\" required autofocus>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n        \n        <button class=\"btn btn-lg btn-primary btn-block btn-success\" value=\"Login\" type=\"submit\" ><img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          Sign in</button>\n        \n      </form>\n\n    </div> <!-- /container -->\n\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n  </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/component/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_login_model__ = __webpack_require__("../../../../../src/app/model/login-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var previous = "";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authservice, toaster) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this.toaster = toaster;
        this.login = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_login_model__["a" /* LoginModel */]();
        this.messages = [];
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        /* localStorage.removeItem('currentUser'); */
        // get return url from route parameters or default to '/'
        if (localStorage.getItem('jwtToken') != null) {
            this.router.navigate(['/admin/dashboard']);
        }
    };
    LoginComponent.prototype.loginValidation = function () {
        if (this.user.username == null) {
            this.toaster.error("user Name is Empty!");
            return false;
        }
        if (this.user.password == null) {
            this.toaster.error("Password is Empty!");
            return false;
        }
        return true;
    };
    //function for login Validation
    LoginComponent.prototype.onClickSubmit = function () {
        var _this = this;
        previous = sessionStorage.getItem("referrer");
        if (this.loginValidation()) {
            this.loading = true;
            /* console.log(this.user.username);
           if (this.user.username=="systemadmin" && this.user.password=="admin123") {
            
               this.router.navigate(['app-visitor-menu'])
            } else {
               alert("Invalid Login");
               return false;
            }
             */
            this.authservice.login(this.user)
                .subscribe(function (isLoggedIn) {
                if (isLoggedIn) {
                    _this.login = true;
                    if (previous != null && previous.length > 0) {
                        window.location.href = previous;
                    }
                    else {
                        sessionStorage.removeItem("logout");
                        //  this.router.navigate(['/admin/dashboard']);
                        window.location.href = "http://localhost:8080/admin/dashboard";
                    }
                }
                else {
                    _this.loading = false;
                    _this.toaster.error("UserName And PassWord Not Correct!");
                    _this.login == false;
                }
            });
            /*current used
                this.authservice.login(this.user)
             .subscribe(result=> {
                if (result === true) {
                  // login successful
                  this.router.navigate(['profile']);
               } else {
                  // login failed
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
                }
            }, error => {
            this.loading = false;
            this.error = error;
          });  */
            /*     this.authservice.login(this.user.username, this.user.password)
                    .subscribe(resp => {
                      localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
                        this.router.navigate(['/profile']);
                    }, this.handleError); */
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
        //navigate main page here
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxDataTable #myDataTable\n  (onRowSelect)=\"onRowSelect($event)\" \n  [selectionMode]=\"'singleRow'\"\n  [source]=\"dataAdapter\" [columns]=\"columns\"\n  [altRows]=\"true\" [pageable]=\"true\" [filterable]=\"true\"\n  [pageable]=\"true\" [altRows]=\"true\"  [sortable]=\"true\" \n  [pagerMode]=\"'advanced'\"  [filterMode]=\"'advanced'\"\n>\n</jqxDataTable>\n<hr>\n<jqxButton class=\"btn-info btn\" (onClick)=\"editDepartment()\" [width]=\"110\">Edit</jqxButton>\n<jqxButton class=\"btn-warning btn\" (onClick)=\"deleteDepartment()\" [width]=\"110\">Delete</jqxButton>\n"

/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentdatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__departmentmaster_component__ = __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentmaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_department_model__ = __webpack_require__("../../../../../src/app/model/department-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepartmentdatatableComponent = /** @class */ (function () {
    function DepartmentdatatableComponent(appservice, deptcomponent) {
        this.appservice = appservice;
        this.deptcomponent = deptcomponent;
        this.dtmodel = new __WEBPACK_IMPORTED_MODULE_4__model_department_model__["a" /* DepartmentModel */]();
        this.data = {};
        this.data1 = [][2];
        this.source = {};
    }
    DepartmentdatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appservice.getData_Service("getDepartmentDetail").then(function (data) {
            _this.data = JSON.stringify(data['data']);
            _this.columns =
                [
                    { text: 'Departmet ID', dataField: 'dept_id', width: 120, cellsAlign: 'right', align: 'right' },
                    { text: 'Department Name', dataField: 'dept_name', width: 120 },
                    { text: 'Department Location', dataField: 'dept_location', width: 300 }
                ];
            _this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'dept_id', type: 'number' },
                        { name: 'dept_name', type: 'string' },
                        { name: 'dept_location', type: 'string' }
                    ],
                    id: 'id',
                    localdata: _this.data
                };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
        });
    };
    DepartmentdatatableComponent.prototype.onRowSelect = function (event) {
        this.rowIndex = event.args.index;
        this.DataID = this.myDataTable.getCellValue(this.rowIndex, "dept_id");
        this.deptName = this.myDataTable.getCellValue(this.rowIndex, "dept_name");
    };
    DepartmentdatatableComponent.prototype.editDepartment = function () {
        var _this = this;
        console.log("edit : " + this.DataID);
        this.appservice.getData_UsingID_Service(this.DataID, "getDepartmentDetailById").then(function (data) {
            _this.dt = JSON.stringify(data["data"]);
            _this.data1 = JSON.parse(_this.dt);
            console.clear();
            console.log("dept name : " + _this.data1[0]["dept_name"]);
            console.log("depat id : " + _this.data1[0]["dept_id"]);
            console.log("dept_location : " + _this.data1[0]["dept_location"]);
            _this.dtmodel.dept_id = _this.data1[0]["dept_id"];
            _this.dtmodel.dept_name = _this.data1[0]["dept_name"];
            _this.dtmodel.dept_location = _this.data1[0]["dept_location"];
            console.log(_this.dtmodel);
            _this.deptcomponent.setformvalue(_this.dtmodel);
        });
    };
    DepartmentdatatableComponent.prototype.deleteDepartment = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append('dept_id', this.DataID);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete " + this.deptName + "'s  department",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6060',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.appservice.deleteData_UsingID_Service(formdata, "deleteDepartment").subscribe();
                _this.myDataTable.deleteRow(_this.rowIndex);
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.DismissReason.cancel) {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */])
    ], DepartmentdatatableComponent.prototype, "myDataTable", void 0);
    DepartmentdatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-departmentdatatable',
            template: __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentdatatable/departmentdatatable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__departmentmaster_component__["a" /* DepartmentmasterComponent */]])
    ], DepartmentdatatableComponent);
    return DepartmentdatatableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentmaster.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dt1{\r\n    width: 30%;\r\n    float: left;\r\n    padding-left: 20px;\r\n}\r\n\r\n.dt2{\r\n     width : 50%; \r\n    float: left;\r\n}\r\n\r\n.top-padd{\r\n    clear: both;\r\n    padding-top: 20px;\r\n}\r\n\r\n.radiocheck{\r\n    float: left;\r\n     width: 50%; \r\n}\r\n\r\n.Center{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n.add-border{\r\n    border-color: black;\r\n    border-style: dashed;\r\n    border-right: dashed;\r\n    border-left: none;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    margin-right: 90px;\r\n    margin-left: -70px;\r\n    height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentmaster.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n\n    <title>Department</title>\n  </head>\n  <body>\n    <div>\n      <div style=\"margin-bottom: 0px;\"><h2>Department Master</h2><hr></div>\n      <div style=\"padding: 20px; float: left; width: 50%;\" class=\"add-border\">\n        <form (ngSubmit) = \"onClickSubmit()\" #f=\"ngForm\" id=\"departmentform\">\n          <div class=\"top-padd Center\">\n           <div class=\"dt1\">Dept Name</div>\n            <div class=\"dt2\">\n                <!-- [source]=\"countries\" -->\n              <input type=\"hidden\" name=\"dept_id\" id=\"dept_id\" #dept_id [(ngModel)]=\"dept.dept_id\" value=\"\"/>\n              <jqxInput\n                [width]=\"'100%'\" [height]=\"35\" id=\"dept_name\" name=\"dept_name\" #dept_name [(ngModel)]=\"dept.dept_name\" \n                [placeHolder]=\"'Enter Name'\" [maxLength]='50'>\n              </jqxInput>\n            </div>\n          </div>\n          <div class=\"top-padd Center\">\n            <div class=\"dt1\">Dept Location</div>\n            <div class=\"dt2\">\n              <jqxInput\n                [width]=\"'100%'\" [height]=\"35\" id=\"dept_location\" name=\"dept_location\" #dept_location [(ngModel)]=\"dept.dept_location\"\n                [placeHolder]=\"'Enter Location'\" [maxLength]='50'>\n              </jqxInput>\n            </div>\n          </div>\n          <div class=\"top-padd Center\">\n            <div class=\"Center\">\n            <button type=\"submit\"  class=\"btn-success btn\">Save</button>\n            <button type=\"button\" (click)=\"cancel()\"  class=\"btn-danger btn\">Clear</button></div>\n          </div>\n        </form>\n \n      </div>\n      <div style=\"float: left; width: 40%\">\n        <app-departmentdatatable>loading...</app-departmentdatatable>\n      </div> \n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/component/master/departmentmaster/departmentmaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentmasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_department_model__ = __webpack_require__("../../../../../src/app/model/department-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DepartmentmasterComponent = /** @class */ (function () {
    function DepartmentmasterComponent(http, appservice, toaster, router) {
        this.http = http;
        this.appservice = appservice;
        this.toaster = toaster;
        this.router = router;
        this.dept = new __WEBPACK_IMPORTED_MODULE_4__model_department_model__["a" /* DepartmentModel */]();
    }
    DepartmentmasterComponent.prototype.ngOnInit = function () {
    };
    DepartmentmasterComponent.prototype.onClickSubmit = function () {
        if (this.validateform()) {
            var formdata = new FormData();
            formdata.append('dept_id', this.deptid);
            formdata.append('dept_name', this.dept.dept_name);
            formdata.append('dept_location', this.dept.dept_location);
            console.log(this.dept);
            this.appservice.saveData_ServiceVisitor(formdata, "saveDepartmentDetail").subscribe();
            this.clearallfield();
            this.toaster.info("Department Data Save ");
            setTimeout(function () { location.reload(); }, 1000);
        }
    };
    DepartmentmasterComponent.prototype.setformvalue = function (temp) {
        console.log("from form : " + temp);
        this.dept_nameComp.ngValue = temp.dept_name;
        this.dept_nameComp.value(temp.dept_name);
        this.dept_locationComp.ngValue = temp.dept_location;
        this.dept_locationComp.value(temp.dept_location);
        this.dept.dept_id = temp.dept_id;
        this.deptid = temp.dept_id;
    };
    DepartmentmasterComponent.prototype.cancel = function () {
        this.clearallfield();
        this.toaster.success("Your Form is SuccessFully Clear");
    };
    DepartmentmasterComponent.prototype.clearallfield = function () {
        this.deptid = "";
        this.dept_locationComp.value("");
        this.dept_nameComp.value("");
        this.formvalue.reset();
    };
    DepartmentmasterComponent.prototype.validateform = function () {
        var deptname = this.dept_nameComp.ngValue;
        var deptlocation = this.dept_locationComp.ngValue;
        if (deptname.trim() == "") {
            this.toaster.error('Department Name is Required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (deptlocation.trim() == "") {
            this.toaster.error('department Location is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dept_id'),
        __metadata("design:type", Object)
    ], DepartmentmasterComponent.prototype, "dept_idComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dept_name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], DepartmentmasterComponent.prototype, "dept_nameComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dept_location'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], DepartmentmasterComponent.prototype, "dept_locationComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], DepartmentmasterComponent.prototype, "formvalue", void 0);
    DepartmentmasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-departmentmaster',
            template: __webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentmaster.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/departmentmaster/departmentmaster.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], DepartmentmasterComponent);
    return DepartmentmasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.html":
/***/ (function(module, exports) {

module.exports = "\n<jqxDataTable #myDataTable\n    (onRowSelect)=\"onRowSelect($event)\" \n    [selectionMode]=\"'singleRow'\"\n    [width]=\"'100%'\" [source]=\"dataAdapter\" [columns]=\"columns\"\n    [altRows]=\"true\" [pageable]=\"true\" [filterable]=\"true\"\n    [pageable]=\"true\" [altRows]=\"true\"  [sortable]=\"true\" [pagerMode]=\"'advanced'\"  [filterMode]=\"'advanced'\"\n    >\n</jqxDataTable>\n<br>\n<jqxButton class=\"btn-info btn\" (onClick)=\"editEmployee()\"  [width]=\"110\">Edit</jqxButton>\n<jqxButton class=\"btn-warning btn\"  (onClick)=\"deleteEmployee()\" [width]=\"110\">Delete</jqxButton>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeedatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employeemaster_employeemaster_component__ = __webpack_require__("../../../../../src/app/component/master/employeemaster/employeemaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeedatatableComponent = /** @class */ (function () {
    function EmployeedatatableComponent(appservice, empmaster) {
        this.appservice = appservice;
        this.empmaster = empmaster;
        this.data = {};
        this.source = {};
    }
    EmployeedatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appservice.getData_Service("getEmployeeDetail").then(function (data) {
            _this.data = JSON.stringify(data['data']);
            _this.columns =
                [
                    { text: 'Employee ID', dataField: 'emp_id', width: 120, cellsAlign: 'right', align: 'right' },
                    { text: 'Name', dataField: 'emp_name', width: 120 },
                    { text: 'Department id', dataField: 'dept_id', width: 300 },
                    { text: 'Designation', dataField: 'emp_designation', width: 300 },
                    { text: 'Qualification', dataField: 'emp_qualification' },
                    { text: 'Email', dataField: 'emp_email' },
                    { text: 'Address', dataField: 'emp_address' },
                ];
            _this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'emp_id', type: 'number' },
                        { name: 'emp_name', type: 'string' },
                        { name: 'dept_id', type: 'string' },
                        { name: 'emp_designation', type: 'string' },
                        { name: 'emp_qualification', type: 'string' },
                        { name: 'emp_email', type: 'string' },
                        { name: 'emp_address', type: 'string' },
                    ],
                    id: 'id',
                    localdata: _this.data
                };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
        });
    };
    EmployeedatatableComponent.prototype.onRowSelect = function (event) {
        this.rowIndex = event.args.index;
        this.DataID = this.myDataTable.getCellValue(this.rowIndex, "emp_id");
        this.name = this.myDataTable.getCellValue(this.rowIndex, "emp_name");
    };
    EmployeedatatableComponent.prototype.editEmployee = function () {
        var _this = this;
        this.appservice.getData_UsingID_Serviceemp(this.DataID, "getEmpDetailsById").then(function (data) {
            _this.data1 = data;
            _this.empmaster.setformvalue(_this.data1);
        });
    };
    EmployeedatatableComponent.prototype.deleteEmployee = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append('emp_id', this.DataID);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete " + this.name + "'s record",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6060',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.appservice.deleteData_UsingID_Service(formdata, "deleteEmployee").subscribe();
                _this.myDataTable.deleteRow(_this.rowIndex);
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.DismissReason.cancel) {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */])
    ], EmployeedatatableComponent.prototype, "myDataTable", void 0);
    EmployeedatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employeedatatable',
            template: __webpack_require__("../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/employeemaster/employeedatatable/employeedatatable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__employeemaster_employeemaster_component__["a" /* EmployeemasterComponent */]])
    ], EmployeedatatableComponent);
    return EmployeedatatableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeemaster.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dt1{\r\n    width: 150px;\r\n    float: left;\r\n    padding-left: 20px;\r\n}\r\n\r\n.dt2{\r\n    width : 200px;\r\n    float: left;\r\n}\r\n\r\n.top-padd{\r\n    clear: both;\r\n    padding-top: 20px;\r\n}\r\n\r\n.radiocheck{\r\n    float: left;\r\n     width: 50%; \r\n}\r\n\r\n.Center{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeemaster.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n<title>Employee</title>\n\n  </head>\n  <body>\n    <div>\n      <div  style=\"margin-bottom: 0px;\"><h2>Employee Master</h2></div>\n      <div style=\"padding: 20px;\">\n          <hr>\n        <jqxValidator #myValidator [rules]=\"rules\" [animationDuration]=\"0\" [hintType]=\"'label'\">\n          <form (ngSubmit) = \"onClickSubmit()\" #f=\"ngForm\" id=\"employeeform\" enctype=\"multipart/form-data\">\n          <!-- <form (ngSubmit) = \"onClickSubmit()\" #f=\"ngForm\" enctype=\"multipart/form-data\"> -->\n            <div class=\"top-padd\">\n              <div class=\"dt1\">Name</div>\n              <div class=\"dt2\">\n                  <!-- [source]=\"countries\" -->\n                <input type=\"hidden\" class=\"form-control sm\" name=\"emp_id\" id=\"emp_id\" #emp_id [(ngModel)]=\"emp.emp_id\" value=\"\"/>\n                <jqxInput\n                  [width]=\"'100%'\" [height]=\"35\" id=\"emp_name\" #emp_name name=\"emp_name\" [(ngModel)]=\"emp.emp_name\" \n                  [placeHolder]=\"'Enter Name'\" [maxLength]='35'>\n                </jqxInput>\n              </div>\n              <div class=\"dt1\">Designation</div>\n              <div class=\"dt2\">\n                <jqxInput\n                  [width]=\"'100%'\" class=\"form-control sm\" [height]=\"35\" id=\"emp_designation\" #emp_designation name=\"emp_designation\" [(ngModel)]=\"emp.emp_designation\" \n                  [placeHolder]=\"'Enter Designation'\" [maxLength]='35'>\n                </jqxInput>\n              </div>\n              <div class=\"dt1\">Qualification</div>\n              <div class=\"dt2\">\n                <jqxInput\n                  [width]=\"'100%'\" class=\"form-control sm\" [height]=\"35\" id=\"emp_qualification\" #emp_qualification name=\"emp_qualification\" [(ngModel)]=\"emp.emp_qualification\" \n                  [placeHolder]=\"'Qualification'\" [maxLength]='30'>\n                </jqxInput>\n              </div>\n            </div>\n\n            <!-- <br style=\"clear: both;\"> -->\n\n            <div class=\"top-padd\">\n              <div class=\"dt1\">Mobile</div>\n              <div class=\"dt2\">\n                  <jqxMaskedInput #emp_mobile\n                  [mask]=\"'##########'\"\n                  [width]=\"200\" #emp_mobile name=\"emp_mobile\" [(ngModel)]=\"emp.emp_mobile\"\n                  [height]=\"25\" class=\"form-control sm\"  id=\"emp_mobile\">\n              </jqxMaskedInput>\n                \n                <!-- <jqxInput\n                  [width]=\"'100%'\" [height]=\"35\" id=\"emp_mobile\" #emp_mobile name=\"emp_mobile\" [(ngModel)]=\"emp.emp_mobile\" \n                  [placeHolder]=\"'Contact Number'\" [maxLength]='10'>\n                </jqxInput> -->\n              </div>\n              <div class=\"dt1\">Email</div>\n              <div class=\"dt2\">\n                <jqxInput\n                  [width]=\"'100%'\" class=\"form-control sm\" [height]=\"35\" id=\"emp_email\" #emp_email name=\"emp_email\" [(ngModel)]=\"emp.emp_email\" \n                  [placeHolder]=\"'Email address'\" [maxLength]='64'>\n                </jqxInput>\n              </div>\n              <div class=\"dt1\">Department</div>\n              <div class=\"dt2\">\n                <jqxInput\n                  [width]=\"'100%'\" class=\"form-control sm\" [height]=\"35\" id=\"dept_id\" [source]=\"department\" [minLength]=\"1\" #dept_id name=\"dept_id\" [(ngModel)]=\"emp.dept_id\" \n                  [placeHolder]=\"'Department'\" [maxLength]='35'>\n                </jqxInput>\n              </div>\n            </div>\n            <div class=\"top-padd\">\n              <div class=\"dt1\">Address</div>\n              <div class=\"dt2\">\n                <jqxTextArea [width]=\"'100%'\" class=\"form-control \" [height]=\"60\" id=\"emp_address\" #emp_address name=\"emp_address\" [(ngModel)]=\"emp.emp_address\" \n                  [minLength]=\"1\" [placeHolder]=\"'Enter address'\" [maxLength]='300'>\n                </jqxTextArea>\n              </div>\n              <div class=\"dt1\">Photo</div>\n              <div class=\"dt2\">\n                <input type=\"file\" class=\"form-control sm\" (change)=\"selectFile($event)\" id=\"emp_photo\" #emp_photo name=\"emp_photo\" accept=\"image/*\">\n                <!-- <jqxFileUpload \n                  [width]=\"'100%'\" (change)=\"selectFile($event)\" name=\"emp_photo\" >\n                </jqxFileUpload>  -->\n                <img src=\"\" #empimage />\n              </div>\n              <div class=\"dt1\">Gender</div>\n              <div class=\"dt2\">\n                <div class=\"radiocheck\">\n                  <jqxRadioButton \n                    [width]=\"'100%'\"  [height]=\"25\" id=\"emp_gender\" #emp_gender1 name=\"emp_gender\" [(ngModel)]=\"emp.emp_gender\" value=\"M\">\n                    Male\n                  </jqxRadioButton>\n                </div>\n                <div class=\"radiocheck\">\n                  <jqxRadioButton\n                    [width]=\"'100%'\" [height]=\"25\" id=\"emp_gender\" #emp_gender2 name=\"emp_gender\" [(ngModel)]=\"emp.emp_gender\" value=\"F\">\n                    Female\n                  </jqxRadioButton>\n                </div>\n              </div>\n            </div>\n            <div class=\"top-padd\">\n              <div class=\"dt1\">\n                <jqxCheckBox #active id=\"active\"  name=\"active\" [(ngModel)]=\"emp.active\">Active</jqxCheckBox>\n              </div>\n            </div>\n            <div class=\"top-padd Center\">\n              <button type=\"submit\" class=\"btn-success btn\">Save</button>\n              <button type=\"button\"class=\"btn-danger btn\"  (click)=\"cancel()\">Clear</button>       \n            </div>\n         <!--    <img #editphoto src=\"{{editempphoto}}\" type=\"hidden\"/> -->\n          </form>\n        </jqxValidator>\n      </div>\n      <hr>\n      <div>\n        <app-employeedatatable>loding...</app-employeedatatable>\n      </div> \n    </div>\n  </body>\n</html>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/master/employeemaster/employeemaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeemasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_employee_model__ = __webpack_require__("../../../../../src/app/model/employee-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_scripts_jqwidgets_ts_angular_jqxtextarea__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_scripts_jqwidgets_ts_angular_jqxcheckbox__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var token = localStorage.getItem('jwtToken');
var EmployeemasterComponent = /** @class */ (function () {
    function EmployeemasterComponent(http, appservice, toaster) {
        this.http = http;
        this.appservice = appservice;
        this.toaster = toaster;
        this.emp = new __WEBPACK_IMPORTED_MODULE_1__model_employee_model__["a" /* EmployeeModel */]();
        this.emp_name = '';
        this.data1 = [][2];
        this.department = [];
        this.checkdeptidflag = false;
        this.empedit = null;
    }
    EmployeemasterComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    EmployeemasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appservice.getData_Service("getDepartmentDetail").then(function (data) {
            _this.dt = JSON.stringify(data["data"]);
            _this.data1 = JSON.parse(_this.dt);
            console.clear();
            for (var i = 0; i < _this.data1.length; i++) {
                _this.department[i] = _this.data1[i]["dept_name"];
            }
            _this.dept_idComp.source(_this.department);
        });
    };
    EmployeemasterComponent.prototype.checkdeptid = function (Deptname) {
        var flag = true;
        for (var i = 0; i < this.data1.length; i++) {
            if (this.dept_idComp.ngValue == this.data1[i]["dept_name"]) {
                this.Departmentid = this.data1[i]["dept_id"];
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (!flag) {
            this.dept_idComp.ngValue = "";
            this.dept_idComp.value("");
            return false;
        }
        return true;
    };
    EmployeemasterComponent.prototype.setdepartmentvalue = function (id) {
        for (var i = 0; i < this.data1.length; i++) {
            if (id == this.data1[i]["dept_id"]) {
                this.dept_idComp.ngValue = this.data1[i]["dept_name"];
                this.dept_idComp.val(this.data1[i]["dept_name"]);
                //this.Departmentid=;
                break;
            }
        }
    };
    EmployeemasterComponent.prototype.onClickSubmit = function () {
        if (!this.checkdeptid(this.emp.dept_id)) {
            this.toaster.error('Invalied Department Name', '', {
                timeOut: 3000,
            });
            return false;
        }
        if (this.empedit != "true") {
            if (this.selectedFiles != undefined) {
                this.currentFileUpload = this.selectedFiles.item(0);
                //this.selectedFiles= null;
            }
            else {
                this.toaster.error('Employee Photo required', '', {
                    timeOut: 3000,
                });
                return false;
            }
        }
        if (this.isvalidateform()) {
            /* if(this.myValidator.validate(document.getElementById('form')))
            { */
            var formdata = new FormData();
            formdata.append('emp_id', this.empid);
            formdata.append('emp_name', this.emp.emp_name);
            formdata.append('emp_designation', this.emp.emp_designation);
            formdata.append('emp_qualification', this.emp.emp_qualification);
            formdata.append('emp_mobile', this.emp.emp_mobile);
            formdata.append('emp_email', this.emp.emp_email);
            formdata.append('dept_id', this.Departmentid);
            formdata.append('emp_address', this.emp.emp_address);
            formdata.append('emp_gender', this.emp.emp_gender);
            formdata.append('active', this.emp.active);
            if (this.selectedFiles != undefined) {
                console.log("inside save");
                formdata.append('emp_photo', this.currentFileUpload);
            }
            else {
                console.log("inside Edit");
                formdata.append('emp_photo', this.editEmpphoto);
            }
            var req = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpRequest */]('POST', 'http://localhost:8080/visitormanegement/admin/saveEmployeeDetail', formdata, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) });
            this.http.request(req).subscribe();
            /* console.log(JSON.stringify(this.emp));
            this.appservice.saveData_Service(JSON.stringify(this.emp),"saveEmployeeDetail").subscribe(); */
            this.clearallfield();
            this.formvalue.reset();
            this.toaster.info("Employee Form is successfully submitted");
            setTimeout(function () { location.reload(); }, 1000);
        }
        else {
            console.log("error");
        }
    };
    //this.emp["emp_photo"] = this.selectedFiles.item(0);
    EmployeemasterComponent.prototype.cancel = function () {
        this.clearallfield();
        this.formvalue.reset();
        this.toaster.success("Employee Form SuccessFully Clear");
    };
    EmployeemasterComponent.prototype.clearallfield = function () {
        this.empid = "";
        this.emp_nameComp.value("");
        this.emp_addresscOMP.val('');
        this.emp_designationComp.value("");
        this.emp_emailComp.value("");
        this.emp_mobileComp.value("");
        this.emp_qualificationComp.value("");
        this.dept_idComp.value("");
        this.emp_gendercOMP1.checked(false);
        this.emp_gendercOMP2.checked(false);
        this.activeComp.checked(false);
        this.emp_photoComp.nativeElement.value = "";
    };
    EmployeemasterComponent.prototype.setformvalue = function (tempdata) {
        this.empedit = "true";
        this.editempphoto = tempdata.emp_photo.substring(49);
        this.empimage.src = tempdata.emp_photo;
        this.empid = tempdata.emp_id;
        this.emp.emp_id = tempdata.emp_id;
        this.emp_nameComp.ngValue = tempdata.emp_name;
        this.emp_nameComp.val(tempdata.emp_name);
        this.emp_designationComp.ngValue = tempdata.emp_designation;
        this.emp_designationComp.val(tempdata.emp_designation);
        this.emp_emailComp.ngValue = tempdata.emp_email;
        this.emp_emailComp.val(tempdata.emp_email);
        this.emp_mobileComp.ngValue = tempdata.emp_mobile;
        this.emp_mobileComp.val(tempdata.emp_mobile);
        this.emp_qualificationComp.ngValue = tempdata.emp_qualification;
        this.emp_qualificationComp.val(tempdata.emp_qualification);
        this.Departmentid = tempdata.dept_id;
        this.setdepartmentvalue(this.Departmentid);
        this.emp_addresscOMP.val(tempdata.emp_address);
        if (tempdata.emp_gender == "M") {
            this.emp_gendercOMP1.checked(true);
        }
        else if (tempdata.emp_gender == "F") {
            this.emp_gendercOMP2.checked(true);
        }
        if (tempdata.active == "1") {
            this.activeComp.checked(true);
        }
        else {
            this.activeComp.checked(false);
        }
    };
    EmployeemasterComponent.prototype.isvalidateform = function () {
        var ename = this.emp_nameComp.ngValue;
        var edesignation = this.emp_designationComp.ngValue;
        var equalification = this.emp_qualificationComp.ngValue;
        var emobile = this.emp_mobileComp.ngValue;
        emobile = this.emp_mobileComp.val();
        var eemail = this.emp_emailComp.ngValue;
        var edepartment = this.dept_idComp.ngValue;
        var eaddress = this.emp_addresscOMP.val();
        var egender = this.emp.emp_gender;
        if (ename.trim() == "") {
            this.toaster.error('Employee Name is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (edesignation.trim() == "") {
            this.toaster.error('Employee Designation is  required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (equalification.trim() == "") {
            this.toaster.error('Employee Qualification required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (!this.validateMobile(emobile)) {
            this.toaster.error('Employee Mobile Number is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (eemail.trim() == "") {
            this.toaster.error('Employee Email is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (edepartment.trim() == "") {
            this.toaster.error('Employee Department is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (eaddress.trim() == "") {
            this.toaster.error('Employee Address is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (egender == undefined) {
            this.toaster.error('gender is  required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (!this.validateEmail(eemail)) {
            this.toaster.error('Please Enter Valid Email', '', {
                timeOut: 3000,
            });
            return false;
        }
        return true;
    };
    //ValidateMobile
    EmployeemasterComponent.prototype.validateMobile = function (emobile) {
        var reg = /[0-9\+\-\ ]/;
        if (!reg.test(emobile)) {
            return false;
        }
        return true;
    };
    //valid Email
    EmployeemasterComponent.prototype.validateEmail = function (emailField) {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!reg.test(emailField)) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */])
    ], EmployeemasterComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "emp_nameComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_designation'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "emp_designationComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_qualification'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "emp_qualificationComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "emp_mobileComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "emp_emailComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dept_id'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], EmployeemasterComponent.prototype, "dept_idComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_address'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_jqwidgets_scripts_jqwidgets_ts_angular_jqxtextarea__["a" /* jqxTextAreaComponent */])
    ], EmployeemasterComponent.prototype, "emp_addresscOMP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_gender1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */])
    ], EmployeemasterComponent.prototype, "emp_gendercOMP1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_gender2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */])
    ], EmployeemasterComponent.prototype, "emp_gendercOMP2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('active'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_jqwidgets_scripts_jqwidgets_ts_angular_jqxcheckbox__["a" /* jqxCheckBoxComponent */])
    ], EmployeemasterComponent.prototype, "activeComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('emp_photo'),
        __metadata("design:type", Object)
    ], EmployeemasterComponent.prototype, "emp_photoComp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('empimage'),
        __metadata("design:type", HTMLImageElement)
    ], EmployeemasterComponent.prototype, "empimage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editphoto'),
        __metadata("design:type", Object)
    ], EmployeemasterComponent.prototype, "editEmpphoto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], EmployeemasterComponent.prototype, "formvalue", void 0);
    EmployeemasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employeemaster',
            template: __webpack_require__("../../../../../src/app/component/master/employeemaster/employeemaster.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/employeemaster/employeemaster.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["b" /* ToastrService */]])
    ], EmployeemasterComponent);
    return EmployeemasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxDataTable #myDataTable\n    \n    (onRowSelect)=\"onRowSelect($event)\"  \n    [width]=\"'100%'\" [source]=\"dataAdapter\" [columns]=\"columns\"\n    [altRows]=\"true\" [pageable]=\"true\" [filterable]=\"true\"\n    [pageable]=\"true\" [altRows]=\"true\" [sortable]=\"true\" \n    [pagerMode]=\"'advanced'\"  \n    [filterMode]=\"'advanced'\"\n    [selectionMode]=\"'singleRow'\"\n    [pagerButtonsCount]=\"8\"\n    >\n</jqxDataTable>\n<br>\n<jqxButton class=\"btn-info btn\" (onClick)=\"editVisitor()\" [width]=\"110\">Edit</jqxButton>\n<jqxButton class=\"btn-warning\" (onClick)=\"deleteVisitor()\" [width]=\"110\">Delete</jqxButton>"

/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitordatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visitormaster_component__ = __webpack_require__("../../../../../src/app/component/master/visitormaster/visitormaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisitordatatableComponent = /** @class */ (function () {
    function VisitordatatableComponent(appservice, router, visitormaster) {
        this.appservice = appservice;
        this.router = router;
        this.visitormaster = visitormaster;
        this.data = {};
        this.source = {};
    }
    VisitordatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.myDataTable.refresh();
        this.appservice.getData_Service("getVisitorDetail").then(function (data) {
            _this.data = JSON.stringify(data['data']);
            _this.columns =
                [
                    { text: 'Visitor ID', dataField: 'v_id', width: 120, cellsAlign: 'right', align: 'right' },
                    /*     { text: 'Host ID', dataField: 'emp_id', width: 120 }, */
                    { text: 'Visitor Name', dataField: 'v_name', width: 300 },
                    { text: 'Host Name', dataField: 'emp_name', width: 300 },
                    { text: 'Purpose of Meeting', dataField: 'v_pupose' },
                    { text: 'Visitor Mobile', dataField: 'v_mobile' },
                    { text: 'Visitor Email', dataField: 'v_email' },
                    { text: 'Visitor Date', dataField: 'v_date' }
                    // { text: 'Action', dataField: 'action', width: 150}
                ];
            _this.source =
                {
                    dataType: 'json',
                    dataFields: [
                        { name: 'v_id', type: 'number' },
                        { name: 'emp_id', type: 'number' },
                        { name: 'v_name', type: 'string' },
                        { name: 'emp_name', type: 'string' },
                        { name: 'v_pupose', type: 'string' },
                        { name: 'v_mobile', type: 'string' },
                        { name: 'v_email', type: 'string' },
                        { name: 'v_date', type: 'string' },
                    ],
                    id: 'id',
                    localdata: _this.data
                };
            _this.dataAdapter = new jqx.dataAdapter(_this.source);
        });
    };
    VisitordatatableComponent.prototype.onRowSelect = function (event) {
        this.rowIndex = event.args.index;
        this.VisitorID = this.myDataTable.getCellValue(this.rowIndex, "v_id");
        this.name = this.myDataTable.getCellValue(this.rowIndex, "v_name");
    };
    VisitordatatableComponent.prototype.deleteVisitor = function () {
        var _this = this;
        var formdata = new FormData();
        formdata.append("v_id", this.VisitorID);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete " + this.name + "'s  record",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6060',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                _this.appservice.deleteData_UsingID_Service(formdata, "vdeletebyId").subscribe();
                _this.myDataTable.deleteRow(_this.rowIndex);
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.DismissReason.cancel) {
            }
        });
    };
    VisitordatatableComponent.prototype.editVisitor = function () {
        /*   let formdata: FormData = new FormData();
          formdata.append("v_id",this.VisitorID); */
        var _this = this;
        this.appservice.getData_UsingID_Service_VisitorMST(this.VisitorID, "editdatabyId").then(function (data) {
            _this.data1 = JSON.parse(JSON.stringify(data["data"][0]));
            _this.visitormaster.setformdatavalue(_this.data1);
            //this.myDataTable.refresh()z;
            /* "<img width='200'heigth='200' src=''/>"; */
            /*   console.log(JSON.stringify(data["data"][0]['v_photo']));
                console.log(JSON.stringify(data["data"][0]['v_document'])); */
        });
        /*  */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */])
    ], VisitordatatableComponent.prototype, "myDataTable", void 0);
    VisitordatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visitordatatable',
            template: __webpack_require__("../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/visitormaster/visitordatatable/visitordatatable/visitordatatable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__visitormaster_component__["a" /* VisitormasterComponent */]])
    ], VisitordatatableComponent);
    return VisitordatatableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitormaster.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dt1{\r\n    width: 150px;\r\n    float: left;\r\n    padding-left: 10px;\r\n}\r\n\r\n.dt2{\r\n    width : 200px;\r\n    float: left;\r\n}\r\n\r\n.top-padd{\r\n    clear: both;\r\n    padding-top: 20px;\r\n}\r\n\r\n.radiocheck\r\n{\r\n    float: left;\r\n    width: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitormaster.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n  <div #container style=\"height: 300px; width:800px;\">\n  <jqxPanel #myPanel [width]=\"'65%'\" [height]=\"'100%'\">\n        <h4 style=\"text-align: center;\">About Us</h4>\n -->\n\n\n <div class=\"container\">\n    <h2>Visitor Registration</h2>\n    <hr>\n<div class=\"row\">\n    <hr>\n  <div class=\"col-lg-4\">\n      <jqxValidator #myValidator [rules]=\"rules\" [animationDuration]=\"0\" [hintType]=\"'label'\">\n          <form  id=\"form\" #f=\"ngForm\" (ngSubmit)=\"visitorsavedata()\">\n            <input type=\"hidden\" name=\"v_hostemp_id\" id=\"v_hostemp_id\" #emp_id [(ngModel)]=\"visitor.v_hostemp_id\" value=\"\"/>\n              <div class=\"form-group\">\n                  <label for=\"email\">Visitor Name:</label>\n                  <jqxInput \n                  class=\"form-control sm\" id=\"v_name\" #v_name [(ngModel)]=\"visitor.v_name\" #visitorname=\"ngModel\" name=\"v_name\"\n                  [minLength]=\"1\"  [maxLength]='35'>\n                 </jqxInput>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"email\">Email :</label>\n                  <jqxInput \n                   id=\"v_email\" class=\"form-control sm\" #v_email [(ngModel)]=\"visitor.v_email\" #visitoremail=\"ngModel\" name=\"v_email\"\n                  [minLength]=\"1\" [maxLength]='64' [placeHolder]=\"''\">\n              </jqxInput>\n              </div>\n\n              <div class=\"form-group\">\n                    <label for=\"Mobile\">Mobile :</label>\n                    <jqxMaskedInput #v_mobile\n                    [mask]=\"'##########'\" [height]=\"16\"\n                     [(ngModel)]=\"visitor.v_mobile\" #visitormobile=\"ngModel\" name=\"v_mobile\"\n                    class=\"form-control sm\"  id=\"v_mobile\">\n    </jqxMaskedInput>\n                  \n                 <!--  <jqxInput  \n                   id=\"v_mobile\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '');this.value = this.value.replace(/(.*)\\./g, '$1');\"  #v_mobile [(ngModel)]=\"visitor.v_mobile\" #visitormobile=\"ngModel\" name=\"v_mobile\" \n                  [minLength]=\"1\" [maxLength]='10'>\n              </jqxInput> -->\n              </div>\n\n\n              <div class=\"form-group\">\n                <label>Employee Name </label>\n                <jqxInput \n                    class=\"form-control\" id=\"v_host_id\" #v_host_id [(ngModel)]=\"visitor.v_host_id\" #v_host_id=\"ngModel\" name=\"v_host_id\"\n                    [minLength]=\"1\" [maxLength]='35'[placeHolder]=\"''\">\n                </jqxInput>\n            </div>\n\n              <div class=\"form-group\">\n                  <label>Purpose of meeting </label>\n                  <jqxInput \n                      class=\"form-control\" id=\"v_purpose\" #v_purpose [(ngModel)]=\"visitor.v_purpose\" #purpose=\"ngModel\" name=\"v_purpose\"\n                      [minLength]=\"1\" [maxLength]='30' [placeHolder]=\"''\" [source]=\"meeting\">\n                  </jqxInput>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <label>Date </label>\n                  <jqxDateTimeInput [height]=\"16\" [width]=\"'100%'\" class=\"form-control\" #v_date id=\"v_date\" [(ngModel)]=\"visitor.v_date\" #date=\"ngModel\" name=\"v_date\"\n                    >\n                  </jqxDateTimeInput>\n                  \n              </div>\n\n\n              <div class=\"form-group\">\n                    <label>Photo Upload </label>\n                      <input type=\"file\" [height]=\"16\" class=\"form-control sm\" #v_photo id=\"v_photo\" [(ngModel)]=\"visitor.v_photo\" #v_photo=\"ngModel\" name=\"v_photo\"  (change)=\"selectphotoFile($event)\"/>\n                  </div>\n              <div class=\"form-group\">\n                <label>Document Upload </label>\n                  <input type=\"file\" [height]=\"16\" class=\"form-control sm\" #v_document id=\"v_document\" [(ngModel)]=\"visitor.v_document\" #v_document=\"ngModel\" name=\"v_document\"  (change)=\"selectdocumentFile($event)\"/>\n              </div>\n\n              <div class=\"form-group\">\n                \n               <div class=\"row\">\n                   <div class=\"col-md-6\">         \n         <jqxRadioButton  value=\"m\" #v_gender1 id=\"v_gender\" name=\"v_gender\" [(ngModel)]=\"visitor.v_gender\" \n                  [height]=\"25\" >\n                  male\n              </jqxRadioButton>\n            </div>\n            <div class=\"col-md-6\">\n                <jqxRadioButton value=\"f\" #v_gender2 id=\"v_gender\" name=\"v_gender\"  [(ngModel)]=\"visitor.v_gender\" \n                  >\n                     female\n                  </jqxRadioButton>\n                  </div>\n                </div>\n\n                </div>\n\n\n                <div class=\"form-group\">\n                 <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n     \n                 <button type=\"submit\" class=\"btn-success btn\">Save</button>  \n                    <button type=\"button\" class=\"btn-danger btn\" (click)=\"clearForm()\">Clear</button>  \n                </div>\n                </div> \n                </div>         \n         </form>\n         </jqxValidator>\n  </div>\n  <div class=\"col-lg-4\">\n\n\n      <ack-webcam\n      [(ref)]   = \"webcam\"\n      [options] = \"options\"\n      (success) = \"onCamSuccess($event)\"\n      (catch)   = \"onCamError($event)\">\n    </ack-webcam>\n<jqxProgressBar #myProgressBar\n    [width]=\"250\" [height]=\"30\" [value]=\"0\" [showText]=\"true\" [orientation]=\"'horizontal'\"\n    [renderText]=\"renderText\" [colorRanges]=\"horizontalColorRanges\">\n</jqxProgressBar>\n    <jqxButton  ng-click=\"cancel\"  (onClick)=\"genBase64()\">\n        Take Photo\n    </jqxButton>\n\n   \n\n  </div>\n  <div class=\"col-lg-4\">\n  <img width=\"320\" height=\"240\" #visitorImage src=\"{{photofile1}}\"/>\n  <br>\n  <jqxButton (onClick)=\"uploadphoto()\">\n      Upload Photo\n   </jqxButton>\n  </div>\n\n</div>\n\n</div>\n<app-visitordatatable>loding...</app-visitordatatable>\n  \n\n \n<!-- </jqxPanel>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/component/master/visitormaster/visitormaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitormasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_visitorModel__ = __webpack_require__("../../../../../src/app/model/visitorModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatetimeinput__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jqwidgets_scripts_jqwidgets_ts_angular_jqxprogressbar__ = __webpack_require__("../../../../jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VisitormasterComponent = /** @class */ (function () {
    function VisitormasterComponent(appservice, toaster) {
        this.appservice = appservice;
        this.toaster = toaster;
        this.vdataedit = null;
        this.data = [][2];
        this.employeename = [];
        this.employeeid = [];
        //purpose of meeting Autocomplete
        this.meeting = new Array("Interview", "Personal Meeting", "Official Meeting", "Other Reason");
        this.visitor = new __WEBPACK_IMPORTED_MODULE_3__model_visitorModel__["a" /* VisitorModel */]();
    }
    VisitormasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photofile1 = "assets/user.jpg";
        this.appservice.getData_Service("getEmployeeName").then(function (data) {
            _this.dt = JSON.stringify(data["data"]);
            _this.data = JSON.parse(_this.dt);
            console.clear();
            for (var i = 0; i < _this.data.length; i++) {
                _this.employeename[i] = _this.data[i]["emp_name"];
                _this.employeeid[i] = _this.data[i]["emp_id"];
                //    console.log(this.data[i]["emp_id"]);
                _this.host_id = _this.data[i]["emp_id"];
                /*   HostEmp : String[] = new Array(this.data[i]["emp_name"]); */
            }
            _this.v_hostid.source(_this.employeename);
            /* this.v_hostEmp_id.source(this.employeeid);  */
        });
    };
    //employee id check employee id
    VisitormasterComponent.prototype.checkempid = function (hostname) {
        var flag = true;
        for (var i = 0; i < this.data.length; i++) {
            if (hostname == this.data[i]["emp_name"]) {
                this.v_host_id = this.data[i]["emp_id"];
                this.vempid = this.data[i]["emp_id"];
                flag = true;
                break;
            }
            else {
                flag = false;
            }
        }
        if (!flag) {
            this.v_host_id.ngValue = "";
            this.v_host_id.value("");
            return false;
        }
        return true;
    };
    //set HostName Value
    VisitormasterComponent.prototype.setempvalue = function (id) {
        for (var i = 0; i < this.data.length; i++) {
            if (id == this.data[i]["v_host_id"]) {
                this.v_host_id.ngValue = this.data[i]["emp_id"];
                this.v_host_name.val(this.data[i]["emp_name"]);
                //this.Departmentid=;
                break;
            }
        }
    };
    VisitormasterComponent.prototype.setformdatavalue = function (tempdata) {
        this.vdataedit = "true";
        this.vedit = tempdata.v_id;
        this.photofile1 = tempdata.v_photo.substring(49);
        this.visitorId = tempdata.v_id;
        this.v_name.ngValue = tempdata.v_name;
        this.v_name.val(tempdata.v_name);
        this.v_email.ngValue = tempdata.v_email;
        this.v_email.val(tempdata.v_email);
        this.v_host_id.ngValue = tempdata.v_host_id;
        this.v_host_name = tempdata.v_host_name;
        this.v_host_id.val(tempdata.v_host_name);
        this.v_purpose.ngValue = tempdata.v_purpose;
        this.v_purpose.val(tempdata.v_purpose);
        this.v_date.ngValue = tempdata.v_date;
        this.v_date.val(tempdata.v_date);
        this.v_mobile.ngValue = tempdata.v_mobile;
        this.v_mobile.val(tempdata.v_mobile);
        this.v_document = tempdata.v_document;
        this.v_photo = this.PhotoFileEdit;
        if (tempdata.v_gender == "m") {
            this.v_gendercOMP1.checked(true);
        }
        else if (tempdata.v_gender == "f") {
            this.v_gendercOMP2.checked(true);
        }
    };
    //set photo uploader
    VisitormasterComponent.prototype.selectphotoFile = function (event) {
        this.selectphotofilsupload = event.target.files;
    };
    //document Uploader
    VisitormasterComponent.prototype.selectdocumentFile = function (event) {
        this.selectedDocumentFiles = event.target.files;
        this.currentdocumentupload = this.selectedDocumentFiles.item(0);
    };
    //form clear
    VisitormasterComponent.prototype.clearForm = function () {
        this.clearAllField();
        this.formvalue.reset();
        this.toaster.success("Visitor Form SuccessFully  Clear All Field");
    };
    VisitormasterComponent.prototype.clearAllField = function () {
        this.v_id = "";
        this.v_name.value("");
        this.v_email.value("");
        this.v_mobile.value("");
        this.v_hostid.value("");
        this.v_purpose.value("");
        this.v_gendercOMP1.checked(false);
        this.v_gendercOMP2.checked(false);
        /* this.v_photo.nativeElement.value="";
        this.v_document.nativeElement.Value=""; */
        this.v_date.val('');
    };
    //Form Validation
    VisitormasterComponent.prototype.visitorValidate = function () {
        var vname = this.v_name.ngValue;
        var vemail = this.v_email.ngValue;
        var vmobile = this.v_mobile.ngValue;
        vmobile = this.v_mobile.val();
        var vhostname = this.v_hostid.ngValue;
        var vpurpose = this.v_purpose.ngValue;
        var vdate = this.v_date.ngValue;
        var vgender = this.visitor.v_gender;
        /*     let vphtoto:string=this.selectphotofilsupload.item(0).name; */
        if (vname.trim() == "") {
            this.toaster.error('Visitor Name is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (vemail.trim() == "") {
            this.toaster.error('Visitor Email is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (!this.validateEmail(vemail)) {
            this.toaster.error('Please Enter Valid Email', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (!this.validateMobile(vmobile)) {
            this.toaster.error('Mobile Number is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (vhostname.trim() == "") {
            this.toaster.error('Host Employee Name is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (vpurpose.trim() == "") {
            this.toaster.error('Meeting purpose  is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        else if (vdate.trim() == "") {
            this.toaster.error('Visiting date is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        if (this.vdataedit != "true") {
            if (this.selectphotofiles != undefined) {
                this.currentphotoupload = this.selectphotofiles;
            }
            else if (this.selectphotofilsupload != undefined) {
                this.currentphotoupload = this.selectphotofilsupload.item(0);
            }
            else {
                this.toaster.error('visitor Photo is required', '', {
                    timeOut: 3000,
                });
                return false;
            }
            if (this.selectedDocumentFiles != undefined) {
                this.currentdocumentupload = this.selectedDocumentFiles.item(0);
            }
            else {
                this.toaster.error('visitor documnet is required', '', {
                    timeOut: 3000,
                });
                return false;
            }
        }
        if (vgender == undefined) {
            this.toaster.error('Gender is required', '', {
                timeOut: 3000,
            });
            return false;
        }
        return true;
    };
    //Validation for File
    /* valdationFile(file)
    {
      var ext = file.substring(file.lastIndexOf('.') + 1);
      if (ext.toLowerCase() == 'png') {
          return true;
      }
      else if (ext.toLowerCase() == 'jpeg')
      {
          return true
      }
      else {
          return false;
      }
    } */
    //ValidateMobile
    VisitormasterComponent.prototype.validateMobile = function (vmobile) {
        var reg = /[0-9\+\-\ ]/;
        if (!reg.test(vmobile)) {
            return false;
        }
        return true;
    };
    //Email Validation
    VisitormasterComponent.prototype.validateEmail = function (emailField) {
        var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!reg.test(emailField)) {
            return false;
        }
        return true;
    };
    VisitormasterComponent.prototype.visitorsavedata = function () {
        if (!this.checkempid(this.visitor.v_host_id)) {
            this.toaster.error("Host Employee name is invalid ");
            return false;
        }
        // this.toasterService.hello(); */
        if (this.visitorValidate()) {
            var formdata = new FormData();
            formdata.append("v_id", this.visitorId);
            formdata.append("v_document", this.currentdocumentupload);
            formdata.append("v_photo", this.currentphotoupload);
            formdata.append("v_name", this.visitor.v_name);
            formdata.append("v_email", this.visitor.v_email);
            formdata.append("v_host_id", this.vempid);
            formdata.append("v_purpose", this.visitor.v_purpose);
            formdata.append("v_date", this.visitor.v_date);
            formdata.append("v_mobile", this.visitor.v_mobile);
            formdata.append("v_gender", this.visitor.v_gender);
            this.appservice.saveData_Service_VisitorMST(formdata, "saveVisitorData").subscribe();
            /*     this.clearAllField();
                this.formvalue.reset(); */
            this.toaster.info("Visitor Form SuccessFully  Save ");
            this.clearAllField();
            this.formvalue.reset();
            // window.location.reload();
            setTimeout(function () { location.reload(); }, 1000);
        }
        else {
            console.log("error");
        }
    };
    // genBase64(){
    //   this.webcam.getBase64()
    //   .then( base=> {
    //     this.file1=base;
    //   })
    //   .catch( e=>console.error(e) )
    // }
    VisitormasterComponent.prototype.genBaseimg64 = function () {
        var _this = this;
        this.visitorimage.getBase64().then(function (base) {
            _this.base64 = base;
            _this.image2 = new File([_this.dataURItoBlob(base)], "image.png");
            _this.photofile1 = base;
        }).catch(function (e) { return console.error(e); });
    };
    //imageadd
    VisitormasterComponent.prototype.genBase64 = function () {
        var _this = this;
        this.webcam.getBase64()
            .then(function (base) {
            _this.base64 = base;
            _this.image = new File([_this.dataURItoBlob(base)], "image.png");
            _this.photofile1 = base;
        })
            .catch(function (e) { return console.error(e); });
    };
    VisitormasterComponent.prototype.uploadphoto = function () {
        var _this = this;
        //var blob = dataUriToBlob(this.file1)
        //this.blob = new Blob(this.file1, {type: 'image/png'});
        //this.image = new File([blob],"image.png")
        /* if(this.image==undefined)
        {
        
        alert(this.visitorimage+""+this.image2);
        
         
        } */
        var value = 0;
        var interval = setInterval(function (_) {
            value++;
            if (value == 100) {
                clearInterval(interval);
            }
            _this.myProgressBar.val(value);
        }, 20);
        this.selectphotofiles = this.image;
    };
    VisitormasterComponent.prototype.onCamError = function (err) { };
    VisitormasterComponent.prototype.onCamSuccess = function (e) {
    };
    VisitormasterComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], { type: "image/png" });
        return bb;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myDataTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatatable__["a" /* jqxDataTableComponent */])
    ], VisitormasterComponent.prototype, "myDataTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myValidator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_jqwidgets_scripts_jqwidgets_ts_angular_jqxvalidator__["a" /* jqxValidatorComponent */])
    ], VisitormasterComponent.prototype, "myValidator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_host_id'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_hostid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_hostemp_id'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_hostEmp_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_id'),
        __metadata("design:type", Object)
    ], VisitormasterComponent.prototype, "v_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_email'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_host_name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_host_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_host_id'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_host_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_purpose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_jqwidgets_scripts_jqwidgets_ts_angular_jqxinput__["a" /* jqxInputComponent */])
    ], VisitormasterComponent.prototype, "v_purpose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_date'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_jqwidgets_scripts_jqwidgets_ts_angular_jqxdatetimeinput__["a" /* jqxDateTimeInputComponent */])
    ], VisitormasterComponent.prototype, "v_date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_document'),
        __metadata("design:type", Object)
    ], VisitormasterComponent.prototype, "v_document", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_photo'),
        __metadata("design:type", Object)
    ], VisitormasterComponent.prototype, "v_photo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_gender1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */])
    ], VisitormasterComponent.prototype, "v_gendercOMP1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('v_gender2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_jqwidgets_scripts_jqwidgets_ts_angular_jqxradiobutton__["a" /* jqxRadioButtonComponent */])
    ], VisitormasterComponent.prototype, "v_gendercOMP2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], VisitormasterComponent.prototype, "formvalue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myProgressBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_jqwidgets_scripts_jqwidgets_ts_angular_jqxprogressbar__["a" /* jqxProgressBarComponent */])
    ], VisitormasterComponent.prototype, "myProgressBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('visitorImage'),
        __metadata("design:type", Object)
    ], VisitormasterComponent.prototype, "visitorimage", void 0);
    VisitormasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visitormaster',
            template: __webpack_require__("../../../../../src/app/component/master/visitormaster/visitormaster.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/master/visitormaster/visitormaster.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], VisitormasterComponent);
    return VisitormasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/department-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentModel; });
var DepartmentModel = /** @class */ (function () {
    function DepartmentModel() {
    }
    return DepartmentModel;
}());



/***/ }),

/***/ "../../../../../src/app/model/employee-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeModel; });
var EmployeeModel = /** @class */ (function () {
    function EmployeeModel() {
    }
    return EmployeeModel;
}());



/***/ }),

/***/ "../../../../../src/app/model/login-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    LoginModel.isNull = function (user) {
        return user.username === null &&
            user.password === null;
    };
    return LoginModel;
}());



/***/ }),

/***/ "../../../../../src/app/model/visitorModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorModel; });
var VisitorModel = /** @class */ (function () {
    function VisitorModel() {
    }
    return VisitorModel;
}());



/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// App Service for Angular 4
var token = localStorage.getItem('jwtToken');
var jwtToken;
var httpOptions;
var AppService = /** @class */ (function () {
    function AppService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.app_service_url = __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */].main_url + "admin/";
        //checkin and  chekout method
        this.Ischeckout = false;
    }
    ;
    // Retrive Json Data from Server Side  
    AppService.prototype.getData_Service = function (servicename) {
        return this.http.get(this.app_service_url + servicename)
            .toPromise().catch(this.handleError);
    };
    // SaveData  First Set Data In Model and Send model object in url 
    /*   saveData_Service(object: Object,servicename:string):Observable<Object>{
        return this.http.post(this.app_service_url+servicename,object)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      } */
    AppService.prototype.saveData_Service = function (object, servicename) {
        return this.http.post(this.app_service_url + servicename, object, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error'); });
    };
    // Delete Data Using Particular ID
    AppService.prototype.deleteData_UsingID_ServiceGET = function (id, methodname) {
        return this.http.get(this.app_service_url + methodname + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) }).toPromise()
            .catch(this.handleError);
    };
    AppService.prototype.saveData_ServiceVisitor = function (object, servicename) {
        return this.http.post(this.app_service_url + servicename, object, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error'); });
    };
    // Retrive Json Data Using Particular ID
    AppService.prototype.getData_UsingID_Servicedashboard = function (id, servicename) {
        return this.http.get(this.app_service_url + servicename + "?id=" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .toPromise().catch(this.handleError);
    };
    // Retrive Json Data Using Particular ID
    AppService.prototype.getData_UsingID_Service = function (id, servicename) {
        return this.http.get(this.app_service_url + servicename + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .toPromise().catch(this.handleError);
    };
    AppService.prototype.getData_UsingID_Serviceemp = function (id, servicename) {
        return this.http.get(this.app_service_url + servicename + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .toPromise().catch(this.handleError);
    };
    AppService.prototype.getData_UsingID_Service_EmployeeMST = function (id, servicename) {
        return this.http.get(this.app_service_url + servicename + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .toPromise().catch(this.handleError);
    };
    AppService.prototype.getData_UsingID_Service_VisitorMST = function (id, methodname) {
        return this.http.get(this.app_service_url + methodname + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .toPromise().catch(this.handleError);
    };
    AppService.prototype.saveData_Service_VisitorMST = function (formdata, servicename) {
        return this.http.post(this.app_service_url + servicename, formdata, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    // Delete Data Using Particular ID
    AppService.prototype.deleteData_UsingID_Serviceget = function (id, methodname) {
        return this.http.get(this.app_service_url + methodname + "/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) }).toPromise()
            .catch(this.handleError);
    };
    // Delete Data Using Particular ID
    AppService.prototype.deleteData_UsingID_Service = function (object, methodname) {
        return this.http.post(this.app_service_url + methodname, object, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error'); });
    };
    AppService.prototype.checkinAndout = function (object, methodname) {
        return this.http.post(this.app_service_url + methodname, object, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorisation', 'Token ' + token.substring(1, token.length - 1)) })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error'); });
    };
    /*   getUrl_Service(servicename:string){
      
        return this.http.get("/admin"+servicename,{headers: new HttpHeaders().set('Authorisation', 'Token '+token.substring(1,token.length-1))})
       .toPromise().catch(this.handleError);
     }
     */
    AppService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('jwtToken') != null) {
            return true;
        }
        else {
            this.router.navigate([''], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_login_model__ = __webpack_require__("../../../../../src/app/model/login-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'; */






/* const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'aplication/X-www-form=urlencoded','Access-Control-Allow-Origin':'*' })
};
 */
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.jwtToken = null;
        this.username = null;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.isLoggedIn = false;
        this.loginuser = new __WEBPACK_IMPORTED_MODULE_2__model_login_model__["a" /* LoginModel */]();
    }
    AuthService_1 = AuthService;
    AuthService.handleError = function (error) {
        var errorMessage = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : "Server error";
        console.log(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(errorMessage);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post('http://localhost:8080/login', user)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            if (JSON.stringify(data) != "false") {
                _this.jwtToken = JSON.stringify(data['data'][0]);
                _this.username = JSON.stringify(data['data'][1]);
                if (_this.jwtToken != null && _this.username != null) {
                    _this.isLoggedIn = true;
                    localStorage.setItem('jwtToken', _this.jwtToken);
                    return true;
                }
                else {
                    _this.isLoggedIn = false;
                    return false;
                }
            }
        })
            .catch(AuthService_1.handleError);
    };
    /* logout(): void {
      // clear token remove user from local storage to log user out
      localStorage.removeItem('jwtToken');
      localStorage.clear();
    
    } */
    AuthService.prototype.logOut = function () {
        this.isLoggedIn = !this.isLoggedIn;
        localStorage.removeItem('jwtToken');
        localStorage.removeItem("referrer");
        sessionStorage.removeItem("referrer");
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(false);
    };
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "../../../../../src/app/tosterservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toasterservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toasterservice = /** @class */ (function () {
    function Toasterservice(toastr, _vcr) {
        this.toastr = toastr;
        this._vcr = _vcr;
        this.toastr.setRootViewContainerRef(_vcr);
    }
    Toasterservice.prototype.Success = function (title, message) {
        this.toastr.success(title, message);
    };
    Toasterservice.prototype.Error = function (title, message) {
        this.toastr.error(title, message);
    };
    Toasterservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], Toasterservice);
    return Toasterservice;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map