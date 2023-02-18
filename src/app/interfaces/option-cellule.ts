export interface OptionCellule {
    id?: number,
    batterieAuxiliaire?: boolean
    batterieCellule?: boolean,
    chauffage?: boolean,
    chauffageGazoil?: boolean,
    chauffageAlde?: boolean,
    chauffeEau?: boolean,
    chauffageRoute?: boolean,
    eclairageLed?: boolean,
    fermeteurCentral: boolean,
    marchepiedElectriq?: boolean,
    moustiquiairePorte?: boolean
    porteCelluleBaie?: boolean,
    refrigCongelateur?: string,
    reservoirEauPropre?: boolean,
    reservoirEauUse?: boolean;
    fourElectrique?: boolean,
    fourGaz?: boolean,
    toitDome?: boolean,
    skyDome?: boolean,
    tissus?: string,
    doublePlancher?: boolean,
    hotteAspirante?: boolean,
    inverseurGaz?: boolean,
    panneauSolaire?: boolean,
    lampeAuvent?: boolean
}
