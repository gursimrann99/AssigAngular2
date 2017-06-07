import { Component } from '@angular/core';

var Names = [
    {id: 1, fname: 'Guru', location: 'Ambala'},
    {id: 2, fname: 'Singh', location: 'Chandigarh'},
    {id: 3, fname: 'Bhatia', location: 'Bangalore'}
];
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
          <td>{{name.fname | uppercase}}</td>
          <td>{{name.location | lowercase}}</td>
        </tr>
      </tbody>
    </table>
    <h3>{{230000 | currency:'INR':true}}</h3>
    <h4>{{date | date:'shortDate'}}</h4>`,
  styles: [`table {
  border-style: double;
  }`]
})

export class UsersComponent {

  date = new Date();
  names= Names;
}
