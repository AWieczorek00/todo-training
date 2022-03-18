import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { OurTeamComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/our-team/our-team.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/team/src/public-api';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  OurTeamComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
