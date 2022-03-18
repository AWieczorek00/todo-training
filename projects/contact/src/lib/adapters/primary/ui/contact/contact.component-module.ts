import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactComponent } from "./contact.component";


@NgModule({ imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule, ReactiveFormsModule],
  	declarations: [ContactComponent],
  	providers: [],
  	exports: [ContactComponent] })
export class ContactComponentModule {
}
