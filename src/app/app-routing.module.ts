import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageModule } from './pages/about-me/about-me.page-module';
import { AboutUsPageModule } from './pages/about-us/about-us.page-module';
import { HomePageModule } from './pages/home/home.page-module';

const routes: Routes = [{ 
        path: 'omnie', 
        loadChildren: () => AboutMePageModule
      },
  { 
        path: 'onas', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'dom', 
        loadChildren: () => HomePageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
