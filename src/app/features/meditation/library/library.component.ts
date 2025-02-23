import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilteringComponent } from '../../../components/filtering/filtering.component';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { MeditationCardComponent } from '../../../components/meditation-card/meditation-card.component';

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
export class MeditationLibraryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/meditations.json').subscribe((data) => {
      this.meditationExercises = data;
      this.filteredMeditation = this.meditationExercises; // Initially show all techniques
    });
  }

  title: string = 'Discover Meditation Techniques for Your Practice';
  text: string =
    "Explore a collection of guided meditations designed to support inner balance, mindfulness, and well-being. Whether you're seeking calm, clarity, focus, or connection, these meditations invite you to move at your own pace and practice in a way that feels right for you. There is no perfect way to meditate - simply find a comfortable position, follow the guidance, and allow yourself to be present. If at any point a meditation doesn’t feel right, feel free to adjust or pause.  You are encouraged to listen to your own experience and take what serves you best.";

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
