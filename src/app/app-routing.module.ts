import { RegistrationComponent } from './registration/registration.component';

import { MainComponent } from './Main/Main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-main', component: MainComponent },
  { path: 'app-registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
