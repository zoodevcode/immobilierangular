import { Component, OnInit } from '@angular/core';
import { Bien } from '../model/bien.model';
import { BienService } from '../service/bien.service';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {

  newBien = new Bien();
  message : string | undefined;
  constructor(private bienservice : BienService) { }

  ngOnInit(): void {
  }

  ajoutBien(){
    this.bienservice.addBien(this.newBien);
    this.message = "Bien "+ this.newBien.nom+" a ete ajoute avec success";
  }
}
