import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Dashboard } from './dashboard/dashboard';
import { Filter } from './filter/filter';
import { Chart } from './chart/chart';
import { Messages } from './messages/messages';
import { Products } from './products/products';
import { ControlledGalleria } from './media/controlled-galleria/controlled-galleria';
import { IcononlyButton } from './button/icononly-button/icononly-button';
import { OutlineButton } from './button/outline-button/outline-button';
import { QuartercircleSpeeddial } from './button/quartercircle-speeddial/quartercircle-speeddial';
import { BasicDataview } from './data/basic-dataview/basic-dataview';
import { BasicPopover } from './overlay/basic-popover/basic-popover';
import { CustomcontentGalleria } from './media/customcontent-galleria/customcontent-galleria';
import { ResponsiveImagecompare } from './media/responsive-imagecompare/responsive-imagecompare';
import { TemplateGalleria } from './media/template-galleria/template-galleria';
import { AdvancedCard } from './panel/advanced-card/advanced-card';
import { LoginDivider } from './panel/login-divider/login-divider';
import { TemplateAccordion } from './panel/template-accordion/template-accordion';
import { InvalidFloatlabel } from './form/invalid-floatlabel/invalid-floatlabel';
import { NumberstarsRating } from './form/numberstars-rating/numberstars-rating';
import { ReactiveKnob } from './form/reactive-knob/reactive-knob';
import { TemplateRating } from './form/template-rating/template-rating';
import { TemplatedrivenEditor } from './form/templatedriven-editor/templatedriven-editor';
import { TemplatedrivenKnob } from './form/templatedriven-knob/templatedriven-knob';
import { ChartRadar } from './chart.js/radar-chart/radar-chart';
import { ComboChart } from './chart.js/combo-chart/combo-chart';
import { ColoredOrgchart } from './data/colored-orgchart/colored-orgchart';
import { LayoutDataview } from './data/layout-dataview/layout-dataview';
import { LoadingDataview } from './data/loading-dataview/loading-dataview';
import { TemplatePicklist } from './data/template-picklist/template-picklist';
import { TemplateTimeline } from './data/template-timeline/template-timeline';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    Dashboard,
    Filter,
    Chart,
    Messages,
    Products,
    ControlledGalleria,
    IcononlyButton,
    OutlineButton,
    QuartercircleSpeeddial,
    BasicDataview,
    BasicPopover,
    CustomcontentGalleria,
    ResponsiveImagecompare,
    TemplateGalleria,
    AdvancedCard,
    LoginDivider,
    TemplateAccordion,
    InvalidFloatlabel,
    NumberstarsRating,
    ReactiveKnob,
    TemplateRating,
    TemplatedrivenEditor,
    TemplatedrivenKnob,
    ChartRadar,
    ComboChart,
    BasicDataview,
    ColoredOrgchart,
    LayoutDataview,
    LoadingDataview,
    TemplatePicklist,
    TemplateTimeline,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly activeView = signal<
    | 'dashboard'
    | 'messages'
    | 'chart'
    | 'products'
    | 'filter'
    | 'buttons'
    | 'data'
    | 'overlay'
    | 'media'
    | 'panel'
    | 'form'
  >('dashboard');

  setActiveView(
    view:
      | 'dashboard'
      | 'messages'
      | 'chart'
      | 'products'
      | 'filter'
      | 'buttons'
      | 'data'
      | 'overlay'
      | 'media'
      | 'panel'
      | 'form'
  ) {
    this.activeView.set(view);
  }
}
