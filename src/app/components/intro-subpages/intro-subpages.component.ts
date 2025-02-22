import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-subpages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-subpages.component.html',
  styleUrl: './intro-subpages.component.scss',
})
export class IntroSubpagesComponent {
  @Input() title: string = '';
  @Input() text: string = '';

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }
}
