import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preview-sections',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preview-sections.component.html',
  styleUrl: './preview-sections.component.scss',
})
export class PreviewSectionsComponent {
  @Input() headline2: string = '';
  @Input() previews: {
    headline3: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  }[] = [];
}
