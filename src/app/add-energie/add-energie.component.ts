import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnergieService } from '../services/energie.service';

@Component({
  selector: 'app-add-energie',
  templateUrl: './add-energie.component.html',
  styleUrls: ['./add-energie.component.scss']
})
export class AddEnergieComponent {
  newEnergie: any;
  energieForm = new FormGroup({
    typeEnergie: new FormControl()
})

constructor(
  private energieService: EnergieService
){}

addEnergie(){
  this.newEnergie= this.energieForm.value;
  console.log("avant envoi: "+ JSON.stringify(this.newEnergie));
  this.energieService.addEnergie(this.newEnergie).subscribe((data)=>{
    console.log("apres envoi: ", data);
    this.energieForm.reset
    
  })
  
}
}
