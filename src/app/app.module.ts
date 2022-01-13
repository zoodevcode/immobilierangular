import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienComponent } from './bien/bien.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBienComponent } from './add-bien/add-bien.component';
import { UpdateBienComponent } from './update-bien/update-bien.component';

@NgModule({
  declarations: [
    AppComponent,
    BienComponent,
    NavBarComponent,
    AddBienComponent,
    UpdateBienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
