import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDTO } from './message.dto';

export const GETS_ALL_MESSAGE_DTO = new InjectionToken<GetsAllMessageDtoPort>('GETS_ALL_MESSAGE_DTO');

export interface GetsAllMessageDtoPort {
  getAll(criterion?: Partial<MessageDTO>): Observable<MessageDTO[]>;
}
