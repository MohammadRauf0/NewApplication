import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArtistListComponent } from './otherComponents/artist-list/artist-list.component';
import { BandListComponent } from './otherComponents/band-list/band-list.component';
import { ConcertBandListComponent } from './otherComponents/concert-band-list/concert-band-list.component';
import { ConcertListComponent } from './otherComponents/concert-list/concert-list.component';
import { InstrumentListComponent } from './otherComponents/instrument-list/instrument-list.component';
import { RoleInstrumentListComponent } from './otherComponents/role-instrument-list/role-instrument-list.component';
import { RoleListComponent } from './otherComponents/role-list/role-list.component';
import { HomepageComponentComponent } from './otherComponents/homepage-component/homepage-component.component';

const routeConfig: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'login page',
    component: LoginComponent,
    canActivate: [],
  },
  {
    path: 'dashboard',
    title: 'dashboard page',
    component: DashboardComponent,
    canActivate: [],

    children: [
      {
        path: 'home',
        component: HomepageComponentComponent,
      },
      {
        path: 'artist',
        title: 'Artist List Page',
        children: [
          {
            path: 'list',
            component: ArtistListComponent,
          },
          {
            path: 'new',
            component: ArtistListComponent,
          },
          {
            path: ':id',
            component: ArtistListComponent,
          },
        ],
      },
      {
        path: 'band',
        title: 'Band List Page',
        children: [
          {
            path: 'list',
            component: BandListComponent,
          },
          {
            path: 'new',
            component: BandListComponent,
          },
          {
            path: ':id',
            component: BandListComponent,
          },
        ],
      },
      {
        path: 'concert-band',
        title: 'Concert Band List Page',
        children: [
          {
            path: 'list',
            component: ConcertBandListComponent,
          },
          {
            path: 'new',
            component: ConcertBandListComponent,
          },
          {
            path: ':id',
            component: ConcertBandListComponent,
          },
        ],
      },
      {
        path: 'concert',
        title: 'Concert List Page',
        children: [
          {
            path: 'list',
            component: ConcertListComponent,
          },
          {
            path: 'new',
            component: ConcertListComponent,
          },
          {
            path: ':id',
            component: ConcertListComponent,
          },
        ],
      },
      {
        path: 'instrument',
        title: 'Instrument List Page',
        children: [
          {
            path: 'list',
            component: InstrumentListComponent,
          },
          {
            path: 'new',
            component: InstrumentListComponent,
          },
          {
            path: ':id',
            component: InstrumentListComponent,
          },
        ],
      },
      {
        path: 'role-instrument',
        title: 'Role Instrument List Page',
        children: [
          {
            path: 'list',
            component: RoleInstrumentListComponent,
          },
          {
            path: 'new',
            component: RoleInstrumentListComponent,
          },
          {
            path: ':id',
            component: RoleInstrumentListComponent,
          },
        ],
      },
      {
        path: 'role',
        title: 'Role List Page',
        children: [
          {
            path: 'list',
            component: RoleListComponent,
          },
          {
            path: 'new',
            component: RoleListComponent,
          },
          {
            path: ':id',
            component: RoleListComponent,
          },
        ],
      },
    ],
  },
];

export default routeConfig;
