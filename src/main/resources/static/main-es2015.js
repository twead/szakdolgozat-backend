(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activation/activation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/activation/activation.component.ts ***!
  \****************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");






class ActivationComponent {
    constructor(activatedRoute, authService, router, toastr) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.activation();
    }
    activation() {
        this.authService.activation(this.activatedRoute.snapshot.url[1].path).subscribe(data => {
            this.toastr.success('Sikeres aktiváció!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.router.navigate(['/login']);
        }, error => {
        });
    }
}
ActivationComponent.ɵfac = function ActivationComponent_Factory(t) { return new (t || ActivationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ActivationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivationComponent, selectors: [["app-activation"]], decls: 1, vars: 0, template: function ActivationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2YXRpb24vYWN0aXZhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activation',
                templateUrl: './activation.component.html',
                styleUrls: ['./activation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/patient-list/patient-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin-dashboard/patient-list/patient-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: PatientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function() { return PatientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PatientDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "N\u00E9v: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Felhaszn\u00E1l\u00F3n\u00E9v: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lakc\u00EDm: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sz\u00FClet\u00E9si d\u00E1tum: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Telefonsz\u00E1m: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.patient.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.patient.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.patient.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.patient.dateOfBorn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.patient.patient.phoneNumber, " ");
} }
class PatientDetailsComponent {
    constructor(route, router, adminService, toastr) {
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.adminService.getPatientById(this.id)
            .subscribe(data => {
            this.patient = data;
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    list() {
        this.router.navigate(['patients']);
    }
}
PatientDetailsComponent.ɵfac = function PatientDetailsComponent_Factory(t) { return new (t || PatientDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
PatientDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientDetailsComponent, selectors: [["app-patient-details"]], decls: 11, vars: 1, consts: [[1, "container"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function PatientDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "P\u00E1ciens r\u00E9szletek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientDetailsComponent_div_5_Template, 31, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientDetailsComponent_Template_button_click_8_listener() { return ctx.list(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vissza a p\u00E1ciens list\u00E1hoz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9wYXRpZW50LWxpc3QvcGF0aWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-details',
                templateUrl: './patient-details.component.html',
                styleUrls: ['./patient-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/patient-list/patient-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-dashboard/patient-list/patient-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListComponent", function() { return PatientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");











function PatientListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientListComponent_tr_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const patient_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getPatientDetails(patient_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R\u00E9szletek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientListComponent_tr_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const patient_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updatePatient(patient_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M\u00F3dos\u00EDt\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientListComponent_tr_20_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const patient_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateToPractitioner(patient_r1.id, patient_r1.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Orvoss\u00E1 alak\u00EDt\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientListComponent_tr_20_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const patient_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deletePatient(patient_r1.id, patient_r1.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\u00F6rl\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r1.patient.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patient_r1.patient.email);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
class PatientListComponent {
    constructor(adminService, router, toastr, matDialog) {
        this.adminService = adminService;
        this.router = router;
        this.toastr = toastr;
        this.matDialog = matDialog;
        this.patients = [];
        this.page = 1;
    }
    ngOnInit() {
        this.getPatients();
    }
    deletePatient(id, username) {
        const dialogRef = this.matDialog.open(src_app_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], {
            width: '300px',
            data: {
                title: "Biztosan törlöd őt?",
                paragraph: username
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.adminService.deletePatient(id)
                    .subscribe(data => {
                    this.toastr.success('Páciens törölve!', 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                    this.getPatients();
                }, err => {
                    this.errorMessage = err.error.message;
                    this.toastr.error(this.errorMessage, 'Hiba!', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }
        });
    }
    getPatients() {
        this.adminService.getAllPatient().subscribe(response => {
            this.patients = response;
        }, error => {
            // TODO: Error message
        });
    }
    getPatientDetails(id) {
        this.router.navigate(['patients/details', id]);
    }
    updatePatient(id) {
        this.router.navigate(['patients/update', id]);
    }
    updateToPractitioner(id, username) {
        const dialogRef = this.matDialog.open(src_app_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], {
            width: '300px',
            data: {
                title: "Biztosan szeretnéd, hogy ő orvos legyen?",
                paragraph: username
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.adminService.upgradeToPractitioner(id).subscribe(response => {
                    this.toastr.success("Orvos rang kiosztva", 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                }, error => {
                    this.toastr.error(error.error.message, 'Hiba', {
                        timeOut: 3000, positionClass: 'toast-top-center'
                    });
                });
            }
        });
    }
    search() {
        if (this.name == "") {
            this.ngOnInit();
        }
        else {
            this.patients = this.patients.filter(res => {
                return res.patient.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            });
        }
    }
}
PatientListComponent.ɵfac = function PatientListComponent_Factory(t) { return new (t || PatientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
PatientListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientListComponent, selectors: [["app-patient-list"]], decls: 24, vars: 8, consts: [[1, "container"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], ["type", "text", "name", "name", "placeholder", "\u00CDrd be a p\u00E1ciens nev\u00E9t", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "table-responsive-md"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"], [2, "display", "flex"], [1, "btn", "btn-info", 2, "margin-right", "10px", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function PatientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "P\u00E1ciens lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; })("ngModelChange", function PatientListComponent_Template_input_ngModelChange_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Felhaszn\u00E1l\u00F3n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PatientListComponent_tr_20_Template, 16, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PatientListComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.patients, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.page, ctx.totalRecords)));
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9wYXRpZW50LWxpc3QvcGF0aWVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-list',
                templateUrl: './patient-list.component.html',
                styleUrls: ['./patient-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/patient-list/patient-update.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-dashboard/patient-list/patient-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: PatientUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientUpdateComponent", function() { return PatientUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function PatientUpdateComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientUpdateComponent_div_15_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientUpdateComponent_div_15_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.maxlength);
} }
function PatientUpdateComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Meg kell felelnie a mint\u00E1nak. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientUpdateComponent_div_23_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientUpdateComponent_div_23_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PatientUpdateComponent_div_23_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
} }
function PatientUpdateComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientUpdateComponent_div_38_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientUpdateComponent_div_38_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.maxlength);
} }
function PatientUpdateComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_46_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientUpdateComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientUpdateComponent_div_46_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientUpdateComponent_div_46_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.maxlength);
} }
class PatientUpdateComponent {
    constructor(route, router, adminService, toastr) {
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.toastr = toastr;
        this.minDate = new Date(1900, 1, 1);
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.adminService.getPatientById(this.id)
            .subscribe(data => {
            this.patient = data;
            this.name = this.patient.patient.name;
            this.username = this.patient.username;
            this.email = this.patient.patient.email;
            this.address = this.patient.patient.address;
            this.dateOfBorn = this.patient.patient.dateOfBorn;
            this.phoneNumber = this.patient.patient.phoneNumber;
        }, error => {
        });
    }
    updatePatient() {
        this.patient.patient.name = this.name;
        this.patient.username = this.username;
        this.patient.patient.email = this.email;
        this.patient.patient.address = this.address;
        this.patient.patient.dateOfBorn = this.dateOfBorn;
        this.patient.patient.phoneNumber = this.phoneNumber;
        this.adminService.updatePatient(this.id, this.patient)
            .subscribe(data => {
            this.toastr.success('Sikeres módosítás!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.gotoList();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onSubmit() {
        this.updatePatient();
    }
    gotoList() {
        this.router.navigate(['/patients']);
    }
}
PatientUpdateComponent.ɵfac = function PatientUpdateComponent_Factory(t) { return new (t || PatientUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
PatientUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientUpdateComponent, selectors: [["app-patient-update"]], decls: 53, vars: 14, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "example-card"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent", "appearance", "fill"], ["name", "name", "id", "name", "matInput", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["nameError", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["align", "start"], ["name", "email", "id", "email", "matInput", "", "maxlength", "40", "pattern", "[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-]+", "required", "", 3, "ngModel", "ngModelChange"], ["emailError", "ngModel"], ["for", "dateOfBorn"], ["name", "dateOfBorn", "id", "dateOfBorn", "matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["matSuffix", "", 3, "for"], ["myDatePicker", ""], ["name", "address", "id", "address", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"], ["addressError", "ngModel"], ["name", "phoneNumber", "id", "phoneNumber", "matInput", "", "maxlength", "20", "required", "", 3, "ngModel", "ngModelChange"], ["phoneNumberError", "ngModel"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "far", "fa-save"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function PatientUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "P\u00E1ciens m\u00F3dos\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientUpdateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teljes n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientUpdateComponent_Template_input_ngModelChange_13_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PatientUpdateComponent_div_15_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "N\u00E9v megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientUpdateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PatientUpdateComponent_div_23_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email c\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sz\u00FClet\u00E9si d\u00E1tum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientUpdateComponent_Template_input_ngModelChange_29_listener($event) { return ctx.dateOfBorn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lakc\u00EDm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientUpdateComponent_Template_input_ngModelChange_36_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PatientUpdateComponent_div_38_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Telefonsz\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientUpdateComponent_Template_input_ngModelChange_44_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PatientUpdateComponent_div_46_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " M\u00F3dos\u00EDt\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.dateOfBorn)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 500px;\r\n  border: 1px solid rgb(235, 229, 229)\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL3BhdGllbnQtbGlzdC9wYXRpZW50LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL3BhdGllbnQtbGlzdC9wYXRpZW50LXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIyOSwgMjI5KVxyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-update',
                templateUrl: './patient-update.component.html',
                styleUrls: ['./patient-update.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/practitioner-list/general-practitioner-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin-dashboard/practitioner-list/general-practitioner-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GeneralPractitionerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPractitionerDetailsComponent", function() { return GeneralPractitionerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function GeneralPractitionerDetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "N\u00E9v: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Felhaszn\u00E1l\u00F3n\u00E9v: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lakc\u00EDm: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sz\u00FClet\u00E9si d\u00E1tum: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Telefonsz\u00E1m: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.patient.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.patient.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.patient.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.patient.dateOfBorn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.practitioner.patient.phoneNumber, " ");
} }
class GeneralPractitionerDetailsComponent {
    constructor(route, router, adminService, toastr) {
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.adminService.getPatientById(this.id)
            .subscribe(data => {
            this.practitioner = data;
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    list() {
        this.router.navigate(['practitioners']);
    }
}
GeneralPractitionerDetailsComponent.ɵfac = function GeneralPractitionerDetailsComponent_Factory(t) { return new (t || GeneralPractitionerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
GeneralPractitionerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPractitionerDetailsComponent, selectors: [["app-general-practitioner-details"]], decls: 11, vars: 1, consts: [[1, "container"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function GeneralPractitionerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "H\u00E1ziorvos r\u00E9szletek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneralPractitionerDetailsComponent_div_5_Template, 31, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPractitionerDetailsComponent_Template_button_click_8_listener() { return ctx.list(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vissza a h\u00E1ziorvos list\u00E1hoz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.practitioner);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9wcmFjdGl0aW9uZXItbGlzdC9nZW5lcmFsLXByYWN0aXRpb25lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPractitionerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-practitioner-details',
                templateUrl: './general-practitioner-details.component.html',
                styleUrls: ['./general-practitioner-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/practitioner-list/general-practitioner-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-dashboard/practitioner-list/general-practitioner-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GeneralPractitionerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPractitionerListComponent", function() { return GeneralPractitionerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");











function GeneralPractitionerListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPractitionerListComponent_tr_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const practitioner_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getPractitionerDetails(practitioner_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R\u00E9szletek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPractitionerListComponent_tr_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const practitioner_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updatePractitioner(practitioner_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M\u00F3dos\u00EDt\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralPractitionerListComponent_tr_20_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const practitioner_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.downgradeToPatient(practitioner_r1.id, practitioner_r1.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nem orvos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const practitioner_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.patient.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.patient.email);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
class GeneralPractitionerListComponent {
    constructor(adminService, router, toastr, matDialog) {
        this.adminService = adminService;
        this.router = router;
        this.toastr = toastr;
        this.matDialog = matDialog;
        this.practitioners = [];
        this.page = 1;
    }
    ngOnInit() {
        this.getPractitioners();
    }
    getPractitioners() {
        this.adminService.getAllPractitioner().subscribe(response => {
            this.practitioners = response;
        }, error => {
        });
    }
    downgradeToPatient(id, username) {
        const dialogRef = this.matDialog.open(src_app_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"], {
            width: '300px',
            data: {
                title: "Ő biztosan nem orvos?",
                paragraph: username
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this.adminService.downgradeToPatient(id).subscribe(data => {
                    this.toastr.success('Ez a felhasználó mostantól nem orvos!', 'OK', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                    window.location.reload();
                }, error => {
                    this.errorMessage = error.error.message;
                    this.toastr.error(this.errorMessage, 'Hiba!', {
                        timeOut: 3000, positionClass: 'toast-top-center',
                    });
                });
            }
        });
    }
    getPractitionerDetails(id) {
        this.router.navigate(['practitioners/details', id]);
    }
    updatePractitioner(id) {
        this.router.navigate(['practitioners/update', id]);
    }
    search() {
        if (this.name == "") {
            this.ngOnInit();
        }
        else {
            this.practitioners = this.practitioners.filter(res => {
                return res.patient.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            });
        }
    }
}
GeneralPractitionerListComponent.ɵfac = function GeneralPractitionerListComponent_Factory(t) { return new (t || GeneralPractitionerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
GeneralPractitionerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPractitionerListComponent, selectors: [["app-general-practitioner-list"]], decls: 24, vars: 8, consts: [[1, "container"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], ["type", "text", "name", "name", "placeholder", "\u00CDrd be az orvos nev\u00E9t", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "table-responsive-md"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"], [2, "display", "flex"], [1, "btn", "btn-info", 2, "margin-right", "10px", 3, "click"]], template: function GeneralPractitionerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Prakt\u00EDcion\u00E1l\u00F3 lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; })("ngModelChange", function GeneralPractitionerListComponent_Template_input_ngModelChange_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Felhaszn\u00E1l\u00F3n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GeneralPractitionerListComponent_tr_20_Template, 14, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function GeneralPractitionerListComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.practitioners, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.page, ctx.totalRecords)));
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9wcmFjdGl0aW9uZXItbGlzdC9nZW5lcmFsLXByYWN0aXRpb25lci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPractitionerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-practitioner-list',
                templateUrl: './general-practitioner-list.component.html',
                styleUrls: ['./general-practitioner-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin-dashboard/practitioner-list/general-practitioner-update.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-dashboard/practitioner-list/general-practitioner-update.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GeneralPractitionerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPractitionerUpdateComponent", function() { return GeneralPractitionerUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin-dashboard.service */ "./src/app/service/admin-dashboard.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function GeneralPractitionerUpdateComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPractitionerUpdateComponent_div_15_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPractitionerUpdateComponent_div_15_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.maxlength);
} }
function GeneralPractitionerUpdateComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Meg kell felelnie a mint\u00E1nak. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPractitionerUpdateComponent_div_23_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPractitionerUpdateComponent_div_23_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralPractitionerUpdateComponent_div_23_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
} }
function GeneralPractitionerUpdateComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPractitionerUpdateComponent_div_38_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPractitionerUpdateComponent_div_38_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.maxlength);
} }
function GeneralPractitionerUpdateComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_46_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralPractitionerUpdateComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeneralPractitionerUpdateComponent_div_46_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralPractitionerUpdateComponent_div_46_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.maxlength);
} }
class GeneralPractitionerUpdateComponent {
    constructor(route, router, adminService, toastr) {
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.toastr = toastr;
        this.minDate = new Date(1900, 1, 1);
        this.maxDate = new Date();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.adminService.getPatientById(this.id)
            .subscribe(data => {
            this.practitioner = data;
            this.name = this.practitioner.patient.name;
            this.username = this.practitioner.username;
            this.email = this.practitioner.patient.email;
            this.address = this.practitioner.patient.address;
            this.dateOfBorn = this.practitioner.patient.dateOfBorn;
            this.phoneNumber = this.practitioner.patient.phoneNumber;
        }, error => {
        });
    }
    updatePractitioner() {
        this.practitioner.patient.name = this.name;
        this.practitioner.username = this.username;
        this.practitioner.patient.email = this.email;
        this.practitioner.patient.address = this.address;
        this.practitioner.patient.dateOfBorn = this.dateOfBorn;
        this.practitioner.patient.phoneNumber = this.phoneNumber;
        this.adminService.updatePatient(this.id, this.practitioner)
            .subscribe(data => {
            this.toastr.success('Sikeres módosítás!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.gotoList();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    onSubmit() {
        this.updatePractitioner();
    }
    gotoList() {
        this.router.navigate(['/practitioners']);
    }
}
GeneralPractitionerUpdateComponent.ɵfac = function GeneralPractitionerUpdateComponent_Factory(t) { return new (t || GeneralPractitionerUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
GeneralPractitionerUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralPractitionerUpdateComponent, selectors: [["app-general-practitioner-update"]], decls: 53, vars: 14, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "example-card"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent", "appearance", "fill"], ["name", "name", "id", "name", "matInput", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["nameError", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["align", "start"], ["name", "email", "id", "email", "matInput", "", "maxlength", "40", "pattern", "[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-]+", "required", "", 3, "ngModel", "ngModelChange"], ["emailError", "ngModel"], ["for", "dateOfBorn"], ["name", "dateOfBorn", "id", "dateOfBorn", "matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["matSuffix", "", 3, "for"], ["myDatePicker", ""], ["name", "address", "id", "address", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"], ["addressError", "ngModel"], ["name", "phoneNumber", "id", "phoneNumber", "matInput", "", "maxlength", "20", "required", "", 3, "ngModel", "ngModelChange"], ["phoneNumberError", "ngModel"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "far", "fa-save"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function GeneralPractitionerUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prakt\u00EDcion\u00E1l\u00F3 m\u00F3dos\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralPractitionerUpdateComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teljes n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerUpdateComponent_Template_input_ngModelChange_13_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GeneralPractitionerUpdateComponent_div_15_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "N\u00E9v megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerUpdateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GeneralPractitionerUpdateComponent_div_23_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email c\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sz\u00FClet\u00E9si d\u00E1tum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerUpdateComponent_Template_input_ngModelChange_29_listener($event) { return ctx.dateOfBorn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lakc\u00EDm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerUpdateComponent_Template_input_ngModelChange_36_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GeneralPractitionerUpdateComponent_div_38_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Telefonsz\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralPractitionerUpdateComponent_Template_input_ngModelChange_44_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, GeneralPractitionerUpdateComponent_div_46_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " M\u00F3dos\u00EDt\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.dateOfBorn)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 500px;\r\n  border: 1px solid rgb(235, 229, 229)\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL3ByYWN0aXRpb25lci1saXN0L2dlbmVyYWwtcHJhY3RpdGlvbmVyLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL3ByYWN0aXRpb25lci1saXN0L2dlbmVyYWwtcHJhY3RpdGlvbmVyLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIyOSwgMjI5KVxyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPractitionerUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-practitioner-update',
                templateUrl: './general-practitioner-update.component.html',
                styleUrls: ['./general-practitioner-update.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _auth_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/registration.component */ "./src/app/auth/registration.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/user-guard.service */ "./src/app/guard/user-guard.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile-update.component */ "./src/app/profile/profile-update.component.ts");
/* harmony import */ var _profile_password_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/password-update.component */ "./src/app/profile/password-update.component.ts");
/* harmony import */ var _appointment_select_practitioner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appointment/select-practitioner.component */ "./src/app/appointment/select-practitioner.component.ts");
/* harmony import */ var _guard_login_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/login.guard */ "./src/app/guard/login.guard.ts");
/* harmony import */ var _appointment_worktime_worktime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment/worktime/worktime.component */ "./src/app/appointment/worktime/worktime.component.ts");
/* harmony import */ var _admin_dashboard_patient_list_patient_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-details.component */ "./src/app/admin-dashboard/patient-list/patient-details.component.ts");
/* harmony import */ var _admin_dashboard_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-list.component */ "./src/app/admin-dashboard/patient-list/patient-list.component.ts");
/* harmony import */ var _admin_dashboard_patient_list_patient_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-update.component */ "./src/app/admin-dashboard/patient-list/patient-update.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-details.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-details.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-list.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-list.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-update.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-update.component.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _appointment_update_practitioner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./appointment/update-practitioner.component */ "./src/app/appointment/update-practitioner.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/client-list/client-list.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _activation_activation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./activation/activation.component */ "./src/app/activation/activation.component.ts");
/* harmony import */ var _common_questions_common_questions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common-questions/common-questions.component */ "./src/app/common-questions/common-questions.component.ts");



























const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'login', component: _auth_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'registration', component: _auth_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'activation/:code', component: _activation_activation_component__WEBPACK_IMPORTED_MODULE_23__["ActivationComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'reset-password/:code', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_22__["ResetPasswordComponent"], canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'profile/update', component: _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_7__["ProfileUpdateComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'profile/password-update', component: _profile_password_update_component__WEBPACK_IMPORTED_MODULE_8__["PasswordUpdateComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'appointment/reservation', component: _appointment_select_practitioner_component__WEBPACK_IMPORTED_MODULE_9__["SelectPractitionerComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'practitioners', component: _admin_dashboard_practitioner_list_general_practitioner_list_component__WEBPACK_IMPORTED_MODULE_16__["GeneralPractitionerListComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'practitioner-dashboard', component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_20__["ClientListComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['practitioner'] } },
    { path: 'practitioners/details/:id', component: _admin_dashboard_practitioner_list_general_practitioner_details_component__WEBPACK_IMPORTED_MODULE_15__["GeneralPractitionerDetailsComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'practitioners/update/:id', component: _admin_dashboard_practitioner_list_general_practitioner_update_component__WEBPACK_IMPORTED_MODULE_17__["GeneralPractitionerUpdateComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'patients', component: _admin_dashboard_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_13__["PatientListComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'patients/details/:id', component: _admin_dashboard_patient_list_patient_details_component__WEBPACK_IMPORTED_MODULE_12__["PatientDetailsComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'patients/update/:id', component: _admin_dashboard_patient_list_patient_update_component__WEBPACK_IMPORTED_MODULE_14__["PatientUpdateComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['admin'] } },
    { path: 'appointment/reservation', component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_18__["AppointmentComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'appointment/update-practitioner', component: _appointment_update_practitioner_component__WEBPACK_IMPORTED_MODULE_19__["UpdatePractitionerComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['patient', 'practitioner'] } },
    { path: 'appointment/worktimes', component: _appointment_worktime_worktime_component__WEBPACK_IMPORTED_MODULE_11__["WorktimeComponent"], canActivate: [_guard_user_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProdGuardService"]], data: { expectedRole: ['practitioner'] } },
    { path: 'frequently-asked-questions', component: _common_questions_common_questions_component__WEBPACK_IMPORTED_MODULE_24__["CommonQuestionsComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'szakdolgozat-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _auth_registration_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/registration.component */ "./src/app/auth/registration.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _admin_dashboard_patient_list_patient_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-details.component */ "./src/app/admin-dashboard/patient-list/patient-details.component.ts");
/* harmony import */ var _admin_dashboard_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-list.component */ "./src/app/admin-dashboard/patient-list/patient-list.component.ts");
/* harmony import */ var _admin_dashboard_patient_list_patient_update_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin-dashboard/patient-list/patient-update.component */ "./src/app/admin-dashboard/patient-list/patient-update.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-details.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-details.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-list.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-list.component.ts");
/* harmony import */ var _admin_dashboard_practitioner_list_general_practitioner_update_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin-dashboard/practitioner-list/general-practitioner-update.component */ "./src/app/admin-dashboard/practitioner-list/general-practitioner-update.component.ts");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
/* harmony import */ var _appointment_select_practitioner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./appointment/select-practitioner.component */ "./src/app/appointment/select-practitioner.component.ts");
/* harmony import */ var _appointment_update_practitioner_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./appointment/update-practitioner.component */ "./src/app/appointment/update-practitioner.component.ts");
/* harmony import */ var _appointment_worktime_worktime_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./appointment/worktime/worktime.component */ "./src/app/appointment/worktime/worktime.component.ts");
/* harmony import */ var _interceptor_user_interceptor_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./interceptor/user-interceptor.service */ "./src/app/interceptor/user-interceptor.service.ts");
/* harmony import */ var _profile_password_update_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./profile/password-update.component */ "./src/app/profile/password-update.component.ts");
/* harmony import */ var _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./profile/profile-update.component */ "./src/app/profile/profile-update.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/client-list/client-list.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _activation_activation_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./activation/activation.component */ "./src/app/activation/activation.component.ts");
/* harmony import */ var _common_questions_common_questions_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./common-questions/common-questions.component */ "./src/app/common-questions/common-questions.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");

























































_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_20__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_21__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_22__["default"]
]);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _interceptor_user_interceptor_service__WEBPACK_IMPORTED_MODULE_45__["interceptorProvider"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__["HashLocationStrategy"] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'hu' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_30__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
        _auth_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _auth_registration_component__WEBPACK_IMPORTED_MODULE_26__["RegistrationComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_27__["IndexComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_32__["MainNavComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_48__["ProfileComponent"],
        _admin_dashboard_practitioner_list_general_practitioner_list_component__WEBPACK_IMPORTED_MODULE_39__["GeneralPractitionerListComponent"],
        _admin_dashboard_practitioner_list_general_practitioner_details_component__WEBPACK_IMPORTED_MODULE_38__["GeneralPractitionerDetailsComponent"],
        _admin_dashboard_practitioner_list_general_practitioner_update_component__WEBPACK_IMPORTED_MODULE_40__["GeneralPractitionerUpdateComponent"],
        _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_47__["ProfileUpdateComponent"],
        _profile_password_update_component__WEBPACK_IMPORTED_MODULE_46__["PasswordUpdateComponent"],
        _appointment_select_practitioner_component__WEBPACK_IMPORTED_MODULE_42__["SelectPractitionerComponent"],
        _admin_dashboard_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_36__["PatientListComponent"],
        _admin_dashboard_patient_list_patient_details_component__WEBPACK_IMPORTED_MODULE_35__["PatientDetailsComponent"],
        _admin_dashboard_patient_list_patient_update_component__WEBPACK_IMPORTED_MODULE_37__["PatientUpdateComponent"],
        _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_41__["AppointmentComponent"],
        _appointment_update_practitioner_component__WEBPACK_IMPORTED_MODULE_43__["UpdatePractitionerComponent"],
        _appointment_worktime_worktime_component__WEBPACK_IMPORTED_MODULE_44__["WorktimeComponent"],
        _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_49__["ClientListComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_50__["ForgotPasswordComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_51__["ResetPasswordComponent"],
        _activation_activation_component__WEBPACK_IMPORTED_MODULE_52__["ActivationComponent"],
        _common_questions_common_questions_component__WEBPACK_IMPORTED_MODULE_53__["CommonQuestionsComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_54__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_30__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                    _auth_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _auth_registration_component__WEBPACK_IMPORTED_MODULE_26__["RegistrationComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_27__["IndexComponent"],
                    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_32__["MainNavComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_48__["ProfileComponent"],
                    _admin_dashboard_practitioner_list_general_practitioner_list_component__WEBPACK_IMPORTED_MODULE_39__["GeneralPractitionerListComponent"],
                    _admin_dashboard_practitioner_list_general_practitioner_details_component__WEBPACK_IMPORTED_MODULE_38__["GeneralPractitionerDetailsComponent"],
                    _admin_dashboard_practitioner_list_general_practitioner_update_component__WEBPACK_IMPORTED_MODULE_40__["GeneralPractitionerUpdateComponent"],
                    _profile_profile_update_component__WEBPACK_IMPORTED_MODULE_47__["ProfileUpdateComponent"],
                    _profile_password_update_component__WEBPACK_IMPORTED_MODULE_46__["PasswordUpdateComponent"],
                    _appointment_select_practitioner_component__WEBPACK_IMPORTED_MODULE_42__["SelectPractitionerComponent"],
                    _admin_dashboard_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_36__["PatientListComponent"],
                    _admin_dashboard_patient_list_patient_details_component__WEBPACK_IMPORTED_MODULE_35__["PatientDetailsComponent"],
                    _admin_dashboard_patient_list_patient_update_component__WEBPACK_IMPORTED_MODULE_37__["PatientUpdateComponent"],
                    _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_41__["AppointmentComponent"],
                    _appointment_update_practitioner_component__WEBPACK_IMPORTED_MODULE_43__["UpdatePractitionerComponent"],
                    _appointment_worktime_worktime_component__WEBPACK_IMPORTED_MODULE_44__["WorktimeComponent"],
                    _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_49__["ClientListComponent"],
                    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_50__["ForgotPasswordComponent"],
                    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_51__["ResetPasswordComponent"],
                    _activation_activation_component__WEBPACK_IMPORTED_MODULE_52__["ActivationComponent"],
                    _common_questions_common_questions_component__WEBPACK_IMPORTED_MODULE_53__["CommonQuestionsComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_54__["ModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_30__["ToastrModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__["FullCalendarModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"]
                ],
                providers: [
                    _interceptor_user_interceptor_service__WEBPACK_IMPORTED_MODULE_45__["interceptorProvider"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__["HashLocationStrategy"] },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'hu' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
                entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_54__["ModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/appointment/appointment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fullcalendar_core_locales_hu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/locales/hu */ "./node_modules/@fullcalendar/core/locales/hu.js");
/* harmony import */ var _fullcalendar_core_locales_hu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_hu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _model_appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/appointment */ "./src/app/model/appointment.ts");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _event_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-utils */ "./src/app/appointment/event-utils.ts");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/appointment.service */ "./src/app/service/appointment.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");















function AppointmentComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.practitionerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, event_r2.time, "yyyy.MM.dd hh:mm"));
} }
function AppointmentComponent_full_calendar_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.calendarOptions);
} }
class AppointmentComponent {
    constructor(service, toastr, tokenService, userProfileService, matDialog) {
        this.service = service;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.userProfileService = userProfileService;
        this.matDialog = matDialog;
        this.username = this.tokenService.getUserName();
        this.dayNumber = null;
        this.calendarEvents = [];
        this.customBusinessHours = [];
        this.myCalendarEventForInstruction = [];
        this.calendarVisible = true;
        this.calendarOptions = {
            locale: _fullcalendar_core_locales_hu__WEBPACK_IMPORTED_MODULE_1___default.a,
            allDaySlot: false,
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'today'
            },
            forceEventDuration: true,
            slotLabelFormat: {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: false,
                meridiem: 'short'
            },
            slotDuration: '00:30',
            defaultTimedEventDuration: '00:30',
            slotLabelInterval: 30,
            slotMinTime: '2:00',
            slotMaxTime: '20:00',
            businessHours: [],
            selectConstraint: [],
            longPressDelay: 0,
            validRange: {
                start: Date.now(),
                end: Date.now() + 1000 * 60 * 60 * 24 * 31
            },
            events: this.calendarEvents,
            initialView: 'timeGridWeek',
            firstDay: this.dayNumber,
            weekends: false,
            editable: false,
            selectable: true,
            selectMirror: false,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this),
        };
        this.currentEvents = [];
    }
    ngOnInit() {
        var day = new Date();
        this.dayNumber = day.getDay();
        this.calendarOptions.firstDay = this.dayNumber;
        this.getProfile();
    }
    getProfile() {
        this.profileData = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.profileData = data;
            this.doesYourDoctorWorkOnHolidays();
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    doesYourDoctorWorkOnHolidays() {
        this.service.getWorksOnHolidays(this.username).subscribe(data => {
            this.calendarOptions.slotDuration = '00:' + data.defaultTimePerClient,
                this.calendarOptions.slotLabelInterval = data.defaultTimePerClient,
                this.calendarOptions.defaultTimedEventDuration = '00:' + data.defaultTimePerClient;
            this.calendarOptions.slotMinTime = data.slotMinTime,
                this.calendarOptions.slotMaxTime = data.slotMaxTime,
                this.wantToWorkOnHolidays = data.worksOnHoliday;
            this.getYourDoctorBusinessHours();
        }, error => {
        });
    }
    getYourDoctorBusinessHours() {
        this.service.myPractitionerWorkingTime(this.username).subscribe(data => {
            data.forEach(element => {
                this.customBusinessHours = this.customBusinessHours.concat({
                    daysOfWeek: [element.day],
                    startTime: element.fromTime,
                    endTime: element.toTime,
                });
            });
            this.calendarOptions.businessHours = this.customBusinessHours;
            this.calendarOptions.selectConstraint = this.customBusinessHours;
            this.showMyReservations();
        });
    }
    showMyReservations() {
        this.service.getAppointments(this.username).subscribe(data => {
            data.forEach(element => {
                this.calendarEvents = this.calendarEvents.concat({
                    id: '' + element.id,
                    title: element.message,
                    start: element.time
                });
                this.showAppointmentsForInstruction();
            });
            this.calendarOptions.events = this.calendarEvents;
            this.getOthersReservations();
        });
    }
    showAppointmentsForInstruction() {
        this.service.showAppointmentsForInstruction(this.username).subscribe(data => {
            this.myCalendarEventForInstruction = data;
        }, error => {
        });
    }
    getOthersReservations() {
        this.service.getOthersAppointments(this.username).subscribe(data => {
            data.forEach(element => {
                this.calendarEvents = this.calendarEvents.concat({
                    id: '' + element.id,
                    start: element.time,
                    backgroundColor: '#dddddd',
                    textColor: '#000000',
                    borderColor: '#dddddd',
                    color: '#dddddd',
                    className: 'disabled'
                });
            });
            if (this.wantToWorkOnHolidays == true)
                _event_utils__WEBPACK_IMPORTED_MODULE_5__["HOLIDAYS"].forEach(element => {
                    this.calendarEvents = this.calendarEvents.concat({
                        id: Object(_event_utils__WEBPACK_IMPORTED_MODULE_5__["createEventId"])() + 1111,
                        start: element.start,
                        end: element.end,
                        backgroundColor: '#dddddd',
                        textColor: '#000000',
                        borderColor: '#dddddd',
                        color: '#dddddd',
                        className: 'disabled'
                    });
                });
            this.calendarOptions.events = this.calendarEvents;
        });
    }
    handleDateSelect(selectInfo) {
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        const dialogRef = this.matDialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
            width: '500px',
            data: {
                title: "Biztosan foglalsz?",
                paragraph: selectInfo.start.getFullYear() + '.' +
                    selectInfo.start.getMonth() + '.' +
                    selectInfo.start.getDay() + '. ' +
                    selectInfo.start.getHours() + ':' +
                    selectInfo.start.getMinutes(),
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                const dialogRef = this.matDialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
                    width: '500px',
                    data: {
                        title: "Ha szeretnéd, írd le a problémádat pár szóban",
                    }
                });
                //const title = prompt('Ha szeretnéd, írd le a problémádat pár szóban');
                dialogRef.afterClosed().subscribe(result => {
                    if (result != true) {
                        calendarApi.addEvent({
                            id: Object(_event_utils__WEBPACK_IMPORTED_MODULE_5__["createEventId"])() + 'f',
                            title: result,
                            start: selectInfo.startStr
                        });
                    }
                    else {
                        calendarApi.addEvent({
                            id: Object(_event_utils__WEBPACK_IMPORTED_MODULE_5__["createEventId"])() + 'f',
                            title: this.profileData.patient.name,
                            start: selectInfo.startStr
                        });
                    }
                    this.service.saveAppointment(this.username, new _model_appointment__WEBPACK_IMPORTED_MODULE_3__["Appointment"](null, result != true ? result : this.profileData.patient.name, selectInfo.startStr)).subscribe(data => {
                        this.toastr.success('Sikeres időpontfoglalás!', 'OK', {
                            timeOut: 3000, positionClass: 'toast-top-center',
                        });
                        window.location.reload();
                    }, err => {
                        this.errorMessage = err.error.message;
                        this.toastr.error(this.errorMessage, 'Hiba!', {
                            timeOut: 3000, positionClass: 'toast-top-center',
                        });
                        window.location.reload();
                    });
                });
            }
        });
    }
    handleEventClick(clickInfo) {
        if (clickInfo.event.backgroundColor != '#dddddd') {
            const dialogRef = this.matDialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
                width: '250px',
                data: { title: "Biztosan törlöd?",
                    paragraph: clickInfo.event.start.getFullYear() + '.' +
                        clickInfo.event.start.getMonth() + '.' +
                        clickInfo.event.start.getDay() + '. ' +
                        clickInfo.event.start.getHours() + ':' +
                        clickInfo.event.start.getMinutes()
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == true) {
                    this.service.deleteAppointment(clickInfo.event.id).subscribe(data => {
                        this.toastr.success('Sikeresen törölted az időpontot!', 'OK', {
                            timeOut: 3000, positionClass: 'toast-top-center',
                        });
                    }, err => {
                        this.toastr.error('Az időpont törlése nem sikerült!', 'Hiba!', {
                            timeOut: 3000, positionClass: 'toast-top-center',
                        });
                    });
                    clickInfo.event.remove();
                }
            });
        }
    }
    handleEvents(events) {
        this.currentEvents = events;
    }
}
AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) { return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"])); };
AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentComponent, selectors: [["app-appointment"]], decls: 31, vars: 2, consts: [["id", "header"], [1, "container"], [1, "demo-app"], [1, "demo-app-sidebar"], [1, "demo-app-sidebar-section"], [4, "ngFor", "ngForOf"], [1, "demo-app-main"], [3, "options", 4, "ngIf"], [3, "options"]], template: function AppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Instrukci\u00F3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Az \u00E1ltalad kiv\u00E1lasztott prakt\u00EDcion\u00E1l\u00F3 id\u0151pontjait l\u00E1thatod");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-A feh\u00E9r sz\u00EDnnel jelzett id\u0151pontok el\u00E9rhet\u0151k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-A sz\u00FCrke sz\u00EDnnel jelzett id\u0151pontok foglaltak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "-A s\u00E1rga sz\u00EDnnel jelzett oszlop a mai napot jelzi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "V\u00E1lassz ki egy olyan id\u0151pontot, amikor menni szeretn\u00E9l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Kattints egy foglal\u00E1sra a foglal\u00E1s t\u00F6rl\u00E9s\u00E9hez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lefoglalt id\u0151pontok:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppointmentComponent_li_28_Template, 7, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppointmentComponent_full_calendar_30_Template, 1, 1, "full-calendar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myCalendarEventForInstruction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendarVisible);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_11__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__["FullCalendarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["\r\n#header{\r\n  position: relative!important;\r\n  z-index: 1;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0 0 0 1.5em;\r\n}\r\n\r\nli {\r\n  margin: 1.5em 0;\r\n  padding: 0;\r\n}\r\n\r\nb { /* used for event dates/times */\r\n  margin-right: 3px;\r\n}\r\n\r\n.demo-app {\r\n  display: flex;\r\n  min-height: 100%;\r\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.demo-app-sidebar {\r\n  width: 300px;\r\n  line-height: 1.5;\r\n  background: #eaf9ff;\r\n  border-right: 1px solid #d3e2e8;\r\n}\r\n\r\n.demo-app-sidebar-section {\r\n  padding: 2em;\r\n}\r\n\r\n.demo-app-main {\r\n  flex-grow: 1;\r\n  padding: 3em;\r\n}\r\n\r\n.container{\r\n  position:absolute;\r\n  z-index:-1;\r\n}\r\n\r\n.fc { /* the calendar root */\r\n  max-width: 1100px;\r\n  height: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.fc-media-screen .fc-timegrid-event {\r\n  bottom: 0px!important;\r\n  left: -2.0%!important;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 105%;\r\n  height: 101%!important;\r\n  padding: 0;\r\n}\r\n\r\n.fc-timegrid-event {\r\n  border-radius: 0px!important;\r\n  font-size: .85em;\r\n  font-size: var(--fc-small-font-size,.85em);\r\n  opacity: 1!important;\r\n}\r\n\r\n.fc-non-business{\r\n  background: #dddddd!important;\r\n  opacity: 0.5;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .demo-app-sidebar{\r\n    display: none;\r\n  }\r\n\r\n  .demo-app-main{\r\n    padding: 0;\r\n  }\r\n\r\n  .demo-app {\r\n    font-size: 12px;\r\n    z-index: -1!important;\r\n  }\r\n}\r\n\r\n/*Ipad-es n\u00E9zet*/\r\n\r\n@media only screen and (width: 768px) {\r\n  .demo-app-sidebar{\r\n    display: none;\r\n  }\r\n\r\n  .demo-app-main{\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQSxJQUFJLCtCQUErQjtFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlEQUF5RDtFQUN6RCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUEsTUFBTSxzQkFBc0I7RUFDMUIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2hlYWRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbWFyZ2luOiAxLjVlbSAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmIgeyAvKiB1c2VkIGZvciBldmVudCBkYXRlcy90aW1lcyAqL1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG4uZGVtby1hcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZGVtby1hcHAtc2lkZWJhciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgYmFja2dyb3VuZDogI2VhZjlmZjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMmU4O1xyXG59XHJcblxyXG4uZGVtby1hcHAtc2lkZWJhci1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5kZW1vLWFwcC1tYWluIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZzogM2VtO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHotaW5kZXg6LTE7XHJcbn1cclxuXHJcbi5mYyB7IC8qIHRoZSBjYWxlbmRhciByb290ICovXHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZjLW1lZGlhLXNjcmVlbiAuZmMtdGltZWdyaWQtZXZlbnQge1xyXG4gIGJvdHRvbTogMHB4IWltcG9ydGFudDtcclxuICBsZWZ0OiAtMi4wJSFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTA1JTtcclxuICBoZWlnaHQ6IDEwMSUhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mYy10aW1lZ3JpZC1ldmVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IC44NWVtO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLC44NWVtKTtcclxuICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZjLW5vbi1idXNpbmVzc3tcclxuICBiYWNrZ3JvdW5kOiAjZGRkZGRkIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZGVtby1hcHAtc2lkZWJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGVtby1hcHAtbWFpbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZGVtby1hcHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgei1pbmRleDogLTEhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLypJcGFkLWVzIG7DqXpldCovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoOiA3NjhweCkge1xyXG4gIC5kZW1vLWFwcC1zaWRlYmFye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kZW1vLWFwcC1tYWlue1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment',
                templateUrl: './appointment.component.html',
                styleUrls: ['./appointment.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }, { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__["UserProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/appointment/event-utils.ts":
/*!********************************************!*\
  !*** ./src/app/appointment/event-utils.ts ***!
  \********************************************/
/*! exports provided: HOLIDAYS, createEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOLIDAYS", function() { return HOLIDAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventId", function() { return createEventId; });
let eventGuid = 0;
var dateNow = new Date;
const HOLIDAYS = [
    {
        start: dateNow.getFullYear().toString() + '01-01T00:00:00',
        end: dateNow.getFullYear().toString() + '01-01T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '03-15T00:00:00',
        end: dateNow.getFullYear().toString() + '03-15T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '05-01T00:00:00',
        end: dateNow.getFullYear().toString() + '05-01T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '08-20T00:00:00',
        end: dateNow.getFullYear().toString() + '08-20T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '10-23T00:00:00',
        end: dateNow.getFullYear().toString() + '10-23T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '11-01T00:00:00',
        end: dateNow.getFullYear().toString() + '11-01T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '12-24T00:00:00',
        end: dateNow.getFullYear().toString() + '12-24T24:00:00',
    },
    {
        start: dateNow.getFullYear().toString() + '12-25T00:00:00',
        end: dateNow.getFullYear().toString() + '12-25T24:00:00',
    },
];
function createEventId() {
    return String(eventGuid++);
}


/***/ }),

/***/ "./src/app/appointment/select-practitioner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/appointment/select-practitioner.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectPractitionerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPractitionerComponent", function() { return SelectPractitionerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _update_practitioner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-practitioner.component */ "./src/app/appointment/update-practitioner.component.ts");
/* harmony import */ var _appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment.component */ "./src/app/appointment/appointment.component.ts");









function SelectPractitionerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-update-practitioner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectPractitionerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appointment");
} }
class SelectPractitionerComponent {
    constructor(userProfileService, tokenService, toastr) {
        this.userProfileService = userProfileService;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.username = this.tokenService.getUserName();
        this.practitioners = [];
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.profileData = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.profileData = data;
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
SelectPractitionerComponent.ɵfac = function SelectPractitionerComponent_Factory(t) { return new (t || SelectPractitionerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SelectPractitionerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectPractitionerComponent, selectors: [["app-select-practitioner"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["schedule", ""]], template: function SelectPractitionerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectPractitionerComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectPractitionerComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.profileData.patient == null ? null : ctx.profileData.patient.practitionerId))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _update_practitioner_component__WEBPACK_IMPORTED_MODULE_6__["UpdatePractitionerComponent"], _appointment_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L3NlbGVjdC1wcmFjdGl0aW9uZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectPractitionerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-practitioner',
                templateUrl: './select-practitioner.component.html',
                styleUrls: ['./select-practitioner.component.css']
            }]
    }], function () { return [{ type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/appointment/update-practitioner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/appointment/update-practitioner.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdatePractitionerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePractitionerComponent", function() { return UpdatePractitionerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/appointment.service */ "./src/app/service/appointment.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function UpdatePractitionerComponent_mat_card_3_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} if (rf & 2) {
    const practitioner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("src", "", ctx_r2.preFilePath, "", practitioner_r1.username, "/", practitioner_r1.patient.picture, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UpdatePractitionerComponent_mat_card_3_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("H\u00E9tf\u0151: ", worktime_r9.fromTime, "-", worktime_r9.toTime, "");
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Kedd: ", worktime_r9.fromTime, "-", worktime_r9.toTime, "");
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Szerda: ", worktime_r9.fromTime, "-", worktime_r9.toTime, "");
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Cs\u00FCt\u00F6rt\u00F6k: ", worktime_r9.fromTime, "-", worktime_r9.toTime, "");
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("P\u00E9ntek: ", worktime_r9.fromTime, "-", worktime_r9.toTime, "");
} }
function UpdatePractitionerComponent_mat_card_3_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_1_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_2_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_3_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_4_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UpdatePractitionerComponent_mat_card_3_div_22_div_1_div_5_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.day == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.day == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.day == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.day == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.day == 5);
} }
function UpdatePractitionerComponent_mat_card_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdatePractitionerComponent_mat_card_3_div_22_div_1_Template, 6, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worktime_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", worktime_r9.fromTime != "0:00" && worktime_r9.toTime != "0:00");
} }
function UpdatePractitionerComponent_mat_card_3_mat_card_actions_23_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePractitionerComponent_mat_card_3_mat_card_actions_23_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const practitioner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectedPractitioner(practitioner_r1.practitioner.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Akt\u00EDv orvos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatePractitionerComponent_mat_card_3_mat_card_actions_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdatePractitionerComponent_mat_card_3_mat_card_actions_23_button_1_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const practitioner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.profileData.patient.practitionerId == (practitioner_r1.practitioner == null ? null : practitioner_r1.practitioner.id))("ngIfElse", _r6);
} }
function UpdatePractitionerComponent_mat_card_3_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePractitionerComponent_mat_card_3_ng_template_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const practitioner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.selectedPractitioner(practitioner_r1.practitioner.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kiv\u00E1laszt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatePractitionerComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdatePractitionerComponent_mat_card_3_img_8_Template, 1, 3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdatePractitionerComponent_mat_card_3_img_9_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Munkahelyi c\u00EDm:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Munkaid\u0151:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UpdatePractitionerComponent_mat_card_3_div_22_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UpdatePractitionerComponent_mat_card_3_mat_card_actions_23_Template, 2, 2, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdatePractitionerComponent_mat_card_3_ng_template_24_Template, 4, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const practitioner_r1 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.patient.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.practitioner.specialization);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", practitioner_r1 == null ? null : practitioner_r1.patient == null ? null : practitioner_r1.patient.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(practitioner_r1 == null ? null : practitioner_r1.patient == null ? null : practitioner_r1.patient.picture));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](practitioner_r1.practitioner.workingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", practitioner_r1.practitioner.worktimes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profileData.patient == null ? null : ctx_r0.profileData.patient.practitionerId)("ngIfElse", _r6);
} }
class UpdatePractitionerComponent {
    constructor(appointmentService, toastr, tokenService, userProfileService) {
        this.appointmentService = appointmentService;
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.userProfileService = userProfileService;
        this.username = this.tokenService.getUserName();
        this.practitioners = [];
        this.preFilePath = 'https://s3.us-east-2.amazonaws.com/onlinehealthcaresystem/';
    }
    ngOnInit() {
        this.getProfile();
        this.getPractitioners();
    }
    getProfile() {
        this.profileData = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.profileData = data;
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    getPractitioners() {
        this.appointmentService.getAllPractitionerExceptMe(this.username).subscribe(response => {
            this.practitioners = response;
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    selectedPractitioner(practitionerId) {
        this.appointmentService.updatePractitioner(this.username, practitionerId)
            .subscribe(data => {
            window.location.reload();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
        });
        this.toastr.success('Kiválasztottál egy orvost!', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center',
        });
    }
}
UpdatePractitionerComponent.ɵfac = function UpdatePractitionerComponent_Factory(t) { return new (t || UpdatePractitionerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"])); };
UpdatePractitionerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePractitionerComponent, selectors: [["app-update-practitioner"]], decls: 4, vars: 1, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch", 2, "margin", "auto"], ["class", "practitioner-card col-lg-3", 4, "ngFor", "ngForOf"], [1, "practitioner-card", "col-lg-3"], ["id", "practitioner-name"], [1, "img-container"], [3, "src", 4, "ngIf"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG", 4, "ngIf"], [2, "display", "block"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["inactive", ""], [3, "src"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"], ["style", "position: relative;", 4, "ngIf"], [2, "position", "relative"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "margin-top", "0px", "margin-bottom", "0px", 3, "click"]], template: function UpdatePractitionerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdatePractitionerComponent_mat_card_3_Template, 26, 8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.practitioners);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".mat-card-actions[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-top: 20px;\r\n  margin-bottom: 0px!important;\r\n  padding: 0px;\r\n}\r\n\r\n.practitioner-card[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-left: 50px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  width: 100%;\r\n  margin: 10px auto 10px auto;\r\n  text-align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  max-height: 200px;\r\n}\r\n\r\n#practitioner-name[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .practitioner-card[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQvdXBkYXRlLXByYWN0aXRpb25lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L3VwZGF0ZS1wcmFjdGl0aW9uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5wcmFjdGl0aW9uZXItY2FyZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jcHJhY3RpdGlvbmVyLW5hbWV7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJhY3RpdGlvbmVyLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePractitionerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-practitioner',
                templateUrl: './update-practitioner.component.html',
                styleUrls: ['./update-practitioner.component.css']
            }]
    }], function () { return [{ type: _service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/appointment/worktime/worktime.component.ts":
/*!************************************************************!*\
  !*** ./src/app/appointment/worktime/worktime.component.ts ***!
  \************************************************************/
/*! exports provided: WorktimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorktimeComponent", function() { return WorktimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_dto_holidays_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dto/holidays-dto */ "./src/app/dto/holidays-dto.ts");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/user */ "./src/app/model/user.ts");
/* harmony import */ var src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/worktime */ "./src/app/model/worktime.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var src_app_service_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/appointment.service */ "./src/app/service/appointment.service.ts");
/* harmony import */ var src_app_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















class WorktimeComponent {
    constructor(toastr, tokenService, appointmentService, userProfileService) {
        this.toastr = toastr;
        this.tokenService = tokenService;
        this.appointmentService = appointmentService;
        this.userProfileService = userProfileService;
        this.username = this.tokenService.getUserName();
        this.mondayStart = "";
        this.tuesdayStart = "";
        this.wednesdayStart = "";
        this.thursdayStart = "";
        this.fridayStart = "";
        this.mondayEnd = "";
        this.tuesdayEnd = "";
        this.wednesdayEnd = "";
        this.thursdayEnd = "";
        this.fridayEnd = "";
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.profileData = new src_app_model_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.profileData = data;
            this.getBusinessHours();
            this.getWorksOnHolidays();
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    getBusinessHours() {
        this.appointmentService.getBusinessHours(this.username)
            .subscribe(data => {
            this.mondayStart = data[0].fromTime;
            this.mondayEnd = data[0].toTime;
            this.tuesdayStart = data[1].fromTime;
            this.tuesdayEnd = data[1].toTime;
            this.wednesdayStart = data[2].fromTime;
            this.wednesdayEnd = data[2].toTime;
            this.thursdayStart = data[3].fromTime;
            this.thursdayEnd = data[3].toTime;
            this.fridayStart = data[4].fromTime;
            this.fridayEnd = data[4].toTime;
        }, error => {
        });
    }
    getWorksOnHolidays() {
        this.appointmentService.getHolidayWorksForWorktimeSettings(this.username)
            .subscribe(data => {
            this.defaultTimePerClient = data.defaultTimePerClient;
            this.slotMinTime = data.slotMinTime;
            this.slotMaxTime = data.slotMaxTime;
            this.worksOnHoliday = data.worksOnHoliday;
        }, error => {
        });
    }
    onSubmit() {
        this.appointmentService.setBusinessHours(this.username, this.worktimes = [
            new src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__["Worktime"](1, 1, this.mondayStart, this.mondayEnd),
            new src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__["Worktime"](2, 2, this.tuesdayStart, this.tuesdayEnd),
            new src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__["Worktime"](3, 3, this.wednesdayStart, this.wednesdayEnd),
            new src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__["Worktime"](4, 4, this.thursdayStart, this.thursdayEnd),
            new src_app_model_worktime__WEBPACK_IMPORTED_MODULE_3__["Worktime"](5, 5, this.fridayStart, this.fridayEnd),
        ])
            .subscribe(data => {
            this.toastr.success('Munkaidőd beállításra került!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }, error => {
        });
        this.appointmentService.setWorksOnHolidays(this.username, new src_app_dto_holidays_dto__WEBPACK_IMPORTED_MODULE_1__["HolidaysDto"](this.slotMinTime ? this.slotMinTime : '06:00', this.slotMaxTime ? this.slotMaxTime : '20:00', this.defaultTimePerClient ? this.defaultTimePerClient : 30, this.worksOnHoliday)).subscribe(data => {
        }, error => {
        });
    }
}
WorktimeComponent.ɵfac = function WorktimeComponent_Factory(t) { return new (t || WorktimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"])); };
WorktimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorktimeComponent, selectors: [["app-worktime"]], decls: 115, vars: 15, consts: [[1, "container"], [1, "d-flex", "justify-content-center"], [1, "example-card"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "start-end-time"], [1, "title-input"], ["color", "accent", "appearance", "legacy"], ["name", "mondayStart", "id", "mondayStart", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["mondayStartError", "ngModel"], ["name", "mondayEnd", "id", "mondayEnd", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["mondayEndError", "ngModel"], ["name", "tuesdayStart", "id", "tuesdayStart", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["tuesdayStartError", "ngModel"], ["name", "tuesdayEnd", "id", "tuesdayEnd", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["tuesdayEndError", "ngModel"], ["name", "wednesdayStart", "id", "wednesdayStart", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["wednesdayStartError", "ngModel"], ["name", "wednesdayEnd", "id", "wednesdayEnd", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["wednesdayEndError", "ngModel"], ["name", "thursdayStart", "id", "thursdayStart", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["thursdayStartError", "ngModel"], ["name", "thursdayEnd", "id", "thursdayEnd", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["thursdayEndError", "ngModel"], ["name", "fridayStart", "id", "fridayStart", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["fridayStartError", "ngModel"], ["name", "fridayEnd", "id", "fridayEnd", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["fridayEndError", "ngModel"], [1, "slider"], ["labelPosition", "before", "name", "worksOnHoliday", "color", "primary", 3, "ngModel", "ngModelChange"], [1, "title-input", 2, "text-align", "center", "padding", "0"], ["color", "accent", "appearance", "fill"], ["name", "defaultTimePerClient", "id", "defaultTimePerClient", "matInput", "", "pattern", "[0-9]{2}", 3, "ngModel", "ngModelChange"], ["defaultTimePerClientError", "ngModel"], ["align", "start"], [2, "margin-top", "20px"], ["placeholder", "pl. 6:00", "name", "slotMinTime", "id", "slotMinTime", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["slotMinTimeError", "ngModel"], ["placeholder", "pl. 20:00", "name", "slotMaxTime", "id", "slotMaxTime", "matInput", "", "pattern", "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 3, "ngModel", "ngModelChange"], ["slotMaxTimeError", "ngModel"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "fas", "fa-sign-in-alt"]], template: function WorktimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add meg, hogy mikor szeretn\u00E9l dolgozni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WorktimeComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "H\u00E9tf\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_17_listener($event) { return ctx.mondayStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_23_listener($event) { return ctx.mondayEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kedd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_32_listener($event) { return ctx.tuesdayStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_38_listener($event) { return ctx.tuesdayEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Szerda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_47_listener($event) { return ctx.wednesdayStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_53_listener($event) { return ctx.wednesdayEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cs\u00FCt\u00F6rt\u00F6k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_62_listener($event) { return ctx.thursdayStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_68_listener($event) { return ctx.thursdayEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "P\u00E9ntek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_77_listener($event) { return ctx.fridayStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_83_listener($event) { return ctx.fridayEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-slide-toggle", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_mat_slide_toggle_ngModelChange_86_listener($event) { return ctx.worksOnHoliday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Munkasz\u00FCneti napok enged\u00E9lyez\u00E9se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Konzult\u00E1ci\u00F3s id\u0151 (perc): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_92_listener($event) { return ctx.defaultTimePerClient = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-hint", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Alap\u00E9rtelmezeten 30 perc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Intervallum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Kezd\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_103_listener($event) { return ctx.slotMinTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "V\u00E9ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorktimeComponent_Template_input_ngModelChange_109_listener($event) { return ctx.slotMaxTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Munkaid\u0151 r\u00F6gz\u00EDt\u00E9se ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mondayStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mondayEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tuesdayStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tuesdayEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wednesdayStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wednesdayEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.thursdayStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.thursdayEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fridayStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fridayEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.worksOnHoliday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultTimePerClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slotMinTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slotMaxTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n padding: 0;\r\n margin: 20px auto;\r\n width: 50%;\r\n}\r\n\r\n.start-end-time[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  justify-content: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n  text-align: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  font-size: 25px!important;\r\n}\r\n\r\nh5[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.title-input[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\nmat-slide-toggle[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  mat-card[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: auto;\r\n    width: 100%;\r\n   }\r\n}\r\n\r\n\r\n\r\n@media only screen and (width: 768px) {\r\n  mat-card[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: auto;\r\n    width: 80%;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQvd29ya3RpbWUvd29ya3RpbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsVUFBVTtBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0dBQ1o7QUFDSDs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7R0FDWDtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYXBwb2ludG1lbnQvd29ya3RpbWUvd29ya3RpbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gcGFkZGluZzogMDtcclxuIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnN0YXJ0LWVuZC10aW1le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaDN7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5oMntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS1pbnB1dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbm1hdC1zbGlkZS10b2dnbGV7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbi5zbGlkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBtYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG59XHJcblxyXG4vKklwYWQtZXMgbsOpemV0Ki9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6IDc2OHB4KSB7XHJcbiAgbWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorktimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-worktime',
                templateUrl: './worktime.component.html',
                styleUrls: ['./worktime.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: src_app_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: src_app_service_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"] }, { type: src_app_service_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dto_login_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/login-user */ "./src/app/dto/login-user.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












class LoginComponent {
    constructor(tokenService, authService, router, toastr) {
        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    onLogin() {
        this.loginUser = new _dto_login_user__WEBPACK_IMPORTED_MODULE_1__["LoginUser"](this.username, this.password);
        this.authService.login(this.loginUser).subscribe(data => {
            this.tokenService.setToken(data.token);
            this.toastr.success('Sikeresen bejelentkeztél!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.router.navigate(['/']);
        }, err => {
            var _a;
            this.errorMessage = (_a = err.error) === null || _a === void 0 ? void 0 : _a.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 3, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "example-card"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link", "active"], ["routerLink", "/registration", 1, "nav-link"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent", "appearance", "fill"], ["name", "username", "id", "username", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "matInput", "", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "btn", "btn-outline-success", "btn-block", 3, "disabled"], [1, "fas", "fa-sign-in-alt"], ["id", "forgot-password", "routerLink", "/forgot-password"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bejelentkez\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Regisztr\u00E1ci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Felhaszn\u00E1l\u00F3n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jelsz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Elfelejtettem a jelszavam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 500px;\r\n  border: 1px solid rgb(235, 229, 229)\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n}\r\n\r\n#forgot-password[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjI5LCAyMjkpXHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlcntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4jZm9yZ290LXBhc3N3b3Jke1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/registration.component.ts":
/*!************************************************!*\
  !*** ./src/app/auth/registration.component.ts ***!
  \************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dto_new_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/new-user */ "./src/app/dto/new-user.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function RegistrationComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Felhaszn\u00E1l\u00F3n\u00E9v megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Minimum ", _r1.errors.minlength.requiredLength, " karakter hossz\u00FAs\u00E1g\u00FA legyen! ");
} }
function RegistrationComponent_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Csak kis- \u00E9s nagybet\u0171ket, illetve sz\u00E1mokat tartalmazhat! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_21_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_21_div_2_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_div_21_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.pattern);
} }
function RegistrationComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jelsz\u00F3 megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Minimum ", _r3.errors.minlength.requiredLength, " karakter hossz\u00FAs\u00E1g\u00FA legyen! ");
} }
function RegistrationComponent_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_27_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_27_div_2_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_div_27_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.pattern);
} }
function RegistrationComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_35_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_35_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.maxlength);
} }
function RegistrationComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Meg kell felelnie a mint\u00E1nak. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_43_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_43_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_43_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_div_43_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.maxlength);
} }
function RegistrationComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_60_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_60_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_60_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.maxlength);
} }
function RegistrationComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_68_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_68_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_68_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.maxlength);
} }
class RegistrationComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.minDate = new Date(1900, 1, 1);
        this.maxDate = new Date();
    }
    ngOnInit() {
    }
    onRegister() {
        this.newUser = new _dto_new_user__WEBPACK_IMPORTED_MODULE_1__["NewUser"](this.name, this.username, this.email, this.password, this.address, this.dateOfBorn, this.phoneNumber);
        this.authService.addUser(this.newUser).subscribe(data => {
            this.toastr.success('Sikeres regisztráció!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.router.navigate(['/login']);
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 75, vars: 18, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "example-card"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/registration", 1, "nav-link", "active"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent", "appearance", "fill"], ["name", "username", "id", "username", "matInput", "", "minlength", "5", "maxlength", "15", "pattern", "[A-Za-z0-9]+", "required", "", 3, "ngModel", "ngModelChange"], ["usernameError", "ngModel"], ["align", "start"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "name", "password", "id", "password", "matInput", "", "minlength", "8", "maxlength", "30", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "required", "", 3, "ngModel", "ngModelChange"], ["passwordError", "ngModel"], ["name", "name", "id", "name", "matInput", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["nameError", "ngModel"], ["name", "email", "id", "email", "matInput", "", "pattern", "[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-]+", "required", "", 3, "ngModel", "ngModelChange"], ["emailError", "ngModel"], ["for", "dateOfBorn"], ["name", "dateOfBorn", "id", "dateOfBorn", "matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["matSuffix", "", 3, "for"], ["myDatePicker", ""], ["name", "address", "id", "address", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"], ["addressError", "ngModel"], ["name", "phoneNumber", "id", "phoneNumber", "matInput", "", "maxlength", "20", "required", "", 3, "ngModel", "ngModelChange"], ["phoneNumberError", "ngModel"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "fas", "fa-sign-in-alt"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bejelentkez\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Regisztr\u00E1ci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_12_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Felhaszn\u00E1l\u00F3n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Minimum 5, maximum 15 karakter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistrationComponent_div_21_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Jelsz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_25_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrationComponent_div_27_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Minimum 8, maximum 30 karakter hossz\u00FA, tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Teljes n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationComponent_div_35_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "N\u00E9v megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_41_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegistrationComponent_div_43_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Email c\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sz\u00FClet\u00E9si d\u00E1tum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_49_listener($event) { return ctx.dateOfBorn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jobb oldalt tudod kiv\u00E1lasztani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lakc\u00EDm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_58_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, RegistrationComponent_div_60_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Telefonsz\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_66_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RegistrationComponent_div_68_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-hint", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Regisztr\u00E1ci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r9)("ngModel", ctx.dateOfBorn)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 500px;\r\n  border: 1px solid rgb(235, 229, 229)\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjI5LCAyMjkpXHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlcntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/client-list/client-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/client-list/client-list.component.ts ***!
  \******************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_practitioner_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/practitioner-dashboard.service */ "./src/app/service/practitioner-dashboard.service.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");









function ClientListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientListComponent_tr_20_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const client_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteAppointment(client_r1.appointmentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, client_r1.time, "yyyy.MM.dd hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r1.message);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
class ClientListComponent {
    constructor(service, tokenService, toastr) {
        this.service = service;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.clients = [];
        this.page = 1;
    }
    ngOnInit() {
        this.username = this.tokenService.getUserName();
        this.getClients();
    }
    getClients() {
        this.service.getAllClient(this.username).subscribe(response => {
            this.clients = response;
        }, error => {
            // TODO: Error message
        });
    }
    deleteAppointment(id) {
        this.service.deleteAppointment(id)
            .subscribe(data => {
            this.toastr.success('Foglalás törölve!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.getClients();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
    search() {
        if (this.name == "") {
            this.ngOnInit();
        }
        else {
            this.clients = this.clients.filter(res => {
                return res.clientName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            });
        }
    }
}
ClientListComponent.ɵfac = function ClientListComponent_Factory(t) { return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_practitioner_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PractitionerDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ClientListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientListComponent, selectors: [["app-client-list"]], decls: 24, vars: 8, consts: [[1, "container"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "panel-body"], ["type", "text", "name", "name", "placeholder", "\u00CDrd be a p\u00E1ciens nev\u00E9t", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "table-responsive-md"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-check"]], template: function ClientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kliens lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; })("ngModelChange", function ClientListComponent_Template_input_ngModelChange_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Id\u0151pont");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Megjegyz\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "M\u0171veletek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientListComponent_tr_20_Template, 11, 6, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ClientListComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 2, ctx.clients, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.page, ctx.totalRecords)));
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1saXN0L2NsaWVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-list',
                templateUrl: './client-list.component.html',
                styleUrls: ['./client-list.component.css']
            }]
    }], function () { return [{ type: _service_practitioner_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PractitionerDashboardService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/common-questions/common-questions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-questions/common-questions.component.ts ***!
  \****************************************************************/
/*! exports provided: CommonQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonQuestionsComponent", function() { return CommonQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");




class CommonQuestionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonQuestionsComponent.ɵfac = function CommonQuestionsComponent_Factory(t) { return new (t || CommonQuestionsComponent)(); };
CommonQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonQuestionsComponent, selectors: [["app-common-questions"]], decls: 74, vars: 0, consts: [[1, "container"]], template: function CommonQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mi c\u00E9lb\u00F3l j\u00F6tt l\u00E9tre az oldal? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Az oldal szakdolgozat k\u00E9sz\u00EDt\u00E9s c\u00E9lj\u00E1b\u00F3l j\u00F6tt l\u00E9tre. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C\u00E9lja az, hogy az embereknek lehet\u0151s\u00E9g\u00FCk legyen \u00E1ltal\u00E1nos konzult\u00E1ci\u00F3kra id\u0151pontot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " foglalni \u00E9s k\u00FCl\u00F6nb\u00F6z\u0151 szakter\u00FClet\u0171 orvosokkal besz\u00E9lgetni.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Megk\u00F6nny\u00EDti a p\u00E1ciensek \u00E9s az orvosok dolg\u00E1t azzal, hogy egy modern \u00E9s egyszer\u0171en kezelhet\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " online fel\u00FCleten tudjanak id\u0151pontot foglalni, ezzel elker\u00FClve a telefon\u00E1l\u00E1st vagy a sorban\u00E1ll\u00E1st.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Hogyan lehetek orvos? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ha orvos szeretn\u00E9l lenni, egy telefonos egyeztet\u00E9st k\u00F6vet\u0151en lesz lehet\u0151s\u00E9ged erre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tel.:+36-30/123-2101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Mi\u00E9rt nincs felt\u00FCntetve a konzult\u00E1ci\u00F3k \u00E1ra? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "A konzult\u00E1ci\u00F3k \u00E1ra nem mindig hat\u00E1rozhat\u00F3 meg el\u0151re.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Ingyenes a foglal\u00E1s? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Igen, a foglal\u00E1s term\u00E9szetesen nem ker\u00FCl semmibe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Hova \u00E9rkezzek? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Az orvos \u00E1ltal megadott munkahelyi c\u00EDmre.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Id\u0151pont el\u0151tt mennyivel \u00E9rkezzek? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Az \u00E1ltalad lefoglalt id\u0151pont el\u0151tt 5-10 perccel c\u00E9lszer\u0171 meg\u00E9rkezni.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Hogy t\u00F6rt\u00E9nik az id\u0151pontfoglal\u00E1s? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Egyszerre egy orvoshoz egy id\u0151pontot foglalhatsz, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " viszont t\u00F6bb orvosn\u00E1l is lehet foglal\u00E1sod egyidej\u0171leg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Mit tegyek, ha le kell mondanom a foglal\u00E1som? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Ha le szeretn\u00E9l mondani egy foglal\u00E1st, akkor kattints a foglal\u00E1sodra,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u00EDgy egyszer\u0171en vissza tudod mondani.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"]], styles: [".mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%], .mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]:focus {\r\n  background: #b2beff;\r\n  color: #fff;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXF1ZXN0aW9ucy9jb21tb24tcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1xdWVzdGlvbnMvY29tbW9uLXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCxcclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogI2IyYmVmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-questions',
                templateUrl: './common-questions.component.html',
                styleUrls: ['./common-questions.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dto/forgot-password-dto.ts":
/*!********************************************!*\
  !*** ./src/app/dto/forgot-password-dto.ts ***!
  \********************************************/
/*! exports provided: ForgotPasswordDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDto", function() { return ForgotPasswordDto; });
class ForgotPasswordDto {
    constructor(email) {
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/dto/holidays-dto.ts":
/*!*************************************!*\
  !*** ./src/app/dto/holidays-dto.ts ***!
  \*************************************/
/*! exports provided: HolidaysDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidaysDto", function() { return HolidaysDto; });
class HolidaysDto {
    constructor(slotMinTime, slotMaxTime, defaultTimePerClient, worksOnHoliday) {
        this.slotMinTime = slotMinTime;
        this.slotMaxTime = slotMaxTime;
        this.defaultTimePerClient = defaultTimePerClient;
        this.worksOnHoliday = worksOnHoliday;
    }
}


/***/ }),

/***/ "./src/app/dto/jwt-dto.ts":
/*!********************************!*\
  !*** ./src/app/dto/jwt-dto.ts ***!
  \********************************/
/*! exports provided: JwtDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtDto", function() { return JwtDto; });
class JwtDto {
    constructor(token) {
        this.token = token;
    }
}


/***/ }),

/***/ "./src/app/dto/login-user.ts":
/*!***********************************!*\
  !*** ./src/app/dto/login-user.ts ***!
  \***********************************/
/*! exports provided: LoginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
class LoginUser {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/dto/new-user.ts":
/*!*********************************!*\
  !*** ./src/app/dto/new-user.ts ***!
  \*********************************/
/*! exports provided: NewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
class NewUser {
    constructor(name, username, email, password, address, dateOfBorn, phoneNumber) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.dateOfBorn = dateOfBorn;
        this.phoneNumber = phoneNumber;
    }
}


/***/ }),

/***/ "./src/app/dto/update-password-dto.ts":
/*!********************************************!*\
  !*** ./src/app/dto/update-password-dto.ts ***!
  \********************************************/
/*! exports provided: UpdatePasswordDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordDto", function() { return UpdatePasswordDto; });
class UpdatePasswordDto {
    constructor(password) {
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dto_forgot_password_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/forgot-password-dto */ "./src/app/dto/forgot-password-dto.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class ForgotPasswordComponent {
    constructor(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.forgotPassword(new _dto_forgot_password_dto__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordDto"](this.email)).subscribe(data => {
            this.toastr.success('Kérlek ellenőrizd a bejövő emaileket!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        }, error => {
            this.toastr.error('Ez az email nem tartozik egyetlen fiókhoz sem!', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 17, vars: 2, consts: [[1, "container"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent"], ["name", "email", "id", "email", "matInput", "", "pattern", "[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-]+", 3, "ngModel", "ngModelChange"], ["emailError", "ngModel"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [1, "fas", "fa-sign-in-alt"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jelsz\u00F3 vissza\u00E1ll\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "K\u00E9rlek add meg az email c\u00EDmedet!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_11_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " K\u00FCld\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  mat-form-field[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password',
                templateUrl: './forgot-password.component.html',
                styleUrls: ['./forgot-password.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guard/login.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class LoginGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.tokenService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guard/user-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/guard/user-guard.service.ts ***!
  \*********************************************/
/*! exports provided: ProdGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdGuardService", function() { return ProdGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProdGuardService {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(route, state) {
        const expectedRole = route.data.expectedRole;
        this.realRole = this.tokenService.IsAdmin ? 'admin' : 'patient';
        this.realRole2 = this.tokenService.IsPractitioner ? 'practitioner' : 'patient';
        if (!this.tokenService.isLogged() || expectedRole.indexOf(this.realRole) < 0 && expectedRole.indexOf(this.realRole2) < 0) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
ProdGuardService.ɵfac = function ProdGuardService_Factory(t) { return new (t || ProdGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProdGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdGuardService, factory: ProdGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function IndexComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00DCdv\u00F6z\u00F6llek idegen!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00DCdv\u00F6z\u00F6llek ", ctx_r1.username, "!");
} }
class IndexComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.username = this.tokenService.getUserName();
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 4, vars: 2, consts: [[1, "container", "text-center"], [4, "ngIf"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndexComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndexComponent_h2_3_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptor/user-interceptor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptor/user-interceptor.service.ts ***!
  \*********************************************************/
/*! exports provided: UserInterceptorService, interceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterceptorService", function() { return UserInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProvider", function() { return interceptorProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dto_jwt_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dto/jwt-dto */ "./src/app/dto/jwt-dto.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");








class UserInterceptorService {
    constructor(tokenService, authService) {
        this.tokenService = tokenService;
        this.authService = authService;
    }
    intercept(req, next) {
        if (!this.tokenService.isLogged()) {
            return next.handle(req);
        }
        let intReq = req;
        const token = this.tokenService.getToken();
        intReq = this.addToken(req, token);
        return next.handle(intReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 401) {
                const dto = new _dto_jwt_dto__WEBPACK_IMPORTED_MODULE_4__["JwtDto"](this.tokenService.getToken());
                return this.authService.refresh(dto).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((data) => {
                    this.tokenService.setToken(data.token);
                    intReq = this.addToken(req, data.token);
                    return next.handle(intReq);
                }));
            }
            else {
                //this.tokenService.logOut();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    }
    addToken(req, token) {
        return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
}
UserInterceptorService.ɵfac = function UserInterceptorService_Factory(t) { return new (t || UserInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
UserInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserInterceptorService, factory: UserInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();
const interceptorProvider = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: UserInterceptorService, multi: true }];


/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function MainNavComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Gyakori k\u00E9rd\u00E9sek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Adatlap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Kliensek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Munkaid\u0151 m\u00F3dos\u00EDt\u00E1sa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Orvos kiv\u00E1laszt\u00E1sa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Id\u0151pontfoglal\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Orvosok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " P\u00E1ciensek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bejelentkez\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Kijelentkez\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainNavComponent {
    constructor(breakpointObserver, tokenService, router) {
        this.breakpointObserver = breakpointObserver;
        this.tokenService = tokenService;
        this.router = router;
        this.isLogged = false;
        this.isPatient = false;
        this.isPractitioner = false;
        this.isAdmin = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    ngOnInit() {
        this.isLogged = this.tokenService.isLogged();
        this.isAdmin = this.tokenService.IsAdmin();
        this.isPractitioner = this.tokenService.IsPractitioner();
        this.isPatient = this.tokenService.IsPatient();
    }
    onLogout() {
        this.tokenService.logOut();
        window.location.reload();
        this.router.navigate(['/']);
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 28, vars: 25, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/frequently-asked-questions", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/profile", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/practitioner-dashboard", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/appointment/worktimes", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/appointment/update-practitioner", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/appointment/reservation", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/practitioners", "class", "sidelistelements", 4, "ngIf"], ["mat-button", "", "routerLink", "/patients", "class", "sidelistelements", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/login", "class", "sidelistelements", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "style", "cursor: pointer;", "class", "sidelistelements", 3, "click", 4, "ngIf"], [1, "fas", "fa-plus-square"], ["id", "title"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [1, "fas", "fa-bars"], ["mat-button", "", "routerLink", "/frequently-asked-questions", 1, "sidelistelements"], [1, "fas", "fa-question"], ["mat-button", "", "routerLink", "/profile", 1, "sidelistelements"], [1, "fas", "fa-user-circle"], ["mat-button", "", "routerLink", "/practitioner-dashboard", 1, "sidelistelements"], [1, "fas", "fa-notes-medical"], ["mat-button", "", "routerLink", "/appointment/worktimes", 1, "sidelistelements"], [1, "fas", "fa-business-time"], ["mat-button", "", "routerLink", "/appointment/update-practitioner", 1, "sidelistelements"], [1, "fas", "fa-user-md"], ["mat-button", "", "routerLink", "/appointment/reservation", 1, "sidelistelements"], [1, "far", "fa-calendar-check"], ["mat-button", "", "routerLink", "/practitioners", 1, "sidelistelements"], [1, "far", "fa-address-book"], ["mat-button", "", "routerLink", "/patients", 1, "sidelistelements"], [1, "fas", "fa-address-book"], ["mat-raised-button", "", "color", "primary", "routerLink", "/login", 1, "sidelistelements"], [1, "fas", "fa-sign-in-alt"], ["mat-raised-button", "", "color", "warn", 1, "sidelistelements", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-door-open"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainNavComponent_button_7_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Men\u00FC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainNavComponent_a_11_Template, 3, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainNavComponent_a_12_Template, 3, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainNavComponent_a_13_Template, 3, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainNavComponent_a_14_Template, 3, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainNavComponent_a_15_Template, 3, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MainNavComponent_a_16_Template, 3, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainNavComponent_a_17_Template, 3, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainNavComponent_a_18_Template, 3, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainNavComponent_a_19_Template, 3, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainNavComponent_a_20_Template, 3, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MainNavComponent_button_23_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A0 Eg\u00E9szs\u00E9g\u00FCgyi Id\u0151pontfoglal\u00F3 Rendszer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 21, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 23, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.sidelistelements[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n#title[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\n.fas.fa-bars[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uc2lkZWxpc3RlbGVtZW50c3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyotLS0tLUN1c3RvbSBjc3MtLS0tLSovXHJcbiN0aXRsZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mYXMuZmEtYmFyc3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ModalComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.data.instructions = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.instructions);
} }
function ModalComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Igen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r1.data.instructions);
} }
function ModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Igen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], decls: 10, vars: 5, consts: [["mat-dialog-title", ""], ["style", "width: 100%; margin: auto;", 4, "ngIf"], [2, "margin", "auto", "display", "block"], ["mat-button", "", "mat-dialog-close", ""], ["style", "float: right;", "mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", 4, "ngIf"], [2, "width", "100%", "margin", "auto"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-button", "", "cdkFocusInitial", "", 2, "float", "right", 3, "mat-dialog-close"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalComponent_mat_form_field_4_Template, 2, 1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalComponent_button_8_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalComponent_button_9_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.paragraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.title == "Ha szeretn\u00E9d, \u00EDrd le a probl\u00E9m\u00E1dat p\u00E1r sz\u00F3ban");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.instructions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.instructions);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n#modal-content-wrapper[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: repeat(1fr, 3);\r\n}\r\n\r\n#modal-title[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n}\r\n\r\n#modal-footer[_ngcontent-%COMP%] {\r\n  justify-self: right;\r\n  align-self: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLGg0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI21vZGFsLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyLCAzKTtcclxufVxyXG5cclxuI21vZGFsLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbiNtb2RhbC1mb290ZXIge1xyXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/appointment.ts":
/*!**************************************!*\
  !*** ./src/app/model/appointment.ts ***!
  \**************************************/
/*! exports provided: Appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointment", function() { return Appointment; });
class Appointment {
    constructor(id, message = null, time = null, patient = null, practitioner = null) {
        this.id = id;
        this.message = message;
        this.time = time;
        this.patient = patient;
        this.practitioner = practitioner;
    }
}


/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id = null, username = null, password = null, activation = null, isenabled = false, roles = [], patient = null, practitioner = null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.activation = activation;
        this.isenabled = isenabled;
        this.roles = roles;
        this.patient = patient;
        this.practitioner = practitioner;
    }
}


/***/ }),

/***/ "./src/app/model/worktime.ts":
/*!***********************************!*\
  !*** ./src/app/model/worktime.ts ***!
  \***********************************/
/*! exports provided: Worktime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worktime", function() { return Worktime; });
class Worktime {
    constructor(id = null, day = null, fromTime = null, toTime = null) {
        this.id = id;
        this.day = day;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }
}


/***/ }),

/***/ "./src/app/profile/password-update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/password-update.component.ts ***!
  \******************************************************/
/*! exports provided: PasswordUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdateComponent", function() { return PasswordUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function PasswordUpdateComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Minimum ", _r1.errors.minlength.requiredLength, " karakter hossz\u00FAs\u00E1g\u00FA legyen! ");
} }
function PasswordUpdateComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordUpdateComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PasswordUpdateComponent_div_12_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PasswordUpdateComponent_div_12_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.pattern);
} }
function PasswordUpdateComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hib\u00E1s jelsz\u00F3ism\u00E9tl\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PasswordUpdateComponent {
    constructor(tokenService, userProfileService, toastr, router) {
        this.tokenService = tokenService;
        this.userProfileService = userProfileService;
        this.toastr = toastr;
        this.router = router;
    }
    ngOnInit() {
        this.username = this.tokenService.getUserName();
    }
    editProfile() {
        this.userProfileService.updatePassword(this.username, this.password)
            .subscribe(data => {
            this.toastr.success('', 'Sikeres jelszó módosítás!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.gotoList();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            console.log(err);
        });
    }
    gotoList() {
        this.router.navigate(['/profile']);
    }
    onSubmit() {
        this.editProfile();
    }
}
PasswordUpdateComponent.ɵfac = function PasswordUpdateComponent_Factory(t) { return new (t || PasswordUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PasswordUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordUpdateComponent, selectors: [["app-password-update"]], decls: 24, vars: 5, consts: [[1, "container"], [2, "width", "100%", "max-width", "400px"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "minlength", "8", "maxlength", "30", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordError", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["align", "start"], ["type", "password", "id", "password_repeat", "name", "password_repeat", "required", "", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["cpass", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["color", "primary", "mat-raised-button", ""], [1, "far", "fa-save"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "text-danger"]], template: function PasswordUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jelsz\u00F3 m\u00F3dos\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PasswordUpdateComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00DAj Jelsz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordUpdateComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PasswordUpdateComponent_div_12_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Minimum 8, maximum 30 karakter hossz\u00FA, tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Jelsz\u00F3 ism\u00E9tl\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordUpdateComponent_Template_input_ngModelChange_18_listener($event) { return ctx.confirmpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PasswordUpdateComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " M\u00F3dos\u00EDt\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcGFzc3dvcmQtdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password-update',
                templateUrl: './password-update.component.html',
                styleUrls: ['./password-update.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_2__["UserProfileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile-update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile/profile-update.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUpdateComponent", function() { return ProfileUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_upload_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/upload-file.service */ "./src/app/service/upload-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");


















function ProfileUpdateComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.preFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileUpdateComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function ProfileUpdateComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_div_30_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileUpdateComponent_div_30_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
} }
function ProfileUpdateComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Meg kell felelnie a mint\u00E1nak. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_div_38_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileUpdateComponent_div_38_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileUpdateComponent_div_38_div_3_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.maxlength);
} }
function ProfileUpdateComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_53_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_div_53_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileUpdateComponent_div_53_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.maxlength);
} }
function ProfileUpdateComponent_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_61_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Maximum 40 karakter hossz\u00FA lehet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileUpdateComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileUpdateComponent_div_61_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileUpdateComponent_div_61_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.maxlength);
} }
function ProfileUpdateComponent_mat_form_field_64_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Munkahelyi c\u00EDm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_mat_form_field_64_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.workingAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Akkor is add meg, ha megegyezik a lakc\u00EDmmel!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.workingAddress);
} }
function ProfileUpdateComponent_mat_form_field_65_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Szakter\u00FClet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_mat_form_field_65_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.specialization = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.specialization);
} }
class ProfileUpdateComponent {
    constructor(tokenService, userProfileService, toastr, router, uploadService, https, matDialog) {
        this.tokenService = tokenService;
        this.userProfileService = userProfileService;
        this.toastr = toastr;
        this.router = router;
        this.uploadService = uploadService;
        this.https = https;
        this.matDialog = matDialog;
        this.isPractitioner = false;
        this.minDate = new Date(1900, 1, 1);
        this.maxDate = new Date();
        this.progress = { percentage: 0 };
        this.changeImage = false;
        this.preFilePath = 'https://s3.us-east-2.amazonaws.com/onlinehealthcaresystem/';
    }
    ngOnInit() {
        this.updateProfile = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.username = this.tokenService.getUserName();
        this.isPractitioner = this.tokenService.IsPractitioner();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.updateProfile = data;
            this.name = this.updateProfile.patient.name;
            this.email = this.updateProfile.patient.email;
            this.address = this.updateProfile.patient.address;
            this.dateOfBorn = this.updateProfile.patient.dateOfBorn;
            this.phoneNumber = this.updateProfile.patient.phoneNumber;
            this.picture = this.updateProfile.patient.picture;
            this.preFilePath = this.preFilePath + this.username + '/' + this.picture;
            if (this.isPractitioner == true) {
                this.workingAddress = this.updateProfile.practitioner.workingAddress;
                this.specialization = this.updateProfile.practitioner.specialization;
            }
        }, error => console.log(error));
    }
    editProfile() {
        this.updateProfile.patient.name = this.name;
        this.updateProfile.patient.email = this.email;
        this.updateProfile.patient.address = this.address;
        this.updateProfile.patient.dateOfBorn = this.dateOfBorn;
        this.updateProfile.patient.phoneNumber = this.phoneNumber;
        this.updateProfile.patient.picture = this.picture;
        this.preFilePath = this.preFilePath + this.username + '/' + this.picture;
        if (this.isPractitioner == true) {
            this.updateProfile.practitioner.workingAddress = this.workingAddress;
            this.updateProfile.practitioner.specialization = this.specialization;
        }
        this.userProfileService.updateProfile(this.username, this.updateProfile)
            .subscribe(data => {
            this.toastr.success('Profilodat módosítottad!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.gotoList();
        }, err => {
            this.errorMessage = err.error.message;
            this.toastr.error(this.errorMessage, 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            console.log(err);
        });
    }
    gotoList() {
        this.router.navigate(['/profile']);
    }
    onSubmit() {
        this.editProfile();
    }
    deletePicture() {
        this.uploadService.deleteFileFromStorage(this.username, this.picture).subscribe(res => {
            this.picture = null;
        });
    }
    uploadPicture() {
        this.progress.percentage = 0;
        const currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorageMine(this.username, currentFileUpload).subscribe(event => {
            this.selectedFiles = undefined;
        });
        this.picture = this.updateProfile.patient.picture;
        this.toastr.success('Profilodat módosítottad!', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center',
        });
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
}
ProfileUpdateComponent.ɵfac = function ProfileUpdateComponent_Factory(t) { return new (t || ProfileUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
ProfileUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileUpdateComponent, selectors: [["app-profile-update"]], decls: 70, vars: 18, consts: [[1, "container", "d-flex", "justify-content-center"], [1, "example-card"], [1, "photo"], [3, "src", 4, "ngIf"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", 3, "click"], [1, "fas", "fa-trash"], ["type", "file", "accept", "image/*", "id", "customFile", "title", "", "placeholder", "F\u00E1jl kiv\u00E1laszt\u00E1sa", 3, "change"], ["color", "primary", "mat-raised-button", "", 3, "click"], [1, "far", "fa-save"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["color", "accent", "appearance", "fill"], ["name", "name", "id", "name", "matInput", "", "maxlength", "40", "required", "", 3, "ngModel", "ngModelChange"], ["nameError", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["align", "start"], ["name", "email", "id", "email", "matInput", "", "maxlength", "40", "pattern", "[a-z0-9_.+-]+@[a-z0-9-]+\\.[a-z0-9-]+", "required", "", 3, "ngModel", "ngModelChange"], ["emailError", "ngModel"], ["for", "dateOfBorn"], ["name", "dateOfBorn", "id", "dateOfBorn", "matInput", "", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelChange"], ["matSuffix", "", 3, "for"], ["myDatePicker", ""], ["name", "address", "id", "address", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"], ["addressError", "ngModel"], ["name", "phoneNumber", "id", "phoneNumber", "matInput", "", "maxlength", "20", "required", "", 3, "ngModel", "ngModelChange"], ["phoneNumberError", "ngModel"], ["color", "accent", "appearance", "fill", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], [3, "src"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"], [1, "alert", "alert-danger"], [4, "ngIf"], ["name", "workingAddress", "id", "workingAddress", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"], ["name", "specialization", "id", "specialization", "matInput", "", "maxlength", "60", "required", "", 3, "ngModel", "ngModelChange"]], template: function ProfileUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profil m\u00F3dos\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileUpdateComponent_img_9_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileUpdateComponent_img_10_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileUpdateComponent_Template_button_click_12_listener() { return ctx.deletePicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " T\u00F6rl\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileUpdateComponent_Template_input_change_16_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileUpdateComponent_Template_button_click_18_listener() { return ctx.uploadPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Profilk\u00E9p ment\u00E9se ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileUpdateComponent_Template_form_ngSubmit_23_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teljes n\u00E9v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_Template_input_ngModelChange_28_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileUpdateComponent_div_30_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "N\u00E9v megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_Template_input_ngModelChange_36_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileUpdateComponent_div_38_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email c\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sz\u00FClet\u00E9si d\u00E1tum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_Template_input_ngModelChange_44_listener($event) { return ctx.dateOfBorn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lakc\u00EDm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_Template_input_ngModelChange_51_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProfileUpdateComponent_div_53_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lakc\u00EDm megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Telefonsz\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileUpdateComponent_Template_input_ngModelChange_59_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ProfileUpdateComponent_div_61_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-hint", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Telefonsz\u00E1m megad\u00E1sa k\u00F6telez\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ProfileUpdateComponent_mat_form_field_64_Template, 6, 1, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ProfileUpdateComponent_mat_form_field_65_Template, 4, 1, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " M\u00F3dos\u00EDt\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r7)("ngModel", ctx.dateOfBorn)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_9__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["PatternValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 500px;\r\n  border: 1px solid rgb(235, 229, 229)\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n  margin-bottom: 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-height: 300px;\r\n  max-width: 300px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmat-dialog-container#modal-component[_ngcontent-%COMP%] {\r\n  border: 3px solid #262626;\r\n  border-radius: 11px;\r\n  background-color: #1a1a1a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIyOSwgMjI5KVxyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25ze1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnBob3Rve1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG90byBpbnB1dCwgYnV0dG9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGFpbmVyI21vZGFsLWNvbXBvbmVudCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzI2MjYyNjtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-update',
                templateUrl: './profile-update.component.html',
                styleUrls: ['./profile-update.component.css']
            }]
    }], function () { return [{ type: _service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_upload_file_service__WEBPACK_IMPORTED_MODULE_6__["UploadFileService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-profile.service */ "./src/app/service/user-profile.service.ts");
/* harmony import */ var _service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ProfileComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.preFilePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProfileComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function ProfileComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Munkahelyi c\u00EDm: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.profileData == null ? null : ctx_r2.profileData.practitioner == null ? null : ctx_r2.profileData.practitioner.workingAddress, " ");
} }
function ProfileComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Szakter\u00FClet: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.profileData == null ? null : ctx_r3.profileData.practitioner == null ? null : ctx_r3.profileData.practitioner.specialization, " ");
} }
class ProfileComponent {
    constructor(router, userProfileService, tokenService, toastr) {
        this.router = router;
        this.userProfileService = userProfileService;
        this.tokenService = tokenService;
        this.toastr = toastr;
        this.username = this.tokenService.getUserName();
        this.isPractitioner = false;
        this.preFilePath = 'https://s3.us-east-2.amazonaws.com/onlinehealthcaresystem/';
    }
    ngOnInit() {
        this.getProfile();
        this.isPractitioner = this.tokenService.IsPractitioner();
    }
    getProfile() {
        this.profileData = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userProfileService.getProfileDetails(this.username)
            .subscribe(data => {
            this.profileData = data;
            this.preFilePath = this.preFilePath + this.username + "/" + this.profileData.patient.picture;
        }, err => {
            this.toastr.error('Nem létezik a felhasználó', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            console.log(err);
        });
    }
    updateProfile() {
        this.router.navigate(['profile/update']);
    }
    updatePassword() {
        this.router.navigate(['profile/password-update']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 45, vars: 10, consts: [[1, "container"], [1, "example-card"], [3, "src", 4, "ngIf"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-info", 2, "margin-right", "10px", 3, "click"], [3, "src"], ["src", "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profil adatok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_img_7_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_img_8_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u00E9v: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Felhaszn\u00E1l\u00F3n\u00E9v: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sz\u00FClet\u00E9si d\u00E1tum: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lakc\u00EDm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Telefonsz\u00E1m: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_div_39_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileComponent_div_40_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_41_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "M\u00F3dos\u00EDt\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_43_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jelsz\u00F3 megv\u00E1ltoztat\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.picture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.picture));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.dateOfBorn, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.patient == null ? null : ctx.profileData.patient.phoneNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPractitioner);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["img[_ngcontent-%COMP%]{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n  margin-bottom: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"] }, { type: _service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dto_update_password_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dto/update-password-dto */ "./src/app/dto/update-password-dto.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function ResetPasswordComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Minimum ", _r1.errors.minlength.requiredLength, " karakter hossz\u00FAs\u00E1g\u00FA legyen! ");
} }
function ResetPasswordComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_12_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_12_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.pattern);
} }
function ResetPasswordComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hib\u00E1s jelsz\u00F3ism\u00E9tl\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(authService, router, activatedRoute, toastr) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetPassword();
    }
    resetPassword() {
        this.authService.resetPassword(this.activatedRoute.snapshot.url[1].path).subscribe(data => {
        }, error => {
        });
    }
    onSubmit() {
        this.authService.updatePassword(this.activatedRoute.snapshot.url[1].path, new _dto_update_password_dto__WEBPACK_IMPORTED_MODULE_1__["UpdatePasswordDto"](this.password)).subscribe(data => {
            this.toastr.success('Sikeres jelszómódosítás!', 'OK', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.router.navigate(['/login']);
        }, error => {
            this.toastr.error('Sikertelen jelszómódosítás!', 'Hiba!', {
                timeOut: 3000, positionClass: 'toast-top-center',
            });
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 24, vars: 5, consts: [[1, "container"], [2, "width", "100%", "max-width", "400px"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "minlength", "8", "maxlength", "30", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordError", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["align", "start"], ["type", "password", "id", "password_repeat", "name", "password_repeat", "required", "", 1, "form-control", 3, "pattern", "ngModel", "ngModelChange"], ["cpass", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["color", "primary", "mat-raised-button", ""], [1, "far", "fa-save"], [1, "alert", "alert-danger"], [4, "ngIf"], [1, "text-danger"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jelsz\u00F3 m\u00F3dos\u00EDt\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00DAj Jelsz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResetPasswordComponent_div_12_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Minimum 8, maximum 30 karakter hossz\u00FA, tartalmazzon sz\u00E1mokat kis \u00E9s nagybet\u0171ket.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Jelsz\u00F3 ism\u00E9tl\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_18_listener($event) { return ctx.confirmpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ResetPasswordComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " M\u00F3dos\u00EDt\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_5__["MainNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return [{ type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/admin-dashboard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/admin-dashboard.service.ts ***!
  \****************************************************/
/*! exports provided: AdminDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardService", function() { return AdminDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AdminDashboardService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.dashboardURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dashboardURL;
    }
    getAllPatient() {
        return this.httpClient.get(this.dashboardURL + 'patients');
    }
    getPatientById(id) {
        return this.httpClient.get(this.dashboardURL + 'patients/details/' + id);
    }
    updatePatient(id, practitioner) {
        return this.httpClient.put(this.dashboardURL + 'patients/update/' + id, practitioner);
    }
    upgradeToPractitioner(id) {
        return this.httpClient.get(this.dashboardURL + 'patients/upgrade-to-practitioner/' + id);
    }
    downgradeToPatient(id) {
        return this.httpClient.get(this.dashboardURL + 'practitioner/downgrade-to-patient/' + id);
    }
    deletePatient(id) {
        return this.httpClient.delete(this.dashboardURL + 'patients/delete/' + id);
    }
    getAllPractitioner() {
        return this.httpClient.get(this.dashboardURL + 'practitioners');
    }
}
AdminDashboardService.ɵfac = function AdminDashboardService_Factory(t) { return new (t || AdminDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminDashboardService, factory: AdminDashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/appointment.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/appointment.service.ts ***!
  \************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AppointmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.appointmentURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appointmentURL;
    }
    getAllPractitionerExceptMe(name) {
        return this.httpClient.get(this.appointmentURL + 'schedule-practitioners/' + name);
    }
    updatePractitioner(username, practitionerId) {
        return this.httpClient.put(this.appointmentURL + 'update-practitioner/' + username, practitionerId);
    }
    saveAppointment(username, appointment) {
        return this.httpClient.post(this.appointmentURL + 'create/' + username, appointment);
    }
    getAppointments(username) {
        return this.httpClient.get(this.appointmentURL + 'show/' + username);
    }
    showAppointmentsForInstruction(username) {
        return this.httpClient.get(this.appointmentURL + 'show-appointments-for-instruction/' + username);
    }
    getOthersAppointments(username) {
        return this.httpClient.get(this.appointmentURL + 'show-others-appointments/' + username);
    }
    deleteAppointment(id) {
        return this.httpClient.delete(this.appointmentURL + 'delete/' + id);
    }
    setBusinessHours(username, worktimes) {
        return this.httpClient.put(this.appointmentURL + 'set-business-hours/' + username, worktimes);
    }
    getBusinessHours(username) {
        return this.httpClient.get(this.appointmentURL + 'get-business-hours/' + username);
    }
    myPractitionerWorkingTime(username) {
        return this.httpClient.get(this.appointmentURL + 'my-practitioner-working-time/' + username);
    }
    setWorksOnHolidays(username, worksOnHoliday) {
        return this.httpClient.post(this.appointmentURL + 'works-on-holidays/' + username, worksOnHoliday);
    }
    getHolidayWorksForWorktimeSettings(username) {
        return this.httpClient.get(this.appointmentURL + 'works-on-holidays/' + username);
    }
    getWorksOnHolidays(username) {
        return this.httpClient.get(this.appointmentURL + 'my-practitioner-works-on-holidays/' + username);
    }
}
AppointmentService.ɵfac = function AppointmentService_Factory(t) { return new (t || AppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppointmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppointmentService, factory: AppointmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].authURL;
    }
    addUser(newUser) {
        return this.httpClient.post(this.authURL + 'registration', newUser);
    }
    login(loginUser) {
        return this.httpClient.post(this.authURL + 'login', loginUser);
    }
    refresh(dto) {
        return this.httpClient.post(this.authURL + 'refresh', dto);
    }
    forgotPassword(email) {
        return this.httpClient.post(this.authURL + 'forgot-password', email);
    }
    resetPassword(code) {
        return this.httpClient.get(this.authURL + 'reset-password/' + code);
    }
    updatePassword(code, password) {
        return this.httpClient.post(this.authURL + 'update-password/' + code, password);
    }
    activation(code) {
        return this.httpClient.get(this.authURL + 'activation/' + code);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/practitioner-dashboard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/practitioner-dashboard.service.ts ***!
  \***********************************************************/
/*! exports provided: PractitionerDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PractitionerDashboardService", function() { return PractitionerDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PractitionerDashboardService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.dashboardURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].practitionerDashboardURL;
    }
    getAllClient(practitionerUsername) {
        return this.httpClient.get(this.dashboardURL + 'show-my-clients/' + practitionerUsername);
    }
    /*
    public updatePatient(id: number, practitioner: User): Observable<User>{
      return this.httpClient.put<User>(this.dashboardURL+'patients/update/' + id, practitioner);
    }
    */
    deleteAppointment(id) {
        return this.httpClient.delete(this.dashboardURL + 'clients/delete-appointment/' + id);
    }
}
PractitionerDashboardService.ɵfac = function PractitionerDashboardService_Factory(t) { return new (t || PractitionerDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PractitionerDashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PractitionerDashboardService, factory: PractitionerDashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PractitionerDashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const TOKEN_KEY = 'AuthToken';
class TokenService {
    constructor(router) {
        this.router = router;
        this.roles = [];
    }
    setToken(token) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }
    isLogged() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
    getUserName() {
        if (!this.isLogged()) {
            return null;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const username = values.sub;
        return username;
    }
    IsAdmin() {
        if (!this.isLogged()) {
            return false;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const roles = values.roles;
        if (roles.indexOf('ROLE_ADMIN') < 0) {
            return false;
        }
        return true;
    }
    IsPractitioner() {
        if (!this.isLogged()) {
            return false;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const roles = values.roles;
        if (roles.indexOf('ROLE_PRACTITIONER') < 0) {
            return false;
        }
        return true;
    }
    IsPatient() {
        if (!this.isLogged()) {
            return false;
        }
        const token = this.getToken();
        const payload = token.split('.')[1];
        const payloadDecoded = atob(payload);
        const values = JSON.parse(payloadDecoded);
        const roles = values.roles;
        if (roles.indexOf('ROLE_PATIENT') < 0) {
            return false;
        }
        return true;
    }
    logOut() {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/upload-file.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/upload-file.service.ts ***!
  \************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class UploadFileService {
    constructor(https) {
        this.https = https;
        this.patientURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].patientURL;
    }
    pushFileToStorageMine(username, file) {
        const data = new FormData();
        data.append('file', file);
        const newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.patientURL + 'uploadFile/' + username, data, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.https.request(newRequest);
    }
    deleteFileFromStorage(username, filename) {
        const newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', this.patientURL + 'deleteFile/' + username, filename, {
            responseType: 'text'
        });
        return this.https.request(newRequest);
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/user-profile.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/user-profile.service.ts ***!
  \*************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.patientURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].patientURL;
    }
    getProfileDetails(username) {
        return this.httpClient.get(this.patientURL + 'details/' + username);
    }
    updateProfile(username, profile) {
        return this.httpClient.put(this.patientURL + 'update/' + username, profile);
    }
    updatePassword(username, password) {
        return this.httpClient.put(this.patientURL + 'password-update/' + username, password);
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    authURL: "http://localhost:8080/auth/",
    patientURL: "http://localhost:8080/api/profile/",
    dashboardURL: "http://localhost:8080/api/dashboard/",
    appointmentURL: "http://localhost:8080/api/appointment/",
    practitionerDashboardURL: "http://localhost:8080/api/practitioner-dashboard/"
    // ng build --prod
    /*   authURL: "https://onlinehealthcaresystem.herokuapp.com/auth/",
       patientURL: "https://onlinehealthcaresystem.herokuapp.com/api/profile/",
       dashboardURL : "https://onlinehealthcaresystem.herokuapp.com/api/dashboard/",
       appointmentURL: "https://onlinehealthcaresystem.herokuapp.com/api/appointment/",
       practitionerDashboardURL: "https://onlinehealthcaresystem.herokuapp.com/api/practitioner-dashboard/"*/
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\twead\Documents\workspace-spring-tool-suite-4-4.3.2.RELEASE\szakdolgozat-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map