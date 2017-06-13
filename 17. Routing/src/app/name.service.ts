import { Injectable,OnInit } from '@angular/core';

@Injectable()
export class NameService implements OnInit{

    //type one
    public data:any;

    console.log(data);


    //type two
    public obj= {};
    setOption(option:any, value:any) {
    this.obj[option] = value;
      console.log(this.obj);
   }
    getConfig() {
    console.log("get"+this.obj);
        return this.obj;
    }

}
