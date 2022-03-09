import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule,ReactiveFormsModule],
  	declarations: [OurTeamComponent],
  	providers: [],
  	exports: [OurTeamComponent] })
export class OurTeamComponentModule {
}
