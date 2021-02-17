import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  issues;

  constructor() {
  }

  createDb() {
    return {
      issues: [
        {
          userInfo: 'Vlad Rudenua ',
          location: 'home',
          issueSeverity: 4,
          description: 'high cpu temperature',
          status: 'not started',
          comment: [],
        },
        {
          userInfo: 'Jenua',
          location: 'office',
          issueSeverity: 2,
          description: 'Corrupted drivers',
          status: 'in progress',
          comment: [],
        },
        {
          userInfo: 'Daniil Smahtin',
          location: 'House of Government',
          issueSeverity: 4,
          description: 'Blue Screen of Death',
          status: 'done',
          comment: [],
        },
        {
          userInfo: 'Evgeniy Baranov',
          location: 'office',
          issueSeverity: 2,
          description: 'the screen does not work',
          status: 'done',
          comment: [],
        },
        {
          userInfo: 'Alex',
          location: 'police department',
          issueSeverity: 3,
          description: 'Overworking fan',
          status: 'not started',
          comment: [],
        },
        {
          userInfo: 'Ivan Vasilevich',
          location: 'police department',
          issueSeverity: 4,
          description: 'PC Fans not working',
          status: 'done',
          comment: [],
        },
        {
          userInfo: 'Vladilen Meanin',
          location: 'office',
          issueSeverity: 1,
          description: 'PC keeps disconnecting from WiFi',
          status: 'in progress',
          comment: [],
        },
        {
          userInfo: 'Jenua Smahtin',
          location: 'home',
          issueSeverity: 1,
          description: 'Dysfunctional USB Port',
          status: 'not started',
          comment: [],
        },
        {
          userInfo: 'Slava Rudenua ',
          location: 'office',
          issueSeverity: 2,
          description: 'The Screen is Blank',
          status: 'in progress',
          comment: [],
        },
        {
          userInfo: 'Daniil',
          location: 'home',
          issueSeverity: 2,
          description: 'Windows Won\'t Boot',
          status: 'done',
          comment: [],
        },
      ],
    };
  }
}
