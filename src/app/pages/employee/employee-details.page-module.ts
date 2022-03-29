import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailsComponentModule } from '../../../../projects/team/src/lib/adapters/primary/ui/employee-details/employee-details.component-module';
import { FirebaseEmployeesServiceModule } from '../../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { EmployeeIdResolverModule } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver-module';
import { EmployeeIdResolver } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeDetailsPage,
          resolve: {
            employeeId: EmployeeIdResolver
          }
        }
      ]),
  EmployeeDetailsComponentModule,
  FirebaseEmployeesServiceModule,
  EmployeeIdResolverModule
],
  	declarations: [EmployeeDetailsPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailsPageModule {
}
