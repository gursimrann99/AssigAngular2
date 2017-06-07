import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: '<input [value]="str" required="{{boolean}}"/>',
})
export class AppComponent {
public str="Hey Angular2";
public boolean="true";
}
