import {Pipe, PipeTransform} from '@angular/core';
import {Issue} from '../../../data/interface/issue';

@Pipe({
  name: 'filter'

})
export class FilterPipe implements PipeTransform {
  transform(issues: Array<Issue>, search: string = ''): Array<Issue> {
    if (!search.trim()) {
      return issues;
    }
    return issues.filter((issue) => issue.userinfo.toLowerCase().includes(search.toLowerCase()));
  }
}
