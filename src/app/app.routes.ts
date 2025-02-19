import { Routes } from '@angular/router';
import { ROUTES } from './constants/routes';
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
  { path: ROUTES.HOME, component: HomeComponent },

  // Meditation Routes
  { path: ROUTES.MEDITATION.ROOT, component: MeditationHomeComponent },
  {
    path: ROUTES.MEDITATION.LIBRARY,
    component: MeditationLibraryComponent,
  },

  // Yin-Style Yoga Routes
  { path: ROUTES.YIN_STYLE_YOGA.ROOT, component: YinStyleYogaHomeComponent },
  {
    path: ROUTES.YIN_STYLE_YOGA.LIBRARY,
    component: LibraryComponent,
  },
  {
    path: ROUTES.YIN_STYLE_YOGA.ROUTINES_OVERVIEW,
    component: RoutinesComponent,
  },
  {
    path: ROUTES.YIN_STYLE_YOGA.ROUTINE,
    component: YogaRoutinesComponent,
  },

  // Breathwork Routes
  { path: ROUTES.BREATHWORK.ROOT, component: BreathingHomeComponent },
  {
    path: ROUTES.BREATHWORK.LIBRARY,
    component: BreathingLibraryComponent,
  },
  {
    path: ROUTES.BREATHWORK.ROUTINES_OVERVIEW,
    component: BreathingRoutinesOverviewComponent,
  },
  {
    path: ROUTES.BREATHWORK.ROUTINE,
    component: BreathingRoutineComponent,
  },

  { path: ROUTES.NOT_FOUND, component: NotFoundComponent },
];
