webpackJsonp([5],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqsPage = (function () {
    function FaqsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqsPage');
    };
    FaqsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faqs',template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/faqs/faqs.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      FAQ\'s\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-wrap>\n  <br/>\n  <ion-card>\n    <ion-card-header>\n      General FAQ\'s\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <h2><b>Q)</b> What is blockchain?</h2>\n        <p>A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a hash pointer as a link to a previous block, a timestamp and transaction data.</p>\n      </ion-item>\n      <hr/>\n      <ion-item>\n        <h2><b>Q)</b> What are cryptocurrencies?</h2>\n        <p>A cryptocurrency is a digital or virtual currency designed to work as a medium of exchange. It uses cryptography to secure and verify transactions as well as to control the creation of new units of a particular cryptocurrency. Essentially, cryptocurrencies are limited entries in a database that no one can change unless specific conditions are fulfilled. </p>\n      </ion-item>\n      <hr/>\n      <ion-item>\n        <h2><b>Q)</b> What is ROI?</h2>\n        <p>ROI measures the amount of return on an investment relative to the investment’s cost. To calculate ROI, the benefit (or return) of an investment is divided by the cost of the investment, and the result is expressed as a percentage or a ratio.</p>\n      </ion-item>\n    </ion-card-content>\n    </ion-card>\n    <br/>\n    <ion-card>\n      <ion-card-header>\n        Commonly used acronyms\n      </ion-card-header>\n      <ion-card-content>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col><h2>Altcoins: </h2></ion-col>\n            <ion-col><p>Alternate cryptocurrency that is any cryptocurrency other than bitcoin.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>ASHDRAKED:  </h2></ion-col>\n            <ion-col><p>A situation where you lost all your money.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>Bag Holder: </h2></ion-col>\n            <ion-col><p>A person who buys and hold coins in large quantity hoping to make good profits in the future.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>Bear/Bearish: </h2></ion-col>\n            <ion-col><p>Negative price movement.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>BTFD: </h2></ion-col>\n            <ion-col><p>Buy The Fucking Dip (an indication to buy a coin when it has dumped so hard).</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>Bull/Bullish: </h2></ion-col>\n            <ion-col><p>Positive price movement.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>DILDO: </h2></ion-col>\n            <ion-col><p>Long green or red candles.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>Dump: </h2></ion-col>\n            <ion-col><p>To Sell off a coin.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>Dumping: </h2></ion-col>\n            <ion-col><p>Downward price movement.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>DYOR: </h2></ion-col>\n            <ion-col><p>Do Your Own Research.</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h2>FA: </h2></ion-col>\n            <ion-col><p>Fundamental Analysis.</p></ion-col>\n          </ion-row>\n            <ion-row>\n              <ion-col><h2>FOMO: </h2></ion-col>\n              <ion-col><p>Fear Of Missing Out (A coin is pumping and you get the feeling it\'s gonna pump more, so you buy high).</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>FUD: </h2></ion-col>\n              <ion-col><p>Fear Uncertainty & Doubt.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>HODL: </h2></ion-col>\n              <ion-col><p>Hold/Hold a position.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>JOMO: </h2></ion-col>\n              <ion-col><p>Joy Of Missing Out.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Long:  </h2></ion-col>\n              <ion-col><p>Margin bull position.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>MCAP: </h2></ion-col>\n              <ion-col><p>Market Capitalization.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Moon: </h2></ion-col>\n              <ion-col><p>Continuous upward movement of price.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>OTC: </h2></ion-col>\n              <ion-col><p>Over The Counter.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Pump: </h2></ion-col>\n              <ion-col><p>Upward price movement.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Saj: </h2></ion-col>\n              <ion-col><p>candle Huge green candle.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Shitcoin: </h2></ion-col>\n              <ion-col><p>A coin with no potential value or use.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Short: </h2></ion-col>\n              <ion-col><p>Margin bear position.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Swing: </h2></ion-col>\n              <ion-col><p>Zig zag price movement.</p></ion-col>\n            </ion-row>\n            (Upwards and downwards)\n            <ion-row>\n              <ion-col><h2>TA: </h2></ion-col>\n              <ion-col><p>Technical Analysis.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>REKT: </h2></ion-col>\n              <ion-col><p>When you have a bad loss.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Reverse Indicator: </h2></ion-col>\n              <ion-col><p>Someone who is always wrong predicting price movements.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>RSI: </h2></ion-col>\n              <ion-col><p>Relative Strength Index.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Whale: </h2></ion-col>\n              <ion-col><p>Very Wealthy trader/Market mover.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>ICO: </h2></ion-col>\n              <ion-col><p>Intial coin offering otherwise know as IPO.</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col><h2>Weak Hand: </h2></ion-col>\n              <ion-col><p>a coin holder prone to selling at the first sign of a deep in price.</p></ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/faqs/faqs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FaqsPage);
    return FaqsPage;
}());

//# sourceMappingURL=faqs.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestedCoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coins_listing_coins_listing__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_coin_add_coin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_coins_service_coins_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dev_dev__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InvestedCoinsPage = (function () {
    function InvestedCoinsPage(navCtrl, storage, http, toastCtrl, /* private network: Network,  private toast: ToastController*/ alertCtrl, loadingCtrl, dataP) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dataP = dataP;
        this.detailToggle = [];
        this.chart = [];
        this.coins = [];
        this.coinsTemp = [];
    }
    //Get invested coin symbol and join them to string
    InvestedCoinsPage.prototype.getSymboldFromStorage = function () {
        var _this = this;
        return this.storage.get("savedCoins").then(function (val) {
            if (val == null)
                return;
            _this.coins = JSON.parse(val);
            console.log("storage");
            console.log(_this.coins);
            var cSymbols = '';
            for (var i = 0; i < _this.coins.length; i++)
                cSymbols += _this.coins[i]["symbol"] + ",";
            _this.coinSymbols = cSymbols;
            console.log(_this.coinSymbols);
        }, function (err) {
            console.log(err);
        });
    };
    //On view enter
    InvestedCoinsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("Ion view enter");
        this.totalROIBTC = 0;
        this.totalROIINR = 0;
        this.assetsValueBTC = 0;
        this.assetsValueINR = 0;
        this.assetsInvestmentBTC = 0;
        this.assetsInvestmentINR = 0;
        var loader = this.loadingCtrl.create({
            content: 'Refreshing...',
            spinner: 'crescent'
        });
        var toast = this.toastCtrl.create({
            message: 'Refreshed successfully',
            duration: 3000,
        });
        loader.present();
        console.log("calling getSymboldFromStorage");
        this.getSymboldFromStorage().then(function () {
            if (!_this.coins) {
                loader.dismiss();
                toast.present();
                console.log("In if return ");
                return;
            }
            console.log("Didnt return ion view enter");
            _this.dataP.getCoinsValue(_this.coinSymbols).subscribe(function (res) {
                console.log("component: ", res);
                for (var i = 0; i < _this.coins.length; i++) {
                    var symb = _this.coins[i]["symbol"];
                    _this.coins[i]["currCostINR"] = res["RAW"][symb]["INR"]["PRICE"];
                    _this.coins[i]["currCostBTC"] = res["RAW"][symb]["BTC"]["PRICE"];
                    _this.assetsValueBTC += parseFloat(_this.coins[i]["units"]) * (_this.coins[i]["currCostBTC"]);
                    _this.assetsValueINR += parseFloat(_this.coins[i]["units"]) * (_this.coins[i]["currCostINR"]);
                    _this.assetsInvestmentBTC += parseFloat(_this.coins[i]["expenseBTC"]);
                    _this.assetsInvestmentINR += parseFloat(_this.coins[i]["expenseINR"]);
                    _this.coins[i]["roiBTC"] = parseFloat(_this.coins[i]["units"]) * (_this.coins[i]["currCostBTC"]) - parseFloat(_this.coins[i]["expenseBTC"]);
                    console.log("price btx", _this.coins[i]["roiBTC"]);
                    _this.coins[i]["roiINR"] = parseFloat(_this.coins[i]["units"]) * (_this.coins[i]["currCostINR"]) - parseFloat(_this.coins[i]["expenseINR"]);
                    _this.totalROIBTC += _this.coins[i]["roiBTC"];
                    _this.totalROIINR += _this.coins[i]["roiINR"];
                    _this.coins[i]["roiBTC"] = _this.coins[i]["roiBTC"].toPrecision(6);
                    console.log("price btx", _this.coins[i]["roiBTC"]);
                    _this.coins[i]["roiINR"] = Math.round(_this.coins[i]["roiINR"]);
                    _this.coins[i]["market"] = {
                        lastUpdate: res["DISPLAY"][symb]["BTC"]["LASTUPDATE"],
                        vol24: res["DISPLAY"][symb]["BTC"]["VOLUMEDAYTO"],
                        pc24: res["DISPLAY"][symb]["BTC"]["CHANGEPCT24HOUR"],
                        priceBTC: res["DISPLAY"][symb]["BTC"]["PRICE"],
                        lastMarket: res["DISPLAY"][symb]["BTC"]["LASTMARKET"],
                        totalSupply: res["DISPLAY"][symb]["BTC"]["SUPPLY"],
                        marketCap: res["DISPLAY"][symb]["BTC"]["MKTCAP"],
                    };
                }
                _this.coinsTemp = _this.coins;
                loader.dismiss();
                toast.present();
                _this.totalROIBTC = _this.totalROIBTC.toPrecision(6);
                _this.totalROIINR = _this.totalROIINR.toPrecision(8);
                _this.assetsInvestmentINR = _this.assetsValueINR.toPrecision(8);
                _this.assetsInvestmentBTC = _this.assetsValueBTC.toPrecision(6);
            });
        });
    };
    InvestedCoinsPage.prototype.coinPlot = function (coin, index) {
        var _this = this;
        console.log("index is: ", index);
        console.log("coin is: ", coin);
        console.log("plottigm");
        if (this.detailToggle[index]) {
            this.detailToggle[index] = false;
        }
        else {
            var scale_1 = {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        color: '#fff'
                    }]
            };
            this.detailToggle.fill(false);
            this.detailToggle[index] = true;
            this.dataP.getChart(coin.symbol).subscribe(function (res) {
                console.log(res);
                setTimeout(function () {
                    res = JSON.parse(res['_body']);
                    var coinHistroy = res['Data'].map(function (a) { return (a.close); });
                    _this.chart[index] = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"]('canvas' + index, {
                        type: 'line',
                        data: {
                            labels: coinHistroy,
                            datasets: [{
                                    data: coinHistroy,
                                    borderColor: '#3CBA9F',
                                    fill: false
                                }],
                        },
                        options: {
                            tooltips: {
                                callbacks: {
                                    label: function (tooltipItems, data) {
                                        return "₹ " + tooltipItems.xLabel.toString();
                                    }
                                }
                            },
                            /*
                            tooltips: {
                              callbacks: {
                                title: function(tooltipItem, data) {
                                  return tooltipItem[0].yLabel;
                                },
                                label: function(tooltipItem, data) {
                                  return ' ' + data.datasets[tooltipItem.datasetIndex].label + ' ' + tooltipItem.yLabel;
                                }
                              }
                            },*/
                            responsive: true,
                            legend: {
                                display: false,
                            },
                            scales: scale_1
                        }
                    });
                }, 250);
            });
        }
    };
    InvestedCoinsPage.prototype.onInput = function (ev) {
        console.log("called");
        // Reset items back to all of the items
        this.coins = this.coinsTemp;
        // set q to the value of the searchbar
        var q = ev.target.value;
        console.log(q);
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.coins = this.coins.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.coins.length);
    };
    InvestedCoinsPage.prototype.randColor = function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    InvestedCoinsPage.prototype.drawROIChart = function () {
        console.log(this.labelsC);
        var colors = [];
        for (var i = 0; i < this.labelsC.length; i++) {
            colors.push(this.randColor());
        }
        var data = {
            datasets: [{
                    data: this.dataROI,
                    backgroundColor: colors,
                }],
            labels: this.labelsC,
        };
        this.chart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"]('canvas', {
            type: 'bar',
            data: data
        });
    };
    InvestedCoinsPage.prototype.drawBALChart = function () {
        console.log(this.dataBal);
        var colors = [];
        for (var i = 0; i < this.labelsC.length; i++) {
            colors.push(this.randColor());
        }
        var data = {
            datasets: [{
                    data: this.dataBal,
                    backgroundColor: colors,
                }],
            labels: this.labelsC,
        };
        this.chart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"]('canvas', {
            type: 'bar',
            data: data,
            responsive: true,
        });
    };
    InvestedCoinsPage.prototype.drawInvestedChart = function () {
        console.log(this.dataInvested);
        var colors = [];
        for (var i = 0; i < this.labelsC.length; i++) {
            colors.push(this.randColor());
        }
        var data = {
            datasets: [{
                    data: this.dataInvested,
                    backgroundColor: colors,
                }],
            labels: this.labelsC,
        };
        this.chart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"]('canvas', {
            type: 'bar',
            data: data
        });
    };
    InvestedCoinsPage.prototype.newCoins = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__coins_listing_coins_listing__["a" /* CoinsListingPage */]);
    };
    InvestedCoinsPage.prototype.edit = function (id, cname, csymbol) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_coin_add_coin__["a" /* AddCoinPage */], {
            id: id,
            name: cname,
            symbol: csymbol,
            add: false
        });
    };
    InvestedCoinsPage.prototype.delete = function (i) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure, you want to delete?(This operation is irreverseable)',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        console.log('Buy clicked');
                        var temp = [];
                        for (var ind = 0; ind < _this.coins.length; ind++) {
                            if (ind != i)
                                temp.push(_this.coins[ind]);
                        }
                        console.log(i);
                        _this.storage.set("savedCoins", JSON.stringify(temp)).then(function () { return _this.ionViewWillEnter(); });
                    }
                }
            ]
        });
        alert.present();
    };
    InvestedCoinsPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    InvestedCoinsPage.prototype.showDev = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dev_dev__["a" /* DevPage */]);
    };
    InvestedCoinsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invested-coins',template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/invested-coins/invested-coins.html"*/'<!--\n  Generated template for the SavedCoinsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refresh()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Coins Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngIf="!coins" text-center>\n    <h2>No coins are saved!</h2>\n    <button ion-button primary (click)="coinsListing()">Add new coins</button>\n  </ion-card>\n\n  <ion-card *ngIf="coins!=null">\n    <ion-card-header>\n      Summary\n    </ion-card-header>\n    <ion-grid class="summary">\n      <ion-row>\n        <ion-col class="summaryPrice">\n          Gains BTC\n        </ion-col>\n        <ion-col class="summaryPrice">\n          B {{totalROIBTC}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="summaryPrice">\n          Gains INR\n        </ion-col>\n        <ion-col class="summaryPrice">\n          {{totalROIINR | currency:"₹":"false"}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="summaryPrice">\n          <p>Assets BTC(est.):</p>\n        </ion-col>\n        <ion-col class="summaryPrice">\n          <p>B {{assetsValueBTC}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="summaryPrice">\n          <p>Assets INR(est.):</p>\n        </ion-col>\n        <ion-col class="summaryPrice">\n          <p>{{assetsValueINR | currency:"₹":"false"}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br/>\n    <!--\n    <ion-segment [(ngModel)]="chartType">\n      <ion-segment-button value="Gains" (click)="drawGainsChart()">\n        Gains\n      </ion-segment-button>\n      <ion-segment-button value="INVESTED" (click)="drawInvestedChart()">\n        INVESTED\n      </ion-segment-button>\n      <ion-segment-button value="BAL" (click)="drawBALChart()">\n        BAL\n      </ion-segment-button>\n    </ion-segment>\n      <canvas id="canvas"></canvas>\n    -->\n  </ion-card>\n\n  <ion-list *ngIf="coins!=null">\n    <ion-searchbar placeholder="Search using coin name ..." [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)" [animated]="true">\n    </ion-searchbar>\n    <ion-item *ngFor="let coin of coins; let i=index;">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-7>\n            <h2>\n              <span class="rank">{{i+1}}</span>\n              <span class="name">{{coin.name}}</span>\n              <span class="symbol">({{coin.symbol}})</span>\n            </h2>\n          </ion-col>\n          <ion-col col-5 text-center>\n            <button ion-button icon-only (click)="coinPlot(coin,i)" clear color="lightGreen">  <ion-icon name="podium"></ion-icon></button>\n            <button ion-button icon-only (click)="edit(coin.id)" clear><ion-icon name="create"></ion-icon></button>\n            <button ion-button icon-only color="danger" (click)="delete(i)" clear><ion-icon name="trash"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        <ion-grid id="performance">\n          <ion-row>\n            <ion-col col-6><span class="price" [ngStyle]="{\'color\': coin.roiBTC > 0 ? \'#32db64\' : \'#f53d3d\' }">Gain BTC:  </span></ion-col>\n            <ion-col col-6>\n              <span class="price fWeight500" [ngStyle]="{\'color\': coin.roiBTC > 0 ? \'#32db64\' : \'#f53d3d\' }">\n                B {{coin.roiBTC }}\n                <ion-icon name="arrow-round-up" *ngIf="coin.Gains > 0"></ion-icon>\n                <ion-icon name="arrow-round-down" *ngIf="coin.Gains <= 0"></ion-icon>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6><span class="price" [ngStyle]="{\'color\': coin.roiINR > 0 ? \'#32db64\' : \'#f53d3d\' }">Gain INR:  </span></ion-col>\n            <ion-col col-6>\n              <span class="price fWeight500" [ngStyle]="{\'color\': coin.roiINR > 0 ? \'#32db64\' : \'#f53d3d\' }">\n                {{coin.roiINR | currency:"₹":"false"}}\n                <ion-icon name="arrow-round-up" *ngIf="coin.Gains > 0"></ion-icon>\n                <ion-icon name="arrow-round-down" *ngIf="coin.Gains <= 0"></ion-icon>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6><p class="price">Price BTC:  </p></ion-col>\n            <ion-col col-6>{{coin.market?.priceBTC}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6><p class="price">Price INRs: </p></ion-col>\n            <ion-col col-6><p class="price">{{coin.currCostINR | currency:"₹":"false"}}</p></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6><p class="price">Units bal:  </p></ion-col>\n            <ion-col col-6><p>{{coin.units}} {{coin.symbol}}</p></ion-col>\n          </ion-row>\n        <span *ngIf="detailToggle[i]">\n            <ion-row>\n              <ion-col col-6><p class="price">Invested BTC: </p></ion-col>\n              <ion-col col-6><p class="price">B {{coins[i].expenseBTC}}</p></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6><p class="price">Invested Rs: </p></ion-col>\n              <ion-col col-6><p class="price">{{coins[i].expenseINR | currency:"₹":"false"}}</p></ion-col>\n            </ion-row>\n          </span>\n        </ion-grid>\n\n      <div class="plot" *ngIf="detailToggle[i]">\n        <ion-grid>\n          <hr/>\n          <ion-row text-center>\n            <ion-col col-4> <p  [ngStyle]="{\'color\': coin.market?.pc24 > 0 ? \'#32db64\' : \'#f53d3d\' }">&Delta; 24Hr %<br/>{{coin.market?.pc24}}\n                <ion-icon name="arrow-round-up" *ngIf="coin.market?.pc24 > 0"></ion-icon>\n              <ion-icon name="arrow-round-down" *ngIf="coin.market?.pc24 <= 0"></ion-icon></p></ion-col>\n            <ion-col col-4> <p>Market Cap.<br/> {{coin.market?.marketCap}}</p></ion-col>\n            <ion-col col-4> <p text-wrap>Supply <br/> <span style="font-size: 0.80em;">{{coin.market?.totalSupply}}</span></p></ion-col>\n          </ion-row>\n          <hr/>\n          <ion-row text-center>\n            <ion-col col-4> <p>Volume <br/>{{coin.market?.vol24}}</p></ion-col>\n            <ion-col col-4> <p>Last Market <br/> {{coin.market?.lastMarket}}</p></ion-col>\n            <ion-col col-4> <p>Last Update <br/> {{coin.market?.lastUpdate}}</p></ion-col>\n          </ion-row>\n          <hr/>\n        </ion-grid>\n        <hr/>\n        <canvas id="canvas{{i}}">{{chart[i]}}</canvas>\n        <br/>\n      </div>\n      <br/>\n    </ion-item>\n  </ion-list>\n  <!--\n  <div class="footer" text-wrap text-center style="background: #000; color: #fff; padding: 5px;">\n    HANDCRAFTED WITH <ion-icon name="heart" style=\'color:#FF0000; font-size: 1.1em !important; padding: 0; margin: 0;\'></ion-icon><br/> BY K SAI KIRAN <br/>\n    Copyright &copy; 2017 ALL RIGHTS RESERVED\n  </div>-->\n</ion-content>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/invested-coins/invested-coins.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_coins_service_coins_service__["a" /* CoinsServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_coins_service_coins_service__["a" /* CoinsServiceProvider */]) === "function" && _g || Object])
    ], InvestedCoinsPage);
    return InvestedCoinsPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=invested-coins.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-coin/add-coin.module": [
		486,
		4
	],
	"../pages/coins-listing/coins-listing.module": [
		487,
		3
	],
	"../pages/dev/dev.module": [
		489,
		2
	],
	"../pages/faqs/faqs.module": [
		488,
		1
	],
	"../pages/invested-coins/invested-coins.module": [
		490,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dev_dev__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_faqs_faqs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_coins_listing_coins_listing__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_coin_add_coin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_coins_service_coins_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_qrcode2__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














/*barcode scanner and creator*/

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dev_dev__["a" /* DevPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_coins_listing_coins_listing__["a" /* CoinsListingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__["a" /* InvestedCoinsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_coin_add_coin__["a" /* AddCoinPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-coin/add-coin.module#AddCoinPageModule', name: 'AddCoinPage', segment: 'add-coin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coins-listing/coins-listing.module#CoinsListingPageModule', name: 'CoinsListingPage', segment: 'coins-listing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faqs/faqs.module#FaqsPageModule', name: 'FaqsPage', segment: 'faqs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dev/dev.module#DevPageModule', name: 'DevPage', segment: 'dev', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invested-coins/invested-coins.module#InvestedCoinsPageModule', name: 'InvestedCoinsPage', segment: 'invested-coins', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_dev_dev__["a" /* DevPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_faqs_faqs__["a" /* FaqsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_coins_listing_coins_listing__["a" /* CoinsListingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__["a" /* InvestedCoinsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_coin_add_coin__["a" /* AddCoinPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_coins_service_coins_service__["a" /* CoinsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 177,
	"./af.js": 177,
	"./ar": 178,
	"./ar-dz": 179,
	"./ar-dz.js": 179,
	"./ar-kw": 180,
	"./ar-kw.js": 180,
	"./ar-ly": 181,
	"./ar-ly.js": 181,
	"./ar-ma": 182,
	"./ar-ma.js": 182,
	"./ar-sa": 183,
	"./ar-sa.js": 183,
	"./ar-tn": 184,
	"./ar-tn.js": 184,
	"./ar.js": 178,
	"./az": 185,
	"./az.js": 185,
	"./be": 186,
	"./be.js": 186,
	"./bg": 187,
	"./bg.js": 187,
	"./bn": 188,
	"./bn.js": 188,
	"./bo": 189,
	"./bo.js": 189,
	"./br": 190,
	"./br.js": 190,
	"./bs": 191,
	"./bs.js": 191,
	"./ca": 192,
	"./ca.js": 192,
	"./cs": 193,
	"./cs.js": 193,
	"./cv": 194,
	"./cv.js": 194,
	"./cy": 195,
	"./cy.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de-at": 198,
	"./de-at.js": 198,
	"./de-ch": 199,
	"./de-ch.js": 199,
	"./de.js": 197,
	"./dv": 200,
	"./dv.js": 200,
	"./el": 201,
	"./el.js": 201,
	"./en-au": 202,
	"./en-au.js": 202,
	"./en-ca": 203,
	"./en-ca.js": 203,
	"./en-gb": 204,
	"./en-gb.js": 204,
	"./en-ie": 205,
	"./en-ie.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es.js": 208,
	"./et": 210,
	"./et.js": 210,
	"./eu": 211,
	"./eu.js": 211,
	"./fa": 212,
	"./fa.js": 212,
	"./fi": 213,
	"./fi.js": 213,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 215,
	"./fr-ca": 216,
	"./fr-ca.js": 216,
	"./fr-ch": 217,
	"./fr-ch.js": 217,
	"./fr.js": 215,
	"./fy": 218,
	"./fy.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-latn": 221,
	"./gom-latn.js": 221,
	"./he": 222,
	"./he.js": 222,
	"./hi": 223,
	"./hi.js": 223,
	"./hr": 224,
	"./hr.js": 224,
	"./hu": 225,
	"./hu.js": 225,
	"./hy-am": 226,
	"./hy-am.js": 226,
	"./id": 227,
	"./id.js": 227,
	"./is": 228,
	"./is.js": 228,
	"./it": 229,
	"./it.js": 229,
	"./ja": 230,
	"./ja.js": 230,
	"./jv": 231,
	"./jv.js": 231,
	"./ka": 232,
	"./ka.js": 232,
	"./kk": 233,
	"./kk.js": 233,
	"./km": 234,
	"./km.js": 234,
	"./kn": 235,
	"./kn.js": 235,
	"./ko": 236,
	"./ko.js": 236,
	"./ky": 237,
	"./ky.js": 237,
	"./lb": 238,
	"./lb.js": 238,
	"./lo": 239,
	"./lo.js": 239,
	"./lt": 240,
	"./lt.js": 240,
	"./lv": 241,
	"./lv.js": 241,
	"./me": 242,
	"./me.js": 242,
	"./mi": 243,
	"./mi.js": 243,
	"./mk": 244,
	"./mk.js": 244,
	"./ml": 245,
	"./ml.js": 245,
	"./mr": 246,
	"./mr.js": 246,
	"./ms": 247,
	"./ms-my": 248,
	"./ms-my.js": 248,
	"./ms.js": 247,
	"./my": 249,
	"./my.js": 249,
	"./nb": 250,
	"./nb.js": 250,
	"./ne": 251,
	"./ne.js": 251,
	"./nl": 252,
	"./nl-be": 253,
	"./nl-be.js": 253,
	"./nl.js": 252,
	"./nn": 254,
	"./nn.js": 254,
	"./pa-in": 255,
	"./pa-in.js": 255,
	"./pl": 256,
	"./pl.js": 256,
	"./pt": 257,
	"./pt-br": 258,
	"./pt-br.js": 258,
	"./pt.js": 257,
	"./ro": 259,
	"./ro.js": 259,
	"./ru": 260,
	"./ru.js": 260,
	"./sd": 261,
	"./sd.js": 261,
	"./se": 262,
	"./se.js": 262,
	"./si": 263,
	"./si.js": 263,
	"./sk": 264,
	"./sk.js": 264,
	"./sl": 265,
	"./sl.js": 265,
	"./sq": 266,
	"./sq.js": 266,
	"./sr": 267,
	"./sr-cyrl": 268,
	"./sr-cyrl.js": 268,
	"./sr.js": 267,
	"./ss": 269,
	"./ss.js": 269,
	"./sv": 270,
	"./sv.js": 270,
	"./sw": 271,
	"./sw.js": 271,
	"./ta": 272,
	"./ta.js": 272,
	"./te": 273,
	"./te.js": 273,
	"./tet": 274,
	"./tet.js": 274,
	"./th": 275,
	"./th.js": 275,
	"./tl-ph": 276,
	"./tl-ph.js": 276,
	"./tlh": 277,
	"./tlh.js": 277,
	"./tr": 278,
	"./tr.js": 278,
	"./tzl": 279,
	"./tzl.js": 279,
	"./tzm": 280,
	"./tzm-latn": 281,
	"./tzm-latn.js": 281,
	"./tzm.js": 280,
	"./uk": 282,
	"./uk.js": 282,
	"./ur": 283,
	"./ur.js": 283,
	"./uz": 284,
	"./uz-latn": 285,
	"./uz-latn.js": 285,
	"./uz.js": 284,
	"./vi": 286,
	"./vi.js": 286,
	"./x-pseudo": 287,
	"./x-pseudo.js": 287,
	"./yo": 288,
	"./yo.js": 288,
	"./zh-cn": 289,
	"./zh-cn.js": 289,
	"./zh-hk": 290,
	"./zh-hk.js": 290,
	"./zh-tw": 291,
	"./zh-tw.js": 291
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
webpackContext.id = 422;

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dev_dev__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_faqs_faqs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_coins_listing_coins_listing__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__["a" /* InvestedCoinsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Coins Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_invested_coins_invested_coins__["a" /* InvestedCoinsPage */] },
            { title: 'Add Coins', component: __WEBPACK_IMPORTED_MODULE_6__pages_coins_listing_coins_listing__["a" /* CoinsListingPage */] },
            { title: 'Faqs', component: __WEBPACK_IMPORTED_MODULE_5__pages_faqs_faqs__["a" /* FaqsPage */] },
            { title: 'DevPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_dev_dev__["a" /* DevPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menuQ">\n    <br/>\n    <div text-center>\n      <h2 style="font-family: scriptina; color:gold;">Coin Folio</h2>\n    </div>\n    <br/>\n    <ion-item *ngFor="let p of pages; let i=index">\n      <button menuClose ion-item (click)="openPage(p)">\n        <ion-icon *ngIf="i==1" name="add"></ion-icon>\n        <ion-icon *ngIf="i==0" name="md-filing"></ion-icon>\n        <ion-icon *ngIf="i==2" name="help"></ion-icon>\n        <ion-icon *ngIf="i==3" name="md-person"></ion-icon>\n          {{p.title}}\n      </button>\n    </ion-item>\n    <br/>\n    <div class="quote">\n        "{{quoteStr}}"\n    </div>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCoinPage = (function () {
    function AddCoinPage(navCtrl, navParams, storage, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.coinslist = {};
        this.unitsN = '';
        this.unitCostBTCN = '';
        this.unitCostINRN = '';
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        this.symbol = this.navParams.get('symbol');
        this.add = this.navParams.get("add");
        this.unitCostBTC = this.navParams.get("priceBTC");
        this.unitCostINR = this.navParams.get("priceINR");
        //console.log(typeof(this.add), " ", this.add);
        this.addCoinForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            unitsN: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '' }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9.0-9]*')])),
            unitCostBTCN: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '' }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9.0-9]*')])),
            unitCostINRN: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({ value: '' }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[0-9.0-9]*')]))
        });
    }
    AddCoinPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad AddCoinPage');
        if (this.add)
            this.title = "Add";
        else {
            this.title = "Edit";
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            var i_1;
            this.storage.get("savedCoins").then(function (res) {
                if (res) {
                    //console.log("In if");
                    _this.list = JSON.parse(res);
                    //console.log("this.list json: ",this.list);
                    for (i_1 = 0; i_1 < _this.list.length; i_1++) {
                        if (_this.list[i_1].id == _this.id)
                            break;
                    }
                    if (i_1 < _this.list.length) {
                        _this.id = _this.list[i_1].id;
                        _this.name = _this.list[i_1].name;
                        _this.symbol = _this.list[i_1].symbol;
                        _this.unitCostBTC = _this.list[i_1].unitCostBTC;
                        _this.unitCostINR = _this.list[i_1].unitCostINR;
                        _this.units = _this.list[i_1].units;
                    }
                }
                loading_1.dismiss();
            });
        }
        //console.log(typeof(this.add), " ", this.add);
    };
    AddCoinPage.prototype.clear = function () {
        this.storage.clear();
    };
    AddCoinPage.prototype.saveCoin = function () {
        var _this = this;
        var i;
        this.storage.get("savedCoins").then(function (res) {
            if (res) {
                _this.list = JSON.parse(res);
                console.log("this.list json: ", _this.list);
                for (i = 0; i < _this.list.length; i++) {
                    if (_this.list[i].id == _this.id)
                        break;
                }
                //existing coin
                if (i < _this.list.length) {
                    _this.list[i].id = _this.id;
                    _this.list[i].name = _this.name;
                    _this.list[i].symbol = _this.symbol;
                    _this.list[i].unitCostBTC = _this.unitCostBTC;
                    _this.list[i].unitCostINR = _this.unitCostINR;
                    _this.list[i].units = _this.units;
                    _this.list[i].expenseBTC = (_this.unitCostBTC) * (_this.units);
                    _this.list[i].expenseINR = (_this.unitCostINR) * (_this.units);
                    _this.list[i].currCostBTC = 0;
                    _this.list[i].currCostINR = 0;
                    _this.list[i].roiBTC = 0;
                    _this.list[i].roiINR = 0;
                    _this.list[i].market = null;
                    console.log(_this.list[i]);
                }
                else {
                    console.log(_this.id);
                    _this.list.push({
                        id: _this.id,
                        name: _this.name,
                        symbol: _this.symbol,
                        unitCostBTC: _this.unitCostBTC,
                        unitCostINR: _this.unitCostINR,
                        units: _this.units,
                        expenseINR: (_this.unitCostINR) * (_this.units),
                        expenseBTC: (_this.unitCostBTC) * (_this.units),
                        currCostBTC: 0,
                        currCostINR: 0,
                        roiBTC: 0,
                        roiINR: 0,
                        market: null
                    });
                }
                //save to storage
                _this.storage.set("savedCoins", JSON.stringify(_this.list));
            }
            else
                _this.storage.set("savedCoins", JSON.stringify([{
                        id: _this.id,
                        name: _this.name,
                        symbol: _this.symbol,
                        unitCostBTC: _this.unitCostBTC,
                        unitCostINR: _this.unitCostINR,
                        units: _this.units,
                        expenseINR: (_this.unitCostINR) * (_this.units),
                        expenseBTC: (_this.unitCostBTC) * (_this.units),
                        currCostBTC: 0,
                        currCostINR: 0,
                        roiBTC: 0,
                        roiINR: 0,
                        market: null
                    }]));
            _this.navCtrl.pop();
        });
    };
    AddCoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-coin',template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/add-coin/add-coin.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>{{title}} {{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <p style="color:#f0f0f0">Please ensure you are adding correct values! <br/>Invalid inputs might corrupt the records.</p>\n  </div>\n  <form [formGroup]="addCoinForm" >\n    <ion-list text-wrap no-lines>\n      <ion-item>\n        <ion-label style="border-right: 0px;">Coin name</ion-label>\n        <ion-input value="{{name}}" [ngModelOptions]="{standalone: true}" disabled [(ngModel)]="name"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label style="border-right: 0px;">Coin Symbol</ion-label>\n        <ion-input value="{{symbol}}" [ngModelOptions]="{standalone: true}" disabled [(ngModel)]="symbol"></ion-input>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label fixed>Units bought</ion-label>\n        <ion-input formControlName="unitsN"  class="form-control" [(ngModel)]="units" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Per unit cost(BTC)</ion-label>\n        <ion-input formControlName="unitCostBTCN"   class="form-control" [(ngModel)]="unitCostBTC" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Per unit cost(INR)</ion-label>\n        <ion-input formControlName="unitCostINRN"  class="form-control"  [(ngModel)]="unitCostINR"  ></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div text-center>\n      <button ion-button  color="darkBlue" [disabled]="!addCoinForm.valid" (click)="saveCoin()">Add Coin to records</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/add-coin/add-coin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddCoinPage);
    return AddCoinPage;
}());

//# sourceMappingURL=add-coin.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_coins_service_coins_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_coin_add_coin__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoinsListingPage = (function () {
    function CoinsListingPage(navCtrl, http, loadingCtrl, toastCtrl, datas, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.datas = datas;
        this.storage = storage;
        this.objectKeys = Object.keys;
        this.url = "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=50&start=";
        this.displayAddCoins = false;
        this.range = "Top500";
        var loader = this.loadingCtrl.create({
            content: "Loading a lot of data. Please be patient...",
            spinner: 'crescent'
        });
        var toast = toastCtrl.create({
            message: 'Coins were loaded successfully',
            duration: 3000,
        });
        loader.present();
        this.datas.getCoinsList(0).subscribe(function (res) {
            _this.coins = JSON.parse(res["_body"]);
            _this.coinsTemp = _this.coins;
            console.log(_this.coins);
            loader.dismiss();
            toast.present();
            _this.storage.get("savedCoins").then(function (val) {
                _this.investedCoins = JSON.parse(val);
                if (_this.investedCoins == null) {
                    _this.displayAddCoins = true;
                    return;
                }
                console.log("saved coins log", _this.investedCoins);
                var cSymbols = [];
                for (var i = 0; i < _this.investedCoins.length; i++)
                    cSymbols.push(_this.investedCoins[i]["symbol"]);
                _this.investedCoins = cSymbols;
                console.log("invest coin sym array", _this.investedCoins);
            });
        });
        /*
        this.getCoins(this.url+"0").subscribe( res => {
          this.coins = res;
          this.coinsTemp = res;
          console.log(this.coins);
          loader.dismiss();
          toast.present();
        });*/
    }
    CoinsListingPage.prototype.onInput = function (ev) {
        console.log("called");
        // Reset items back to all of the items
        this.coins = this.coinsTemp;
        // set q to the value of the searchbar
        var q = ev.target.value;
        console.log(q);
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.coins = this.coins.filter(function (v) {
            if (v.name && q) {
                if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.coins.length);
    };
    CoinsListingPage.prototype.onCancel = function ($event) {
        this.searchTerm = '';
        this.coins = this.coinsTemp;
    };
    CoinsListingPage.prototype.segmentChanged = function ($event) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Loading a lot of data. Please be patient...",
            spinner: 'crescent'
        });
        var toast = this.toastCtrl.create({
            message: 'Coins were loaded successfully',
            duration: 3000,
        });
        console.log(this.range);
        var tUrl = this.url;
        loader.present();
        if (!this.range.localeCompare("Top500")) {
            this.datas.getCoinsList(0).subscribe(function (res) {
                console.log("Returned data", "\n", res);
                _this.coins = JSON.parse(res["_body"]);
                _this.coinsTemp = _this.coins;
                console.log("only data", _this.coins);
                loader.dismiss();
                toast.present();
            });
        }
        else {
            this.datas.getCoinsList(500).subscribe(function (res) {
                console.log("Returned data", "\n", res);
                _this.coins = JSON.parse(res["_body"]);
                _this.coinsTemp = _this.coins;
                console.log("only data", _this.coins);
                loader.dismiss();
                toast.present();
            });
        }
    };
    CoinsListingPage.prototype.getCoins = function (tUrl) {
        console.log(tUrl);
        return this.http.get(tUrl).map(function (res) { return (res.json()); });
    };
    CoinsListingPage.prototype.addCoin = function (coinId, name, symbol, priceBtc, priceInr) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_coin_add_coin__["a" /* AddCoinPage */], {
            id: coinId,
            name: name,
            symbol: symbol,
            add: true,
            priceBTC: priceBtc,
            priceINR: priceInr
        });
    };
    CoinsListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coins-listing',template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/coins-listing/coins-listing.html"*/'<ion-header >\n  <ion-toolbar color="dark">\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button menuToggle start>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8>\n        <ion-title>\n          Add Coins\n        </ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-segment [(ngModel)]="range" color="primary" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="Top500">\n        Top-500\n      </ion-segment-button>\n      <ion-segment-button value="1000">\n        500-1000\n      </ion-segment-button>\n    </ion-segment>\n    <ion-grid class="headerId">\n      <ion-row text-center>\n        <ion-col col-4>Name</ion-col>\n        <ion-col col-5>Last Price</ion-col>\n        <ion-col col-3>&Delta; 1hr/24hr</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-searchbar placeholder="Search using coin name ..." [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)" [animated]="true" debounce="350">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list [virtualScroll]="coins" approxItemHeight="140px">\n    <ion-item *virtualItem="let coin">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3 text-center>\n            <h3 class="coinName" text-wrap>{{coin.name}}</h3>\n            <p class="coinSymbol">({{coin.symbol}})</p>\n            <ion-icon [ngStyle]="{\'color\': investedCoins?.indexOf(coin.symbol)!=-1 ? \'#30D060\':\'#161C27\'}" name="checkmark-circle"></ion-icon>\n          </ion-col>\n          <ion-col col-5>\n            <h3 class="lastPriceBTC">{{coin.price_btc}} BTC</h3>\n            <p class="lastPrice"> {{coin.price_inr | currency:"₹":"false"}}</p>\n            <p class="lastPrice"> {{coin.price_usd | currency:"$":"false"}}</p>\n          </ion-col>\n          <ion-col col-2>\n            <h3 class="change1hr" [ngStyle]="{\'color\': coin.percent_change_1h > 0 ? \'#32db64\' : \'#f53d3d\' }">{{coin.percent_change_1h}} %</h3>\n            <p class="change24hr" [ngStyle]="{\'color\': coin.percent_change_24h > 0 ? \'#32db64\' : \'#f53d3d\' }">{{coin.percent_change_24h}} %</p>\n          </ion-col>\n          <ion-col col-2 text-center>\n            <button ion-button round (click)="addCoin(coin.id,coin.name,coin.symbol,coin.price_btc,coin.price_inr)" clear color="gold">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row style="position:relative;top:-35px;">\n          <ion-col col-4 text-center>\n          </ion-col>\n          <ion-col col-4>\n            <p text-center>Max supply:</p>\n              <p>{{coin.max_supply?coin.max_supply:"Not defined"}} {{coin.symbol}}</p>\n          </ion-col>\n          <ion-col col-4>\n            <p text-center>Market Cap:</p>\n              <p>{{coin.market_cap_usd}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n\n  <!--\n  <ion-list>\n    <ion-card *ngFor="let coin of coins">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-8>\n            <h2>\n              <span class="rank">{{coin.rank}}</span>\n              <span class="name">{{coin.name}}</span>\n              <span class="symbol">({{coin.symbol}})</span>\n            </h2>\n          </ion-col>\n          <ion-col col-4 text-center>\n            <button ion-button round (click)="addCoin(coin.id,coin.name,coin.symbol)" clear color="primary">\n              <ion-icon name="add-circle"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row class="text-center">\n          <ion-col>\n            {{coin.price_inr | currency:"₹":"false"}}\n          </ion-col>\n          <ion-col>\n            {{coin.price_btc}} BTC\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h2>Market:</h2>\n      <ion-grid>\n        <ion-row text-center>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_1h > 0 ? \'green\' : \'red\' }"> % 1hr </ion-col>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_24h > 0 ? \'green\' : \'red\' }"> % 24hrs </ion-col>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_7d > 0 ? \'green\' : \'red\' }"> % 7days </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_1h > 0 ? \'green\' : \'red\' }"> {{coin.percent_change_1h}} </ion-col>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_24h > 0 ? \'green\' : \'red\' }"> {{coin.percent_change_24h}} </ion-col>\n          <ion-col col-4 [ngStyle]="{\'color\': coin.percent_change_7d > 0 ? \'green\' : \'red\' }"> {{coin.percent_change_7d}} </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/coins-listing/coins-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_coins_service_coins_service__["a" /* CoinsServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CoinsListingPage);
    return CoinsListingPage;
}());

//# sourceMappingURL=coins-listing.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the DevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevPage = (function () {
    function DevPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coin = "VERGE";
        this.btcAddr = "1PQDXvUEEumCWUGjeY29oJHE2w3HsMaHL8";
        this.ethAddr = "0xb16f14772e4d32963cea7e95ef8d0575e72afeb1";
        this.ltcAddr = "LbCxYC5VTc1bzJTatyFJdEdf2VsALGDAWA";
        this.dashAddr = "XxkmWEMq6bVZT9EHbuU5Ch5YHRKVDUrSmA";
        this.vergeAddr = "D9zPkvg25h9pAruVFCRL7GGMDsuSgz9DRp";
    }
    DevPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevPage');
    };
    DevPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dev',template:/*ion-inline-start:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/dev/dev.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Developer\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-wrap>\n<br/>\n\n<ion-card>\n  <ion-card-header>\n    Author\n  </ion-card-header>\n  <ion-card-content>\n    <ion-avatar item-left>\n      <img src="assets/imgs/me.jpg" >\n    </ion-avatar>\n    <br/>\n    <div padding-left padding-right padding-bottom>\n      <h2  style="font-size:1.5em; text-align: center;">K Sai Kiran</h2>\n      <p text-wrap text-center style="font-size:1.5rem;">\n        FOSS Enthusiastic | Competitive Programmer | CSE Undergrad\n      </p>\n      <ion-row>\n        <ion-col col-4>\n          <a href="https://github.com/ksaikiranr" target="_blank"> <ion-icon name="logo-github" color="dark"></ion-icon></a>\n        </ion-col>\n        <ion-col col-4>\n        <a href="https://facebook.com/ksaikiranrp" target="_blank">\n          <ion-icon name="logo-facebook" color="purple"></ion-icon></a>\n        </ion-col>\n        <ion-col col-4>\n          <a href="https://linkedin.com/in/ksaikiranr" target="_blank"><ion-icon color="secondary" name="logo-linkedin"></ion-icon></a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card-content>\n</ion-card>\n<hr/>\n  <ion-card>\n    <ion-card-header> Build details </ion-card-header>\n    <ion-card-content>\n        <div padding>\n          <ion-row>\n            <ion-col col-4 style="text-align:left !important">\n               Developer:\n            </ion-col>\n            <ion-col col-8 style="text-align:left !important">\n              K SAI KIRAN\n            </ion-col>\n          </ion-row>\n        <hr/>\n        <ion-row>\n          <ion-col col-4 style="text-align:left !important">\n             Usage:\n          </ion-col>\n          <ion-col col-8 style="text-align:left !important">\n            Crypto asset management.\n          </ion-col>\n        </ion-row>\n        <hr/>\n        <ion-row>\n          <ion-col col-4 style="text-align:left !important">\n               App version:\n          </ion-col>\n          <ion-col col-8 style="text-align:left !important">\n               1.0.1\n          </ion-col>\n        </ion-row>\n      <hr/>\n        <ion-row>\n          <ion-col col-4 style="text-align:left !important">\n             Operating system:\n          </ion-col>\n          <ion-col col-8 style="text-align:left !important">\n            Android 4.0 or above\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-card-content>\n  </ion-card>\n<hr/>\n<ion-card>\n  <ion-card-header>\n    Donation addresses\n  </ion-card-header>\n  <ion-card-content>\n    <div padding>\n      <h2 text-center> Please consider making a small donation to following addresses.</h2>\n      <br/>\n      <ion-segment [(ngModel)]="coin">\n        <ion-segment-button value="BTC">\n          BTC\n        </ion-segment-button>\n        <ion-segment-button value="ETH">\n          ETH\n        </ion-segment-button>\n        <ion-segment-button value="VERGE">\n          VERGE\n        </ion-segment-button>\n        <ion-segment-button value="LTC">\n          LTC\n        </ion-segment-button>\n        <ion-segment-button value="DASH">\n          DASH\n        </ion-segment-button>\n      </ion-segment>\n      <div class="qCode" *ngIf=\'coin=="BTC"\'>\n        <ngx-qrcode [qrc-value]="btcAddr"></ngx-qrcode>\n        <div text-center style="border: 3px solid rgba(234,75,64,.5); margin: 3px; font-weight: 650;" >\n          {{btcAddr}}\n        </div>\n        <div text-center><button text-center ion-button (click)="copy(coin)" roundoutline>Copy to clipboard</button></div>\n        <br/>\n      </div>\n      <div class="qCode" *ngIf=\'coin=="ETH"\'>\n        <ngx-qrcode [qrc-value]="ethAddr"></ngx-qrcode>\n        <div text-center style="border: 3px solid rgba(234,75,64,.5); margin: 3px; font-weight: 650;" >\n          {{ethAddr}}\n        </div>\n        <div text-center><button text-center ion-button (click)="copy(coin)" roundoutline>Copy to clipboard</button></div>\n        <br/>\n      </div>\n      <div class="qCode" *ngIf=\'coin=="LTC"\'>\n        <ngx-qrcode [qrc-value]="ltcAddr"></ngx-qrcode>\n        <div text-center style="border: 3px solid rgba(234,75,64,.5); margin: 3px; font-weight: 650;" >\n          {{ltcAddr}}\n        </div>\n        <div text-center><button text-center ion-button (click)="copy(coin)" roundoutline>Copy to clipboard</button></div>\n        <br/>\n      </div>\n      <div class="qCode" *ngIf=\'coin=="VERGE"\'>\n        <ngx-qrcode [qrc-value]="vergeAddr"></ngx-qrcode>\n        <div text-center style="border: 3px solid rgba(234,75,64,.5); margin: 3px; font-weight: 650;" >\n          {{vergeAddr}}\n        </div>\n        <div text-center><button text-center ion-button (click)="copy(coin)" roundoutline>Copy to clipboard</button></div>\n        <br/>\n      </div>\n      <div class="qCode" *ngIf=\'coin=="DASH"\'>\n        <ngx-qrcode [qrc-value]="dashAddr"></ngx-qrcode>\n        <div text-center style="border: 3px solid rgba(234,75,64,.5); margin: 3px; font-weight: 650;" >\n          {{dashAddr}}\n        </div>\n        <div text-center><button text-center ion-button (click)="copy(coin)" roundoutline>Copy to clipboard</button></div>\n        <br/>\n      </div>\n\n    </div>\n  </ion-card-content>\n</ion-card>\n<hr/>\n  <ion-card>\n    <ion-card-header>\n      Powered by\n    </ion-card-header>\n    <ion-card-content>\n      <div padding>\n        <ion-row>\n          <ion-col col-4>\n            <ion-icon name="ionic" color="darkBlue"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="logo-angular" color="danger"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="logo-android" color="darkGreen"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-icon name="logo-html5" color="darkGreen"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="logo-css3" color="darkBlue"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="logo-sass" color="dark"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <ion-icon name="logo-nodejs" color="dark"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="logo-google" color="danger"></ion-icon>\n          </ion-col>\n          <ion-col col-4>\n            <ion-icon name="appstore" color="darkGreen"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-card-content>\n  </ion-card>\n<div class="footer" text-wrap>\n  HANDCRAFTED WITH <ion-icon name="heart" style=\'color:#FF0000; font-size: 1.1em !important; padding: 0; margin: 0;\'></ion-icon><br/> BY K SAI KIRAN <br/>\n  Copyright &copy; 2017 ALL RIGHTS RESERVED\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/run/media/sk/data 1/ionicApps/CoinFolio/src/pages/dev/dev.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DevPage);
    return DevPage;
}());

//# sourceMappingURL=dev.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinsServiceProvider = (function () {
    function CoinsServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.getCoinsValueUrl = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";
        this.getInINR = "&tsyms=BTC,USD,INR";
        console.log('Hello DatasProvider Provider');
    }
    /*savedCoins services start*/
    //Gets value of each coin in INR,BTC
    CoinsServiceProvider.prototype.getCoinsValue = function (symbols) {
        console.log("DataS: sym arr", symbols);
        console.log("DataS: url", this.getCoinsValueUrl + symbols + this.getInINR);
        return this.http.get(this.getCoinsValueUrl + symbols + this.getInINR)
            .map(this.extractCoins);
    };
    CoinsServiceProvider.prototype.extractCoins = function (res) {
        var body = res.json();
        console.log("this is body", body);
        return body || [];
    };
    //end getCoins
    //Getting chart data for specific coin
    CoinsServiceProvider.prototype.getChart = function (id) {
        var _this = this;
        console.log("https://min-api.cryptocompare.com/data/histoday?fsym=" + id + "&tsym=BTC&limit=30&aggregate=1");
        return this.http.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + id + "&tsym=BTC&limit=30&aggregate=1")
            .map(function (result) { return _this.result = result; });
    };
    //Chart end
    /*end savedCoins services */
    /*CoinListing services start*/
    //List coins
    CoinsServiceProvider.prototype.getCoinsList = function (start) {
        var _this = this;
        if (start == 0)
            return this.http.get("https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=500")
                .map(function (result) { return _this.result = result; });
        return this.http.get("https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=501&start=1000")
            .map(function (result) { return _this.result = result; });
    };
    CoinsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], CoinsServiceProvider);
    return CoinsServiceProvider;
    var _a, _b;
}());

//# sourceMappingURL=coins-service.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map