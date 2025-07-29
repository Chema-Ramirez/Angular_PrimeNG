import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-template-accordion',
  imports: [AccordionModule, AvatarModule, BadgeModule],
  templateUrl: './template-accordion.html',
  styleUrl: './template-accordion.css',
  standalone: true,
})
export class TemplateAccordion {}
