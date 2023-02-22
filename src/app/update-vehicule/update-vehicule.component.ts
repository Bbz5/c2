import { Component, inject } from '@angular/core';
import { VehiculeService } from '../services/vehicule.service';
import { Vehicule } from '../interfaces/vehicule';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.scss']
})
export class UpdateVehiculeComponent {
listVehicules: Vehicule[]= []
  constructor(
    private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
this.getListVehicules();
    
}

  getListVehicules(filterBy?: number) {
    this.vehiculeService.getVehicules(filterBy).pipe(map(data=> data['hydra:member']))
    .subscribe((vehicules : Vehicule[])=> {
      this.listVehicules =  vehicules;
     // console.log(JSON.stringify(this.listVehicules));
      
    })
  }



}


