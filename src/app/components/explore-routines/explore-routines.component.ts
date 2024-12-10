import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore-routines',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './explore-routines.component.html',
  styleUrl: './explore-routines.component.scss',
})
export class ExploreRoutinesComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '';
  @Input() imagePath: string = '';
  @Input() imagePathWebP: string = '';
  @Input() backgroundClass: string = 'background-blue-light';
}
