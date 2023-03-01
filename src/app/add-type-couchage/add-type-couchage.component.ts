import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeCouchageService } from '../type-couchage.service';

@Component({
  selector: 'app-add-type-couchage',
  templateUrl: './add-type-couchage.component.html',
  styleUrls: ['./add-type-couchage.component.scss']
})
export class AddTypeCouchageComponent {
  newTypeCouchage: any;
  typeCouchageForm= new FormGroup({
    type: new FormControl()
  })

  constructor(
    private typeCouService: TypeCouchageService
  ){}

  addTypeCouchage(){
    this.newTypeCouchage = this.typeCouchageForm.value;
    console.log("avant envoie :" +JSON.stringify(this.newTypeCouchage));
    this.typeCouService.addTypeCouchage(this.newTypeCouchage).subscribe((data)=> {
    console.log("apres envoi :", data),
    this.typeCouchageForm.reset
    }
    )

  }
}
