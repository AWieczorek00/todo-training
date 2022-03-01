import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlokPage } from './blok.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: BlokPage,
        }
      ])],
  	declarations: [BlokPage],
  	providers: [],
  	exports: [] })
export class BlokPageModule {
}
