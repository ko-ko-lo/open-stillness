import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yoga-card',
  templateUrl: './yoga-card.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './yoga-card.component.scss',
})
export class YogaCardComponent {
  @Input() pose: any;

  getWebpImage(imagePath: string): string {
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
