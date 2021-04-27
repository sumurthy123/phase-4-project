import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VegComponent } from './veg/veg.component';
import { HomeComponent } from './home/home.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { ItalianComponent } from './italian/italian.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {from} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    VegComponent,
    HomeComponent,
    EvaluationComponent,
    NonVegComponent,
    ItalianComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
