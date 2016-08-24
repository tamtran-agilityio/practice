import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {App} from './app/app';
import {createStore} from 'redux';
import {rootReducer} from './app/reducer/reducer';
import {TodoActions} from './app/actions/action';
import {APP_DECLARATIONS} from './app/declarations';

const appStore = createStore(rootReducer);

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    App,
    ...APP_DECLARATIONS
  ],
  providers: [
    { 
      provide: 'AppStore', 
      useValue: appStore 
    },
    TodoActions 
  ],
  bootstrap: [ App ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);