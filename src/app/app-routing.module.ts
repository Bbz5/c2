import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { HomeComponent } from './home/home.component';
import { UpdateVehiculeComponent } from './update-vehicule/update-vehicule.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'add', component: AddVehiculeComponent},
{ path: 'update', component: UpdateVehiculeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
