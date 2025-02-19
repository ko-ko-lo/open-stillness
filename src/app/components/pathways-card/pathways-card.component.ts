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
  buttonLink: string = '';
  imagePath: string = '';
  imagePathWebP: string = '';

  cards = [
    {
      headline: 'Meditation',
      description: [
        'Meditation invites you to slow down, quiet the mind, and reconnect with the present moment. ',
        "Whether you're seeking inner stillness, emotional balance, or greater self-awareness, meditation is a practice that unfolds at your own pace.",
      ],
      buttonLink: '/meditation',
      imagePath: 'public/shared/pathway-meditation.png',
      imagePathWebP: 'public/shared/pathway-meditation.webp',
    },

    {
      headline: 'Breathwork',
      description: [
        'Harness the power of your breath to find calm and balance.',
        'Breathing techniques guide your awareness to your breath, helping you cultivate healthier breathing habits. This can alleviate stress, and benefit both your body and mind.',
      ],
      buttonLink: '/breathwork',
      imagePath: 'public/shared/pathway-breathwork.png',
      imagePathWebP: 'public/shared/pathway-breathwork.webp',
    },

    {
      headline: 'Yin-Style Yoga',
      description: [
        'Ease tension and reconnect with your body through movement.',
        "Yin-Style Yoga focuses on postures that gently stretch and nourish the body, while calming the mind. Whether you're looking to release tension, increase flexibility, or find stillness.",
      ],
      buttonLink: '/yin-style-yoga',
      imagePath: 'public/shared/pathway-yin-style-yoga.png',
      imagePathWebP: 'public/shared/pathway-yin-style-yoga.webp',
    },
  ];

  getWebpImage(imageSrc: string): string {
    return imageSrc.replace(/\.png|\.jpg/, '.webp');
  }
}
