import { Component } from '@angular/core';

var count= 0;

@Component({
selector: 'my-app',
template: `<input type="text" value="Hello" [(ngModel)]="name" /><br>
            Name:{{name}}`
})
export class AppComponent {

  public name= "hello";
}
