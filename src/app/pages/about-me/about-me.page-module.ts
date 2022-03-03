import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutMePage } from './about-me.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutMePage,
        }
      ])],
  	declarations: [AboutMePage],
  	providers: [],
  	exports: [] })
export class AboutMePageModule {
}
