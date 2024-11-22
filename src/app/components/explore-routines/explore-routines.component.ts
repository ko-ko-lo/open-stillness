import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore-routines',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './explore-routines.component.html',
  styleUrl: './explore-routines.component.scss',
})
export class ExploreRoutinesComponent {
  title: string =
    'Deepen Your Practice with Guided Yin\u2011Style Yoga Routines';
  description: string = `Discover a collection of carefully curated Yin-Style Yoga routines
  designed to target different areas of the body and help you achieve
  balance, flexibility, and relaxation. Whether you're looking for a
  gentle stretch, a focused hip release, or a full-body experience, our
  routines guide you through sequences that support your well-being.`;
  buttonLabel: string = 'Explore Routines';
  buttonLink: string = '/routines';
  imagePath: string = 'public/routines/preview-sphinx.png';
  imagePathWebP: string = 'public/routines/preview-sphinx.webp';
}
