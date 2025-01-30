import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../../components/short-intro/short-intro.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ShortIntroComponent,
    LibraryDiscoverComponent,
    BenefitsComponent,
    AccordionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class MeditationHomeComponent {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setFullTitle('Home Meditation');
  }

  heroData = {
    subheadline: 'Explore Meditation Techniques',
    headline: 'In preparation',
    description: 'Preparing',
    buttonLabel: 'Preparing',
    buttonLink: 'Preparing',
    imagePath: 'public/yoga-poses/meditation.png',
    imagePathWebP: 'public/yoga-poses/meditation.webp',
  };

  shortIntro = {
    text: 'Preparing',
  };

  libraryData = {
    title: 'Preparing',
    description: `Preparing`,
    buttonLabel: 'Preparing',
    buttonLink: '/meditation/library',
    images: [
      { src: 'public/yoga-poses/meditation.png', alt: '' },
      { src: 'public/yoga-poses/meditation.png', alt: '' },
      { src: 'public/yoga-poses/meditation.png', alt: '' },
    ],
  };

  benefitsData = {
    title: 'The Benefits of Meditation Practice',
    benefits: [
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
    ],
  };

  accordionData = {
    title: 'Meditation Techniques: Your Questions Answered and More',

    items: [
      {
        title: 'Preparing',
        content: [
          {
            text: 'Preparing',
          },
          {
            list: [
              'Preparing',
              'Preparing',
              'Preparing',
              'Preparing',
              'Preparing',
            ],
          },
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'Preparing',
        content: [
          {
            text: 'Preparing',
          },
          {
            text: 'Preparing',
          },
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'Preparing',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'Preparing',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'Preparing',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },
    ],
  };
}
