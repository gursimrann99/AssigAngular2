import { Component, OnInit } from '@angular/core';
import { ActivateRoute } from '@angular/router';
@Component ({
  template: '',
})

export class UsersDetailComp {
    user
    constructor (private route: ActivateRoute){}

    ngOnInit() {
     let id= this.route.snapshot.params['id'];
    }
}
