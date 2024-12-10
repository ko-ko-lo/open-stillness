import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-library-discover',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './library-discover.component.html',
  styleUrl: './library-discover.component.scss',
})
export class LibraryDiscoverComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '';
  @Input() images: { src: string; alt: string }[] = [];
  @Input() backgroundClass: string = 'background-green-light';

  getWebpImage(imagePath: string): string {
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
