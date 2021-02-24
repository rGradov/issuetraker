import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../../data/interface/issue';
import {baseUrl} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PieStatusService {

  constructor(private http: HttpClient) {
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${baseUrl}issues`);
  }
}
