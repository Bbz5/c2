import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-add-marque-vehicule',
  templateUrl: './add-marque-vehicule.component.html',
  styleUrls: ['./add-marque-vehicule.component.scss']
})
export class AddMarqueVehiculeComponent {
  newMarque: any;
  marqueForm= new FormGroup({
    brand: new FormControl()
  }) 

  constructor(
    private marqueService: MarqueService
  ){}

  addMarque(){
    this.newMarque= this.marqueForm.value;
    console.log("let marque avant envoi: " + JSON.stringify(this.newMarque));

    this.marqueService.addMarqueVehicule(this.newMarque).subscribe((data)=> {
      console.log("apres envoi: ", data);
      this.marqueForm.reset  
    })
    
    
  }
}
