import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router'; // Import scrolling-related APIs
import { routes } from './app.routes'; // Import your routes

// Define scrolling options
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled', // Scrolls to the top on navigation
  anchorScrolling: 'enabled', // Handles anchor links
};

// Define the feature using the scrolling config
const inMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      inMemoryScrollingFeature // Apply scrolling configuration here
    ),
    provideAnimationsAsync(),
  ],
};
