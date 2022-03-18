import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { FirebaseEmployeesServiceModule } from '../../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { CreateEmployeeComponentModule } from '@team';
import { MessagesComponentModule } from '../../../../projects/contact/src/lib/adapters/primary/ui/messages/messages.component-module';
import { FirebaseMessagesServiceModule } from '../../../../projects/contact/src/lib/adapters/secondary/infrastructure/firebase-messages.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
  CreateEmployeeComponentModule,
  FirebaseEmployeesServiceModule,
  MessagesComponentModule,
  FirebaseMessagesServiceModule
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
