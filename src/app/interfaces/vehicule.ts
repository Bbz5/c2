import { Boite } from "./boite";
import { Energie } from "./energie";
import { Marque } from "./marque";
import { NombreCouchage } from "./nombre-couchage";
import { Region } from "./region";
import { Status } from "./status";
import { TypeCouchage } from "./type-couchage";
import { Typologie } from "./typologie";

export interface Vehicule {
    id?: number,
    typologie?: Typologie,
    prix?: number,
    status?: Status,
    kilometrage?:number,
    boite?: Boite,
    dimensionLongeur?: number,
    dimensionLargeur?: number,
    dimensionHauteur?: number,
    region?: Region,
    marque?: Marque,
    annee?: Date,
    nombreCouchage?: NombreCouchage,
    typeCouchage?: TypeCouchage,
    energie?: Energie,
    modele?: string,
    pvom?: number,
    ptac?: number,
    chargeUtile?: number,
    garantie?: number



}
