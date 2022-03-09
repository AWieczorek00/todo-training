import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact', templateUrl: './contact.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactComponent {
  readonly contact: FormGroup = new FormGroup({ name: new FormControl(), eMail: new FormControl(), text: new FormControl() });

  Contact(contact: FormGroup) {
    alert(
      contact.get('name').value +" "+
      contact.get('eMail').value +" "+
      contact.get('text').value
    );
  }
}
