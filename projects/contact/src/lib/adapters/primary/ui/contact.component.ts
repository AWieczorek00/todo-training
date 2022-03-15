import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({ selector: 'lib-contact', templateUrl: './contact.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactComponent {
  readonly contact: FormGroup = new FormGroup({name: new FormControl(), email: new FormControl(), text: new FormControl()});
    // readonly contact: FormGroup = new FormGroup({ name: new FormControl(), eMail: new FormControl(), text: new FormControl() });

    Contact(contact: FormGroup) {
      alert(
        contact.get('name')?.value +" "+
        contact.get('email')?.value +" "+
        contact.get('text')?.value
      );
    }

    


}
