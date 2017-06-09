import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input type="text" #pValue (keyup)="0"><br>
              <my-usersComp [parentValue]="pValue.value"></my-usersComp>`,
})
export class AppComponent implements OnDestroy {
 ngOnDestroy() {
   console.log("adf");
 }

}
