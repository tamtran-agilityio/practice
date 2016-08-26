import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {App} from './app/app';
import {createStore} from 'redux';
import {todoReducer} from './app/reducer/todoReducer';
import {TodoActions} from './app/actions/todoAction';
import {APP_DECLARATIONS} from './app/component/app-declarations';

const appStore = createStore(todoReducer);

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    App,
    ...APP_DECLARATIONS
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore },
    TodoActions 
  ],
  bootstrap: [ App ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);