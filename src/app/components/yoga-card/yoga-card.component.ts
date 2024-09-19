import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yoga-card',
  templateUrl: './yoga-card.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./yoga-card.component.scss'], // Corrected to styleUrls
})
export class YogaCardComponent {
  @Input() pose: any; // Use @Input to receive data from the parent component
}
