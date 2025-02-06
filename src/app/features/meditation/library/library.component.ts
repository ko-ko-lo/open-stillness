import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FilteringComponent } from '../../../components/filtering/filtering.component';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { MeditationCardComponent } from '../../../components/meditation-card/meditation-card.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    IntroSubpagesComponent,
    CommonModule,
    MeditationCardComponent,
    FilteringComponent,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class MeditationLibraryComponent {
  constructor(private http: HttpClient, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Library Meditation');

    this.http.get<any[]>('data/meditations.json').subscribe((data) => {
      this.meditationExercises = data;
      this.filteredMeditation = this.meditationExercises; // Initially show all techniques
    });
  }

  title: string = 'Find your Meditation Routine in the Library';
  text: string = 'Did not write the introduction text yet....';

  meditationExercises: any[] = [];

  filteredMeditation: any[] = [];
  selectedFilter: string = 'All Meditation Techniques';
  filterOptions: string[] = [
    'All Meditation Techniques',
    'Modern',
    'Traditional',
    'Movement-Based',
  ];

  // Handle filter changes
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Meditation Techniques') {
      this.filteredMeditation = this.meditationExercises; // Show all poses when "All Breathing Techniques" is selected
    } else {
      this.filteredMeditation = this.meditationExercises.filter((meditation) =>
        meditation.targetMeditation.includes(selectedFilter)
      );
    }
  }
}
