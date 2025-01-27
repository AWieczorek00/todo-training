import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageModule } from './pages/about-me/about-me.page-module';
import { AboutUsPageModule } from './pages/about-us/about-us.page-module';
import { HomePageModule } from './pages/home/home.page-module';
import { EmployeePageModule } from './pages/employee/employee.page-module';
import { EmployeeDetailsPageModule } from './pages/employee/employee-details.page-module';
import { ContactPageModule } from './pages/contact/contact.page-module';
import { AdminPageModule } from './pages/admin/admin.page-module';

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
      },
  { 
        path: 'pracownik', 
        loadChildren: () => EmployeePageModule
      },
  { 
        path: 'pracownik/:employeeId', 
        loadChildren: () => EmployeeDetailsPageModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => ContactPageModule
      },
  { 
        path: 'admin', 
        loadChildren: () => AdminPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
