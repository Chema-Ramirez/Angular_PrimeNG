import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  PLATFORM_ID,
  ChangeDetectorRef,
  inject,
  effect,
} from '@angular/core';
import { DesignerService } from './services/chartdesignservice';
import { AppConfigService } from './services/chartconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chartradar',
  templateUrl: './radar-chart.html',
  standalone: true,
  imports: [ChartModule],
})
export class ChartRadar implements OnInit {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  configService = inject(AppConfigService);

  designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

  themeEffect = effect(() => {
    if (this.configService.transitionComplete()) {
      if (this.designerService.preset()) {
        this.initChart();
      }
    }
  });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );

      this.data = {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running',
        ],
        datasets: [
          {
            label: 'My First dataset',
            borderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointBackgroundColor:
              documentStyle.getPropertyValue('--p-gray-400'),
            pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor:
              documentStyle.getPropertyValue('--p-gray-400'),
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            borderColor: documentStyle.getPropertyValue('--p-cyan-400'),
            pointBackgroundColor:
              documentStyle.getPropertyValue('--p-cyan-400'),
            pointBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor:
              documentStyle.getPropertyValue('--p-cyan-400'),
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: textColorSecondary,
            },
          },
        },
      };
    }
    this.cd.markForCheck();
  }
}
