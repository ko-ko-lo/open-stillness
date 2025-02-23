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
  {
    path: ROUTES.HOME,
    component: HomeComponent,
    title:
      'OpenStillness: Your Space for Meditation, Breathwork and Yin-Style Yoga',
  },

  // Meditation Routes
  {
    path: ROUTES.MEDITATION.ROOT,
    component: MeditationHomeComponent,
    title: 'Meditation Overview: Introduction & Benefits | OpenStillness',
  },
  {
    path: ROUTES.MEDITATION.LIBRARY,
    component: MeditationLibraryComponent,
    title:
      'Meditation Library: Explore Techniques for Deepening Your Practice | OpenStillness',
  },

  // Yin-Style Yoga Routes
  {
    path: ROUTES.YIN_STYLE_YOGA.ROOT,
    component: YinStyleYogaHomeComponent,
    title: 'Yin-Style Yoga Overview: Introduction & Benefits | OpenStillness',
  },
  {
    path: ROUTES.YIN_STYLE_YOGA.LIBRARY,
    component: LibraryComponent,
    title:
      'Yin-Style Yoga Library: Explore Techniques for Deepening Your Practice | OpenStillness',
  },
  {
    path: ROUTES.YIN_STYLE_YOGA.ROUTINES_OVERVIEW,
    component: RoutinesComponent,
    title:
      'Yin-Style Yoga Routines: Move Gently, Breathe Deeply, Honor Your Body | OpenStillness',
  },
  {
    path: ROUTES.YIN_STYLE_YOGA.ROUTINE,
    component: YogaRoutinesComponent,
    data: { title: 'Yin-Style Yoga Routine' },
  },

  // Breathwork Routes
  {
    path: ROUTES.BREATHWORK.ROOT,
    component: BreathingHomeComponent,
    title: 'Breathwork Overview: Introduction & Benefits | OpenStillness',
  },
  {
    path: ROUTES.BREATHWORK.LIBRARY,
    component: BreathingLibraryComponent,
    title:
      'Breathwork Library: Explore Techniques for Deepening Your Practice | OpenStillness',
  },
  {
    path: ROUTES.BREATHWORK.ROUTINES_OVERVIEW,
    component: BreathingRoutinesOverviewComponent,
    title:
      'Breathwork Routines: Find Your Rhythm, Breathe with Ease | OpenStillness',
  },
  {
    path: ROUTES.BREATHWORK.ROUTINE,
    component: BreathingRoutineComponent,
    data: { title: 'Breathwork Routine' },
  },

  {
    path: ROUTES.NOT_FOUND,
    component: NotFoundComponent,
    title: "Lost? It's Okay. Try the Homepage | OpenStillness",
  },
];
