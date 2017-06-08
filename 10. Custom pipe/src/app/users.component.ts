import { Component } from '@angular/core';

var Names = [
    {id: 1, fname: 'Guru', location: 'Ambala'},
    {id: 2, fname: 'Singh', location: 'Chandigarh'},
    {id: 3, fname: 'Bhatia', location: 'Bangalore'}
];
@Component ({
  selector: 'my-usersComp',
  template: `<label>Search by name</label>
                <input type="text" placeholder="Enter name to search" [(ngModel)]="search"/>
    <p *ngIf="names.length == 0 ">No Name to display</p>
    <table *ngIf="names.length > 0 ">
      <thead>
        <th>Name</th>
        <th>Location</th>
      </thead>
      <tbody>
        <tr *ngFor="let name of names | filter:search ">
          <td>{{name.fname}}</td>
          <td>{{name.location}}</td>
        </tr>
      </tbody>
    </table>`,
  styles: [`table {
  border-style: double;
  }`],
})

export class UsersComponent {

  names= Names;
}
