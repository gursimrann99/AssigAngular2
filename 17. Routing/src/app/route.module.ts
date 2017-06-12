import { NgModule }      from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users.component';
import { CustomerComp } from './customer.comp';

const routes: Routes =[
    { path: 'users', component: UsersComponent },
    { path: 'customer', component: CustomerComp }
 ];

 @NgModule({
   imports:      [ RouterModule.forRoot(routes) ],
   exports:     [ RouterModule ]
 })

 export class RouteModule { }
 export const routingComps = [ UsersComponent, CustomerComp ]
