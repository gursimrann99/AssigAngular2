import { Component } from '@angular/core';
import { EventEmitter }from '@angular/core';
@Component ({
  selector: 'my-usersComp',
  template: ` <label>Click on any user that will be displayed in parent comp</label><br>
            <ul>
              <li id="1" (click)="onClick(1)">Guru</li>
              <li id="2" (click)="onClick(2)">Bhatia</li>
              <li id="3" (click)="onClick(3)">Singh</li>
              </ul>
              <label>Enter something: </label><input type="text" #childValue (keyup)="onChange(childValue.value)">`,

  outputs: ['childEvent', 'child2Event']
})

export class UsersComponent {
    childEvent = new EventEmitter<string>();
    onChange(value:string){
      this.childEvent.emit(value);
    }
    child2Event = new EventEmitter<string>();
    onClick(id){
      this.child2Event.emit(document.getElementById(id).innerHTML);
    }
}
