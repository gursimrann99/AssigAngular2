import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>This paragraph styling is in parent component</p>
                <my-usersComp></my-usersComp>`,
  styles: [`p {
     font-weight: 800;
  }`],
})
export class AppComponent  {}
