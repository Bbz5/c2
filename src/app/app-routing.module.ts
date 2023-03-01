import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOptionCelluleComponent } from './add-option-cellule/add-option-cellule.component';
import { AddOptionGeneralsComponent } from './add-option-generals/add-option-generals.component';
import { AddOptionPorteurComponent } from './add-option-porteur/add-option-porteur.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { HomeComponent } from './home/home.component';
import { UpdateVehiculeComponent } from './update-vehicule/update-vehicule.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'add', component: AddVehiculeComponent},
{ path: 'addCellule', component: AddOptionCelluleComponent},
{ path: 'addPorteur', component: AddOptionPorteurComponent},
{ path: 'addGenerals', component: AddOptionGeneralsComponent},
{ path: 'update', component: UpdateVehiculeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
