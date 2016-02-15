import {bootstrap}  from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
//We will be creating this component in our app.component.ts file
import {AppComponent} from './app.component';

//Lets ‘bootstrap’ or generate our program
bootstrap(AppComponent, [HTTP_PROVIDERS]);
