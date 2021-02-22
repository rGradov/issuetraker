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
  openInput = false;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${baseUrl}api/users`);
  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${baseUrl}issues`);
  }

  getSomeIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${baseUrl}issues?userinfo=${localStorage.getItem('email')}`);
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

  hideIssue(id: number): any {
    // arr.filter(issue => issue.id < id && issue.id > id);
    // // arr.splice(id, 1);
    // return arr.filter(issue => issue.id < id).concat(
    //   arr.filter(issue => issue.id > id));
    return this.http.delete(`${baseUrl}issues/${id}`);
  }

  comment(coment: string, id: number) {
    this.coments = coment;
    this.id = id;
  }

  addComment(issue: any, id: number) {
    return this.http.put(`${baseUrl}issues/${id}`, issue);
  }

  addIssue(issue: any) {
    return this.http.post(`${baseUrl}issues/`, issue);
  }

  isAdmin(): boolean {
    if (localStorage.getItem('email') === 'mainrudenua@gmail.com') {
      return true;
    } else {
      return false;
    }
  }
}
