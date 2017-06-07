import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>Hello {{head}}</h3>
                  <p>Name: {{func()}}</p>
                  <p>Here header is the property defined in component class where as name is returned by a function/method`,

})
export class AppComponent  {
    head = 'Header';
    name = 'Guru';
    func() {
      return this.name;
    }
  }
