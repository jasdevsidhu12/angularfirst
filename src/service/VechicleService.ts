import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class VechileService {
  // constructor(private http: Http) {}
  constructor(private http : Http) {}
  getVehicle() {
    return [
      { id: 1, name: 'BMW2' },
      { id: 2, name: 'Proton' },
      { id: 3, name: 'MayBach' }];
  }
  getAjaxVechileService() {
    console.log('Inside Ajax requets!!!!!!!!!!');
    // debugger;
    /* return this.http.get('https://jsonplaceholder.typicode.com/posts/2').map((response: Response) => {
      console.log('succes!!!!!!!!!!!!');
      console.log(response);
      return true;
    }).catch((response: Response | any) => {
      console.log('fail!!!!!!!!!!!!');
      return Observable.throw(response);
    });*/
    return this.http.get('https://jsonplaceholder.typicode.com/posts/2').map((response: Response) => {
      console.log('succes!!!!!!!!!!!!');
      console.log(response);
      return response;
    });
  }
};
