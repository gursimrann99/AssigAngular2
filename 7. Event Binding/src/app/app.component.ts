import { Component } from '@angular/core';

var count= 0;

@Component({
selector: 'my-app',
template: `<button (click)="onClick(input.value)">Increment the counter</button>
            <input type="text" #input placeholder="enter value" (keydown)="onChange(input.value)"/>`
})
export class AppComponent {

    onClick() {
       count++;
       console.log("Counter: "+count);
    }
    onChange(value1:any){
    console.log(value1);
    }
}
