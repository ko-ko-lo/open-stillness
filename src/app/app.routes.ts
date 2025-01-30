import { Routes } from '@angular/router';
import { BreathingHomeComponent } from './features/breathing/home/home.component';
import { BreathingLibraryComponent } from './features/breathing/library/library.component';
import { BreathingRoutineComponent } from './features/breathing/routine/routine.component';
import { BreathingRoutinesOverviewComponent } from './features/breathing/routines-overview/routines-overview.component';
import { MeditationHomeComponent } from './features/meditation/home/home.component';
import { MeditationLibraryComponent } from './features/meditation/library/library.component';
import { YinStyleYogaHomeComponent } from './features/yin-style-yoga/home/home.component';
import { LibraryComponent } from './features/yin-style-yoga/library/library.component';
import { YogaRoutinesComponent } from './features/yin-style-yoga/routine/yoga-routine.component';
import { RoutinesComponent } from './features/yin-style-yoga/routines-overview/routines.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'meditation',
    children: [
      { path: '', component: MeditationHomeComponent },
      { path: '', redirectTo: 'library', pathMatch: 'full' },
      { path: 'library', component: MeditationLibraryComponent },
    ],
  },
  {
    path: 'yin-style-yoga',
    children: [
      { path: '', component: YinStyleYogaHomeComponent },
      { path: '', redirectTo: 'library', pathMatch: 'full' },
      { path: 'library', component: LibraryComponent },
      { path: 'routines-overview', component: RoutinesComponent },
      { path: 'routine/:slug', component: YogaRoutinesComponent },
    ],
  },

  {
    path: 'breathing',
    children: [
      { path: '', component: BreathingHomeComponent },
      { path: '', redirectTo: 'library', pathMatch: 'full' },
      { path: 'library', component: BreathingLibraryComponent },
      {
        path: 'routines-overview',
        component: BreathingRoutinesOverviewComponent,
      },
      { path: 'routine/:slug', component: BreathingRoutineComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
