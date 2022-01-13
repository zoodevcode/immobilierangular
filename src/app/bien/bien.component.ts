import { Component, OnInit } from '@angular/core';
import { Bien } from '../model/bien.model';
import { BienService } from '../service/bien.service';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.css']
})
export class BienComponent implements OnInit {
 biens : Bien [];
 //biens : string[];
  constructor(private bienService : BienService) {
    // this.biens = bienservice.getBiens();
    this.biens = bienService.listeBien();
   }

  ngOnInit(): void {
  }

  supprimer_bien(bien: Bien){
    // console.log(bien);
    let conf = confirm("Ets-vous sur de vouloir supprimer?");
    if(conf){
      this.bienService.supprimerBien(bien);
    }
  }

}
