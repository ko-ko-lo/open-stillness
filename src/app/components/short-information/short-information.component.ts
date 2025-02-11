import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-information.component.html',
  styleUrl: './short-information.component.scss',
})
export class ShortInformationComponent {
  @Input() text: string = '';
  @Input() headline: string = '';

  @Input() backgroundClass: string = 'background-neutral-light';
}
