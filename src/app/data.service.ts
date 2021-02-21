import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    let data = [
      {
        id: 0,
        userinfo: 'Mr. Nelson Ondricka',
        data: [{
          location: 'police department',
          issueSeverity: 3,
          date: '2019-08-14T23:42:37.545Z',
          description: 'circuit port system',
          status: 'done',
          comments: [
            'string1', 'string2'
          ]
        },
          {
            location: 'home',
            issueSeverity: 2,
            date: '2019-08-14T23:42:37.545Z',
            description: 'circuitss port system',
            status: 'in progress',
            comments: []
          }

        ]
      },
    ];
    return data;
  }
}
