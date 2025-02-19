import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hero-home.component.html',
  styleUrl: './hero-home.component.scss',
})
export class HeroHomeComponent {
  headline: string = 'Welcome to Your Space for Calm and Connection';
  description: string[] = [
    'This application is here to help you connect with yourself through Meditation, Breathwork and Yin-Style Yoga practices that are gentle, effective, and grounded in care. ',
    'Designed for everyone, especially those who are sensitive or navigating challenges like anxiety and depression.',
  ];
  buttonLabel: string = 'Start Your Journey';
  buttonLink: string = '';

  images: Array<{ src: string; alt: string }> = [
    {
      src: 'public/breathing-poses/full-yogic-breath.png',
      alt: '',
    },
    {
      src: 'public/yoga-poses/deer.png',
      alt: '',
    },
    {
      src: 'public/yoga-poses/ankle-stretch.png',
      alt: '',
    },
    {
      src: 'public/yoga-poses/supported-saddle.png',
      alt: '',
    },
  ];

  getWebpImage(imageSrc: string): string {
    return imageSrc.replace(/\.jpg|\.png/, '.webp');
  }
}
