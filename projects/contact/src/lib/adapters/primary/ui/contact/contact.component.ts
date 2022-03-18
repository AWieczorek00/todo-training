import { FormControl, FormGroup } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { AddsMessageDtoPort, ADDS_MESSAGE_DTO } from 'projects/contact/src/lib/application/ports/secondary/adds-message.dto-port';
import { DatePipe, formatDate } from '@angular/common';


@Component({ selector: 'lib-contact', templateUrl: './contact.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactComponent {

  readonly message: FormGroup = new FormGroup({name: new FormControl(), email: new FormControl(), message: new FormControl()});

  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }
  

  onMessageSubmited(form: FormGroup): void {
    this._addsMessageDto.add({
      name: form.get('name')?.value,
      email: form.get('email')?.value,
      text: form.get('message')?.value,
      sendTime:  formatDate(new Date(), 'dd-MM-yyyy HH:mm','en')
    });
  }

}
