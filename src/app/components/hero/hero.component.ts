import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() headline: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '';
  @Input() imagePath: string = '';
  @Input() imagePathWebP: string = '';
}
