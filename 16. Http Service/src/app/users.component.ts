import { Component, OnInit } from '@angular/core';
import { NameService } from './name.service';

@Component ({
  selector: 'my-usersComp',
  template: `
    <p *ngIf="names.length == 0 ">No Name to display</p>
    <table *ngIf="names.length > 0 ">
      <thead>
        <th>Name</th>
        <th>Location</th>
      </thead>
      <tbody>
        <tr *ngFor="let name of names">
          <td>{{name.fname}}</td>
          <td>{{name.location}}</td>
        </tr>
      </tbody>
    </table>`,
  styles: [`table {
  border-style: double;
  }`],
  providers: [NameService]
})
export class UsersComponent implements OnInit{
  names:any=[];
  constructor(private _nameService: NameService){};

  ngOnInit(){
    this._nameService.getNames()
    .subscribe(resNames => this.names = resNames);
  }
}
