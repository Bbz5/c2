import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import { UpdateVehiculeComponent } from './update-vehicule/update-vehicule.component';
import {TableModule} from 'primeng/table';
import { AddOptionCelluleComponent } from './add-option-cellule/add-option-cellule.component';
import { AddOptionPorteurComponent } from './add-option-porteur/add-option-porteur.component';
import { AddOptionGeneralsComponent } from './add-option-generals/add-option-generals.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AddTypologieComponent } from './add-typologie/add-typologie.component';
import { AddMarqueVehiculeComponent } from './add-marque-vehicule/add-marque-vehicule.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { AddTypeCouchageComponent } from './add-type-couchage/add-type-couchage.component';
import { AddEnergieComponent } from './add-energie/add-energie.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    HeaderComponent,
    AddVehiculeComponent,
    UpdateVehiculeComponent,
    AddOptionCelluleComponent,
    AddOptionPorteurComponent,
    AddOptionGeneralsComponent,
    AddTypologieComponent,
    AddMarqueVehiculeComponent,
    AddRegionComponent,
    AddTypeCouchageComponent,
    AddEnergieComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    SplitButtonModule,
    NgSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
