import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterEmplComponent } from './register-empl/register-empl.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import {MycontrolService} from './mycontrol.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SuccesstransComponent } from './successtrans/successtrans.component';
import {NgForm, FormsModule} from '@angular/forms';
import { UpdatecompComponent } from './updatecomp/updatecomp.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEmplComponent,
    ViewemployeeComponent,
    SuccesstransComponent,
    UpdatecompComponent,
    SearchcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers :[MycontrolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
