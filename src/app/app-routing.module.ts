import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlokPage } from './pages/blok.page';
import { BlokPageModule } from './pages/blok.page-module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),BlokPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
