webpackJsonp([10],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthcontainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthcontainPage = /** @class */ (function () {
    function AuthcontainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuthcontainPage.prototype.ionViewDidLoad = function () {
    };
    AuthcontainPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    AuthcontainPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AuthcontainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authcontain',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/authcontain/authcontain.html"*/'<ion-content padding>\n   <div class="outer">\n      <div class="middle">\n         <div class="inner">\n            <button ion-button full (click)="gotoSignup()">New user</button>\n            <button ion-button full (click)="gotoLogin()">Already registered</button>\n         </div>\n      </div>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/authcontain/authcontain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AuthcontainPage);
    return AuthcontainPage;
}());

//# sourceMappingURL=authcontain.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsProvider = /** @class */ (function () {
    function EventsProvider(db) {
        this.db = db;
        this.eventListRef = db.collection('events');
    }
    EventsProvider.prototype.createEvent = function (name, sdate, ehost, eloc, edec) {
        var id = this.db.createId();
        var item = {
            id: id,
            name: name,
            sdate: sdate,
            ehost: ehost,
            eloc: eloc,
            edec: edec
        };
        return this.eventListRef.doc(id).set(item);
    };
    EventsProvider.prototype.getEventList = function () {
        return this.eventListRef;
    };
    EventsProvider.prototype.getEventDetail = function (eventId) {
        return this.eventListRef.doc(eventId);
    };
    EventsProvider.prototype.deleteAEvent = function (id) {
        return this.eventListRef.doc(id).delete();
    };
    EventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], EventsProvider);
    return EventsProvider;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesProvider = /** @class */ (function () {
    function NotesProvider(storage, db) {
        this.storage = storage;
        this.db = db;
        this.filesListRef = db.collection('files');
    }
    NotesProvider.prototype.uploadFile = function (id, path, uploader, uploadTime, url, fname) {
        var item = {
            id: id,
            path: path,
            uploader: uploader,
            date: uploadTime.toString(),
            download_url: url,
            fname: fname
        };
        return this.filesListRef.doc(id).set(item);
    };
    NotesProvider.prototype.getFilesList = function () {
        return this.filesListRef;
    };
    NotesProvider.prototype.getFileById = function (fileId) {
        return this.filesListRef.doc(fileId);
    };
    NotesProvider.prototype.deleteFileById = function (path, id) {
        var _this = this;
        var fileRef = this.storage.ref(id);
        return fileRef.delete().subscribe(function () {
            _this.filesListRef.doc(path).delete().then(function () {
            }).catch(function (err) {
            });
        }, function (err) {
        });
    };
    NotesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], NotesProvider);
    return NotesProvider;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    AuthProvider.prototype.loginUser = function (newEmail, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword)];
                    case 1:
                        ref = _a.sent();
                        return [2 /*return*/, ref];
                }
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.signupUser = function (newEmail, newPassword, role) {
        return __awaiter(this, void 0, void 0, function () {
            var person;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword)];
                    case 1:
                        person = _a.sent();
                        return [2 /*return*/, this.setPersonRecord(person, role)];
                }
            });
        });
    };
    AuthProvider.prototype.setPersonRecord = function (person, role) {
        var personRef = this.afs.doc("people/" + person.user.uid);
        var data = {
            uid: person.user.uid,
            appid: person.user.email || person.user.usn,
            role: role
        };
        return personRef.set(data);
    };
    AuthProvider.prototype.getPersonRecord = function (id) {
        return this.afs.collection('people').doc(id).valueChanges();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddeventPage = /** @class */ (function () {
    function AddeventPage(navParams, alCtrl, loadingCtrl, formBuilder, eventP, navCtrl) {
        this.navParams = navParams;
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.eventP = eventP;
        this.navCtrl = navCtrl;
        this.user = this.navParams.data;
        this.event_form = this.formBuilder.group({
            'eventName': ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3),
                ]],
            'startDate': ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ],
            'desc': ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ],
            'location': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'host': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    Object.defineProperty(AddeventPage.prototype, "g_EventName", {
        get: function () {
            return this.event_form.get('eventName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeventPage.prototype, "g_StartDate", {
        get: function () {
            return this.event_form.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeventPage.prototype, "g_EventHost", {
        get: function () {
            return this.event_form.get('host');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeventPage.prototype, "g_EventLocation", {
        get: function () {
            return this.event_form.get('location');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddeventPage.prototype, "g_EventDec", {
        get: function () {
            return this.event_form.get('desc');
        },
        enumerable: true,
        configurable: true
    });
    AddeventPage.prototype.add_event = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var name = this.g_EventName.value;
        var sdate = this.g_StartDate.value;
        var ehost = this.g_EventHost.value;
        var eloc = this.g_EventLocation.value;
        var edec = this.g_EventDec.value;
        this.eventP.createEvent(name, sdate, ehost, eloc, edec).then(function () {
            loading.dismiss();
            _this.showAlert("Success", "You event has been published!");
        }).catch(function (errs) {
            loading.dismiss();
            _this.showAlert("Failure", errs.message);
        });
    };
    AddeventPage.prototype.deleteEvent = function (id) {
        this.eventP.deleteAEvent(id).then(function (res) {
        }).catch(function (err) {
        });
    };
    AddeventPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AddeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addevent',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/addevent/addevent.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Add Event</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div text-wrap>\n      <form  [formGroup]="event_form" (ngSubmit)="add_event()">\n      <ion-list>\n         <ion-item>\n            <ion-label stacked>Event Name</ion-label>\n            <ion-input type="text"  formControlName="eventName" [class.invalid]="!event_form.controls[\'eventName\'].valid &&\n               event_form.controls[\'eventName\'].touched"></ion-input>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!event_form.controls[\'eventName\'].valid &&\n            event_form.controls[\'eventName\'].touched">\n            <p class="error-message">Please enter a valid event name.</p>\n         </ion-item>\n         <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" formControlName="startDate" [class.invalid]="!event_form.controls[\'startDate\'].valid &&\n               event_form.controls[\'startDate\'].touched"></ion-datetime>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!event_form.controls[\'startDate\'].valid &&\n            event_form.controls[\'startDate\'].touched">\n            <p class="error-message">Please enter a event start date.</p>\n         </ion-item>\n         <ion-item>\n            <ion-label stacked>Host</ion-label>\n            <ion-input type="text"  formControlName="host" [class.invalid]="!event_form.controls[\'host\'].valid &&\n               event_form.controls[\'host\'].touched"></ion-input>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!event_form.controls[\'host\'].valid &&\n            event_form.controls[\'host\'].touched">\n            <p class="error-message">Please enter a event host.</p>\n         </ion-item>\n         <ion-item>\n            <ion-label stacked>Location</ion-label>\n            <ion-input type="text" formControlName="location" [class.invalid]="!event_form.controls[\'location\'].valid &&\n               event_form.controls[\'location\'].touched"></ion-input>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!event_form.controls[\'location\'].valid &&\n            event_form.controls[\'location\'].touched">\n            <p class="error-message">Please enter a event location.</p>\n         </ion-item>\n         <ion-item>\n            <ion-textarea placeholder="Enter a description" formControlName="desc" [class.invalid]="!event_form.controls[\'desc\'].valid &&\n               event_form.controls[\'desc\'].touched"></ion-textarea>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!event_form.controls[\'desc\'].valid &&\n            event_form.controls[\'desc\'].touched">\n            <p class="error-message">Please enter a event description.</p>\n         </ion-item>\n         <br/>\n         <button color="prime2" block ion-button type="submit" [disabled]="!event_form.valid" >Publish Event</button>\n      </ion-list>\n      </form>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/addevent/addevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AddeventPage);
    return AddeventPage;
}());

//# sourceMappingURL=addevent.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_file_size_file_size__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddnotesPage = /** @class */ (function () {
    function AddnotesPage(fs, db, navCtrl, storage, fileh, formBuilder) {
        this.fs = fs;
        this.db = db;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fileh = fileh;
        this.formBuilder = formBuilder;
        this.person = "kiran";
        this.notes_form = this.formBuilder.group({
            'uploader': ['', [
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(3),
                ]],
            'semester': ['',
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required
            ],
            'subject': ['', [
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required
                ]
            ],
            'priority': ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required]
        });
    }
    AddnotesPage.prototype.startUpload = function (event) {
        var _this = this;
        var file = event.item(0);
        var path = "notes/" + new Date().getTime() + "_" + file.name;
        var customMetadata = { uploader: this.person, upload_time: new Date().getTime().toString() };
        var fileRef = this.storage.ref(path);
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        this.percentage = this.task.percentageChanges();
        var id = this.db.createId();
        this.snapshot = this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () {
            var fileR = _this.storage.ref(path);
            fileR.getDownloadURL().subscribe(function (url) {
                var d = new Date();
                _this.fileh.uploadFile(id, path, _this.g_uploader.value, d.toISOString(), url, file.name);
            });
        }));
    };
    AddnotesPage.prototype.isActive = function (snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    };
    Object.defineProperty(AddnotesPage.prototype, "g_uploader", {
        get: function () {
            return this.notes_form.get('uploader');
        },
        enumerable: true,
        configurable: true
    });
    AddnotesPage.prototype.getFS = function (param) {
        return this.fs.transform(param, false);
    };
    AddnotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addnotes',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/addnotes/addnotes.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title >Add Notes</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <ion-list text-wrap>\n      <form  [formGroup]="notes_form" (ngSubmit)="add_event()">\n      <ion-list>\n         <ion-item>\n            <ion-label stacked>Uploader</ion-label>\n            <ion-input type="text"  formControlName="uploader" [class.invalid]="!notes_form.controls[\'uploader\'].valid &&\n               notes_form.controls[\'uploader\'].touched"></ion-input>\n         </ion-item>\n         <ion-item class="error-message" *ngIf="!notes_form.controls[\'uploader\'].valid &&\n            notes_form.controls[\'uploader\'].touched">\n            <p class="error-message">Please enter a valid name.</p>\n         </ion-item>\n      </ion-list>\n      </form>\n   </ion-list>\n   <ion-list no-lines text-wrap >\n      <ion-item >\n         <p>Select a file to upload</p>\n      </ion-item>\n      <ion-item text-center>\n         <input (change)="startUpload($event.target.files)"  type="file" >\n      </ion-item>\n      <ion-item style="display: block;" text-center>\n         <div *ngIf="percentage | async as pct">\n            <progress class="progress is-info" [value]="pct"   max="100" style="width: 90%;">  </progress>\n            {{ pct | number }}% <br/>\n         </div>\n         <div *ngIf="snapshot | async as snap"> {{ getFS(snap.bytesTransferred) }} of {{ getFS(snap.totalBytes) }}</div>\n      </ion-item>\n      <ion-row text-center *ngIf="snapshot | async as snap">\n         <ion-col col-4>\n            <button ion-button (click)="task.pause()" class="button is-warning" [disabled]="!isActive(snap)">Pause</button>\n         </ion-col>\n         <ion-col col-4>\n            <button ion-button (click)="task.cancel()" class="button is-danger" [disabled]="!isActive(snap)">Cancel</button>\n         </ion-col>\n         <ion-col col-4>\n            <button ion-button (click)="task.resume()" class="button is-info"   [disabled]="!(snap?.state === \'paused\')">Resume</button>\n         </ion-col>\n      </ion-row>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/addnotes/addnotes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__pipes_file_size_file_size__["a" /* FileSizePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__pipes_file_size_file_size__["a" /* FileSizePipe */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__["a" /* NotesProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
    ], AddnotesPage);
    return AddnotesPage;
}());

//# sourceMappingURL=addnotes.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(authData, alCtrl, loadingCtrl, navCtrl, navParams, formBuilder) {
        this.authData = authData;
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.form_type = 'sign_up';
        this.signin_toggle = false;
        this.signin_for = 'Student';
        this.signup_toggle = false;
        this.signup_for = 'Student';
        this.student_form = this.formBuilder.group({
            'usn': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    SignupPage.prototype.signin_change = function (val) {
        this.signin_for = val ? 'Faculty' : 'Student';
    };
    SignupPage.prototype.signup_change = function (val) {
        this.signup_for = val ? 'Faculty' : 'Student';
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiginSignupPage');
    };
    Object.defineProperty(SignupPage.prototype, "faculty_email", {
        get: function () {
            return this.faculty_form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupPage.prototype, "faculty_password", {
        get: function () {
            return this.faculty_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupPage.prototype, "student_usn", {
        get: function () {
            return this.student_form.get('usn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupPage.prototype, "student_password", {
        get: function () {
            return this.student_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupPage.prototype.student_signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.signupUser(this.student_usn.value + "app@app.com", this.student_password.value, "student").then(function (data) {
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered. Please Sign In to use the app.');
        }).catch(function (errs) {
            loading.dismiss();
            _this.showAlert('SignUpFailed', errs.message);
        });
    };
    SignupPage.prototype.faculty_signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.signupUser(this.faculty_email.value, this.faculty_password.value, "faculty").then(function (data) {
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered. Please Sign In to use the app.');
        }).catch(function (errs) {
            loading.dismiss();
            _this.showAlert('SignUp Failed', errs.message);
        });
    };
    SignupPage.prototype.student_signin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.loginUser(this.student_usn.value + "app@app.com", this.student_password.value).then(function (data) {
            _this.authData.getPersonRecord(data["user"]["uid"]).subscribe(function (data) {
                loading.dismiss();
                _this.showAlert('SignIn Success', 'You have been logged in.');
                _this.navCtrl.setRoot('MenuPage', { user: data });
            });
        }).catch(function (err) {
            loading.dismiss();
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    SignupPage.prototype.faculty_signin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.loginUser(this.faculty_email.value, this.faculty_password.value).then(function (data) {
            _this.authData.getPersonRecord(data["user"]["uid"]).subscribe(function (data) {
                loading.dismiss();
                _this.showAlert('SignIn Success', 'You have been logged in.');
                _this.navCtrl.setRoot('MenuPage', { user: data });
            });
        }).catch(function (err) {
            loading.dismiss();
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    SignupPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/signup/signup.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>Sign Up</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="container"  text-wrap [ngSwitch]="form_type">\n      <div class="form-container">\n         <div class="signin" *ngSwitchCase="\'sign_up\'">\n            <ion-item no-lines>\n               <ion-label>Role </ion-label>\n               <ion-select [(ngModel)]="signin_toggle">\n               <ion-option value="false">Student</ion-option>\n               <ion-option value="true">Faculty</ion-option>\n               </ion-select>\n            </ion-item>\n            <div *ngIf="signin_toggle==false">\n               <form  [formGroup]="student_form" (ngSubmit)="student_signup()">\n               <ion-item no-lines>\n                  <ion-label  floating>Usn</ion-label>\n                  <ion-input formControlName="usn" type="usn"\n                     [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                     student_form.controls[\'usn\'].touched"></ion-input>\n               </ion-item>\n               <div class="f-height">\n                  <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'usn\'].valid &&\n                     student_form.controls[\'usn\'].touched">\n                     <p class="error-message">Please enter a valid usn address.</p>\n                  </ion-item>\n               </div>\n               <ion-item no-lines>\n                  <ion-label  floating>Password</ion-label>\n                  <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                     student_form.controls[\'password\'].touched"></ion-input>\n               </ion-item>\n               <div class="f-height">\n                  <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'password\'].valid\n                     && student_form.controls[\'password\'].touched">\n                     <p class="error-message">Your password needs more than 6 characters.</p>\n                  </ion-item>\n               </div>\n               <div padding>\n                  <button ion-button color="primary" type="submit" [disabled]="!faculty_form.valid" > Sign Up </button>\n               </div>\n               </form>\n            </div>\n            <div *ngIf="signin_toggle">\n               <form *ngSwitchCase="\'sign_up\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signup()">\n               <ion-item no-lines>\n                  <ion-label  floating>Email</ion-label>\n                  <ion-input formControlName="email" type="email"\n                     [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                     faculty_form.controls[\'email\'].touched"></ion-input>\n               </ion-item>\n               <div class="f-height">\n                  <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'email\'].valid &&\n                     faculty_form.controls[\'email\'].touched">\n                     <p class="error-message">Please enter a valid email address.</p>\n                  </ion-item>\n               </div>\n               <ion-item no-lines>\n                  <ion-label  floating>Password</ion-label>\n                  <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                     faculty_form.controls[\'password\'].touched"></ion-input>\n               </ion-item>\n               <div class="f-height">\n                  <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'password\'].valid\n                     && faculty_form.controls[\'password\'].touched">\n                     <p class="error-message">Your password needs more than 6 characters.</p>\n                  </ion-item>\n               </div>\n               <div padding>\n                  <button color="primary" ion-button type="submit" [disabled]="!faculty_form.valid" > Sign Up </button>\n               </div>\n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(app, authData, alCtrl, loadingCtrl, navCtrl, navParams, formBuilder) {
        this.app = app;
        this.authData = authData;
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.form_type = 'sign_in';
        this.signin_toggle = false;
        this.signin_for = 'Student';
        this.signup_toggle = false;
        this.signup_for = 'Student';
        this.student_form = this.formBuilder.group({
            'usn': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    LoginPage.prototype.signin_change = function (val) {
        this.signin_for = val ? 'Faculty' : 'Student';
    };
    LoginPage.prototype.signup_change = function (val) {
        this.signup_for = val ? 'Faculty' : 'Student';
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiginSignupPage');
    };
    Object.defineProperty(LoginPage.prototype, "faculty_email", {
        // Using getters will make your code look pretty
        get: function () {
            return this.faculty_form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "faculty_password", {
        get: function () {
            return this.faculty_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "student_usn", {
        get: function () {
            return this.student_form.get('usn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "student_password", {
        get: function () {
            return this.student_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.student_signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.student_usn.value, this.student_password.value);
        loading.present();
        this.authData.signupUser(this.student_usn.value + "app@app.com", this.student_password.value, "student").then(function (data) {
            console.log("reg success ", data);
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered.');
            _this.form_type = 'sign_in';
        }).catch(function (errs) {
            console.log("reg fail ", errs);
            loading.dismiss();
            _this.showAlert('SignUpFailed', errs.message);
        });
    };
    LoginPage.prototype.faculty_signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.faculty_email.value, this.faculty_password.value);
        loading.present();
        this.authData.signupUser(this.faculty_email.value, this.faculty_password.value, "student").then(function (data) {
            console.log("reg success ", data);
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered.');
            _this.form_type = 'sign_in';
        }).catch(function (errs) {
            loading.dismiss();
            console.log("reg fail ", errs);
            _this.showAlert('SignUp Failed', errs.message);
        });
    };
    LoginPage.prototype.student_signin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.loginUser(this.student_usn.value + "app@app.com", this.student_password.value).then(function (data) {
            console.log("login success: ", data);
            _this.authData.getPersonRecord(data["user"]["uid"]).subscribe(function (data) {
                console.log("data to send: ", data);
                loading.dismiss();
                _this.showAlert('SignIn Success', 'You have been logged in.');
                if (data)
                    _this.app.getRootNavs()[0].setRoot('MenuPage', { user: data });
                else
                    _this.showAlert('SignIn Failed', 'Please check your internet connection.');
            });
        }).catch(function (err) {
            loading.dismiss();
            console.log("login fail: ", err);
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    LoginPage.prototype.faculty_signin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authData.loginUser(this.faculty_email.value, this.faculty_password.value).then(function (data) {
            console.log("login success: ", data);
            _this.authData.getPersonRecord(data["user"]["uid"]).subscribe(function (data) {
                loading.dismiss();
                _this.showAlert('SignIn Success', 'You have been logged in.');
                if (data)
                    _this.app.getRootNavs()[0].setRoot('MenuPage', { user: data });
                else
                    _this.showAlert('SignIn Failed', 'Please check your internet connection.');
            });
        }).catch(function (err) {
            console.log("login fail: ", err);
            loading.dismiss();
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    LoginPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content >\n\n  <div class="container"  [ngSwitch]="form_type">\n    <div text-wrap>\n      <div>\n        <br/>\n        <div class="signin" *ngSwitchCase="\'sign_in\'">\n           <ion-item no-lines>\n             <ion-label>Role </ion-label>\n              <ion-select [(ngModel)]="signin_toggle">\n      <ion-option value="false">Student</ion-option>\n      <ion-option value="true">Faculty</ion-option>\n    </ion-select>\n           </ion-item>\n           <div *ngIf="signin_toggle==false">\n              <form  [formGroup]="student_form" (ngSubmit)="student_signin()">\n              <ion-item no-lines>\n                 <ion-label  floating>USN</ion-label>\n                 <ion-input formControlName="usn" type="usn"\n                    [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                    student_form.controls[\'usn\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'usn\'].valid &&\n                   student_form.controls[\'usn\'].touched">\n                   <p class="error-message">Please enter a valid usn address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                    student_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'password\'].valid\n                   && student_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button ion-button color="primary" type="submit" > Sign in </button>\n              </div>\n              </form>\n           </div>\n           <div *ngIf="signin_toggle">\n              <form *ngSwitchCase="\'sign_in\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signin()">\n              <ion-item no-lines>\n                 <ion-label  floating>Email</ion-label>\n                 <ion-input formControlName="email" type="email"\n                    [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                    faculty_form.controls[\'email\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'email\'].valid &&\n                   faculty_form.controls[\'email\'].touched">\n                   <p class="error-message">Please enter a valid email address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                    faculty_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'password\'].valid\n                   && faculty_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button color="primary" ion-button type="submit" > Sign in </button>\n              </div>\n              </form>\n           </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventcontainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addevent_addevent__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventcontainPage = /** @class */ (function () {
    function EventcontainPage(alCtrl, loadingCtrl, toastCtrl, navCtrl, navParams, eventP) {
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventP = eventP;
        this.eventList = [];
    }
    EventcontainPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.data;
        this.user = this.navParams.get('user');
    };
    EventcontainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.eventP.getEventList().valueChanges().subscribe(function (list) {
            _this.eventList = list;
            loading.dismiss();
        });
    };
    EventcontainPage.prototype.deleteEvent = function (id) {
        this.eventP.deleteAEvent(id).then(function (res) {
        }).catch(function (err) {
        });
    };
    EventcontainPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    EventcontainPage.prototype.gotoAddEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addevent_addevent__["a" /* AddeventPage */]);
    };
    EventcontainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventcontain',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/eventcontain/eventcontain.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Events</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <button *ngIf="user?.role==\'faculty\'" ion-button full (click)="gotoAddEvent()">Add event <br/>\n   <hr/>\n   </button>\n   <br/>\n   <ion-list *ngIf="!eventList?.length > 0">\n      <ion-item>No events are in list.</ion-item>\n   </ion-list>\n   <ion-list>\n      <ion-item *ngFor="let event of eventList" text-wrap>\n         <h2>Event: {{event?.name}}</h2>\n         <p>Host: {{event?.ehost}}</p>\n         <p>Date: {{event?.sdate}} </p>\n         <p>Location: {{event?.eloc}}</p>\n         <p>{{event?.edec}}</p>\n         <button *ngIf="user?.role==\'faculty\'" ion-button (click)="deleteEvent(event.id)">\n         <ion-icon name="md-trash"></ion-icon>\n         Delete</button>\n      </ion-item>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/eventcontain/eventcontain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */]])
    ], EventcontainPage);
    return EventcontainPage;
}());

//# sourceMappingURL=eventcontain.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacultiesPage = /** @class */ (function () {
    function FacultiesPage(loadingCtrl, navCtrl, navParams, httpClient) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.initializeData();
    }
    FacultiesPage.prototype.initializeData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.httpClient.get('assets/json/faculties.json').subscribe(function (data) {
            _this.faculties = data;
            _this.temp = data;
            loading.dismiss();
        });
    };
    FacultiesPage.prototype.ionViewDidLoad = function () {
        this.initializeData();
    };
    FacultiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faculties',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/faculties/faculties.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Faculties</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n   <ion-list>\n      <ion-item text-wrap *ngFor="let faculty of faculties">\n         <ion-avatar item-start>\n            <img [src]="faculty.avatar"  onError="this.src=\'assets/imgs/default.jpg\'">\n         </ion-avatar>\n         <h2>{{faculty.first_name}} {{faculty.last_name}}</h2>\n         <p  *ngFor="let bioi of faculty?.bio">{{bioi}}&nbsp;</p>\n      </ion-item>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/faculties/faculties.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FacultiesPage);
    return FacultiesPage;
}());

//# sourceMappingURL=faculties.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryPage = /** @class */ (function () {
    function LibraryPage(loadingCtrl, httpClient, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.books = [];
        this.bookName = '';
    }
    LibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryPage');
    };
    LibraryPage.prototype.searchBooks = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=' + this.bookName).subscribe(function (data) {
            _this.books = data['items'];
            loading.dismiss();
        });
    };
    LibraryPage.prototype.newMethod = function () {
        return this.books;
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/library/library.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Library</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item padding>\n    <ion-label>Book Name: </ion-label>\n    <ion-input type="text" required [(ngModel)]=\'bookName\'></ion-input>\n  </ion-item>\n  <div padding>\n    <button full ion-button (click)="searchBooks()">Search Books</button>\n  </div>\n  <ion-list *ngIf="books">\n    <h3 >&nbsp;&nbsp;Search results </h3>\n    <ion-list *ngIf="!books?.length > 0">\n      <ion-item>No results are in list.</ion-item>\n    </ion-list>\n    <ion-item *ngFor="let book of books">\n      <span text-wrap>Name: {{book.volumeInfo.title}}</span><br/>\n      <p *ngFor="let author of book.volumeInfo.authors">{{author}}, </p>\n      <p>{{book.volumeInfo.description}}</p>\n      <br/>\n      <p *ngFor="let isb of book.volumeInfo.industryIdentifiers">{{isb.type}} {{isb.identifier}}</p>\n      <a [href]="book.volumeInfo.previewLink" target="_blank"><button ion-button>Preview</button></a>\n      <a [href]="book.saleInfo.buyLink" target="_blank"><button ion-button [disabled]="!book.saleInfo.buyLink">Buy</button></a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotescontainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addnotes_addnotes__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotescontainPage = /** @class */ (function () {
    function NotescontainPage(loadingCtrl, navCtrl, navParams, fileh) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileh = fileh;
        this.getFilesList();
    }
    NotescontainPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
    };
    NotescontainPage.prototype.getFilesList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.fileh.getFilesList().valueChanges().subscribe(function (data) {
            _this.files = data;
            _this.files2 = data;
            console.log(data);
            loading.dismiss();
        });
    };
    NotescontainPage.prototype.deleteFile = function (path, file) {
        this.fileh.deleteFileById(path, file);
    };
    NotescontainPage.prototype.gotoAddNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addnotes_addnotes__["a" /* AddnotesPage */]);
    };
    NotescontainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notescontain',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/notescontain/notescontain.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title >Notes</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <button *ngIf="user?.role==\'faculty\'" full ion-button (click)="gotoAddNotes()">Add notes</button>\n   <hr/>\n   <br/>\n   <ion-list *ngIf="!files?.length > 0">\n      <ion-item>No notes are in list.</ion-item>\n   </ion-list>\n   <ion-list>\n      <ion-item *ngFor="let file of files" text-wrap>\n         <h2>Notes name: {{file.fname}}</h2>\n         <p>Uploded at {{file.date | date: \'dd/MM/yy\'}} </p>\n         <a [href]="file.download_url" target="_blank"><button ion-button >Download</button></a>\n         <a><button  *ngIf="user?.role==\'faculty\'"  ion-button (click)="deleteFile(file.id,file.path)" [disabled]="user?.role==\'student\'"> Delete</button></a>\n      </ion-item>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/notescontain/notescontain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */]])
    ], NotescontainPage);
    return NotescontainPage;
}());

//# sourceMappingURL=notescontain.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_students_students__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsPage = /** @class */ (function () {
    function StudentsPage(loadingCtrl, studP, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.studP = studP;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.students = [];
    }
    StudentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.studP.getStudentsList().valueChanges().subscribe(function (data) {
            _this.users = data;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i]['role'] == 'student')
                    _this.students.push(_this.users[i]);
            }
            loading.dismiss();
        });
    };
    StudentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-students',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/students/students.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Students</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <ion-list *ngIf="!students?.length > 0">\n      <ion-item>No students are in list.</ion-item>\n   </ion-list>\n   <ion-list>\n      <ion-item *ngFor="let student of students">\n         Login: {{student?.appid}}<br/>\n         Role: Student\n      </ion-item>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/students/students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_students_students__["a" /* StudentsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], StudentsPage);
    return StudentsPage;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 243:
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
webpackEmptyAsyncContext.id = 243;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addevent/addevent.module": [
		612,
		9
	],
	"../pages/addnotes/addnotes.module": [
		613,
		8
	],
	"../pages/authcontain/authcontain.module": [
		614,
		7
	],
	"../pages/eventcontain/eventcontain.module": [
		615,
		6
	],
	"../pages/faculties/faculties.module": [
		616,
		5
	],
	"../pages/library/library.module": [
		617,
		4
	],
	"../pages/login/login.module": [
		618,
		3
	],
	"../pages/menu/menu.module": [
		305
	],
	"../pages/notescontain/notescontain.module": [
		619,
		2
	],
	"../pages/signup/signup.module": [
		620,
		1
	],
	"../pages/students/students.module": [
		621,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 285;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (sizeInBytes, longForm) {
        var units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        var size = sizeInBytes / Math.pow(1024, power); // size in new units
        var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        var unit = units[power];
        return size ? formattedSize + " " + unit : '0';
    };
    FileSizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'fileSize',
        })
    ], FileSizePipe);
    return FileSizePipe;
}());

//# sourceMappingURL=file-size.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(583);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsProvider = /** @class */ (function () {
    function StudentsProvider(db) {
        this.db = db;
        this.studentListRef = db.collection('people');
    }
    StudentsProvider.prototype.getStudentsList = function () {
        return this.studentListRef;
    };
    StudentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], StudentsProvider);
    return StudentsProvider;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_fire_conf__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_file_size_file_size__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_notes_notes__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_events_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_students_students__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_library_library__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_authcontain_authcontain__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_eventcontain_eventcontain__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_faculties_faculties__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_library_library__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_menu_menu_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_notescontain_notescontain__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_students_students__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_addnotes_addnotes__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_addevent_addevent__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //import























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_11__pipes_file_size_file_size__["a" /* FileSizePipe */],
                __WEBPACK_IMPORTED_MODULE_18__pages_authcontain_authcontain__["a" /* AuthcontainPage */], __WEBPACK_IMPORTED_MODULE_19__pages_eventcontain_eventcontain__["a" /* EventcontainPage */], __WEBPACK_IMPORTED_MODULE_20__pages_faculties_faculties__["a" /* FacultiesPage */], __WEBPACK_IMPORTED_MODULE_21__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notescontain_notescontain__["a" /* NotescontainPage */], __WEBPACK_IMPORTED_MODULE_24__pages_students_students__["a" /* StudentsPage */], __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_27__pages_addnotes_addnotes__["a" /* AddnotesPage */], __WEBPACK_IMPORTED_MODULE_28__pages_addevent_addevent__["a" /* AddeventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addevent/addevent.module#AddeventPageModule', name: 'AddeventPage', segment: 'addevent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addnotes/addnotes.module#AddnotesPageModule', name: 'AddnotesPage', segment: 'addnotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authcontain/authcontain.module#AuthcontainPageModule', name: 'AuthcontainPage', segment: 'authcontain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventcontain/eventcontain.module#EventcontainPageModule', name: 'EventcontainPage', segment: 'eventcontain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculties/faculties.module#FacultiesPageModule', name: 'FacultiesPage', segment: 'faculties', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notescontain/notescontain.module#NotescontainPageModule', name: 'NotescontainPage', segment: 'notescontain', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/students/students.module#StudentsPageModule', name: 'StudentsPage', segment: 'students', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__providers_fire_conf__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_22__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["AngularFireStorageModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_authcontain_authcontain__["a" /* AuthcontainPage */], __WEBPACK_IMPORTED_MODULE_19__pages_eventcontain_eventcontain__["a" /* EventcontainPage */], __WEBPACK_IMPORTED_MODULE_20__pages_faculties_faculties__["a" /* FacultiesPage */], __WEBPACK_IMPORTED_MODULE_21__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_notescontain_notescontain__["a" /* NotescontainPage */], __WEBPACK_IMPORTED_MODULE_24__pages_students_students__["a" /* StudentsPage */], __WEBPACK_IMPORTED_MODULE_25__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_27__pages_addnotes_addnotes__["a" /* AddnotesPage */], __WEBPACK_IMPORTED_MODULE_28__pages_addevent_addevent__["a" /* AddeventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_notes_notes__["a" /* NotesProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_events_events__["a" /* EventsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_students_students__["a" /* StudentsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_library_library__["a" /* LibraryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authcontain_authcontain__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventcontain_eventcontain__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faculties_faculties__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_library__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notescontain_notescontain__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuPage = /** @class */ (function () {
    function MenuPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__notescontain_notescontain__["a" /* NotescontainPage */];
        console.log(this.navParams.get('role'));
        this.pages = [
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_3__eventcontain_eventcontain__["a" /* EventcontainPage */], icon: 'ios-calendar-outline' },
            { title: 'Library', component: __WEBPACK_IMPORTED_MODULE_5__library_library__["a" /* LibraryPage */], icon: 'ios-glasses-outline' },
            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_6__notescontain_notescontain__["a" /* NotescontainPage */], icon: 'ios-albums-outline' },
            { title: 'Faculties', component: __WEBPACK_IMPORTED_MODULE_4__faculties_faculties__["a" /* FacultiesPage */], icon: 'ios-school-outline' },
            { title: 'Students', component: __WEBPACK_IMPORTED_MODULE_7__students_students__["a" /* StudentsPage */], icon: 'ios-ionitron-outline' },
            { title: 'Log out', component: '', icon: 'ios-power-outline' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        this.user = this.navParams.get('user');
        console.log(this.user);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__eventcontain_eventcontain__["a" /* EventcontainPage */], { user: this.navParams.get('user') });
    };
    MenuPage.prototype.openPage = function (page) {
        if (page.title == 'Log out')
            this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_2__authcontain_authcontain__["a" /* AuthcontainPage */]);
        else
            this.nav.setRoot(page.component, { user: this.navParams.get('user') });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/pages/menu/menu.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="menu" padding>\n    <ion-list>\n      <ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        {{page.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBdOzFSeugY3GGpOmZgMPzoPiDYLvFSsFk",
    authDomain: "prod-rym-portal.firebaseapp.com",
    databaseURL: "https://prod-rym-portal.firebaseio.com",
    projectId: "prod-rym-portal",
    storageBucket: "prod-rym-portal.appspot.com",
    messagingSenderId: "361644599288"
};
//# sourceMappingURL=fire.conf.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_authcontain_authcontain__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_authcontain_authcontain__["a" /* AuthcontainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sk/vtu-19-projects/RymPortal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/RymPortal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LibraryProvider = /** @class */ (function () {
    function LibraryProvider(http) {
        this.http = http;
    }
    LibraryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LibraryProvider);
    return LibraryProvider;
}());

//# sourceMappingURL=library.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map