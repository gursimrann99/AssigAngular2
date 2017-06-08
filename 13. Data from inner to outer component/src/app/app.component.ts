import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-usersComp (childEvent)="childValue=$event" (child2Event)="child2Value=$event" ></my-usersComp><br>
              <label>Displayed in parent comp from child: </label>{{childValue}}  {{child2Value}}`,
})
export class AppComponent  {
    public childValue: string;
}
