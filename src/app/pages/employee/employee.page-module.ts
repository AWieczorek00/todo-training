import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeePage } from './employee.page';
import { OurTeamComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/our-team/our-team.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/team/src/public-api';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeePage,
        }
      ]),
  OurTeamComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [EmployeePage],
  	providers: [],
  	exports: [] })
export class EmployeePageModule {
}
