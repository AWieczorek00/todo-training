import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_MESSAGE_DTO, GetsAllMessageDtoPort } from 'projects/contact/src/lib/application/ports/secondary/gets-all-message.dto-port';
import { Observable } from 'rxjs';
import { MessageDTO } from '../../../../application/ports/secondary/message.dto';


@Component({ selector: 'lib-messages', templateUrl: './messages.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class MessagesComponent {
  list$: Observable<MessageDTO[]> = this._getsAllMessageDto.getAll();

  constructor(@Inject(GETS_ALL_MESSAGE_DTO) private _getsAllMessageDto: GetsAllMessageDtoPort) {
  }
}
