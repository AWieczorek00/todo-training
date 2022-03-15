import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  	declarations: [ContactComponent],
  	providers: [],
  	exports: [ContactComponent] })
export class ContactComponentModule {
}
