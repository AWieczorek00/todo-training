import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlokPage } from './pages/blok.page';
import { BlokPageModule } from './pages/blok.page-module';
import { AboutMePageModule } from './pages/about-me/about-me.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';

const routes: Routes = [{ 
        path: 'omnie', 
        loadChildren: () => AboutMePageModule
      },
  { 
        path: 'onas', 
        loadChildren: () => AboutUsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BlokPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
