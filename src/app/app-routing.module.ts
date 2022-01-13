import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from './add-bien/add-bien.component';
import { BienComponent } from './bien/bien.component';

const routes: Routes = [
  {path : "biens", component : BienComponent},
  {path : "ajoutBien", component : AddBienComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
