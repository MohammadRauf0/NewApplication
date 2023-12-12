import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistListComponent } from './otherComponents/artist-list/artist-list.component';
import { BandListComponent } from './otherComponents/band-list/band-list.component';
import { ConcertBandListComponent } from './otherComponents/concert-band-list/concert-band-list.component';
import { ConcertListComponent } from './otherComponents/concert-list/concert-list.component';
import { InstrumentListComponent } from './otherComponents/instrument-list/instrument-list.component';
import { RoleInstrumentListComponent } from './otherComponents/role-instrument-list/role-instrument-list.component';
import { RoleListComponent } from './otherComponents/role-list/role-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomepageComponentComponent } from './otherComponents/homepage-component/homepage-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ArtistListComponent,
    BandListComponent,
    ConcertBandListComponent,
    ConcertListComponent,
    InstrumentListComponent,
    RoleInstrumentListComponent,
    RoleListComponent,
    HomepageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
