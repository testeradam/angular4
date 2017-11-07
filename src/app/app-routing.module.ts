import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginComponent } from './pages/login/login.component';


const appRoutes: Routes = [
{ path:'login', component:LoginComponent },
  { path: '', component: LayoutComponent, children:[
    { path:'', component:DashboardComponent },
    
  ] },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
