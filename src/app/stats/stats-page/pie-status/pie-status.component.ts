import {Component} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {PieStatusService} from '../pie-status.service';
import {Issue} from '../../../data/interface/issue';

@Component({
  selector: 'app-pie-status',
  templateUrl: './pie-status.component.html',
  styleUrls: ['./pie-status.component.scss']
})
export class PieStatusComponent {
  issues: Array<Issue>;
  private countDone = 0;
  private countNotStarted = 0;
  private countInProgress = 0;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['done'],
    ['in progress'],
    ['not started']];
  public pieChartData: SingleDataSet = [this.countDone,
    this.countInProgress,
    this.countNotStarted];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private pieStatusService: PieStatusService) {
    this.getIssues();

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  private getIssues(): void {
    this.pieStatusService.getIssues().subscribe((issues) => {
        issues.forEach(elem => {
          if (
            elem.status === 'done') {
            this.countDone += 1;
          } else if (elem.status === 'in progress') {
            this.countInProgress += 1;
          } else {
            this.countNotStarted += 1;
          }
        });
        this.pieChartData = [this.countDone, this.countInProgress, this.countNotStarted];
      },
    );
  }

}
