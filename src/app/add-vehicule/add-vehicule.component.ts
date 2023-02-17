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
  lista: any[] = [];
  boite!: Boite;
  bb: any;
  stringifiedData: any;
  parsedJson: any;

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
      }










      )
  }
  convBoite() { }
}

