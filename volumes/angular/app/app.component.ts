import {Component} from 'angular2/core';
//Allows us to use Angular 2.0's Http service
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';

@Component({
	selector: 'my-app',
	//Allows us to inject a convenient array(HTTP_PROVIDERS) into our AppComponent Class
	viewProviders: [HTTP_PROVIDERS],
	//Notice the double braces-they allow us to bind data from our class that updates automatically
	template: `
    	<h1>{{ counter }} Hi there my name is {{ name }}</h1>
    	<button (click)="onClick()"> Get Name </button>
    `

})
export class AppComponent {
	//Every time we hit the button this will increment
	public counter: number = 0;
	//Will show our 'name' retrieved from the server - the binded variable in our template
	public name: string = '';
	//Url that we will request from that returns us our name
	public url: string = 'http://127.0.0.1:4000/'

	//Initializes our AppComponent class and adding 'public' for http
	//connects the http request object to this class as a class variable
	constructor(public http: Http) {}

	//Function that is run when we click the button through the (click) property we set 
	//on our button in the template
	onClick() {
		//Lets retrieve data from the url
		this.http.get(this.url)
			// Subscribe to the observable to get the parsed people object and attach it to the
			.subscribe(res => {
				//Lets turn the data into readable json and get the first index
				var data = res.json()[0];
				//Each time we click the button we'll increment it by one to show how the variable
				//is immediately reflected
				this.counter++;
				//Lets change our name that we got back from the Node JS Server
				this.name = data.first + ' ' + data.last;

			})
	}

}
