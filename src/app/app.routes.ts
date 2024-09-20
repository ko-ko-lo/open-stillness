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

/*
export const routes: Routes = [
  { path: '', redirectTo: 'routines', pathMatch: 'full' },          // Redirect to training overview
  { path: 'routines', component: TrainingCardComponent },           // Overview of all routines
  { path: 'yoga-routines/:slug', component: YogaRoutinesComponent } // Dynamic route for individual routine
];
*/
