import { Component } from '@angular/core';

@Component ({
  selector: 'my-usersComp',
  template: '<label>Which will be displayed here in child comp: </label>{{parentValue}}',
  inputs: ['parentValue']
})

export class UsersComponent {
  public parentValue: string;
}
