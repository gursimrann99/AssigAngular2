import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NameService {
  private _url: string = "app/data/record.json"
  constructor(private _http: Http) {}
  getNames() {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
      console.log("sdfdas"+response);
  }
}
