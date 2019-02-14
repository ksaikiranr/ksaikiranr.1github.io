webpackJsonp([0],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfoPageModule", function() { return BookInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_info__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookInfoPageModule = /** @class */ (function () {
    function BookInfoPageModule() {
    }
    BookInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__book_info__["a" /* BookInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_info__["a" /* BookInfoPage */]),
            ],
        })
    ], BookInfoPageModule);
    return BookInfoPageModule;
}());

//# sourceMappingURL=book-info.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookInfoPage; });
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


var BookInfoPage = /** @class */ (function () {
    function BookInfoPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    BookInfoPage.prototype.ionViewWillLoad = function () {
        this.book = this.navParams.get('data');
        console.log(this.book);
    };
    BookInfoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    BookInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-info',template:/*ion-inline-start:"/home/sk/vtu-19-projects/ui2/src/pages/book-info/book-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Details</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()" style="color:#fff">[Close]</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n  <ion-item>\n    <ion-avatar item-start>\n      <img [src]="book.volumeInfo?.imageLinks?.thumbnail"  onError="this.src=\'assets/imgs/book.svg\'">\n  </ion-avatar>\n    <h2>{{book.volumeInfo.title}}</h2>\n    <p><span *ngFor="let author of book.volumeInfo.authors">{{author}} </span></p>\n    <ion-badge *ngFor="let tag of book.volumeInfo.categories">#{{tag}}</ion-badge>\n  </ion-item>\n\n\n  <ion-card-content>\n    <p *ngIf="book.volumeInfo.description" class="desc">{{book.volumeInfo.description}}</p>\n    <p>{{book.volumeInfo.publisher}}, {{book.volumeInfo.publishedDate}}</p>\n\n    <ion-row text-center>\n      <a target="_blank" [href]="book.accessInfo.webReaderLink"><button ion-button  block outline >Read Online</button></a>\n      </ion-row>\n    <p *ngFor="let isbn of book.volumeInfo.industryIdentifiers">{{isbn.type}} {{isbn.identifier}}&nbsp;</p>\n    <ion-row padding>\n      <ion-badge item-right color="info" style="color: #fff;">{{book.volumeInfo.publisher}}</ion-badge>\n      <ion-badge item-right> {{book.accessInfo.country}}</ion-badge>\n      <ion-badge item-right color="danger">{{book.volumeInfo.language}}</ion-badge>\n      <ion-badge item-right color="success">{{book.volumeInfo.pageCount}} pgs</ion-badge>\n    </ion-row>\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/sk/vtu-19-projects/ui2/src/pages/book-info/book-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BookInfoPage);
    return BookInfoPage;
}());

//# sourceMappingURL=book-info.js.map

/***/ })

});
//# sourceMappingURL=0.js.map