import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageModule } from './pages/about-me/about-me.page-module';
import { AboutUsPageModule } from './pages/about-us/about-us.page-module';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
