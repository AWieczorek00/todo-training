import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessagesService } from './firebase-messages.service';
import { ADDS_MESSAGE_DTO } from '../../../application/ports/secondary/adds-message.dto-port';
import { GETS_ALL_MESSAGE_DTO } from '../../../application/ports/secondary/gets-all-message.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessagesService, { provide: ADDS_MESSAGE_DTO, useExisting: FirebaseMessagesService }, { provide: GETS_ALL_MESSAGE_DTO, useExisting: FirebaseMessagesService }],
  	exports: [] })
export class FirebaseMessagesServiceModule {
}