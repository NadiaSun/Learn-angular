import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {City} from '../interfaces';

@Injectable({providedIn: 'root'})
export class CitiesService {
  constructor(
    private http: HttpClient
  ) {}

  getCities(): Observable<City[]> {
    return this.http.get(``)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              country: response[key].country,
              city: response[key].city,
              region: response[key].admin_name,
            }));
        })
      );
  }
}
