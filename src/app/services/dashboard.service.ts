import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment'
import { HelpersService } from './helpers.service';


@Injectable()
export class DashboardService {

  constructor(private http: Http,  private helper:HelpersService) { }

  all():Observable<any>{
    return this.http.get(environment.api+'/dashboard/dashboard.json')
      .map(this.helper.extractData)
      .catch(this.helper.handleError)
  };
}

