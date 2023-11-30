import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';

export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    component: CalendarHomeComponent,
  },
  {
    path: 'list',
    component: CalendarListComponent,
  }
];

@NgModule({
  declarations: [
    CalendarHomeComponent,
    CalendarListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ]
})
export class CalendarModule { }
