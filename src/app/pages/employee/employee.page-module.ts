import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeePage } from './employee.page';
import { OurTeamComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeePage,
        }
      ]),
  OurTeamComponentModule
],
  	declarations: [EmployeePage],
  	providers: [],
  	exports: [] })
export class EmployeePageModule {
}
