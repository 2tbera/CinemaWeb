import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactComponent} from "./pages/contact/contact.component";
import {HomeComponent} from "./pages/home/home.component";
import {DetailComponent} from "./pages/detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'contact' }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: { title: 'detail' }
  },
  {
    path: '**',
    redirectTo: '/',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
