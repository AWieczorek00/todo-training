import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from 'projects/navigation/src';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
