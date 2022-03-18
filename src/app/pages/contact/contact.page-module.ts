import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactComponentModule } from '../../../../projects/contact/src/lib/adapters/primary/ui/contact/contact.component-module';
import { FirebaseMessagesServiceModule } from '../../../../projects/contact/src/lib/adapters/secondary/infrastructure/firebase-messages.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  ContactComponentModule,
  FirebaseMessagesServiceModule
],
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
