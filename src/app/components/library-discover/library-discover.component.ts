import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-library-discover',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './library-discover.component.html',
  styleUrl: './library-discover.component.scss',
})
export class LibraryDiscoverComponent {
  title: string = 'Discover a Library of Yin\u2011Style Yoga Poses';
  description: string = `Explore a comprehensive collection of Yin\u2011Style Yoga poses in the Library. Each pose is designed to help you target specific areas of your body, promoting flexibility, balance, and relaxation. Whether you're new to Yin Yoga or looking to deepen your practice.`;
  buttonLabel: string = 'Explore Poses';
  buttonLink: string = '/yin-style-yoga/library';

  images: { src: string; alt: string }[] = [
    { src: 'public/yoga-poses/dangling.png', alt: 'Dangling Pose' },
    { src: 'public/yoga-poses/yoga-squat.png', alt: 'Yoga Squat' },
    { src: 'public/yoga-poses/toe-squat.png', alt: 'Toe Squat' },
  ];

  getWebpImage(imagePath: string): string {
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
