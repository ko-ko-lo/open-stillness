import { Component } from '@angular/core';

@Component({
  selector: 'app-short-intro',
  standalone: true,
  imports: [],
  templateUrl: './short-intro.component.html',
  styleUrl: './short-intro.component.scss',
})
export class ShortIntroComponent {
  text: string = `Yin-Style Yoga focuses on long-held postures that gently stretch and
  nourish the body, while calming the mind. Whether you're looking to
  release tension, increase flexibility, or find stillness, the routines are
  designed for all levels.`;
}
