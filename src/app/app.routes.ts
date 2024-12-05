import { Routes } from '@angular/router';
import { BreathingLibraryComponent } from './features/breathing/library/library.component';
import { HomeComponent } from './features/yin-style-yoga/home/home.component';
import { LibraryComponent } from './features/yin-style-yoga/library/library.component';
import { YogaRoutinesComponent } from './features/yin-style-yoga/routine/yoga-routine.component';
import { RoutinesComponent } from './features/yin-style-yoga/routines-overview/routines.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yin-style-yoga/library', component: LibraryComponent },
  { path: 'yin-style-yoga/routines-overview', component: RoutinesComponent },
  { path: 'breathing/library', component: BreathingLibraryComponent },

  { path: 'routine/:slug', component: YogaRoutinesComponent },

  { path: '**', component: NotFoundComponent },
];
