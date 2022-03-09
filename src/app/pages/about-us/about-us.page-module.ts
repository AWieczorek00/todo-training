import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
// import { OurTeamComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/our-team/our-team.component-module';
import { OurTeamComponentModule } from 'projects/team/src/public-api';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  OurTeamComponentModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
