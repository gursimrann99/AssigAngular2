import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NameService } from './name.service';

@Component ({
  template: '{{userId}}',
})

export class UsersDetailComp implements OnInit{
    public userId:any;

    constructor (private route: ActivatedRoute, public services: NameService){}


    ngOnInit() {
    console.log("inside details"+this.services.getConfig());
  //  this.userId = this.services.getConfig();


    }
}
