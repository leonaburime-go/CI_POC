System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //Initializes our AppComponent class and adding 'public' for http
                //connects the http request object to this class as a class variable
                function AppComponent(http) {
                    this.http = http;
                    //Every time we hit the button this will increment
                    this.counter = 0;
                    //Will show our 'name' retrieved from the server - the binded variable in our template
                    this.name = '';
                    //Url that we will request from that returns us our name
                    this.url = 'http://127.0.0.1:4000/';
                }
                //Function that is run when we click the button through the (click) property we set 
                //on our button in the template
                AppComponent.prototype.onClick = function () {
                    var _this = this;
                    //Lets retrieve data from the url
                    this.http.get(this.url)
                        .subscribe(function (res) {
                        //Lets turn the data into readable json and get the first index
                        var data = res.json()[0];
                        //Each time we click the button we'll increment it by one to show how the variable
                        //is immediately reflected
                        _this.counter++;
                        //Lets change our name that we got back from the Node JS Server
                        _this.name = data.first + ' ' + data.last;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //Allows us to inject a convenient array(HTTP_PROVIDERS) into our AppComponent Class
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        //Notice the double braces-they allow us to bind data from our class that updates automatically
                        template: "\n    \t<h1>{{ counter }} Hi there my name is {{ name }}</h1>\n    \t<button (click)=\"onClick()\"> Get Name </button>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map