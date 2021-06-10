import { DashboardComponent } from './db/dashboard/dashboard.component';
import { HomeComponent } from './site/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const approutes: Routes = [
  { path: '', loadChildren: () => import('./site/site.module').then( m => m.SiteModule) },
  { path: 'dashboard', loadChildren: () => import('./db/db.module').then( m => m.DbModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


