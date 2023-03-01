import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypologieService } from '../services/typologie.service';

@Component({
  selector: 'app-add-typologie',
  templateUrl: './add-typologie.component.html',
  styleUrls: ['./add-typologie.component.scss']
})
export class AddTypologieComponent {
  newTypologie: any;
  typeForm = new FormGroup({
    typeVehicule: new FormControl()
  })

  constructor(
    private typoService: TypologieService
  ) { }

  addTypologie() {
    this.newTypologie = this.typeForm.value;
    console.log("let newtypologie avant l'envoie" +JSON.stringify(this.newTypologie) );
    this.typoService.addTypologie(this.newTypologie).subscribe((data) => {
      console.log("new Typologie", data);
      this.typeForm.reset
    })
  }

  
}
