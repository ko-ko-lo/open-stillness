import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BreathingCardComponent } from '../../../components/breathing-card/breathing-card.component';
import { FilteringComponent } from '../../../components/filtering/filtering.component';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    IntroSubpagesComponent,
    BreathingCardComponent,
    CommonModule,
    FilteringComponent,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class BreathingLibraryComponent implements OnInit {
  title: string = 'Find your Breathing Routine in the Library';
  text: string =
    'Explore Breathing Techniques from both ancient traditions and modern innovations. Traditional techniques, rooted in yoga philosophy, offer time-tested practices for balance and energy. Modern techniques, inspired by contemporary science, focus on stress relief, clarity, and mindfulness. Choose your path or blend the best of both worlds.';

  breathingExercises: any[] = [];

  filteredBreathing: any[] = [];
  selectedFilter: string = 'All Breathing Techniques';
  filterOptions: string[] = [
    'All Breathing Techniques',
    'Modern',
    'Traditional',
  ];

  constructor(private http: HttpClient, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Library');

    this.http.get<any[]>('data/breathing.json').subscribe((data) => {
      this.breathingExercises = data;
      this.filteredBreathing = this.breathingExercises; // Initially show all techniques
    });
  }

  // Handle filter changes
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Breathing Techniques') {
      this.filteredBreathing = this.breathingExercises; // Show all poses when "All Breathing Techniques" is selected
    } else {
      this.filteredBreathing = this.breathingExercises.filter((breathing) =>
        breathing.targetBreathing.includes(selectedFilter)
      );
    }
  }
}
