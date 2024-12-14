import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pathways-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pathways-card.component.html',
  styleUrl: './pathways-card.component.scss',
})
export class PathwaysCardComponent {
  headline: string = '';
  description: string[] = [];
  buttonLabel: string = '';
  buttonLink: string = '';
  imagePath: string = '';
  imagePathWebP: string = '';

  cards = [
    {
      headline: 'Breathing Techniques',
      description: [
        'Harness the power of your breath to find calm and balance.',
        'Breathing techniques guide your awareness to your breath, helping you cultivate healthier breathing habits. This can alleviate stress, and benefit both your body and mind.',
      ],
      buttonLabel: 'Explore Breathing Techniques',
      buttonLink: '/breathing',
      imagePath: 'public/routines/preview-humming.png',
      imagePathWebP: 'public/routines/preview-humming.webp',
    },
    {
      headline: 'Yin-Style Yoga',
      description: [
        'Ease tension and reconnect with your body through movement.',
        "Yin-Style Yoga focuses on long-held postures that gently stretch and nourish the body, while calming the mind. Whether you're looking to release tension, increase flexibility, or find stillness.",
      ],
      buttonLabel: 'Explore Yin-Style Yoga',
      buttonLink: '/yin-style-yoga',
      imagePath: 'public/routines/preview-square.png',
      imagePathWebP: 'public/routines/preview-square.webp',
    },
  ];

  getWebpImage(imageSrc: string): string {
    return imageSrc.replace(/\.png|\.jpg/, '.webp');
  }
}
