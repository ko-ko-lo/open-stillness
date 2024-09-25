import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { YogaRoutinesComponent } from './pages/yoga-routine/yoga-routine.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'routines', component: RoutinesComponent },

  { path: 'yoga-routines/:slug', component: YogaRoutinesComponent },
];

export const routingConfig = {
  scrollPositionRestoration: 'top',
};
