import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<label>Enter something: </label><input type="text" #pValue (keyup)="0"><br>
              <my-usersComp [parentValue]="pValue.value"></my-usersComp>`,
})
export class AppComponent  {}
