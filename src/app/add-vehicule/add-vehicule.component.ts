import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoiteService } from '../boite.service';
import { Boite } from '../interfaces/boite';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent {
  listBoites: Boite[] = [];
  data: any = {};
  reso: ReplaySubject<Boite> = new ReplaySubject;

  addForm = new FormGroup({
    typologie: new FormControl,
    annee: new FormControl,
    marque: new FormControl,
    modele: new FormControl,
    boite: new FormControl,
    prix: new FormControl,
    status: new FormControl,
    kilometrage: new FormControl,
    dimensionLongeur: new FormControl,
    dimensionLargeur: new FormControl,
    dimensionHauteur: new FormControl,
    region: new FormControl,
    nombreCouchage: new FormControl,
    typeCouchage: new FormControl,
    pvom: new FormControl,
    ptac: new FormControl,
    chargeUtile: new FormControl,
    garantie: new FormControl,
    energie: new FormControl,
  })
  constructor(
    private boiteService: BoiteService) { }

  ngOnInit(): void {
    this.loadBoites();
  }

  loadBoites() {
    this.boiteService.getBoites().pipe(map(data => data['hydra:member']))    
    .subscribe((boites: Boite[]) =>{
      this.listBoites = boites;
      // next: (data) => {
      //   this.data = data;
      //   this.listBoites.push(data);
         console.log("list: "  + this.listBoites )
      }

      // next: (resp: any) => {
      // this.boitta.type = data[0][''];
      // console.log("data " + this.boitta.type);
      // boitta => {this.boitta = boitta} ,
      // console.log("risposta " + this.listBoites));

      // this.boiteService.getBoites().pipe(map((data: any )=> data.json)).subscribe((res)=> {
      //   this.data = res;
      //     console.log("ora " + res + " "+ this.data)







    )
  }
}

