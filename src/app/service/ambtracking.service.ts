import { Injectable } from '@angular/core';
import {Ambtracking} from '../model/ambtracking';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AmbtrackingService {

  constructor(private _http: HttpClient) { }

  getTrackingData(): Observable <Ambtracking[]> {
    return this._http.get<Ambtracking[]>(environment.apiUrl);
  }

}
