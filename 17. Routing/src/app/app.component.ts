import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Routing Implemented</h1>
                <div>
                  <h2><a routerLink='/users'>Users</a>
                  <a routerLink='/customer'>Customer</a></h2>

                  <router-outlet></router-outlet>`
})
export class AppComponent  {}
