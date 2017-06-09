import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  getNames() {
    return [
        {id: 1, fname: 'Guru', location: 'Ambala'},
        {id: 2, fname: 'Singh', location: 'Chandigarh'},
        {id: 3, fname: 'Bhatia', location: 'Bangalore'}
    ]
  }

}
