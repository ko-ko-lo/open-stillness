import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { ExploreRoutinesComponent } from '../../components/explore-routines/explore-routines.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../components/short-intro/short-intro.component';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ShortIntroComponent,
    LibraryDiscoverComponent,
    ExploreRoutinesComponent,
    BenefitsComponent,
    AccordionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setFullTitle('Home');
  }
}
