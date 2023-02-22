import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Typologie } from '../interfaces/typologie';
import { TypologieService } from '../services/typologie.service';
import { BoiteService } from '../services/boite.service';
import { Boite, } from '../interfaces/boite';
import { RegionService } from '../services/region.service';
import { Status } from '../interfaces/status';
import { StatusService } from '../services/status.service';
import { NombreCouchage } from '../interfaces/nombre-couchage';
import { CouchageService } from '../services/couchage.service';
import { TypeCouchage } from '../interfaces/type-couchage';
import { Energie } from '../interfaces/energie';
import { EnergieService } from '../services/energie.service';
import { Marque } from '../interfaces/marque';
import { MarqueService } from '../services/marque.service';
import { VehiculeService } from '../services/vehicule.service';
import { catchError, filter, first, map, switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Region } from '../interfaces/region';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent {
  listBoites: Boite[] = [];
  listTypologies: Typologie[] = [];
  listRegions: Region[] = [];
  listStatus: Status[] = [];
  listNombreCouchages: NombreCouchage[] = [];
  listTypeCouchages: TypeCouchage[] = [];
  listEnergies: Energie[] = [];
  listMarquesCC: Marque[] = [];
  patchedDatas: any;

  addForm = new FormGroup({
    typologie: new FormControl(),
    prix: new FormControl(),
    status: new FormControl(),
    kilometrage: new FormControl(),
    boite: new FormControl(),
    dimensionLongeur: new FormControl(),
    dimensionLargeur: new FormControl(),
    dimensionHauteur: new FormControl(),
    region: new FormControl(),
    marque: new FormControl(),
    annee: new FormControl(),
    nombreCouchage: new FormControl(),
    typeCouchage: new FormControl(),
    energie: new FormControl(),
    modele: new FormControl(),
    pvom: new FormControl(),
    ptac: new FormControl(),
    chargeUtile: new FormControl(),
    garantie: new FormControl(),
  })
  constructor(
    private boiteService: BoiteService, private typologieService: TypologieService,
    private regionService: RegionService, private statusService: StatusService,
    private couchageService: CouchageService, private energieService: EnergieService,
    private marqueCCservice: MarqueService, private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.loadBoites();
    this.loadTypologies();
    this.loadRegions();
    this.loadStatus();
    this.loadNombreCouchages();
    this.loadTypeCouchages();
    this.loadEnergies();
    this.loadMarque();
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
      .subscribe((typologies: Typologie[]) => {
        this.listTypologies = typologies;
      })
  }
  loadRegions() {
    this.regionService.getRegions().pipe(map(data => data['hydra:member']))
      .subscribe((regions: Region[]) => {
        this.listRegions = regions;
      })
  }
  loadStatus() {
    this.statusService.getStatus().pipe(map(data => data['hydra:member']))
      .subscribe((statuses: Status[]) => {
        this.listStatus = statuses;

      })

  }
  loadNombreCouchages() {
    this.couchageService.getNombreCouchages().pipe(map(data => data['hydra:member']))
      .subscribe((nbcouchages: NombreCouchage[]) => {
        this.listNombreCouchages = nbcouchages;
      })
  }
  loadTypeCouchages() {
    this.couchageService.getTypeCouchages().pipe(map(data => data['hydra:member']))
      .subscribe((typecouchages: TypeCouchage[]) => {
        this.listTypeCouchages = typecouchages;
      })
  }
  loadEnergies() {
    this.energieService.getEneregies().pipe(map(data => data['hydra:member']))
      .subscribe((energies: Energie[]) => {
        this.listEnergies = energies
      })
  }
  loadMarque() {
    this.marqueCCservice.getMarqueCampingcar().pipe(map(data => data['hydra:member']))
      .subscribe((marques: Marque[]) => {
        this.listMarquesCC = marques
      })
  }



  submitForm() {
    console.log("prima del patch \nform completo: " + JSON.stringify(this.addForm.value.marque.id));

    //   this.addForm.patchValue({
    //  marque: `/api/marques/${this.addForm.value.marque.id}` ,
    //  typologie: `/api/typologies/${this.addForm.value.typologie.id}`,
    //  boite: `/api/boites/${this.addForm.value.boite.id}`,
    //  status: `/api/statuses/${this.addForm.value.status.id}`,
    //  region: `/api/regions/${this.addForm.value.region.id}`,
    //  nombreCouchage: `/api/nombre_couchages/${this.addForm.value.nombreCouchage.id}`,
    //  typeCouchage: `/api/type_couchages/${this.addForm.value.typeCouchage.id}`,
    //  energie: `/api/energies/${this.addForm.value.energie.id}`,
    // })

    // this.addForm.valueChanges.pipe(first()).subscribe(() => {
    this.patchedDatas = {
      typologie: `/api/typologies/${this.addForm.value.typologie.id}`,
      prix: this.addForm.value.prix,
      status: [`/api/statuses/${this.addForm.value.status.id}`],
      kilometrage: this.addForm.value.kilometrage,
      boite: `/api/boites/${this.addForm.value.boite.id}`,
      dimensionLongeur: this.addForm.value.dimensionLongeur,
      dimensionLargeur: this.addForm.value.dimensionLargeur,
      dimensionHauteur: this.addForm.value.dimensionHauteur,
      region: [`/api/regions/${this.addForm.value.region.id}`],
      marque: `/api/marques/${this.addForm.value.marque.id}`,
      annee: this.addForm.value.annee,
      nombreCouchage: `/api/nombre_couchages/${this.addForm.value.nombreCouchage.id}`,
      typeCouchage: [`/api/type_couchages/${this.addForm.value.typeCouchage.id}`],
      energie: `/api/energies/${this.addForm.value.energie.id}`,
      modele: this.addForm.value.modele,
      pvom: this.addForm.value.pvom,
      ptac: this.addForm.value.ptac,
      chargeUtile: this.addForm.value.chargeUtile,
      garantie: this.addForm.value.garantie

    };
    this.vehiculeService.addVehicule(this.patchedDatas).subscribe((data) => {
      console.log("data " + data);
      console.log("let form: " + JSON.stringify(this.patchedDatas));
    });

  }
}

