import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YogaPoseService {
  constructor(private http: HttpClient) {}

  getYogaPoses(): Observable<any> {
    return this.http.get('/data/yoga-poses.json');
  }
}
