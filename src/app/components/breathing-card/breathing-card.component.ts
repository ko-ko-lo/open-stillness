import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breathing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breathing-card.component.html',
  styleUrl: './breathing-card.component.scss',
})
export class BreathingCardComponent {
  @Input() breathing: any;

  getWebpImage(imagePath: string): string {
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
