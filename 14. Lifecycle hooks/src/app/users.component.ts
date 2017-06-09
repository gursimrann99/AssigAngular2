import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component ({
  selector: 'my-usersComp',
  template: '<h3> The country user belong to: {{parentValue}}</h3>',
    inputs: ['parentValue']
})

export class UsersComponent implements OnInit,OnDestroy, OnChanges{
      public parentValue: string;
      ngOnInit() {
      console.log("OnInit called");
      }
      ngOnDestroy() {
      console.log("OnDestroy called");
      }
      ngOnChanges() {
      console.log("OnChanges called");
      }


 }
