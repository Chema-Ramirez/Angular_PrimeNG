import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'app-colored-orgchart',
  standalone: true,
  imports: [OrganizationChartModule],
  templateUrl: './colored-orgchart.html',
  styleUrl: './colored-orgchart.css',
})
export class ColoredOrgchart {
  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: '!bg-indigo-100 !text-indigo-900 rounded-xl',
      data: {
        image:
          'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
          data: {
            image:
              'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: 'Anna Fali',
            title: 'CMO',
          },
          children: [
            {
              label: 'Sales',
              styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
            },
            {
              label: 'Marketing',
              styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
            },
          ],
        },
        {
          expanded: true,
          type: 'person',
          styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
          data: {
            image:
              'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO',
          },
          children: [
            {
              label: 'Development',
              styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
            },
            {
              label: 'UI/UX Design',
              styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
            },
          ],
        },
      ],
    },
  ];
}
