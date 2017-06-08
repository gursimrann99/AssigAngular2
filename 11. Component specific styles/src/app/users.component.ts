import { Component } from '@angular/core';

@Component ({
  selector: 'my-usersComp',
  template: '<p> This paragraph styling is in child component</p>',
  styles: [`p {
     font-family: monospace;
  }`],
})

export class UsersComponent { }
