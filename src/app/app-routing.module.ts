import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { IndexComponent } from './music/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'music', pathMatch: 'full' },
  { path: 'music', component: IndexComponent, canActivate: [MsalGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
