import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  subheadline: string = 'Explore Yin\u2011Style Yoga';
  headline: string =
    'Embrace the calm and meditative practice of Yin\u2011Style Yoga';
  description: string = `Discover Yin\u2011Style Yoga routines that target key areas of your body while deepening your connection to yourself. Unwind, restore, and explore your inner calm.`;
  buttonLabel: string = 'Explore Routines';
  buttonLink: string = '/routines';
  imagePath: string = 'public/yoga-poses/meditation.png';
}
