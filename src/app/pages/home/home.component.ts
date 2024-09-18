import { Component } from '@angular/core';
import { AccordeonComponent } from '../../components/accordeon/accordeon.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { ExploreRoutinesComponent } from '../../components/explore-routines/explore-routines.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../components/short-intro/short-intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ShortIntroComponent,
    LibraryDiscoverComponent,
    ExploreRoutinesComponent,
    BenefitsComponent,
    AccordeonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
