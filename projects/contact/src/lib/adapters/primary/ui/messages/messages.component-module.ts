import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';

@NgModule({ imports: [CommonModule],
  	declarations: [MessagesComponent],
  	providers: [],
  	exports: [MessagesComponent] })
export class MessagesComponentModule {
}
