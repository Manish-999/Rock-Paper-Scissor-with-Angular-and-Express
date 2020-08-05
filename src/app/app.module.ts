import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ResultService} from './result.service'


import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
