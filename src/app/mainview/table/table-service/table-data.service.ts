import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../../../data/interface/issue';
import {baseUrl} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private countSort = 0;
  private countDate = 0;
  private countStatus = 0;
  private coments: string;
  private id: number;

  constructor(private http: HttpClient) {
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${baseUrl}issues`);
  }

  sortByIssueSeverity(arr: Array<Issue>): Array<Issue> {
    if (this.countSort % 2 === 0) {
      arr.sort((a, b) => (a.issueSeverity < b.issueSeverity ? 1 : -1));
      this.countSort += 1;
      return arr;
    }
    arr.sort((a, b) => (a.issueSeverity > b.issueSeverity ? 1 : -1));
    this.countSort += 1;
    return arr;
  }

  sortByDate(arr: Array<Issue>): Array<Issue> {
    console.log('start');
    if (this.countDate % 2 === 0) {
      arr.sort((a, b) => (a.date < b.date ? 1 : -1));
      this.countDate += 1;
      return arr;
    }
    arr.sort((a, b) => (a.date > b.date ? 1 : -1));
    this.countDate += 1;
    return arr;
  }

  sortByStatus(arr: Array<Issue>): Array<Issue> {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    arr.forEach((item) => {
      if (item.status === 'not started') {
        arr1.push(item);
      } else if (item.status === 'done') {
        arr3.push(item);
      } else {
        arr2.push(item);
      }
    });
    if (this.countStatus % 2 === 0) {
      this.countStatus += 1;
      return (arr3.concat(arr2)).concat(arr1);
    }
    this.countStatus += 1;
    return (arr1.concat(arr2)).concat(arr3);
  }

  hideIssue(arr: Array<Issue>, id: number): Array<Issue> {
    arr.splice(id, 1);
    return arr;
  }

  comment(coment: string, id: number) {
    this.coments = coment;
    this.id = id;
  }
}
