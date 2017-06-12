import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Routing Implemented</h1>
                <div>
                  <a routerLink='/users'>Users</a>
                  <a routerLink='/customer'>Customer</a>

                  <router-outlet></router-outlet>`
})
export class AppComponent  {}
