import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-intro.component.html',
  styleUrl: './short-intro.component.scss',
})
export class ShortIntroComponent {
  @Input() text: string = '';

  @Input() backgroundClass: string = 'background-neutral-light';
}
