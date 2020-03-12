import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { MissionPagesComponent } from './mission-pages/mission-pages.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';


import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel/personnel.component';
import { PagerreurComponent } from './pagerreur/pagerreur.component';

import {ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
  { path: 'mission', component: MissionPagesComponent },
  { path: 'personnel', component: PersonnelComponent },
  /*{ path: '',   redirectTo: '/mission', pathMatch: 'full' },*/
  { path: '**', component: PagerreurComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MissionPagesComponent,
    MenuComponent,
    PersonnelComponent,
    PagerreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
     appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatRippleModule, MatSidenavModule, MatListModule, MatButtonModule,
    MatSliderModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatTabsModule
    , MatInputModule, MatToolbarModule, MatCardModule, MatIconModule , MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
