import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MeditationCardComponent } from '../../components/meditation-card/meditation-card.component';
import { YogaCardComponent } from '../../components/yoga-card/yoga-card.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, YogaCardComponent, MeditationCardComponent],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {}
