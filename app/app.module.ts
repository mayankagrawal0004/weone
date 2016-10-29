import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import {WelcomeComponent} from './work/welcome.component';

import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';
import {ProductModule} from './work/product.module';

@NgModule({
  imports: [ BrowserModule,HttpModule,RouterModule.forRoot([
      {path: 'welcome',component:WelcomeComponent},
       {path: '',redirectTo:'welcome', pathMatch:'full'},
        {path: '**',redirectTo:'welcome', pathMatch:'full'},
  ]),
  ProductModule
  ],
  exports:[RouterModule],
  declarations: [ AppComponent,
  WelcomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
