import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component ({
  selector: 'my-usersComp',
  template: `<h3>Users Comp</h3>
              <ul>
                <li (click)="onClick(user)" *ngFor= "let user of users">{{user.name}}</li>
              </ul>`,
})

export class UsersComponent {
    constructor (private router: Router){}
    users= [
      { id: 1, name: "Guru", gender: "male", age: "22" },
      { id: 2, name: "Emma", gender: "female", age: "24" },
      { id: 3, name: "Singh", gender: "male", age: "23" },
      { id: 4, name: "kim", gender: "female", age: "21" }
    ]

    onClick(user) {
     this.router.navigate(['/userDetail',user.id ]);
    }
}
