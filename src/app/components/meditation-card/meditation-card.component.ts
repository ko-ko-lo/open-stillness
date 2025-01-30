import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meditation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meditation-card.component.html',
  styleUrl: './meditation-card.component.scss',
})
export class MeditationCardComponent {
  @Input() meditation: any;

  getWebpImage(imagePath: string): string {
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
