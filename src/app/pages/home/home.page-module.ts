import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ContactComponentModule } from '../../../../projects/contact/src/lib/adapters/primary/ui/contact.component-module';
import { OurTeamComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/our-team/our-team.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  ContactComponentModule,
  OurTeamComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
