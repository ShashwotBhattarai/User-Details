import { RegistrationComponent } from './registration/registration.component';

import { UrlEnum } from './common/enum/routing.enum';
import { MainComponent } from './Main/Main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: UrlEnum.MAIN, component: MainComponent },
  { path: UrlEnum.REGISTRATION, component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
