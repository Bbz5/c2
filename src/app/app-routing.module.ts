import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'add', component: AddVehiculeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
