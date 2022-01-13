import { Injectable } from '@angular/core';
import { Bien } from '../model/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  biens : Bien [];
  constructor() { 
    this.biens = [
      { id : 1, nom : "Chambre", prix : 15000000, date : new Date()},
      { id : 2, nom : "Maison", prix : 30000000, date : new Date()},
      { id : 3, nom : "Sale de Bain1", prix : 25000000, date : new Date()},
     ];
  }

  listeBien() : Bien[]{
    return this.biens;
  }

  addBien(bien : Bien){
      this.biens.push(bien);
  }

  supprimerBien(bien: Bien){
    const index: number = this.biens.indexOf(bien, 0);
    if (index !== -1) {
        this.biens.splice(index, 1);
    }
  }

}
