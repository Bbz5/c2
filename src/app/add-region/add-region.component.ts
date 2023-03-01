import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent {
  newRegion: any;
  regionForm = new FormGroup({
    nom: new FormControl
  })

  constructor(
    private regionService: RegionService){}

    addRegion(){
      this.newRegion = this.regionForm.value;
      console.log("let newRegion avant envoi" + JSON.stringify(this.newRegion));
      this.regionService.addRegion(this.newRegion).subscribe((data) =>
      console.log("apres envoi", data));
      this.regionForm.reset
      
      
    }

}
