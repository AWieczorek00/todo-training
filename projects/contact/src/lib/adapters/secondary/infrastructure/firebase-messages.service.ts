import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';
import { MessageDTO } from '../../../application/ports/secondary/message.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllMessageDtoPort } from '../../../application/ports/secondary/gets-all-message.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseMessagesService implements AddsMessageDtoPort, GetsAllMessageDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(message: Partial<MessageDTO>): void {
    this._client.collection('messages').add(message);
  }

  getAll(criterion: Partial<MessageDTO>): Observable<MessageDTO[]> {
    return this._client.collection<MessageDTO>('messages').valueChanges(({idField: 'id'})).pipe(map((data: MessageDTO[]) => filterByCriterion(data, criterion)));
  }
}
