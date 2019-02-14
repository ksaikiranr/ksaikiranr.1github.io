webpackJsonp([15],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(47);
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


/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EventsProvider = /** @class */ (function () {
    function EventsProvider(db) {
        this.db = db;
        this.eventListRef = db.collection('events');
        console.log('Hello EventsProvider Provider');
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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(142);
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
    NotesProvider.prototype.uploadFile = function (id, path, uploader, uploadTime, prioriy, url, fname, sem, sub) {
        var item = {
            id: id,
            path: path,
            uploader: uploader,
            date: uploadTime.toString(),
            download_url: url,
            fname: fname,
            priority: prioriy,
            sub: sub,
            sem: sem
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/tabs/tabs.html"*/'<ion-tabs color="dblue">\n\n  <ion-tab [root]="tab1Root" tabTitle="Sign In" tabIcon="log-in"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sign Up" tabIcon="person-add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        this.user = this.navParams.get('user');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <br/>\n  <ion-card padding>\n    <h2 text-center><span>&nbsp;User Details&nbsp;</span></h2><br/>\n    <ion-row>\n      <ion-col col-4><p>Login:</p></ion-col>\n      <ion-col col-8><p>{{user?.appid}}</p></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4><p>Role:</p></ion-col>\n      <ion-col col-8><p>{{user?.role}}</p></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4><p>Registered:</p></ion-col>\n      <ion-col col-8><p>{{user?.created_on | moment: \'jsd\'}}</p></ion-col>\n    </ion-row>\n  </ion-card>\n  <br/>\n  <div class="heading">\n    <h3>&nbsp;User Guide&nbsp;</h3>\n  </div>\n  <br/>\n  <ion-card>\n    <div class="container">\n      <div class="events">\n        <img  src="assets/imgs/events.jpg" alt="Snow" style="width:100%;">\n      </div>\n     <div class="centered"><h1>Events</h1></div>\n    </div>\n    <ol>\n      <li><p>View event listing.</p></li>\n      <li><p>Get live event updates without refresh.</p></li>\n      <li><p>Countdown of event relative to present.</p></li>\n      <li><p>Add events to event list with form validation. <em>[Faculty only]</em></p></li>\n      <li><p>Delete event from events listing by left swipe. <em>[Faculty only]</em></p></li>\n    </ol>\n  </ion-card>\n  <br/>\n  <ion-card>\n    <div class="container">\n      <div class="notes">\n        <img  src="assets/imgs/notes.jpg" alt="Snow" style="width:100%;">\n      </div>\n     <div class="centered"><h1>Notes</h1></div>\n    </div>\n    <ol>\n      <li><p>View notes listing.</p></li>\n      <li><p>Get live notes updates without refresh.</p></li>\n      <li><p>All file formats are allowed as notes.</p></li>\n      <li><p>Search notes by name from notes listing.</p></li>\n      <li><p>Download notes from notes listing.</p></li>\n      <li><p>Add notes to notes list with form validation. <em>[Faculty only]</em></p></li>\n      <li><p>Delete notes from notes listing. <em>[Faculty only]</em></p></li>\n    </ol>\n  </ion-card>\n  <br/>\n\n  <ion-card>\n    <div class="container">\n      <div class="notes">\n        <img  src="assets/imgs/library.jpg" alt="Snow" style="width:100%;">\n      </div>\n     <div class="centered"><h1>Library</h1></div>\n    </div>\n    <ol>\n      <li><p>A search engine for books.</p></li>\n      <li><p>List books from any category with search filters.</p></li>\n      <li><p>Metadata of books. Ex: Name, Authors, Publishers etc.</p></li>\n      <li><p>Read books online.</p></li>\n    </ol>\n  </ion-card>\n\n  <ion-card>\n    <div class="container">\n      <div class="notes">\n        <img  src="assets/imgs/teachers.jpg" alt="Snow" style="width:100%;">\n      </div>\n     <div class="centered"><h1>Faculties</h1></div>\n    </div>\n    <ol>\n      <li><p>Get list of RYMEC faculties.</p></li>\n      <li><p>Search for faculty by name.</p></li>\n      <li><p>Faculty information. Ex: Qualification, Work experience etc.</p></li>\n      <li><p>Data mined from RYMEC official website.</p></li>\n    </ol>\n  </ion-card>\n  <br/>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsAddPage = /** @class */ (function () {
    function EventsAddPage(navParams, alCtrl, loadingCtrl, formBuilder, eventP, navCtrl) {
        this.navParams = navParams;
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.eventP = eventP;
        this.navCtrl = navCtrl;
        this.user = this.navParams.data;
        this.event_form = this.formBuilder.group({
            'eventName': ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3),
                ]],
            'startDate': ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ],
            'desc': ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ],
            'location': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            'host': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
    }
    Object.defineProperty(EventsAddPage.prototype, "g_EventName", {
        get: function () {
            return this.event_form.get('eventName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventsAddPage.prototype, "g_StartDate", {
        get: function () {
            return this.event_form.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventsAddPage.prototype, "g_EventHost", {
        get: function () {
            return this.event_form.get('host');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventsAddPage.prototype, "g_EventLocation", {
        get: function () {
            return this.event_form.get('location');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventsAddPage.prototype, "g_EventDec", {
        get: function () {
            return this.event_form.get('desc');
        },
        enumerable: true,
        configurable: true
    });
    EventsAddPage.prototype.add_event = function () {
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
    EventsAddPage.prototype.deleteEvent = function (id) {
        this.eventP.deleteAEvent(id).then(function (res) {
        }).catch(function (err) {
        });
    };
    EventsAddPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    EventsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-add',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/events-add/events-add.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <br/>\n\n  <ion-card class="notify" *ngIf="user.role!=\'faculty\'">\n    <h3 text-center>Only faculties can publish events!</h3>\n    <h4 padding>If you wish to publish an event, contact faculty incharge and request them to do the same.</h4>\n  </ion-card>\n  <ion-card text-wrap *ngIf="user.role==\'faculty\'">\n    <ion-card-content>\n      <form  [formGroup]="event_form" (ngSubmit)="add_event()">\n        <ion-list>\n\n          <ion-item>\n            <ion-label stacked>Event Name</ion-label>\n            <ion-input type="text"  formControlName="eventName" [class.invalid]="!event_form.controls[\'eventName\'].valid &&\n               event_form.controls[\'eventName\'].touched"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'eventName\'].valid &&\n             event_form.controls[\'eventName\'].touched">\n             <p class="error-message">Please enter a valid event name.</p>\n          </ion-item>\n\n          <ion-item>\n             <ion-label>Start Date</ion-label>\n             <ion-datetime displayFormat="DD/MM/YYYY" formControlName="startDate" [class.invalid]="!event_form.controls[\'startDate\'].valid &&\n                event_form.controls[\'startDate\'].touched"></ion-datetime>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'startDate\'].valid &&\n             event_form.controls[\'startDate\'].touched">\n             <p class="error-message">Please enter a event start date.</p>\n          </ion-item>\n\n          <!--<ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" formControlName="startDate" [class.invalid]="!event_form.controls[\'startDate\'].valid &&\n               event_form.controls[\'startDate\'].touched"></ion-datetime>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'startDate\'].valid &&\n             event_form.controls[\'startDate\'].touched">\n             <p class="error-message">Please enter a event start date.</p>\n          </ion-item>-->\n\n          <!--<ion-item>\n            <ion-label>End Date</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" formControlName="endDate" [class.invalid]="!event_form.controls[\'endDate\'].valid &&\n               event_form.controls[\'endDate\'].touched"></ion-datetime>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'endDate\'].valid &&\n             event_form.controls[\'endDate\'].touched">\n             <p class="error-message">Please enter a event end date.</p>\n          </ion-item>-->\n\n          <ion-item>\n            <ion-label stacked>Host</ion-label>\n            <ion-input type="text"  formControlName="host" [class.invalid]="!event_form.controls[\'host\'].valid &&\n               event_form.controls[\'host\'].touched"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'host\'].valid &&\n             event_form.controls[\'host\'].touched">\n             <p class="error-message">Please enter a event host.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Location</ion-label>\n            <ion-input type="text" formControlName="location" [class.invalid]="!event_form.controls[\'location\'].valid &&\n               event_form.controls[\'location\'].touched"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'location\'].valid &&\n             event_form.controls[\'location\'].touched">\n             <p class="error-message">Please enter a event location.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-textarea placeholder="Enter a description" formControlName="desc" [class.invalid]="!event_form.controls[\'desc\'].valid &&\n               event_form.controls[\'desc\'].touched"></ion-textarea>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!event_form.controls[\'desc\'].valid &&\n             event_form.controls[\'desc\'].touched">\n             <p class="error-message">Please enter a event description.</p>\n          </ion-item>\n          <br/>\n            <button color="prime2" block ion-button type="submit" [disabled]="!event_form.valid" >Publish Event</button>\n            <button block color="danger" type="reset" ion-button>Clear</button>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/events-add/events-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], EventsAddPage);
    return EventsAddPage;
}());

/*
  user: any;
  event_form: FormGroup;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventDescription: string;
  eventLocation: string;
  eventHost: string;
  constructor(public navParams: NavParams,public alCtrl: AlertController, public loadingCtrl: LoadingController,public formBuilder: FormBuilder,private eventP: EventsProvider,public navCtrl: NavController) {
    this.user = this.navParams.data;
    this.eventHost = 'Kiran';
    this.event_form = this.formBuilder.group({
     'eventName': ['', [
      Validators.required,
      Validators.minLength(3),
     ]],
     'startDate': ['',
      Validators.required
     ],
     'endDate': ['',
       Validators.required
    ],
     'desc': ['',
       Validators.required
     ],
     'location':['',Validators.required],
     'host': ['',Validators.required]
    });
  }

  ionViewWillEnter(){
  }
  get g_EventName(){
    return this.event_form.get('eventName');
  }
  get g_StartDate(){
    return this.event_form.get('startDate');
  }
  get g_EndDate(){
    return this.event_form.get('endDate');
  }
  get g_EventHost(){
    return this.event_form.get('host');
  }
  get g_EventLocation(){
    return this.event_form.get('location');
  }
  get g_EventDec(){
    return this.event_form.get('desc');
  }


  add_event() {
    let loading = this.loadingCtrl.create({
       content: 'Publishing your event. \nPlease wait...'
     });
     loading.present();
    let name = this.g_EventName.value;
    let sdate = this.g_StartDate.value;
    let edate = this.g_EndDate.value;
    let ehost = this.g_EventHost.value;
    let eloc = this.g_EventLocation.value;
    let edec = this.g_EventDec.value;
    console.log(sdate);

    this.eventP.createEvent(name,sdate,edate,ehost,eloc,edec).then(() => {
      loading.dismiss();
      console.log("done");
      this.showAlert("Success","You event has been published!");
      //this.eventName = this.eventDate = this.eventHost = '';
    }).catch( errs => {
      console.log(errs);
      loading.dismiss();
      this.showAlert("Failure",errs.message)
  });
  }
  deleteEvent(id){
  console.log(id);
  this.eventP.deleteAEvent(id).then( res => {
    console.log(res);
  }).catch( err =>{
    console.log(err);
  })
  }
  showAlert(header, msg) {
   const alert = this.alCtrl.create({
    title: header,
    subTitle: msg,
    buttons: ['OK']
   });
   alert.present();
  }
}*/
//# sourceMappingURL=events-add.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsViewPage = /** @class */ (function () {
    function EventsViewPage(alCtrl, loadingCtrl, toastCtrl, navCtrl, navParams, eventP) {
        this.alCtrl = alCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventP = eventP;
        this.searchTerm = '';
        this.searching = false;
        this.user = this.navParams.data;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        console.log(this.user);
    }
    EventsViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        var toast = this.toastCtrl.create({
            message: 'Events were loaded successfully',
            duration: 3000,
            position: 'middle',
            cssClass: "toastClass",
        });
        this.eventP.getEventList().valueChanges().subscribe(function (list) {
            _this.eventList = list;
            _this.eventList2 = list;
            console.log(_this.eventList);
            loading.dismiss();
            toast.present();
            _this.searchControl.valueChanges.subscribe(function (search) {
                _this.searching = false;
                _this.setFilteredItems();
            });
        });
        console.log(this.eventList);
    };
    EventsViewPage.prototype.deleteEvent = function (id) {
        var _this = this;
        console.log(id);
        this.eventP.deleteAEvent(id).then(function (res) {
            //this.showAlert("Success","Event delete success")
            var toastS = _this.toastCtrl.create({
                message: 'Event deleted successfully',
                duration: 3000,
                position: 'middle',
                cssClass: "toastClass",
            });
            toastS.present();
            console.log(res);
        }).catch(function (err) {
            //this.showAlert("Failed",err.message)
            var toastF = _this.toastCtrl.create({
                message: err.message,
                duration: 3000,
                position: 'middle',
                cssClass: "toastClass",
            });
            console.log(err);
        });
    };
    EventsViewPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    EventsViewPage.prototype.filterItems = function (searchTerm) {
        return this.eventList.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    EventsViewPage.prototype.setFilteredItems = function () {
        this.eventList = this.eventList2;
        this.eventList = this.filterItems(this.searchTerm);
    };
    EventsViewPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    EventsViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-view',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/events-view/events-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Published Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <br/>\n  <div class="library-logo">\n    <img src="assets/imgs/list.svg" />\n  </div>\n  <ion-searchbar  [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n\n    <ion-card tappable *ngFor="let event of eventList" text-wrap class="box">\n      <ion-card-content>\n        <ion-list>\n          <div class="ribbon">\n            <div class="ribbon-top-right">\n              <span>{{event?.sdate | moment: \'q\'}}</span>\n            </div>\n          </div>\n        <h2 text-center>{{event?.name}}</h2>\n        <ion-item-sliding #item>\n          <ion-item>\n            <p class="desc">{{event?.edec}}</p>\n            <ion-row>\n              <ion-col col-4>\n                <ion-icon name="ios-man-outline" item-start></ion-icon><p>{{event?.ehost}}</p>\n              </ion-col>\n              <ion-col col-4>\n                <ion-icon name="ios-timer-outline" item-start></ion-icon><p>{{event?.sdate}} - {{event?.edate}}</p>\n              </ion-col>\n              <ion-col col-4>\n                <ion-icon name="ios-pin-outline" item-start></ion-icon><p>{{event?.eloc}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n          <ion-item-options side="right">\n               <button [disabled]="user.role==\'student\'" ion-button color="danger" (click)="deleteEvent(event.id)">  <ion-icon name="md-trash"></ion-icon>Delete</button>\n             </ion-item-options>\n\n        </ion-item-sliding>\n        </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/events-view/events-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */]])
    ], EventsViewPage);
    return EventsViewPage;
}());

//# sourceMappingURL=events-view.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_view_events_view__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_add_events_add__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navP) {
        this.navP = navP;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__events_view_events_view__["a" /* EventsViewPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__events_add_events_add__["a" /* EventsAddPage */];
        this.user = this.navP.get('user');
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
        this.user = this.navP.get('user');
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/events/events.html"*/'<ion-tabs class="graident">\n<ion-tab [root]="tab1Root"  [rootParams]="user" tabTitle="View Events" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="tab2Root"  [rootParams]="user" tabTitle="Add Events" tabIcon="create"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FacultyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacultyDetailPage = /** @class */ (function () {
    function FacultyDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workHistroy = false;
        this.confHistroy = false;
        this.groups = false;
        this.faculty = this.navParams.get('data');
        console.log(this.faculty);
        /*this.faculty = {
           "name":"Dr.T.Hanumantha Reddy",
           "bio": ["Professor & HOD","BE, M.Tech , Ph.D"],
           "about_url":"http://rymec.in/index.php/faculty/146-dr-t-hanumantha-reddy",
           "image_url":"http://rymec.in/media/com_mtree/images/listings/s/88.jpg",
           "history":[
              "Worked as Lecturer @ Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary from 1995 to 2000",
              "Worked as Assistant Professor @ Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary from 2000 to 2008.",
              "Working as Professor @ Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary from 2008 to Till date.",
              "Worked as Head of the Department, Computer Science and Engineering, RYMEC, Bellary from 1999-2005 Successfully accredited CSE course for 3 years accreditation in the year 2005 from 2005-2008.",
              "Worked as Head of the Department, Master of Computer Applications, RYMEC, Bellary from 2006 to November 2010.",
              "Worked as Head of the Department,CSE Research centre & Computer Science and Engineering, RYMEC, Bellary December 2010 to March 2012.",
              "Worked as Principal RYMEC, Bellary 19th May 2012 to 19th May 2014.",
              "Working as Vice Principal and Head of the department  CSE Dean  Exam and Training 19th May 2014 to till date.",
              "BOE Member of M.C.A. Board, V.T.U. Belgaum from 2006 to 2009, 2010-2011.",
              "BOS Member for MCA board of V.T.U. Belgaum from 2010 to 2013.",
              "BOE Member of CSE board of VTU, Belgaum from 2011-12.",
              "BOE Member of MCA board of VTU, Belgaum from 2012-13.",
              "BOE Member of CSE board of VTU, Belgaum from 2017-18."
           ],
           "conference":[
              "[1]  A Segmental 2-D HMM For Face Recognition Using Subspace analysis International Journal of Systemics, Cybernetics, and Informatics (IJSCI), April 2009, ISSN 0973-4864, pp. 30-37[2]  A Component based Face Detection Using Probabilistic Graph Method International Journal on Computer Engineering and Information Technology, Vol. 2(2), Spring Edition, 2009, pp. 42-55[3]  A SVM Based Face Recognition Using Radon-DCT Method, International Journal on Computer Engineering and Information Technology, Vol. 1(1), Nov-2008-Jan 2009, Spring Edition 2009, pp. 50-60[4]  A Probabilistic parser for Face detection, International Journal of Bioinformatics Research, Vol. 1(1), Jan-June 2009, Serial publications, ISSN 0975-3087, pp. 1-10[5]  Face detection using Modified FDA-SVM method International Journal of Machine Intelligence, Vol. 1(2), 2009, pp. 26-29[6]  Probabilistic Parser for Face Recognition Summer Edition, International Journal of Computer Engineering and Information Technology, pp 100-111, Vol 3(4), 2009, IJCEIT/SUMMER/2009/03/51[7]  Face Detection Using modified FDA-SVM Method Short paper accepted by IET NC on Signal and Image processing Applications, Pune, Sept 2009, pp. 88[8]  Proximal SVM for Face Recognition UGC Sponsored conference on Recent Trends in Information Technology, Mandya, Sept 2009, pp. 224-232[9] Object Tracking by Active Vision of an Autonomous Robot using Parallel Local Histogram IC on Cognition and Recognition, Mysore, Dec 2005, pp. 233-239[10]  Human face recognition by Cognitive model using Fuzzy distance method, IC on Cognition and Recognition, Mandya, April 2008, pp. 250-257[11] Probabilistic parser for face detection, IEEE IC on Models and methods in Computer science, JNU, Delhi, Dec 2009.[12]  Face Recognition Using Support Vector Machine (SVM) IC on communication, computation, management, and Nanotechnology, REC, Bhalki 2011[13]  Face recognition using proximal structural graph learning, IC on recent advances in mathematical sciences and applications, 19-22, December, 2009[14]  Face recognition using structural graph learning, International Conference on System Dynamics and control, pp. 19-22, MIT, Manipal, August 2010[15] Proximal SVM for face recognition, Journal of computational linguistics, Vol 1(1), pp 01-04, 2011[16]  Face recognition by self -organized feature map and linear discriminant Analysis using Gabor Wavelet Transform Coefficients Accepted for publication, International Research Journal of Engineering Science, Technology and Innovation (IRJESTI) Vol. 1(3), pp.xxx-xxx, June 2012[17]  Multi-view facial recognition using eigenfaces by PCA and artificial neural network, Journal of High performance computing, ISSN 2230-7192, pp 24-27 Vol 1, 2012[18]   Automated and Cost Effective Quality Analysis of Oryza Sativa L using image processing, 8th National Conference on Recent Trends in Computer Science & Engineering (NCRTCS)-2013, 4th May, 2013, Bangalore[19]  Erudition With Technology: Companionship Of India And Foreign Higher Educational Institutions, 40th ISTE National Annual Convention 2010, MEPCO Schlenk Engineering College, Sivakasi, Virudhunagar District, Tamilnadu[20] A training tool and methodology to allow concurrent multi disciplinary experimental projects in engineering education ISRASE First International conference on recent advances in science and engineering  2014, Ocotober 30-31 2014[21] Static hand finger actitivity recognition using hand shaper features to monitor elderly patients intentions, NC on recent innovations in ICTM, 2015, VTU Kalburgi, 21-22, MAY 2015[22] SURVEY ON PREDICTING THE CHARACTERISTICS OF PERSON BASED ON FACIAL FEATURES, IC on current Innovatins in Engineering and Technology, 2015[23] Facial expression recognition recognition from video sequence by using LPP RSVM method, IC on Innovations in computer science and information technology, MGIT, Hyderabad, 28-29, August 2015[24] k-Means clustering for document analysis in Indian Bilingual Documents, IEEE IC on Green Engineering and Technologies, 27 November 2015[25]  Altered finger print enhancement using SIFT points, International journal on Advance research in computer Engineering and Technology, May 2015[26] Hand Activity Recognition and classification of hand involved in the hand activity, International Journal on Human Machine Interaction [IJHMI], pp no 20-27, 2356-556X, 12, May 2015[27] Text Mining: An Improvised feature based model approach, Accepted Second IEEE International Conference on Applied and Theoretical Computing and Communication Technology, SJBIT, Bengaluru.[28] Cross fertilization for text analysis 104th ISC, 3-7 January 2017 at Thirupathi, AP[29] A natural approach to convey numerical digits using hand activity recognition based on hand shape features, 2017 the Second International Workshop on Pattern Recognition (IWPR 2017), May 1-3 2017"
           ],
           "groups":[
              "IFERP",
              "ISC",
              "ACM",
              "ISTE"
           ]
        };*/
    }
    FacultyDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacultyDetailPage');
    };
    FacultyDetailPage.prototype.changeWorkHistory = function () {
        this.workHistroy = !this.workHistroy;
    };
    FacultyDetailPage.prototype.changeConfHistory = function () {
        this.confHistroy = !this.confHistroy;
    };
    FacultyDetailPage.prototype.changeGroups = function () {
        this.groups = !this.groups;
    };
    FacultyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faculty-detail',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/faculty-detail/faculty-detail.html"*/'<!--\n  Generated template for the FacultyDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Faculty Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-wrap class="profile-contain">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <div class="image">\n            <img src="assets/imgs/faculties/{{faculty.name}}.jpg"  onError="this.src=\'assets/imgs/faculties/default.jpg\'"/>\n          </div>\n        </ion-col>\n        <ion-col col-7>\n          <div class="profile">\n            <h2>{{faculty.name}}</h2><br/>\n            <b><h3 text-wrap *ngFor="let bioi of faculty.bio">{{bioi}}&nbsp;</h3></b>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br/>\n\n  <button block ion-button  (click)="changeWorkHistory()" icon-end color="dblue">Work Experience\n    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n  </button>\n  <div class="work-history" *ngIf="workHistroy">\n    <ion-list text-wrap>\n      <ion-item *ngIf="!faculty.history"><p>This data is not aviable for {{faculty.name}}  in www.rymec.in <br/><br/> Update the website and contact app developer.</p></ion-item>\n      <ion-item *ngFor="let item of faculty.history"><p>{{item}}</p></ion-item>\n    </ion-list>\n  </div>\n  <br/>\n\n  <button block ion-button   (click)="changeConfHistory()" icon-end color="dblue">Technical Papers\n    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n</button>\n    <div class="conf-history" *ngIf="confHistroy">\n      <ion-list text-wrap>\n        <ion-item *ngIf="!faculty.conference"><p>This data is not aviable for {{faculty.name}}  in www.rymec.in <br/><br/> Update the website and contact app developer.</p></ion-item>\n        <ion-item *ngFor="let item of faculty.conference"><p>{{item}}</p></ion-item>\n      </ion-list>\n    </div>\n    <br/>\n\n    <button block ion-button   (click)="changeGroups()" icon-end color="dblue">Technical Groups\n      <ion-icon name="ios-arrow-down-outline"></ion-icon>\n</button>\n      <div class="conf-history" *ngIf="groups">\n        <ion-list text-wrap>\n          <ion-item *ngIf="!faculty.groups"><p>This data is not aviable for {{faculty.name}}  in www.rymec.in <br/><br/> Update the website and contact app developer.</p></ion-item>\n          <ion-item *ngFor="let item of faculty.groups"><p>{{item}}</p></ion-item>\n        </ion-list>\n      </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/faculty-detail/faculty-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FacultyDetailPage);
    return FacultyDetailPage;
}());

//# sourceMappingURL=faculty-detail.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faculty_detail_faculty_detail__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacultyListPage = /** @class */ (function () {
    function FacultyListPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.searchTerm = '';
        this.searching = false;
        this.initializeData();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    FacultyListPage.prototype.initializeData = function () {
        var _this = this;
        this.httpClient.get('assets/data_rym_faculty.json').subscribe(function (data) {
            console.log(data);
            _this.faculties = data;
            _this.temp = data;
        });
    };
    FacultyListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.initializeData();
        this.searchControl.valueChanges.subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    FacultyListPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    FacultyListPage.prototype.filterItems = function (searchTerm) {
        return this.temp.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    FacultyListPage.prototype.setFilteredItems = function () {
        this.faculties = this.filterItems(this.searchTerm);
    };
    FacultyListPage.prototype.showDetails = function (faculty) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__faculty_detail_faculty_detail__["a" /* FacultyDetailPage */], { "data": faculty });
    };
    FacultyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faculty-list',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/faculty-list/faculty-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Faculties</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="library-logo">\n    <img src="assets/imgs/rymec2.jpg" />\n  </div>\n    <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let faculty of faculties" (click)="showDetails(faculty)">\n      <ion-avatar item-start>\n        <img src="assets/imgs/faculties/{{faculty.name}}.jpg"  onError="this.src=\'assets/imgs/faculties/default.jpg\'">\n      </ion-avatar>\n      <h2>{{faculty.name}}</h2>\n      <p  *ngFor="let bioi of faculty?.bio">{{bioi}}&nbsp;</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/faculty-list/faculty-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FacultyListPage);
    return FacultyListPage;
}());

//# sourceMappingURL=faculty-list.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(89);
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
    function LibraryPage(modalCtrl, alertCtrl, loadingCtrl, httpClient, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.books = [];
        //this.searchTerm = 'C Programming';
        this.customize = false;
        this.orderBy = 'relevance';
        this.maxResults = 15;
    }
    LibraryPage.prototype.searchBooks = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=' + this.searchTerm + "&maxResults=" + this.maxResults + "&orderBy=" + this.orderBy).subscribe(function (data) {
            _this.books = data['items'];
            console.log(data);
            loading.dismiss();
        });
    };
    LibraryPage.prototype.modifyQuery = function () {
        this.customize = !this.customize;
    };
    LibraryPage.prototype.viewBook = function (book) {
        var modal = this.modalCtrl.create('BookInfoPage', { "data": book });
        modal.present();
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/library/library.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <br/>\n  <div class="library-logo">\n    <img src="assets/imgs/bookshelf.svg" />\n  </div>\n    <ion-searchbar placeholder="Book name..."[(ngModel)]="searchTerm" [formControl]="searchControl"></ion-searchbar>\n  <div class="row bt" padding>\n    <ion-col col-6><button full ion-button color="primary" icon-start (click)="modifyQuery()">Customize </button></ion-col>\n    <ion-col col-6><button [disabled]="!searchTerm" full ion-button color="primary" icon-start (click)="searchBooks()">Search</button></ion-col>\n  </div>\n  <ion-item *ngIf="customize">\n    <ion-label>Maximum Results</ion-label>\n    <ion-select [(ngModel)]="maxResults">\n      <ion-option value="15">15</ion-option>\n      <ion-option value="25">25</ion-option>\n      <ion-option value="35">35</ion-option>\n      <ion-option value="40">40</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf="customize">\n    <ion-label>Order by</ion-label>\n    <ion-select [(ngModel)]="orderBy">\n      <ion-option value="relevance">Relevance</ion-option>\n      <ion-option value="newest">Newest</ion-option>\n    </ion-select>\n  </ion-item>\n  <br/>\n  <hr/>\n  <div class="metrics" *ngIf="books.length">\n    <span>Found {{books.length}} books</span>\n  </div>\n  <ion-list *ngIf="books">\n    <ion-card  *ngFor="let book of books" text-wrap (click)="viewBook(book)">\n      <ion-item no-lines>\n        <ion-avatar item-start>\n          <img [src]="book.volumeInfo?.imageLinks?.thumbnail"  onError="this.src=\'assets/imgs/book.svg\'">\n        </ion-avatar>\n        <span >{{book.volumeInfo.title}}</span><br/>\n        <p><span *ngFor="let author of book.volumeInfo.authors">{{author}} </span></p>\n      </ion-item>\n      <ion-row>\n        <p *ngIf="book.volumeInfo.description" class="desc">{{book.volumeInfo.description}}</p>\n        <ion-badge item-right color="info" style="color: #fff;">{{book.volumeInfo.publisher}}</ion-badge>\n        <ion-badge item-right color="danger">{{book.volumeInfo.language}}</ion-badge>\n        <ion-badge item-right color="success">{{book.volumeInfo.pageCount}} pgs</ion-badge>\n        <ion-badge *ngFor="let tag of book.volumeInfo.categories">#{{tag}}</ion-badge>\n      </ion-row><br/>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(90);
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
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
            _this.authData.set_last_login(data["user"]["uid"]).then(function (data2) {
                _this.authData.getPersonRecord(data["user"]["uid"]).subscribe(function (data) {
                    console.log("data to send: ", data);
                    loading.dismiss();
                    _this.showAlert('SignIn Success', 'You have been logged in.');
                    _this.authData.isLoggedIn = true;
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
        }).catch(function (err) {
            loading.dismiss();
            console.log("catch 1");
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
                _this.authData.isLoggedIn = true;
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
            selector: 'page-login',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/login/login.html"*/'<ion-content padding>\n  <div class="container" [ngSwitch]="form_type">\n    <h2>Sign In</h2>\n    <div class="profile-icon">\n      <img src="assets/imgs/{{signin_for}}.svg" />\n    </div>\n    <div class="form-container"  text-wrap>\n      <div class="signin" *ngSwitchCase="\'sign_in\'">\n         <ion-item no-lines>\n            <ion-label class="type-user">{{signin_for}}</ion-label>\n            <ion-toggle color="gold" [(ngModel)]="signin_toggle" (ionChange)="signin_change(signin_toggle);"></ion-toggle>\n         </ion-item>\n         <div *ngIf="signin_toggle==false">\n            <form  [formGroup]="student_form" (ngSubmit)="student_signin()">\n            <ion-item no-lines>\n               <ion-label  inset>Usn</ion-label>\n               <ion-input formControlName="usn" type="usn"\n                  [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                  student_form.controls[\'usn\'].touched"></ion-input>\n            </ion-item>\n            <div class="f-height">\n              <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'usn\'].valid &&\n                 student_form.controls[\'usn\'].touched">\n                 <p class="error-message">Please enter a valid usn address.</p>\n              </ion-item>\n            </div>\n            <ion-item no-lines>\n               <ion-label  inset>Password</ion-label>\n               <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                  student_form.controls[\'password\'].touched"></ion-input>\n            </ion-item>\n            <div class="f-height">\n              <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'password\'].valid\n                 && student_form.controls[\'password\'].touched">\n                 <p class="error-message">Your password needs more than 6 characters.</p>\n              </ion-item>\n            </div>\n            <div padding>\n               <button ion-button color="primary" type="submit" full [disabled]="!student_form.valid"> Sign in </button>\n               <button ion-button type="reset" full color="danger2"> Clear </button>\n            </div>\n            </form>\n         </div>\n         <div *ngIf="signin_toggle">\n            <form *ngSwitchCase="\'sign_in\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signin()">\n            <ion-item no-lines>\n               <ion-label  inset>Email</ion-label>\n               <ion-input formControlName="email" type="email"\n                  [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                  faculty_form.controls[\'email\'].touched"></ion-input>\n            </ion-item>\n            <div class="f-height">\n              <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'email\'].valid &&\n                 faculty_form.controls[\'email\'].touched">\n                 <p class="error-message">Please enter a valid email address.</p>\n              </ion-item>\n            </div>\n            <ion-item no-lines>\n               <ion-label  inset>Password</ion-label>\n               <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                  faculty_form.controls[\'password\'].touched"></ion-input>\n            </ion-item>\n            <div class="f-height">\n              <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'password\'].valid\n                 && faculty_form.controls[\'password\'].touched">\n                 <p class="error-message">Your password needs more than 6 characters.</p>\n              </ion-item>\n            </div>\n            <div padding>\n               <button color="primary" ion-button type="submit" full [disabled]="!faculty_form.valid"> Sign in </button>\n               <button ion-button type="reset" full color="danger2"> Clear </button>\n            </div>\n            </form>\n         </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <!--\n  <div class="container"  [ngSwitch]="form_type">\n    <ion-card text-wrap>\n      <ion-card-header>Login</ion-card-header>\n      <ion-card-content>\n        <br/>\n        <div class="signin" *ngSwitchCase="\'sign_in\'">\n           <ion-item no-lines>\n              <ion-label>{{signin_for}}</ion-label>\n              <ion-toggle color="gold" [(ngModel)]="signin_toggle" (ionChange)="signin_change(signin_toggle);"></ion-toggle>\n           </ion-item>\n           <div *ngIf="signin_toggle==false">\n              <form  [formGroup]="student_form" (ngSubmit)="student_signin()">\n              <ion-item no-lines>\n                 <ion-label  inset>USN</ion-label>\n                 <ion-input formControlName="usn" type="usn"\n                    [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                    student_form.controls[\'usn\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'usn\'].valid &&\n                   student_form.controls[\'usn\'].touched">\n                   <p class="error-message">Please enter a valid usn address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  inset>Password</ion-label>\n                 <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                    student_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'password\'].valid\n                   && student_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button ion-button color="primary" type="submit" full [disabled]="!student_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger2"> Clear </button>\n              </div>\n              </form>\n           </div>\n           <div *ngIf="signin_toggle">\n              <form *ngSwitchCase="\'sign_in\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signin()">\n              <ion-item no-lines>\n                 <ion-label  inset>Email</ion-label>\n                 <ion-input formControlName="email" type="email"\n                    [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                    faculty_form.controls[\'email\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'email\'].valid &&\n                   faculty_form.controls[\'email\'].touched">\n                   <p class="error-message">Please enter a valid email address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  inset>Password</ion-label>\n                 <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                    faculty_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'password\'].valid\n                   && faculty_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button color="primary" ion-button type="submit" full [disabled]="!faculty_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger2"> Clear </button>\n              </div>\n              </form>\n           </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>-->\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes_view_notes_view__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_upload_notes_upload__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navP) {
        this.navCtrl = navCtrl;
        this.navP = navP;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__notes_upload_notes_upload__["a" /* NotesUploadPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__notes_view_notes_view__["a" /* NotesViewPage */];
        this.user = this.navP.get('user');
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
        this.user = this.navP.get('user');
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/notes/notes.html"*/'<ion-tabs class="graident">\n<ion-tab [root]="tab2Root" [rootParams]="user" tabTitle="View Notes" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="tab1Root" [rootParams]="user" tabTitle="Add Notes" tabIcon="create"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesViewPage = /** @class */ (function () {
    function NotesViewPage(alertCtrl, loadingCtrl, navCtrl, navParams, fileh) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileh = fileh;
        this.searchTerm = '';
        this.searching = false;
        this.semtr = 'all';
        this.user = this.navParams.data;
        console.log("notes view user", this.user);
        this.getFilesList();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    NotesViewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchControl.valueChanges.subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
        console.log('ionViewDidLoad NotesViewPage');
    };
    NotesViewPage.prototype.getFilesList = function () {
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
    NotesViewPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    NotesViewPage.prototype.filterItems = function (searchTerm) {
        return this.files2.filter(function (item) {
            return item.appid.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    NotesViewPage.prototype.setFilteredItems = function () {
        console.log(this.searchTerm, this.semtr);
        this.files = this.ffilterItems(this.searchTerm, this.semtr);
    };
    NotesViewPage.prototype.ffilterItems = function (searchTerm, filterType) {
        this.files = this.files2;
        var temp = (this.files.filter(function (item) {
            return (item.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }));
        if (filterType === "all") {
            console.log("In OE filter");
            return temp.filter(function (a) {
                return a;
            });
        }
        else if (filterType === "1") {
            console.log("In student filter");
            return temp.filter(function (a) {
                return a.sem === "1";
            });
        }
        else if (filterType === "2") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "2";
            });
        }
        else if (filterType === "3") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "3";
            });
        }
        else if (filterType === "4") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "4";
            });
        }
        else if (filterType === "5") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "5";
            });
        }
        else if (filterType === "6") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "6";
            });
        }
        else if (filterType === "7") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "7";
            });
        }
        else if (filterType === "8") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.sem === "8";
            });
        }
    };
    NotesViewPage.prototype.showSortRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Sort Type');
        var All, st1, st2, st3, st4, st5, st6, st7, st8;
        All = {
            type: 'radio',
            label: 'All',
            value: 'all',
        };
        st1 = {
            type: 'radio',
            label: '1st Sem',
            value: '1',
        };
        st2 = {
            type: 'radio',
            label: '2nd Sem',
            value: '2',
        };
        st3 = {
            type: 'radio',
            label: '3rd Sem',
            value: '3',
        };
        st4 = {
            type: 'radio',
            label: '4th Sem',
            value: '4',
        };
        st5 = {
            type: 'radio',
            label: '5th Sem',
            value: '5',
        };
        st6 = {
            type: 'radio',
            label: '6th Sem',
            value: '6',
        };
        st7 = {
            type: 'radio',
            label: '7th Sem',
            value: '7',
        };
        st8 = {
            type: 'radio',
            label: '8th Sem',
            value: '8',
        };
        alert.addInput(All);
        alert.addInput(st1);
        alert.addInput(st2);
        alert.addInput(st3);
        alert.addInput(st4);
        alert.addInput(st5);
        alert.addInput(st6);
        alert.addInput(st7);
        alert.addInput(st8);
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.semtr = data;
                console.log(_this.semtr);
                _this.setFilteredItems();
            }
        });
        alert.present();
    };
    NotesViewPage.prototype.deleteFile = function (path, file) {
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.fileh.deleteFileById(path, file);
        setTimeout(function () {
            loading.dismiss();
        }, 3000);
    };
    NotesViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes-view',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/notes-view/notes-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Published Notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <br/>\n  <div class="library-logo">\n    <img src="assets/imgs/studying.svg" />\n  </div>\n  <button ion-button float-left outline>{{files?.length}} notes</button>\n  <button ion-button (click)="showSortRadio()" color="primary" outline float-right>sem: {{semtr}} </button>\n\n  <ion-searchbar  [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n  <ion-card *ngFor="let file of files" text-wrap>\n    <ion-item>\n      <h2>{{file.fname}}</h2>\n      <p>@ {{file.date | date: \'dd/MM/yy hh:mm:ssa\'}} by {{file.uploader}}</p>\n    </ion-item>\n    <ion-row>\n      <ion-col col-6>\n        <a [href]="file.download_url" target="_blank"><button block  outline color="prime2" ion-button >download</button></a>\n      </ion-col>\n      <ion-col col-6>\n        <button [disabled]="user.role==\'student\'" ion-button block outline  color="danger" (click)="deleteFile(file.id,file.path)"> delete</button>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-badge item-right color="secondary">{{file.sem}}th</ion-badge>\n      <ion-badge item-right color="primary" style="color: #fff;">{{file.sub}}</ion-badge>\n      <ion-badge item-right color="danger">{{file.priority}}</ion-badge>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/notes-view/notes-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */]])
    ], NotesViewPage);
    return NotesViewPage;
}());

//# sourceMappingURL=notes-view.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotesUploadPage = /** @class */ (function () {
    function NotesUploadPage(db, navParams, navCtrl, storage, fileh, formBuilder) {
        this.db = db;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fileh = fileh;
        this.formBuilder = formBuilder;
        this.person = "kiran";
        this.user = this.navParams.data;
        this.notes_form = this.formBuilder.group({
            'uploader': ['', [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(3),
                ]],
            'semester': ['',
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required
            ],
            'subject': ['', [
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required
                ]
            ],
            'priority': ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required]
        });
    }
    NotesUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesUploadPage');
    };
    NotesUploadPage.prototype.startUpload = function (event) {
        var _this = this;
        var file = event.item(0);
        console.log(file.type.split('/')[0]);
        /*if (file.type.split('/')[0] !== 'image') {
          console.error('unsupported file type :( ')
          return;
        }*/
        var path = "notes/" + new Date().getTime() + "_" + file.name;
        var customMetadata = { uploader: this.person, upload_time: new Date().getTime().toString(), priority: 'low' };
        var fileRef = this.storage.ref(path);
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        this.percentage = this.task.percentageChanges();
        var id = this.db.createId();
        this.snapshot = this.task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () {
            var fileR = _this.storage.ref(path);
            fileR.getDownloadURL().subscribe(function (url) {
                console.log(url);
                var d = new Date();
                _this.fileh.uploadFile(id, path, _this.g_uploader.value, d.toISOString(), _this.g_priority.value, url, file.name, _this.g_semester.value, _this.g_subject.value);
            });
        }));
        console.log(this.snapshot);
    };
    NotesUploadPage.prototype.isActive = function (snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    };
    Object.defineProperty(NotesUploadPage.prototype, "g_uploader", {
        get: function () {
            return this.notes_form.get('uploader');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotesUploadPage.prototype, "g_subject", {
        get: function () {
            return this.notes_form.get('subject');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotesUploadPage.prototype, "g_semester", {
        get: function () {
            return this.notes_form.get('semester');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotesUploadPage.prototype, "g_priority", {
        get: function () {
            return this.notes_form.get('priority');
        },
        enumerable: true,
        configurable: true
    });
    NotesUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes-upload',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/notes-upload/notes-upload.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Add Notes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <br/>\n\n  <ion-card class="notify" *ngIf="user.role!=\'faculty\'">\n    <h3 text-center>Only faculties can publish notes!</h3>\n    <h4 padding>If you wish to publish notes, contact faculty incharge and request them to do the same.</h4>\n  </ion-card>\n\n  <ion-card text-wrap  *ngIf="user.role==\'faculty\'">\n    <ion-card-content>\n      <form  [formGroup]="notes_form" (ngSubmit)="add_event()">\n        <ion-list>\n\n          <ion-item>\n            <ion-label stacked>Uploader</ion-label>\n            <ion-input type="text"  formControlName="uploader" [class.invalid]="!notes_form.controls[\'uploader\'].valid &&\n               notes_form.controls[\'uploader\'].touched"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!notes_form.controls[\'uploader\'].valid &&\n             notes_form.controls[\'uploader\'].touched">\n             <p class="error-message">Please enter a valid name.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Semester</ion-label>\n            <ion-select formControlName="semester"  [class.invalid]="!notes_form.controls[\'semester\'].valid &&\n               notes_form.controls[\'semester\'].touched">\n                <ion-option value="1">1st Sem</ion-option>\n                <ion-option value="2">2nd Sem</ion-option>\n                <ion-option value="3">3rd Sem</ion-option>\n                <ion-option value="4">4th Sem</ion-option>\n                <ion-option value="5">5th Sem</ion-option>\n                <ion-option value="6">6th Sem</ion-option>\n                <ion-option value="7">7th Sem</ion-option>\n                <ion-option value="8">8th Sem</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!notes_form.controls[\'semester\'].valid &&\n             notes_form.controls[\'semester\'].touched">\n             <p class="error-message">Please select a semester.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Subject</ion-label>\n            <ion-input type="text"  formControlName="subject" [class.invalid]="!notes_form.controls[\'subject\'].valid &&\n               notes_form.controls[\'subject\'].touched"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!notes_form.controls[\'subject\'].valid &&\n             notes_form.controls[\'subject\'].touched">\n             <p class="error-message">Please enter a valid subject.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Priority</ion-label>\n            <ion-select formControlName="priority"  [class.invalid]="!notes_form.controls[\'priority\'].valid &&\n               notes_form.controls[\'priority\'].touched">\n                <ion-option value="Low">Low</ion-option>\n                <ion-option value="Medium">Medium</ion-option>\n                <ion-option value="Hight">High</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!notes_form.controls[\'semester\'].valid &&\n             notes_form.controls[\'semester\'].touched">\n             <p class="error-message">Please select a priority.</p>\n          </ion-item>\n\n          <br/>\n            <button block color="danger" type="reset" ion-button>Clear</button>\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card no-lines text-wrap  [ngClass]="(!notes_form.valid) ? \'opacitic-hide\' : \'\'">\n      <ion-item ><p>Select a PDF file to upload</p></ion-item>\n      <ion-item text-center>\n        <input (change)="startUpload($event.target.files)"  type="file" >\n      </ion-item>\n      <ion-item style="display: block;" text-center>\n          <div *ngIf="percentage | async as pct">\n          <progress class="progress is-info" [value]="pct"   max="100" style="width: 90%;">  </progress>\n          {{ pct | number }}% <br/>\n          </div>\n          <div *ngIf="snapshot | async as snap"> {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }}</div>\n      </ion-item>\n      <ion-row text-center *ngIf="snapshot | async as snap">\n        <ion-col col-4>\n          <button ion-button (click)="task.pause()" class="button is-warning" [disabled]="!isActive(snap)">Pause</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button (click)="task.cancel()" class="button is-danger" [disabled]="!isActive(snap)">Cancel</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button (click)="task.resume()" class="button is-info"   [disabled]="!(snap?.state === \'paused\')">Resume</button>\n        </ion-col>\n      </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/notes-upload/notes-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__["a" /* NotesProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], NotesUploadPage);
    return NotesUploadPage;
}());

//# sourceMappingURL=notes-upload.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_students_students__ = __webpack_require__(272);
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
    function StudentsPage(alertCtrl, loadingCtrl, navCtrl, navParams, fileh) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fileh = fileh;
        this.searchTerm = '';
        this.searching = false;
        this.role = 'all';
        this.getStudentsList();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
    }
    StudentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchControl.valueChanges.subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
        console.log('ionViewDidLoad NotesViewPage');
    };
    StudentsPage.prototype.getStudentsList = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        loading.present();
        this.fileh.getStudentsList().valueChanges().subscribe(function (data) {
            _this.students = data;
            _this.students2 = data;
            console.log(data);
            loading.dismiss();
        });
    };
    StudentsPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    StudentsPage.prototype.filterItems = function (searchTerm) {
        return this.students2.filter(function (item) {
            return item.appid.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    StudentsPage.prototype.setFilteredItems = function () {
        console.log(this.searchTerm, this.role);
        this.students = this.ffilterItems(this.searchTerm, this.role);
    };
    StudentsPage.prototype.ffilterItems = function (searchTerm, filterType) {
        this.students = this.students2;
        var temp = (this.students.filter(function (item) {
            return (item.role.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }));
        if (filterType === "all") {
            console.log("In OE filter");
            return temp.filter(function (a) {
                return a;
            });
        }
        else if (filterType === "student") {
            console.log("In student filter");
            return temp.filter(function (a) {
                return a.role === "student";
            });
        }
        else if (filterType === "faculty") {
            console.log("In faculty filter");
            return temp.filter(function (a) {
                return a.role === "faculty";
            });
        }
    };
    StudentsPage.prototype.showSortRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Sort Type');
        var All, Student, Faculty;
        All = {
            type: 'radio',
            label: 'All',
            value: 'all',
        };
        Student = {
            type: 'radio',
            label: 'Student',
            value: 'student',
        };
        Faculty = {
            type: 'radio',
            label: 'Faculty',
            value: 'faculty',
        };
        alert.addInput(All);
        alert.addInput(Student);
        alert.addInput(Faculty);
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.role = data;
                console.log(_this.role);
                _this.setFilteredItems();
            }
        });
        alert.present();
    };
    StudentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-students',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/students/students.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <br/>\n  <div class="library-logo">\n    <img src="assets/imgs/users.svg" />\n  </div>\n\n  <button ion-button float-left outline>{{students?.length}} users</button>\n  <button ion-button (click)="showSortRadio()" color="primary" outline float-right>Role: {{role}} </button>\n\n  <ion-searchbar  [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()"></ion-searchbar>\n\n  <ion-card *ngFor="let student of students" text-wrap>\n    <ion-item>\n      <h2>{{student.appid}}</h2>\n      <ion-row>\n        <ion-col col-4><p>Last seen</p></ion-col>\n        <ion-col col-8><p>{{student.last_used | moment: \'j\'}}<br/>{{student.last_used | date: \'dd/MM/yy hh:mm:ssa\'}}\n\n        </p></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-4><p>Joined</p></ion-col>\n        <ion-col col-8><p>{{student.created_on | moment: \'j\'}}<br/>{{student.created_on | date: \'dd/MM/yy hh:mm:ssa\'}}</p></ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-badge item-right color="danger">#{{student.role}}</ion-badge>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/students/students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_students_students__["a" /* StudentsProvider */]])
    ], StudentsPage);
    return StudentsPage;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(authData, alCtrl, loadingCtrl, navCtrl, navParams, formBuilder) {
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]],
            'key': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
    }
    RegisterPage.prototype.signin_change = function (val) {
        this.signin_for = val ? 'Faculty' : 'Student';
    };
    RegisterPage.prototype.signup_change = function (val) {
        this.signup_for = val ? 'Faculty' : 'Student';
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiginSignupPage');
    };
    Object.defineProperty(RegisterPage.prototype, "faculty_email", {
        // Using getters will make your code look pretty
        get: function () {
            return this.faculty_form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "faculty_password", {
        get: function () {
            return this.faculty_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "student_usn", {
        get: function () {
            return this.student_form.get('usn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "student_password", {
        get: function () {
            return this.student_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "key", {
        get: function () {
            return this.faculty_form.get('key');
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.student_signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.student_usn.value, this.student_password.value);
        loading.present();
        this.authData.signupUser(this.student_usn.value + "app@app.com", this.student_password.value, "student").then(function (data) {
            console.log("reg success ", data);
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered. Please Sign In to use the app.');
            //this.form_type = 'sign_in';
        }).catch(function (errs) {
            console.log("reg fail ", errs);
            loading.dismiss();
            _this.showAlert('SignUpFailed', errs.message);
        });
    };
    RegisterPage.prototype.faculty_signup = function () {
        var _this = this;
        if (this.key.value != 'RYMFACT123') {
            this.showAlert('SignUp Failed', 'Wrong key!');
            return;
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.faculty_email.value, this.faculty_password.value);
        loading.present();
        this.authData.signupUser(this.faculty_email.value, this.faculty_password.value, "faculty").then(function (data) {
            console.log("reg success ", data);
            loading.dismiss();
            _this.showAlert('SignUp Success', 'You have been registered. Please Sign In to use the app.');
            //this.form_type = 'sign_in';
        }).catch(function (errs) {
            loading.dismiss();
            console.log("reg fail ", errs);
            _this.showAlert('SignUp Failed', errs.message);
        });
    };
    RegisterPage.prototype.student_signin = function () {
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
                _this.navCtrl.setRoot('MenuPage', { user: data });
            });
        }).catch(function (err) {
            loading.dismiss();
            console.log("login fail: ", err);
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    RegisterPage.prototype.faculty_signin = function () {
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
                _this.navCtrl.setRoot('MenuPage', { user: data });
            });
        }).catch(function (err) {
            console.log("login fail: ", err);
            loading.dismiss();
            _this.showAlert('SignIn Failed', err.message);
        });
    };
    RegisterPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/register/register.html"*/'<ion-content padding>\n  <div class="container"  text-wrap [ngSwitch]="form_type">\n    <h2>Sign Up</h2>\n    <div class="profile-icon">\n      <img src="assets/imgs/{{signin_for}}.svg" />\n    </div>\n    <div class="form-container">\n      <div class="signin" *ngSwitchCase="\'sign_up\'">\n           <ion-item no-lines>\n              <ion-label class="type-user">{{signin_for}}</ion-label>\n              <ion-toggle color="gold" [(ngModel)]="signin_toggle" (ionChange)="signin_change(signin_toggle);"></ion-toggle>\n           </ion-item>\n           <div *ngIf="signin_toggle==false">\n              <form  [formGroup]="student_form" (ngSubmit)="student_signup()">\n              <ion-item no-lines>\n                 <ion-label  inset>Usn</ion-label>\n                 <ion-input formControlName="usn" type="usn"\n                    [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                    student_form.controls[\'usn\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'usn\'].valid &&\n                   student_form.controls[\'usn\'].touched">\n                   <p class="error-message">Please enter a valid usn address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  inset>Password</ion-label>\n                 <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                    student_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!student_form.controls[\'password\'].valid\n                   && student_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button ion-button color="primary" type="submit" full [disabled]="!student_form.valid"> Sign Up </button>\n                 <button ion-button type="reset" full color="danger2"> Clear </button>\n              </div>\n              </form>\n           </div>\n           <div *ngIf="signin_toggle">\n              <form *ngSwitchCase="\'sign_up\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signup()">\n              <ion-item no-lines>\n                 <ion-label  inset>Email</ion-label>\n                 <ion-input formControlName="email" type="email"\n                    [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                    faculty_form.controls[\'email\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'email\'].valid &&\n                   faculty_form.controls[\'email\'].touched">\n                   <p class="error-message">Please enter a valid email address.</p>\n                </ion-item>\n              </div>\n              <ion-item no-lines>\n                 <ion-label  inset>Password</ion-label>\n                 <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                    faculty_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'password\'].valid\n                   && faculty_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n\n              <ion-item no-lines>\n                 <ion-label  inset>Key</ion-label>\n                 <ion-input formControlName="key" type="password"\n                    [class.invalid]="!faculty_form.controls[\'key\'].valid &&\n                    faculty_form.controls[\'key\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" no-lines *ngIf="!faculty_form.controls[\'key\'].valid &&\n                   faculty_form.controls[\'key\'].touched">\n                   <p class="error-message">Please enter a valid key to register.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button color="primary" ion-button type="submit" full [disabled]="!faculty_form.valid"> Sign Up </button>\n                 <button ion-button type="reset" full color="danger2"> Clear </button>\n              </div>\n              </form>\n           </div>\n        </div>\n\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 218:
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
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book-info/book-info.module": [
		685,
		0
	],
	"../pages/dashboard/dashboard.module": [
		686,
		14
	],
	"../pages/events-add/events-add.module": [
		687,
		13
	],
	"../pages/events-view/events-view.module": [
		688,
		12
	],
	"../pages/events/events.module": [
		689,
		11
	],
	"../pages/faculties/faculties.module": [
		690,
		10
	],
	"../pages/faculty-detail/faculty-detail.module": [
		691,
		9
	],
	"../pages/faculty-list/faculty-list.module": [
		692,
		8
	],
	"../pages/library/library.module": [
		693,
		7
	],
	"../pages/login/login.module": [
		694,
		6
	],
	"../pages/menu/menu.module": [
		266
	],
	"../pages/notes-upload/notes-upload.module": [
		695,
		5
	],
	"../pages/notes-view/notes-view.module": [
		696,
		4
	],
	"../pages/notes/notes.module": [
		697,
		3
	],
	"../pages/register/register.module": [
		698,
		2
	],
	"../pages/students/students.module": [
		699,
		1
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
webpackAsyncContext.id = 260;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(636);
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

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/contact/contact.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title >Developers</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content>\n   <section class="our-team-section">\n      <ion-grid text-center>\n         <ion-row>\n               <div class="our-team">\n                  <div class="pic">\n                     <img src="assets/imgs/sk.jpg">\n                  </div>\n                  <div class="profile-name">\n                    <h2>K Sai Kiran<br/>\n                      <span class="social" text-center>\n                        <a href="https://www.linkedin.com/in/ksaikiranr/"><ion-icon name="logo-linkedin"></ion-icon></a>\n                        <a href="https://www.facebook.com/ksaikiranrp"><ion-icon name="logo-facebook"></ion-icon></a>\n                        <a><ion-icon name="logo-googleplus"></ion-icon></a>\n                      </span>\n                    </h2>\n                    <p> Skilled Engineer in Openstack, Kubernetes and Docker. Passionate android developer with expertise in bio-metric devices and creating android libraries . A mix martial arts player and trainer in leisure.\n\n                    </p>\n                  </div>\n               </div>\n            </ion-row>\n            <ion-row>\n                  <div class="our-team">\n                     <div class="pic">\n                        <img src="assets/imgs/profile4.jpg">\n                     </div>\n                     <div class="profile-name">\n                       <h2>John Doe<br/>\n                         <span class="social" text-center>\n                           <a href="https://www.linkedin.com/in/ksaikiranr/"><ion-icon name="logo-linkedin"></ion-icon></a>\n                           <a href="https://www.facebook.com/ksaikiranrp"><ion-icon name="logo-facebook"></ion-icon></a>\n                           <a><ion-icon name="logo-googleplus"></ion-icon></a>\n                         </span>\n                       </h2>\n                       <p> Passionate android developer with expertise in bio-metric devices and creating android libraries . A mix martial arts player and trainer in leisure . </p>\n                     </div>\n                  </div>\n               </ion-row>\n               <ion-row>\n                     <div class="our-team">\n                        <div class="pic">\n                           <img src="assets/imgs/profile2.jpg">\n                        </div>\n                        <div class="profile-name">\n                          <h2>Deena Lovista<br/>\n                            <span class="social" text-center>\n                              <a href="https://www.linkedin.com/in/ksaikiranr/"><ion-icon name="logo-linkedin"></ion-icon></a>\n                              <a href="https://www.facebook.com/ksaikiranrp"><ion-icon name="logo-facebook"></ion-icon></a>\n                              <a><ion-icon name="logo-googleplus"></ion-icon></a>\n                            </span>\n                          </h2>\n                          <p> Passionate android developer with expertise in bio-metric devices and creating android libraries . A mix martial arts player and trainer in leisure . </p>\n                        </div>\n                     </div>\n                  </ion-row>\n                  <ion-row>\n                        <div class="our-team">\n                           <div class="pic">\n                              <img src="assets/imgs/profile3.jpg">\n                           </div>\n                           <div class="profile-name">\n                             <h2>Lisya H<br/>\n                               <span class="social" text-center>\n                                 <a href="https://www.linkedin.com/in/ksaikiranr/"><ion-icon name="logo-linkedin"></ion-icon></a>\n                                 <a href="https://www.facebook.com/ksaikiranrp"><ion-icon name="logo-facebook"></ion-icon></a>\n                                 <a><ion-icon name="logo-googleplus"></ion-icon></a>\n                               </span>\n                             </h2>\n                             <p> Passionate android developer with expertise in bio-metric devices and creating android libraries . A mix martial arts player and trainer in leisure . </p>\n                           </div>\n                        </div>\n                     </ion-row>\n         </ion-grid>\n   </section>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(47);
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(89);
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
    function FacultiesPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.searchTerm = '';
        this.searching = false;
        this.initializeData();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
    }
    FacultiesPage.prototype.initializeData = function () {
        var _this = this;
        this.httpClient.get('assets/json/faculties.json').subscribe(function (data) {
            console.log(data);
            _this.faculties = data;
            _this.temp = data;
        });
    };
    FacultiesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.initializeData();
        this.searchControl.valueChanges.subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    FacultiesPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    FacultiesPage.prototype.filterItems = function (searchTerm) {
        return this.temp.filter(function (item) {
            return item.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    FacultiesPage.prototype.setFilteredItems = function () {
        this.faculties = this.filterItems(this.searchTerm);
    };
    FacultiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faculties',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/faculties/faculties.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Faculties</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <br/>\n  <div class="library-logo">\n    <img src="assets/imgs/rymec2.jpg" />\n  </div>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let faculty of faculties">\n      <ion-avatar item-start>\n        <img [src]="faculty.avatar"  onError="this.src=\'assets/imgs/default.jpg\'">\n      </ion-avatar>\n      <h2>{{faculty.first_name}} {{faculty.last_name}}</h2>\n      <p  *ngFor="let bioi of faculty?.bio">{{bioi}}&nbsp;</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/faculties/faculties.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], FacultiesPage);
    return FacultiesPage;
}());

//# sourceMappingURL=faculties.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(583);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notes_notes__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notes_view_notes_view__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notes_upload_notes_upload__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_students_students__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_faculties_faculties__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_library_library__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_faculty_list_faculty_list__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_faculty_detail_faculty_detail__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_events_fire_conf__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_file_size_file_size__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_events_view_events_view__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_events_add_events_add__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_events_events__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_events_events__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_notes_notes__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_register_register__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_auth_auth__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_students_students__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_moment_moment__ = __webpack_require__(682);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_25__pipes_file_size_file_size__["a" /* FileSizePipe */], __WEBPACK_IMPORTED_MODULE_37__pipes_moment_moment__["a" /* MomentPipe */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], /*MenuPage,*/ __WEBPACK_IMPORTED_MODULE_17__pages_faculty_list_faculty_list__["a" /* FacultyListPage */], __WEBPACK_IMPORTED_MODULE_18__pages_faculty_detail_faculty_detail__["a" /* FacultyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_12__pages_students_students__["a" /* StudentsPage */], __WEBPACK_IMPORTED_MODULE_13__pages_faculties_faculties__["a" /* FacultiesPage */], __WEBPACK_IMPORTED_MODULE_14__pages_library_library__["a" /* LibraryPage */], __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_notes_notes__["a" /* NotesPage */], __WEBPACK_IMPORTED_MODULE_9__pages_notes_view_notes_view__["a" /* NotesViewPage */], __WEBPACK_IMPORTED_MODULE_10__pages_notes_upload_notes_upload__["a" /* NotesUploadPage */], __WEBPACK_IMPORTED_MODULE_34__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_events_events__["a" /* EventsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_events_view_events_view__["a" /* EventsViewPage */], __WEBPACK_IMPORTED_MODULE_29__pages_events_add_events_add__["a" /* EventsAddPage */], __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/book-info/book-info.module#BookInfoPageModule', name: 'BookInfoPage', segment: 'book-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events-add/events-add.module#EventsAddPageModule', name: 'EventsAddPage', segment: 'events-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events-view/events-view.module#EventsViewPageModule', name: 'EventsViewPage', segment: 'events-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculties/faculties.module#FacultiesPageModule', name: 'FacultiesPage', segment: 'faculties', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty-detail/faculty-detail.module#FacultyDetailPageModule', name: 'FacultyDetailPage', segment: 'faculty-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faculty-list/faculty-list.module#FacultyListPageModule', name: 'FacultyListPage', segment: 'faculty-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-upload/notes-upload.module#NotesUploadPageModule', name: 'NotesUploadPage', segment: 'notes-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes-view/notes-view.module#NotesViewPageModule', name: 'NotesViewPage', segment: 'notes-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/students/students.module#StudentsPageModule', name: 'StudentsPage', segment: 'students', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_21__providers_events_fire_conf__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_storage__["AngularFireStorageModule"],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["AngularFireAuthModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], /*MenuPage,*/ __WEBPACK_IMPORTED_MODULE_17__pages_faculty_list_faculty_list__["a" /* FacultyListPage */], __WEBPACK_IMPORTED_MODULE_18__pages_faculty_detail_faculty_detail__["a" /* FacultyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_12__pages_students_students__["a" /* StudentsPage */], __WEBPACK_IMPORTED_MODULE_13__pages_faculties_faculties__["a" /* FacultiesPage */], __WEBPACK_IMPORTED_MODULE_14__pages_library_library__["a" /* LibraryPage */], __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_8__pages_notes_notes__["a" /* NotesPage */], __WEBPACK_IMPORTED_MODULE_9__pages_notes_view_notes_view__["a" /* NotesViewPage */], __WEBPACK_IMPORTED_MODULE_10__pages_notes_upload_notes_upload__["a" /* NotesUploadPage */], __WEBPACK_IMPORTED_MODULE_34__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_events_events__["a" /* EventsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_events_view_events_view__["a" /* EventsViewPage */], __WEBPACK_IMPORTED_MODULE_29__pages_events_add_events_add__["a" /* EventsAddPage */], __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_events_events__["a" /* EventsProvider */], __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_32__providers_notes_notes__["a" /* NotesProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_students_students__["a" /* StudentsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_library__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faculty_list_faculty_list__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(90);
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
    function MenuPage(authData, app, navCtrl, navParams) {
        this.authData = authData;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */];
        console.log(this.navParams.get('role'));
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */], icon: 'ios-speedometer-outline' },
            { title: 'Library', component: __WEBPACK_IMPORTED_MODULE_7__library_library__["a" /* LibraryPage */], icon: 'ios-glasses-outline' },
            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_3__notes_notes__["a" /* NotesPage */], icon: 'ios-albums-outline' },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */], icon: 'ios-calendar-outline' },
            { title: 'Faculties', component: __WEBPACK_IMPORTED_MODULE_8__faculty_list_faculty_list__["a" /* FacultyListPage */], icon: 'ios-school-outline' },
            { title: 'Users', component: __WEBPACK_IMPORTED_MODULE_6__students_students__["a" /* StudentsPage */], icon: 'ios-people-outline' },
            { title: 'Developers', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */], icon: 'ios-person-add-outline' },
            { title: 'Log out', component: '', icon: 'ios-power-outline' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        if (this.authData.authenticated()) {
            console.log('ionViewDidLoad WelcomePage');
            console.log(this.navParams.get('user'));
            this.user = this.navParams.get('user');
            console.log(this.user);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */], { user: this.navParams.get('user') });
        }
        else
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
    };
    MenuPage.prototype.openPage = function (page) {
        if (page.title == 'Log out') {
            this.authData.isLoggedIn = false;
            this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_9__tabs_tabs__["a" /* TabsPage */]);
        }
        else
            this.nav.setRoot(page.component, { user: this.navParams.get('user') });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/menu/menu.html"*/'\n<ion-menu [content]="content">\n\n  <ion-content id="menu" padding>\n\n    <div class="contain">\n      <div class="logo">\n        <!--<ion-icon name="ios-home-outline"></ion-icon>-->\n         <img src="assets/imgs/building.svg" />\n      </div>\n    </div>\n\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}" item-start></ion-icon>\n        {{page.title}}\n      </button>\n    </ion-list>\n\n    <div id="footer" text-center>Made With <ion-icon name="heart" style="color:#ff0000"></ion-icon>&nbsp;By K Sai Kiran <br/> &copy; All Rights Reserved</div>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(143);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(alCtrl, loadingCtrl, navCtrl, navParams, formBuilder) {
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
    }
    AboutPage.prototype.signin_change = function (val) {
        this.signin_for = val ? 'Faculty' : 'Student';
    };
    AboutPage.prototype.signup_change = function (val) {
        this.signup_for = val ? 'Faculty' : 'Student';
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiginSignupPage');
    };
    Object.defineProperty(AboutPage.prototype, "faculty_email", {
        // Using getters will make your code look pretty
        get: function () {
            return this.faculty_form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPage.prototype, "faculty_password", {
        get: function () {
            return this.faculty_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPage.prototype, "student_usn", {
        get: function () {
            return this.student_form.get('usn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPage.prototype, "student_password", {
        get: function () {
            return this.student_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    AboutPage.prototype.student_signup = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.student_usn.value, this.student_password.value);
        loading.present();
        /*this.authData.signupUser(this.student_usn.value + "app@app.com", this.student_password.value, "student").then(data => {
         console.log("reg success ", data);
         loading.dismiss();
         this.showAlert('SignUp Success', 'You have been registered.')
         this.form_type = 'sign_in';
        }).catch(errs => {
         console.log("reg fail ", errs);
         loading.dismiss();
         this.showAlert('SignUpFailed', errs.message);
       });*/
    };
    AboutPage.prototype.faculty_signup = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.faculty_email.value, this.faculty_password.value);
        loading.present();
        /*this.authData.signupUser(this.faculty_email.value, this.faculty_password.value, "student").then(data => {
         console.log("reg success ", data);
         loading.dismiss();
         this.showAlert('SignUp Success', 'You have been registered.')
         this.form_type = 'sign_in';
        }).catch(errs => {
          loading.dismiss();
         console.log("reg fail ", errs);
         this.showAlert('SignUp Failed', errs.message);
       });*/
    };
    AboutPage.prototype.student_signin = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /*this.authData.loginUser(this.student_usn.value + "app@app.com", this.student_password.value).then(data => {
         console.log("login success: ", data);
         this.authData.getPersonRecord(data["user"]["uid"]).subscribe( data => {
           console.log("data to send: ",data);
           loading.dismiss();
           this.showAlert('SignIn Success', 'You have been logged in.')
           this.navCtrl.setRoot('MenuPage',{user: data});
         });
        }).catch(err => {
          loading.dismiss();
         console.log("login fail: ", err);
         this.showAlert('SignIn Failed', err.message);
       });*/
    };
    AboutPage.prototype.faculty_signin = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /*this.authData.loginUser(this.faculty_email.value, this.faculty_password.value).then(data => {
         console.log("login success: ", data);
         this.authData.getPersonRecord(data["user"]["uid"]).subscribe( data => {
           loading.dismiss();
           this.showAlert('SignIn Success', 'You have been logged in.')
           this.navCtrl.setRoot('MenuPage',{user: data});
         });
        }).catch(err => {
         console.log("login fail: ", err);
         loading.dismiss();
         this.showAlert('SignIn Failed', err.message);
       })*/
    };
    AboutPage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/about/about.html"*/'<ion-content padding>\n  <div class="container"  [ngSwitch]="form_type">\n    <ion-card text-wrap>\n      <ion-card-header>Register</ion-card-header>\n      <ion-card-content>\n        <br/>\n        <div class="signin" *ngSwitchCase="\'sign_up\'">\n           <ion-item>\n              <ion-label>{{signin_for}}</ion-label>\n              <ion-toggle color="gold" [(ngModel)]="signin_toggle" (ionChange)="signin_change(signin_toggle);"></ion-toggle>\n           </ion-item>\n           <div *ngIf="signin_toggle==false">\n              <form  [formGroup]="student_form" (ngSubmit)="student_signin()">\n              <ion-item>\n                 <ion-label  floating>USN</ion-label>\n                 <ion-input formControlName="usn" type="usn"\n                    [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                    student_form.controls[\'usn\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!student_form.controls[\'usn\'].valid &&\n                   student_form.controls[\'usn\'].touched">\n                   <p class="error-message">Please enter a valid usn address.</p>\n                </ion-item>\n              </div>\n              <ion-item>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                    student_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!student_form.controls[\'password\'].valid\n                   && student_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button ion-button color="secondary" type="submit" full [disabled]="!student_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger"> Clear </button>\n              </div>\n              </form>\n           </div>\n           <div *ngIf="signin_toggle">\n              <form *ngSwitchCase="\'sign_up\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signin()">\n              <ion-item>\n                 <ion-label  floating>Email</ion-label>\n                 <ion-input formControlName="email" type="email"\n                    [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                    faculty_form.controls[\'email\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!faculty_form.controls[\'email\'].valid &&\n                   faculty_form.controls[\'email\'].touched">\n                   <p class="error-message">Please enter a valid email address.</p>\n                </ion-item>\n              </div>\n              <ion-item>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                    faculty_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!faculty_form.controls[\'password\'].valid\n                   && faculty_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button color="secondary" ion-button type="submit" full [disabled]="!faculty_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger"> Clear </button>\n              </div>\n              </form>\n           </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(alCtrl, loadingCtrl, navCtrl, navParams, formBuilder) {
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9][a-zA-Z][a-zA-Z][0-9][0-9][a-zA-Z][a-zA-Z][0-9][0-9][0-9]')
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
        this.faculty_form = this.formBuilder.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email
                ]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)]]
        });
    }
    HomePage.prototype.signin_change = function (val) {
        this.signin_for = val ? 'Faculty' : 'Student';
    };
    HomePage.prototype.signup_change = function (val) {
        this.signup_for = val ? 'Faculty' : 'Student';
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiginSignupPage');
    };
    Object.defineProperty(HomePage.prototype, "faculty_email", {
        // Using getters will make your code look pretty
        get: function () {
            return this.faculty_form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "faculty_password", {
        get: function () {
            return this.faculty_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "student_usn", {
        get: function () {
            return this.student_form.get('usn');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "student_password", {
        get: function () {
            return this.student_form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.student_signup = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.student_usn.value, this.student_password.value);
        loading.present();
        /*this.authData.signupUser(this.student_usn.value + "app@app.com", this.student_password.value, "student").then(data => {
         console.log("reg success ", data);
         loading.dismiss();
         this.showAlert('SignUp Success', 'You have been registered.')
         this.form_type = 'sign_in';
        }).catch(errs => {
         console.log("reg fail ", errs);
         loading.dismiss();
         this.showAlert('SignUpFailed', errs.message);
       });*/
    };
    HomePage.prototype.faculty_signup = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(this.faculty_email.value, this.faculty_password.value);
        loading.present();
        /*this.authData.signupUser(this.faculty_email.value, this.faculty_password.value, "student").then(data => {
         console.log("reg success ", data);
         loading.dismiss();
         this.showAlert('SignUp Success', 'You have been registered.')
         this.form_type = 'sign_in';
        }).catch(errs => {
          loading.dismiss();
         console.log("reg fail ", errs);
         this.showAlert('SignUp Failed', errs.message);
       });*/
    };
    HomePage.prototype.student_signin = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /*this.authData.loginUser(this.student_usn.value + "app@app.com", this.student_password.value).then(data => {
         console.log("login success: ", data);
         this.authData.getPersonRecord(data["user"]["uid"]).subscribe( data => {
           console.log("data to send: ",data);
           loading.dismiss();
           this.showAlert('SignIn Success', 'You have been logged in.')
           this.navCtrl.setRoot('MenuPage',{user: data});
         });
        }).catch(err => {
          loading.dismiss();
         console.log("login fail: ", err);
         this.showAlert('SignIn Failed', err.message);
       });*/
    };
    HomePage.prototype.faculty_signin = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        /*this.authData.loginUser(this.faculty_email.value, this.faculty_password.value).then(data => {
         console.log("login success: ", data);
         this.authData.getPersonRecord(data["user"]["uid"]).subscribe( data => {
           loading.dismiss();
           this.showAlert('SignIn Success', 'You have been logged in.')
           this.navCtrl.setRoot('MenuPage',{user: data});
         });
        }).catch(err => {
         console.log("login fail: ", err);
         loading.dismiss();
         this.showAlert('SignIn Failed', err.message);
       })*/
    };
    HomePage.prototype.showAlert = function (header, msg) {
        var alert = this.alCtrl.create({
            title: header,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/home/home.html"*/'<ion-content padding>\n  <div class="container"  [ngSwitch]="form_type">\n    <ion-card text-wrap>\n      <ion-card-header>Login</ion-card-header>\n      <ion-card-content>\n        <br/>\n        <div class="signin" *ngSwitchCase="\'sign_in\'">\n           <ion-item>\n              <ion-label>{{signin_for}}</ion-label>\n              <ion-toggle color="gold" [(ngModel)]="signin_toggle" (ionChange)="signin_change(signin_toggle);"></ion-toggle>\n           </ion-item>\n           <div *ngIf="signin_toggle==false">\n              <form  [formGroup]="student_form" (ngSubmit)="student_signin()">\n              <ion-item>\n                 <ion-label  floating>USN</ion-label>\n                 <ion-input formControlName="usn" type="usn"\n                    [class.invalid]="!student_form.controls[\'usn\'].valid &&\n                    student_form.controls[\'usn\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!student_form.controls[\'usn\'].valid &&\n                   student_form.controls[\'usn\'].touched">\n                   <p class="error-message">Please enter a valid usn address.</p>\n                </ion-item>\n              </div>\n              <ion-item>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password" [class.invalid]="!student_form.controls[\'password\'].valid&&\n                    student_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!student_form.controls[\'password\'].valid\n                   && student_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button ion-button color="secondary" type="submit" full [disabled]="!student_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger"> Clear </button>\n              </div>\n              </form>\n           </div>\n           <div *ngIf="signin_toggle">\n              <form *ngSwitchCase="\'sign_in\'" [formGroup]="faculty_form" (ngSubmit)="faculty_signin()">\n              <ion-item>\n                 <ion-label  floating>Email</ion-label>\n                 <ion-input formControlName="email" type="email"\n                    [class.invalid]="!faculty_form.controls[\'email\'].valid &&\n                    faculty_form.controls[\'email\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!faculty_form.controls[\'email\'].valid &&\n                   faculty_form.controls[\'email\'].touched">\n                   <p class="error-message">Please enter a valid email address.</p>\n                </ion-item>\n              </div>\n              <ion-item>\n                 <ion-label  floating>Password</ion-label>\n                 <ion-input formControlName="password" type="password"  [class.invalid]="!faculty_form.controls[\'password\'].valid&&\n                    faculty_form.controls[\'password\'].touched"></ion-input>\n              </ion-item>\n              <div class="f-height">\n                <ion-item class="error-message" *ngIf="!faculty_form.controls[\'password\'].valid\n                   && faculty_form.controls[\'password\'].touched">\n                   <p class="error-message">Your password needs more than 6 characters.</p>\n                </ion-item>\n              </div>\n              <div padding>\n                 <button color="secondary" ion-button type="submit" full [disabled]="!faculty_form.valid"> Sign in </button>\n                 <button ion-button type="reset" full color="danger"> Clear </button>\n              </div>\n              </form>\n           </div>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    /*apiKey: "AIzaSyBREe1JTrhoRK-s6V6Mz5wElctp69Dp1X0",
    authDomain: "rymec-portal.firebaseapp.com",
    databaseURL: "https://rymec-portal.firebaseio.com",
    projectId: "rymec-portal",
    storageBucket: "rymec-portal.appspot.com",
    messagingSenderId: "138345950215" */
    apiKey: "AIzaSyBrqEMgToSa8Z2aeLu7PSYjdUnYWe48MCo",
    authDomain: "pro-rym-portal.firebaseapp.com",
    databaseURL: "https://pro-rym-portal.firebaseio.com",
    projectId: "pro-rym-portal",
    storageBucket: "pro-rym-portal.appspot.com",
    messagingSenderId: "17412593546"
};
//# sourceMappingURL=fire.conf.js.map

/***/ }),

/***/ 681:
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

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (date, args) {
        console.log(args[0]);
        if (args[0] === 'j') {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(date, "x").fromNow();
            //return moment(date,"YYYYMMDD").fromNow();
        }
        else
            console.log("date passed", date);
        console.log(__WEBPACK_IMPORTED_MODULE_1_moment__(date, "YYYY-MM-DD").fromNow());
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date, "YYYY-MM-DD").fromNow();
        //console.log(moment(date).format('YYYYMMDDkkmmss'));
        //console.log(moment(moment(date).format('YYYYMMDDkkmmss')).fromNow());
        //console.log(moment.unix(date).fromNow());
        //return moment(moment(date).format('YYYYMMDDkkmmss'), 'YYYYMMDDkkmmss').fromNow()
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment',
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 322,
	"./af.js": 322,
	"./ar": 323,
	"./ar-dz": 324,
	"./ar-dz.js": 324,
	"./ar-kw": 325,
	"./ar-kw.js": 325,
	"./ar-ly": 326,
	"./ar-ly.js": 326,
	"./ar-ma": 327,
	"./ar-ma.js": 327,
	"./ar-sa": 328,
	"./ar-sa.js": 328,
	"./ar-tn": 329,
	"./ar-tn.js": 329,
	"./ar.js": 323,
	"./az": 330,
	"./az.js": 330,
	"./be": 331,
	"./be.js": 331,
	"./bg": 332,
	"./bg.js": 332,
	"./bm": 333,
	"./bm.js": 333,
	"./bn": 334,
	"./bn.js": 334,
	"./bo": 335,
	"./bo.js": 335,
	"./br": 336,
	"./br.js": 336,
	"./bs": 337,
	"./bs.js": 337,
	"./ca": 338,
	"./ca.js": 338,
	"./cs": 339,
	"./cs.js": 339,
	"./cv": 340,
	"./cv.js": 340,
	"./cy": 341,
	"./cy.js": 341,
	"./da": 342,
	"./da.js": 342,
	"./de": 343,
	"./de-at": 344,
	"./de-at.js": 344,
	"./de-ch": 345,
	"./de-ch.js": 345,
	"./de.js": 343,
	"./dv": 346,
	"./dv.js": 346,
	"./el": 347,
	"./el.js": 347,
	"./en-SG": 348,
	"./en-SG.js": 348,
	"./en-au": 349,
	"./en-au.js": 349,
	"./en-ca": 350,
	"./en-ca.js": 350,
	"./en-gb": 351,
	"./en-gb.js": 351,
	"./en-ie": 352,
	"./en-ie.js": 352,
	"./en-il": 353,
	"./en-il.js": 353,
	"./en-nz": 354,
	"./en-nz.js": 354,
	"./eo": 355,
	"./eo.js": 355,
	"./es": 356,
	"./es-do": 357,
	"./es-do.js": 357,
	"./es-us": 358,
	"./es-us.js": 358,
	"./es.js": 356,
	"./et": 359,
	"./et.js": 359,
	"./eu": 360,
	"./eu.js": 360,
	"./fa": 361,
	"./fa.js": 361,
	"./fi": 362,
	"./fi.js": 362,
	"./fo": 363,
	"./fo.js": 363,
	"./fr": 364,
	"./fr-ca": 365,
	"./fr-ca.js": 365,
	"./fr-ch": 366,
	"./fr-ch.js": 366,
	"./fr.js": 364,
	"./fy": 367,
	"./fy.js": 367,
	"./ga": 368,
	"./ga.js": 368,
	"./gd": 369,
	"./gd.js": 369,
	"./gl": 370,
	"./gl.js": 370,
	"./gom-latn": 371,
	"./gom-latn.js": 371,
	"./gu": 372,
	"./gu.js": 372,
	"./he": 373,
	"./he.js": 373,
	"./hi": 374,
	"./hi.js": 374,
	"./hr": 375,
	"./hr.js": 375,
	"./hu": 376,
	"./hu.js": 376,
	"./hy-am": 377,
	"./hy-am.js": 377,
	"./id": 378,
	"./id.js": 378,
	"./is": 379,
	"./is.js": 379,
	"./it": 380,
	"./it-ch": 381,
	"./it-ch.js": 381,
	"./it.js": 380,
	"./ja": 382,
	"./ja.js": 382,
	"./jv": 383,
	"./jv.js": 383,
	"./ka": 384,
	"./ka.js": 384,
	"./kk": 385,
	"./kk.js": 385,
	"./km": 386,
	"./km.js": 386,
	"./kn": 387,
	"./kn.js": 387,
	"./ko": 388,
	"./ko.js": 388,
	"./ku": 389,
	"./ku.js": 389,
	"./ky": 390,
	"./ky.js": 390,
	"./lb": 391,
	"./lb.js": 391,
	"./lo": 392,
	"./lo.js": 392,
	"./lt": 393,
	"./lt.js": 393,
	"./lv": 394,
	"./lv.js": 394,
	"./me": 395,
	"./me.js": 395,
	"./mi": 396,
	"./mi.js": 396,
	"./mk": 397,
	"./mk.js": 397,
	"./ml": 398,
	"./ml.js": 398,
	"./mn": 399,
	"./mn.js": 399,
	"./mr": 400,
	"./mr.js": 400,
	"./ms": 401,
	"./ms-my": 402,
	"./ms-my.js": 402,
	"./ms.js": 401,
	"./mt": 403,
	"./mt.js": 403,
	"./my": 404,
	"./my.js": 404,
	"./nb": 405,
	"./nb.js": 405,
	"./ne": 406,
	"./ne.js": 406,
	"./nl": 407,
	"./nl-be": 408,
	"./nl-be.js": 408,
	"./nl.js": 407,
	"./nn": 409,
	"./nn.js": 409,
	"./pa-in": 410,
	"./pa-in.js": 410,
	"./pl": 411,
	"./pl.js": 411,
	"./pt": 412,
	"./pt-br": 413,
	"./pt-br.js": 413,
	"./pt.js": 412,
	"./ro": 414,
	"./ro.js": 414,
	"./ru": 415,
	"./ru.js": 415,
	"./sd": 416,
	"./sd.js": 416,
	"./se": 417,
	"./se.js": 417,
	"./si": 418,
	"./si.js": 418,
	"./sk": 419,
	"./sk.js": 419,
	"./sl": 420,
	"./sl.js": 420,
	"./sq": 421,
	"./sq.js": 421,
	"./sr": 422,
	"./sr-cyrl": 423,
	"./sr-cyrl.js": 423,
	"./sr.js": 422,
	"./ss": 424,
	"./ss.js": 424,
	"./sv": 425,
	"./sv.js": 425,
	"./sw": 426,
	"./sw.js": 426,
	"./ta": 427,
	"./ta.js": 427,
	"./te": 428,
	"./te.js": 428,
	"./tet": 429,
	"./tet.js": 429,
	"./tg": 430,
	"./tg.js": 430,
	"./th": 431,
	"./th.js": 431,
	"./tl-ph": 432,
	"./tl-ph.js": 432,
	"./tlh": 433,
	"./tlh.js": 433,
	"./tr": 434,
	"./tr.js": 434,
	"./tzl": 435,
	"./tzl.js": 435,
	"./tzm": 436,
	"./tzm-latn": 437,
	"./tzm-latn.js": 437,
	"./tzm.js": 436,
	"./ug-cn": 438,
	"./ug-cn.js": 438,
	"./uk": 439,
	"./uk.js": 439,
	"./ur": 440,
	"./ur.js": 440,
	"./uz": 441,
	"./uz-latn": 442,
	"./uz-latn.js": 442,
	"./uz.js": 441,
	"./vi": 443,
	"./vi.js": 443,
	"./x-pseudo": 444,
	"./x-pseudo.js": 444,
	"./yo": 445,
	"./yo.js": 445,
	"./zh-cn": 446,
	"./zh-cn.js": 446,
	"./zh-hk": 447,
	"./zh-hk.js": 447,
	"./zh-tw": 448,
	"./zh-tw.js": 448
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 684;

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(633);
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
        this.isLoggedIn = false;
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
    AuthProvider.prototype.authenticated = function () {
        return this.isLoggedIn;
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
                        //return person
                        return [2 /*return*/, this.setPersonRecord(person, role)];
                }
            });
        });
    };
    AuthProvider.prototype.setPersonRecord = function (person, role) {
        console.log("sert record person: ", person);
        var personRef = this.afs.doc("people/" + person.user.uid);
        console.log("New user id: ", person.user.id);
        var data = {
            uid: person.user.uid,
            appid: person.user.email || person.user.usn,
            role: role,
            created_on: new Date().getTime().toString(),
            last_used: new Date().getTime().toString()
        };
        //return null;
        return personRef.set(data);
    };
    AuthProvider.prototype.getPersonRecord = function (id) {
        return this.afs.collection('people').doc(id).valueChanges();
    };
    AuthProvider.prototype.set_last_login = function (id) {
        console.log(id);
        return this.afs.collection('people').doc(id).update({ last_used: new Date().getTime().toString() });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[450]);
//# sourceMappingURL=main.js.map