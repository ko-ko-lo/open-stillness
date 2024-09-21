import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteringComponent } from '../filtering/filtering.component';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FilteringComponent],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class TrainingCardComponent implements OnInit {
  routines: any[] = [];
  filteredRoutines: any[] = [];
  selectedFilter: string = 'All Yoga Routines'; // Default filter
  filterOptions: string[] = [
    'All Yoga Routines',
    'Arms and Chest',
    'Back and Spine',
    'Full Body',
    'Hips and Legs',
    'Shoulders and Neck',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
      this.routines = data;
      this.filteredRoutines = this.routines;
    });
  }

  // Handle filter changes
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Yoga Routines') {
      this.filteredRoutines = this.routines;
    } else {
      this.filteredRoutines = this.routines.filter((routine) =>
        routine.targetAreas.includes(selectedFilter)
      );
    }
  }
}
