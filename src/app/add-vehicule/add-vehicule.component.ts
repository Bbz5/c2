import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Typologie } from '../interfaces/typologie';
import { TypologieService } from '../services/typologie.service';
import { BoiteService } from '../services/boite.service';
import { Boite } from '../interfaces/boite';
import { Region } from '../interfaces/region';
import { RegionService } from '../services/region.service';
import { Status } from '../interfaces/status';
import { StatusService } from '../services/status.service';
import { NombreCouchage } from '../interfaces/nombre-couchage';
import { CouchageService } from '../services/couchage.service';
import { TypeCouchage } from '../interfaces/type-couchage';
import { Energie } from '../interfaces/energie';
import { EnergieService } from '../services/energie.service';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent {
  listBoites: Boite[] = [];
  listTypologies: Typologie[]= [];
  listRegions :Region[]= [];
  listStatus : Status[]= [];
  listNombreCouchages: NombreCouchage[] = [];
  listTypeCouchages: TypeCouchage[] = [];
  listEnergies: Energie[] = [];

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
    private boiteService: BoiteService, private typologieService: TypologieService,
    private regionService: RegionService, private statusService: StatusService,
    private couchageService: CouchageService, private energieService: EnergieService    ) { }

  ngOnInit(): void {
    this.loadBoites();
    this.loadTypologies();
    this.loadRegions();
    this.loadStatus();
    this.loadNombreCouchages();
    this.loadTypeCouchages();
    this.loadEnergies();
    // setTimeout(() => {
    //   console.log("nel TO :" + this.listBoites[0].type + " " + this.listBoites[0].id +
    //     "\n e" + this.listBoites[1].type + " " + this.listBoites[1].id);

    // }, 3000);



  }


  loadBoites() {
    this.boiteService.getBoites().pipe(map(data => data['hydra:member']))
      .subscribe((boites: Boite[]) => {
        this.listBoites = boites;
        return this.listBoites
      })
  }

  loadTypologies() { 
    this.typologieService.getTypologie().pipe(map(data => data['hydra:member']))
    .subscribe((typologies: Typologie[]) =>{
      this.listTypologies = typologies;
      console.log("typologies: " + this.listTypologies);
      
    })
  }

  loadRegions() { 
    this.regionService.getRegions().pipe(map(data => data['hydra:member']))
    .subscribe((regions: Region[]) =>{
      this.listRegions = regions;
      console.log("typologies: " + this.listRegions);
      
    })
  }

  loadStatus(){
    this.statusService.getStatus().pipe(map(data => data['hydra:member']))
    .subscribe((statuses: Status[]) => {
      this.listStatus = statuses;
      
    })

  }

  loadNombreCouchages(){
    this.couchageService.getNombreCouchages().pipe(map(data => data['hydra:member']))
    .subscribe(( nbcouchages: NombreCouchage[]) =>{
      this.listNombreCouchages = nbcouchages;
    })
  }

  loadTypeCouchages() {
    this.couchageService.getTypeCouchages().pipe(map(data => data['hydra:member']))
    .subscribe(( typecouchages: TypeCouchage[]) =>{
      this.listTypeCouchages = typecouchages;
    })
  }

  loadEnergies(){
    this.energieService.getEneregies().pipe(map(data=> data['hydra:member']))
    .subscribe(( energies: Energie[]) => {
      this.listEnergies = energies;
      console.log("0000000000000000000" + this.listEnergies);
      
    })
  }
}

