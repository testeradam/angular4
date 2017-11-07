import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class HelpersService {

  constructor() { }
  
  public options() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = JSON.parse(localStorage.getItem('token'));
    if (token)
      headers.append('Authorization', 'Bearer ' + token);
    else headers.append('Authorization', '')
    return { headers: headers };
  }
  public extractData(res: Response) {
    let body = res.json();
    return body.data || body || {};
  }
  public handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
