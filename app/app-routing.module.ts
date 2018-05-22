import { NgModule } from '@angular/core';
import {RegisterEmplComponent} from './register-empl/register-empl.component';
import {RouterModule,Routes} from '@angular/router';
import {ViewemployeeComponent} from './viewemployee/viewemployee.component';
import {SuccesstransComponent} from './successtrans/successtrans.component';
import {SearchcomponentComponent} from './searchcomponent/searchcomponent.component';

const routes : Routes=[
  //{ path: '', redirectTo: '/register', pathMatch: 'full' },
  {path :'register',component:RegisterEmplComponent},
  {path : 'view/delete/:employeeid',component:SuccesstransComponent},
  {path : 'view',component:ViewemployeeComponent},
  {path : 'add',component : SuccesstransComponent},
  {path : 'view/update',component:SuccesstransComponent},
  {path : 'search',component:SearchcomponentComponent}

];


@NgModule({
  exports : [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
