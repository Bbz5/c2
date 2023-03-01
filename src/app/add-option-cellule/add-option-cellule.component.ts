import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-option-cellule',
  templateUrl: './add-option-cellule.component.html',
  styleUrls: ['./add-option-cellule.component.scss']
})
export class AddOptionCelluleComponent {
  
  addOptionsCelluleForm = new FormGroup({
    batterieAuxiliaire: new FormControl(false),
    batterieCellule: new FormControl(),
    chauffage: new FormControl(),
    chauffageGazoil: new FormControl(),
    chauffageAlde: new FormControl(),
    chauffeEau :new FormControl(),
    chauffageRoute: new FormControl(),
    ecleraigeLed: new FormControl(),
    fermeteurCentral: new FormControl(),
    marchepiedElectriq: new FormControl(),
    moustiquiairePorte:new FormControl(),
    porteCelluleBaie: new FormControl(),
    refrigCongelateur: new FormControl(),
    reservoirEauPropre: new FormControl(),
    reservoirEauUse: new FormControl(),
    fourElectrique: new FormControl(),
    fourGaz: new FormControl(),
    toitDome: new FormControl(),
    skyDome: new FormControl(),
    tissus: new FormControl(),
    doublePlancher: new FormControl(),
    hotteAspirante: new FormControl(),
    inverseurGaz: new FormControl(),
    panneauSolaire: new FormControl(),
    lampeAuvent: new FormControl(),

  })
}
